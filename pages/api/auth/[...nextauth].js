import NextAuth from "next-auth/next"
import  GoogleProvider from "next-auth/providers/google"
import { connectToDatabase } from "../../../lib/monggodb"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
        return true  
    },
    async jwt({ token, user }) {
    
      if(user?.id) token._id = user.id;
      return token;
    },
    async session({ session, token }) {

      let { db } = await connectToDatabase();
      const existingUser = await db.collection('users')
      .find({ email: { $regex: token.email, $options: 'i' }},).toArray()

        if (token?._id && existingUser ) {
          session.user._id = token._id;
          session.user.admin = existingUser[0].role
        } else {
          session.user._id = token._id;
          session.user.admin = false

        }

        return session;
   
    
    },
   
  },

  // secret: process.env.SECRET,
  secret: process.env.JWT_SECRET,


  }
)