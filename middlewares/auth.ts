// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
    const accessToken = req.headers.get('authorization')?.split(' ')[1];

    if (!accessToken) {
        return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    if (!process.env.ACCESS_TOKEN_KEY) {
        return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 });
    }

    try {
        const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY) as {
            userId: string;
            familyId?: string;
        };

        // Attach entire payload as req.user equivalent
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set('x-user', JSON.stringify(payload));

        return NextResponse.next({
            request: { headers: requestHeaders }  // 👈 forward modified request
        });

    } catch {
        return NextResponse.json({ error: 'Invalid or expired access token.' }, { status: 401 });
    }
}

export const config = {
    matcher: [
        '/api/user/:path*',
        '/api/posts/:path*',
        '/api/profile/:path*'
    ]
}