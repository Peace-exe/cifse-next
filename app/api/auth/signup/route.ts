import User from "@/models/user";
import { validateSignUpData } from "@/utils/helperValidator";
import bcrypt from 'bcrypt';

export async function POST(req:Request){

    try {
        const body = await req.json();
        validateSignUpData(body);
        const {name,email,password} = body;

        const passwordHash = await bcrypt.hash(password,10);

        const userData = await new User({
            name:name,
            email:email,
            passwordHash:passwordHash
        }).save();
        
        return Response.json({
            message:"User created successfully.",
            data:userData
        },
        {status:201});

    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong.';
        return Response.json({ error: message }, { status: 400 });
    }
}