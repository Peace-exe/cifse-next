import Session from '@/models/session';
import jwt from 'jsonwebtoken';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        // 1. Extract RT from httpOnly cookie
        const refreshToken = req.cookies.get('refreshToken')?.value;
        if (!refreshToken) {
            return NextResponse.json({ error: 'No refresh token.' }, { status: 401 });
        }

        // 2. Verify RT signature + expiry
        if (!process.env.REFRESH_TOKEN_KEY) throw new Error('Enter a Refresh token key');
        if (!process.env.ACCESS_TOKEN_KEY) throw new Error('Enter an Access token key');

        let payload: { tokenId: string; userId: string; familyId: string };
        try {
            payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY) as typeof payload;
        } catch {
            // RT is expired or tampered — clear cookie and force re-login
            const res = NextResponse.json({ error: 'Invalid or expired session.' }, { status: 401 });
            res.cookies.delete('refreshToken');
            return res;
        }

        const { tokenId, userId, familyId } = payload;

        // 3. Look up the session in DB
        const session = await Session.findOne({ tokenId });

        // 4. TOKEN REUSE DETECTED — session doesn't exist but familyId is valid
        //    This means a previously rotated (used) token is being replayed
        //    Nuke the entire family to protect the user
        if (!session) {
            await Session.deleteMany({ familyId });
            const res = NextResponse.json({ error: 'Token reuse detected. Please log in again.' }, { status: 401 });
            res.cookies.delete('refreshToken');
            return res;
        }

        // 5. Session exists but already marked as used — same reuse attack scenario
        if (session.used) {
            await Session.deleteMany({ familyId });
            const res = NextResponse.json({ error: 'Token reuse detected. Please log in again.' }, { status: 401 });
            res.cookies.delete('refreshToken');
            return res;
        }

        // 6. Session expired in DB (double check beyond JWT expiry)
        if (session.expiresAt < new Date()) {
            await Session.deleteOne({ tokenId });
            const res = NextResponse.json({ error: 'Session expired. Please log in again.' }, { status: 401 });
            res.cookies.delete('refreshToken');
            return res;
        }

        // 7. Mark old session as used (rotate — never reuse)
        session.used = true;
        await session.save();

        // 8. Create new session row for the new RT
        const newRefreshTokenId = crypto.randomUUID();
        await Session.create({
            tokenId: newRefreshTokenId,
            userId,
            familyId,           // same family — keeps the lineage for theft detection
            used: false,
            expiresAt: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
        });

        // 9. Sign new RT + AT
        const newRefreshToken = jwt.sign(
            { tokenId: newRefreshTokenId, userId, familyId },
            process.env.REFRESH_TOKEN_KEY!,
            { expiresIn: '15d' }
        );

        const newAccessToken = jwt.sign(
            { userId, familyId },
            process.env.ACCESS_TOKEN_KEY!,
            { expiresIn: '1h' }
        );

        // 10. Set new RT cookie + return new AT
        const res = NextResponse.json({
            message: 'Session refreshed.',
            accessToken: newAccessToken
        }, { status: 200 });

        res.cookies.set('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 15,
            path: '/'
        });

        return res;

    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong.';
        return NextResponse.json({ error: message }, { status: 400 });
    }
}
/*
```

---

**The key decisions I made based on your `/login` code:**

**`familyId` theft detection** — the most important part. If someone steals and uses an old RT, the `session` won't be found (it was rotated) but the `familyId` in the JWT is still valid. We use that to **nuke all sessions in that family**, forcing a re-login on all devices:
```
login → RT_1 (familyId: "abc", tokenId: "111") ← stored in DB
      ↓
/refresh → RT_1 used ✅ → mark used=true → create RT_2 (same familyId)
      ↓
ATTACKER replays RT_1 → tokenId "111" found but used=true
      → delete ALL sessions where familyId="abc" ← legitimate user also kicked out
      → attacker and real user both must re-login (safe state)
*/