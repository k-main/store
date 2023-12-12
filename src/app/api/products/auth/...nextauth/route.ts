import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth"


const handler = NextAuth()

export {handler as GET, handler as POST};