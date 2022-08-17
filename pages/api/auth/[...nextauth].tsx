import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import Email from "next-auth/providers/email";

export default NextAuth ({
    callbacks: {
        session({ session, token, user }) {
            return session // The return type will match the one returned in `useSession()`
        },
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Email({
            server: {
                host: "",
                port: "",
                auth: { 
                    user: "",
                    pass: ""
                }
            },
            from: "",
        })
    ]
})