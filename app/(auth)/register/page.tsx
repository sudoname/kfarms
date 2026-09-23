"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-white border border-border focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 transition-colors text-foreground placeholder:text-muted-foreground/60"

interface FormState {
  name: string
  email: string
  phone: string
  organization: string
  password: string
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  password: "",
}

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(initialState)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const update =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }

    setLoading(true)
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? "Could not create your account.")
      setLoading(false)
      return
    }

    // Auto sign-in after successful registration.
    const signInRes = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    })
    setLoading(false)

    if (signInRes?.error) {
      router.push("/login?registered=1")
      return
    }
    router.push("/account")
    router.refresh()
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
              Create your <span className="gradient-text">account</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Register to buy produce or offer produce to Khan Farms.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/account" })}
              className="btn-secondary w-full flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38z" />
              </svg>
              Continue with Google
            </button>

            <div className="flex items-center gap-3 my-6">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full name *
                </label>
                <input id="name" type="text" value={form.name} onChange={update("name")} className={inputClass} placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input id="email" type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@company.com" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input id="phone" type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="+234 ..." />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <input id="organization" type="text" value={form.organization} onChange={update("organization")} className={inputClass} placeholder="Company" />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password *
                </label>
                <input id="password" type="password" value={form.password} onChange={update("password")} className={inputClass} placeholder="At least 8 characters" required minLength={8} />
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
                {loading ? "Creating account…" : "Create account"}
              </button>
            </form>

            {error && (
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-green-700 font-medium hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
