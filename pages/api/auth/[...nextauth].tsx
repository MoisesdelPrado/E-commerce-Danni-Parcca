import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import Email from "next-auth/providers/email";

export default NextAuth ({
    providers: [
        /*GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),*/
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