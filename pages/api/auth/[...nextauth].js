import axios from "axios";
import NextAuth from "next-auth/next"
import  GoogleProvider from "next-auth/providers/google"
import db from '../../../lib/db';
import User from "../../../lib/User";


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
     },
     ),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  callbacks: {
    async signIn() {
        return true  
    },
    async jwt({ token, user }) {
    
      if(user?.id) token._id = user.id;
      return token;
    },

  async session({ session, token }) {
    await db.connect()
    const existingUser = await User.findOne({ email: token.email });
    console.log(existingUser)

    if (token?._id && existingUser ) {
      session.user._id = token._id;
      session.user.admin = existingUser.role
    } else {
      session.user._id = token._id;
      session.user.admin = false

    }

    return session;
     
      
      }
   
  },

  secret: process.env.SECRET,

  }
)