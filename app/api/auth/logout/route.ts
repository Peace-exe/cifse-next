import Session from '@/models/session';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const refreshToken = req.cookies.get('refreshToken')?.value;

        // If no RT, already logged out — just return success
        if (!refreshToken) {
            return NextResponse.json({ message: 'Logged out successfully.' }, { status: 200 });
        }

        if (!process.env.REFRESH_TOKEN_KEY) throw new Error('Enter a Refresh token key');

        let payload: { tokenId: string; userId: string; familyId: string };
        try {
            payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY) as typeof payload;

            // Delete the entire family — logs out all devices
            // Use deleteOne if you only want to log out current device
            await Session.deleteMany({ familyId: payload.familyId });

        } catch {
            // RT is expired or tampered — still clear the cookie, no DB action needed
        }

        // Always clear the cookie regardless of token validity
        const res = NextResponse.json({ message: 'Logged out successfully.' }, { status: 200 });
        res.cookies.set('refreshToken', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0,      // 👈 immediately expires the cookie
            path: '/'
        });

        return res;

    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong.';
        return NextResponse.json({ error: message }, { status: 400 });
    }
}