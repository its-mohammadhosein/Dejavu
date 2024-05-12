import nextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import { cookies } from "next/headers";

// import { CredentialsProvider } from "next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import User from "@/lib/modals/user";
import connection from "@/lib/db";
import { signIn } from "next-auth/react";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            id: "credentials",
            name: "Credentials",
            Credentials: {
                username: { label: "username", type: 'text' },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                await connection();
                try {
                    // const getall = await cookies.getAll();
                    // console.log(getall);
                    const user = await User.findOne({ username: credentials.username });
                    // console.log(user, 'here');
                    if (user) {
                        const ispasstrue = await bcrypt.compare(credentials.password, user.password);
                        if (ispasstrue) {
                            return user;
                        }
                    }

                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "credentials") {
                return true;

            }
        },
        async session({ session, token }) {
            session.name = token.username;
            // console.log(session);
            // console.log(token);
            return session;
        },
    }
};
export const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };