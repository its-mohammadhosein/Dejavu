import connection from "@/lib/db";
import User from "@/lib/modals/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


export const GET = async () => {
    await connection();
    try {
        const user = await User.find();
        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (e) {
        console.log(e);
        return new NextResponse('error', e, { status: 500 });
    }
};


export const POST = async (req) => {
    try {
        const { username, password } = await req.json();
        const hashpass = await bcrypt.hash(password, 10);
        console.log(hashpass);
        await connection();
        const newUser = new User({ username, password: hashpass });
        await newUser.save();
        return new NextResponse(JSON.stringify({ username, password, hashpass }));

    } catch (e) {
        console.log(e);
        if (e.errorResponse.code === 11000) {
            return new NextResponse(JSON.stringify({ Error: 'the username is already exist' }));
        } else {
            return new NextResponse({ message: 'unknown error' });
        }
    }
    const allusers = await User.find();
    return new NextResponse(JSON.stringify(allusers));
};