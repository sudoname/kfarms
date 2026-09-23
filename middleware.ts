import NextAuth from "next-auth"
import { authConfig } from "@/auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = Boolean(req.auth)
  const role = req.auth?.user?.role
  const { pathname } = nextUrl

  // Admin area — must be logged in AND an ADMIN.
  if (pathname.startsWith("/admin")) {
    if (!isLoggedIn) {
      const url = new URL("/login", nextUrl)
      url.searchParams.set("callbackUrl", pathname)
      return Response.redirect(url)
    }
    if (role !== "ADMIN") {
      return Response.redirect(new URL("/account", nextUrl))
    }
    return
  }

  // Account area — must be logged in.
  if (pathname.startsWith("/account") && !isLoggedIn) {
    const url = new URL("/login", nextUrl)
    url.searchParams.set("callbackUrl", pathname)
    return Response.redirect(url)
  }
})

export const config = {
  matcher: ["/account/:path*", "/admin/:path*"],
}
