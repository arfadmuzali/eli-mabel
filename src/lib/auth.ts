import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";

export const authOptions: NextAuthOptions = {
  adapter: <Adapter>PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "database",
    maxAge: 7 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/admin/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    redirect() {
      return "/";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
