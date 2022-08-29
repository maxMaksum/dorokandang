import NextAuth from "next-auth/next"
import  GoogleProvider from "next-auth/providers/google"



export default NextAuth({
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

  ],
  secret: process.env.JWT_SECRET,

  pages: {
    signIn: '/auth/signIn',
  
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }

  }
)