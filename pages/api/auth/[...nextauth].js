import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    session: {
        jwt: true,
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (
                    credentials.email != "superadmin@gmail.com" ||
                    credentials.password != "123456"
                ) {
                    throw new Error("No user found!");
                }

                return { email: credentials.email };
            },
        }),
    ],
});
