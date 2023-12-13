import NextAuth from "next-auth/next";
import { NextAuthOptions, getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Prisma, PrismaClient } from "@prisma/client";
import {authOptions} from "@/utils/auth"

const prisma = new PrismaClient();

// const authOptions:NextAuthOptions = {
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID!,
//             clientSecret: process.env.GOOGLE_SECRET!,
//         }),
//     ],
// }


const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};