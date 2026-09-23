import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

// Edge-safe config (no Prisma / bcrypt). Shared by middleware and the full
// server config in lib/auth.ts. Providers that require the Prisma adapter
// (Resend/Email magic links) or bcrypt (Credentials) are added only in
// lib/auth.ts, which runs in the Node runtime. Including the Email provider
// here would crash the adapter-less middleware with a MissingAdapter error.
export const authConfig = {
  trustHost: true,
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    verifyRequest: "/login?verify=1",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string
        // Custom `role` column comes through the adapter/authorize user.
        token.role = (user as { role?: "USER" | "ADMIN" }).role ?? "USER"
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = (token.role as "USER" | "ADMIN") ?? "USER"
      }
      return session
    },
  },
} satisfies NextAuthConfig
