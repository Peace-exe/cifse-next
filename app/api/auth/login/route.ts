import Session from '@/models/session';
import User from '@/models/user';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, password, keepMeLoggedIn } = body

        if (!validator.isEmail(email)) throw new Error('Invalid credentials.')

        const userData = await User.findOne({ email }).select('+passwordHash')
        if (!userData) throw new Error('Invalid credentials.')

        const isPasswordValid = await userData.validatePassword(password)
        if (!isPasswordValid) throw new Error('Invalid credentials.')

        const { passwordHash, ...userObject } = userData.toObject()


        if (!process.env.ACCESS_TOKEN_KEY) throw new Error('Enter an Access token key')

        if (keepMeLoggedIn) {
            const familyId = crypto.randomUUID()
            const refreshTokenId = crypto.randomUUID()

            if (!process.env.REFRESH_TOKEN_KEY) throw new Error('Enter a Refresh token key')

            await Session.create({
                tokenId: refreshTokenId,
                userId: userData._id,
                familyId,
                used: false,
                expiresAt: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
            })

            const refreshToken = jwt.sign(
                { tokenId: refreshTokenId, userId: userData._id, familyId },
                process.env.REFRESH_TOKEN_KEY!,
                { expiresIn: '15d' }
            )

            const accessToken = jwt.sign(
                { userId: userData._id, familyId },
                process.env.ACCESS_TOKEN_KEY!,
                { expiresIn: '1h' }
            )

            const res = NextResponse.json({
                message: "Logged in successfully.",
                data: userObject,
                accessToken
            }, { status: 200 })

            res.cookies.set('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 15,
                path: '/'
            })

            return res

        } else {

            const accessToken = jwt.sign(
                { userId: userData._id },
                process.env.ACCESS_TOKEN_KEY!,
                { expiresIn: '1h' }
            )

            return NextResponse.json({
                message: "Logged in successfully.",
                data: userObject,
                accessToken
            }, { status: 200 })
        }

    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong.'
        return NextResponse.json({ error: message }, { status: 400 })
    }
}
/**
 * {
  sub: "user_123",
  jti: "uuid-v4",         // THIS is the important one — links to the DB row
  fam: "family-uuid",     // token family ID (for theft detection)
  exp: 1714392000         // expires (30 days later)
}


 *{
  // standard claims
  sub: "user_123",        // user ID
  iat: 1711800000,        // issued at
  exp: 1711800900,        // expires (15 min later)
  jti: "uuid-v4",         // unique token ID (for blocklisting if needed)

  // custom claims
  role: "admin",          // for authorization checks
  email: "user@x.com",   // if needed by API
  plan: "pro"             // feature flags, rate limits, etc.
} 
 * 
 */