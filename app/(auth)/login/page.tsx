"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { motion } from "framer-motion"
import { Mail, Lock, CheckCircle2, AlertCircle, Send } from "lucide-react"

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-white border border-border focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 transition-colors text-foreground placeholder:text-muted-foreground/60"

function GoogleButton({ callbackUrl }: { callbackUrl: string }) {
  return (
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl })}
      className="btn-secondary w-full flex items-center justify-center gap-2"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38z"
        />
      </svg>
      Continue with Google
    </button>
  )
}

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const callbackUrl = params.get("callbackUrl") || "/account"
  const registered = params.get("registered") === "1"

  const [mode, setMode] = useState<"password" | "magic">("password")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [magicSent, setMagicSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handlePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    setLoading(false)
    if (res?.error) {
      setError("Invalid email or password.")
      return
    }
    router.push(callbackUrl)
    router.refresh()
  }

  const handleMagic = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!email) {
      setError("Please enter your email.")
      return
    }
    setLoading(true)
    const res = await signIn("resend", { email, redirect: false, callbackUrl })
    setLoading(false)
    if (res?.error) {
      setError("Could not send the link. Please try again.")
      return
    }
    setMagicSent(true)
  }

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <section className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Welcome <span className="gradient-text">back</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Log in to submit enquiries and track your requests.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            {registered && (
              <div className="mb-6 flex items-start gap-2 rounded-lg bg-green-100 border border-green-200 p-3 text-sm text-green-800">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p>Account created. Please log in.</p>
              </div>
            )}

            <GoogleButton callbackUrl={callbackUrl} />

            <div className="flex items-center gap-3 my-6">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Mode tabs */}
            <div className="flex rounded-lg bg-muted p-1 mb-6">
              <button
                type="button"
                onClick={() => {
                  setMode("password")
                  setError(null)
                }}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                  mode === "password" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"
                }`}
              >
                Password
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("magic")
                  setError(null)
                }}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                  mode === "magic" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"
                }`}
              >
                Email link
              </button>
            </div>

            {magicSent ? (
              <div className="flex items-start gap-2 rounded-lg bg-green-100 border border-green-200 p-4 text-sm text-green-800">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p>Check your inbox — we sent a sign-in link to {email}.</p>
              </div>
            ) : mode === "password" ? (
              <form onSubmit={handlePassword} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${inputClass} pl-10`}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${inputClass} pl-10`}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
                  {loading ? "Signing in…" : "Log in"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleMagic} className="space-y-4">
                <div>
                  <label htmlFor="magic-email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="magic-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${inputClass} pl-10`}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60">
                  {loading ? "Sending…" : "Email me a login link"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            {error && (
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-green-700 font-medium hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="pt-32 pb-20 bg-cream min-h-screen" />}>
      <LoginForm />
    </Suspense>
  )
}
