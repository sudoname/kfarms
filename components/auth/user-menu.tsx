"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { User, LogOut, LayoutDashboard, ShieldCheck, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function UserMenu({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { data: session, status } = useSession()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  if (status === "loading") {
    return <div className="h-9 w-20 rounded-lg bg-muted animate-pulse" aria-hidden="true" />
  }

  // Logged out
  if (!session?.user) {
    if (variant === "mobile") {
      return (
        <Link
          href="/login"
          className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 flex items-center gap-2"
        >
          <User className="w-4 h-4" /> Log in
        </Link>
      )
    }
    return (
      <Link
        href="/login"
        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 flex items-center gap-1.5"
      >
        <User className="w-4 h-4" /> Log in
      </Link>
    )
  }

  const isAdmin = session.user.role === "ADMIN"
  const displayName = session.user.name || session.user.email || "Account"

  if (variant === "mobile") {
    return (
      <div className="space-y-3">
        <div className="text-xs font-semibold text-gold-700 uppercase tracking-wider">
          {displayName}
        </div>
        <Link href="/account" className="block text-sm text-foreground/80 hover:text-foreground">
          My dashboard
        </Link>
        {isAdmin && (
          <Link href="/admin" className="block text-sm text-foreground/80 hover:text-foreground">
            Admin
          </Link>
        )}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="block text-sm text-red-600 hover:text-red-700"
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 text-white flex items-center justify-center text-sm font-semibold">
          {displayName.charAt(0).toUpperCase()}
        </span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-56 glass rounded-xl overflow-hidden">
          <div className="p-2">
            <div className="px-3 py-2 text-xs text-muted-foreground truncate">{displayName}</div>
            <Link
              href="/account"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
            >
              <LayoutDashboard className="w-4 h-4" /> My dashboard
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              >
                <ShieldCheck className="w-4 h-4" /> Admin
              </Link>
            )}
            <button
              onClick={() => {
                setOpen(false)
                signOut({ callbackUrl: "/" })
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
