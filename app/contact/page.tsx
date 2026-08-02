"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react"
import {
  COMPANY,
  INQUIRY_TYPES,
  FARM_LOCATIONS,
  whatsappLink,
  mailtoLink,
} from "@/lib/farm-data"

interface FormState {
  name: string
  organization: string
  phone: string
  email: string
  inquiryType: string
  product: string
  quantity: string
  deliveryLocation: string
  message: string
  company: string // honeypot
}

const initialState: FormState = {
  name: "",
  organization: "",
  phone: "",
  email: "",
  inquiryType: "",
  product: "",
  quantity: "",
  deliveryLocation: "",
  message: "",
  company: "",
}

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-white border border-border focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 transition-colors text-foreground placeholder:text-muted-foreground/60"

function buildMessage(f: FormState): string {
  const lines = [
    `New inquiry via ${COMPANY.domain}`,
    "",
    `Name: ${f.name}`,
    f.organization && `Organization: ${f.organization}`,
    f.phone && `Phone/WhatsApp: ${f.phone}`,
    f.email && `Email: ${f.email}`,
    `Inquiry type: ${f.inquiryType || "General inquiry"}`,
    f.product && `Product of interest: ${f.product}`,
    f.quantity && `Estimated quantity: ${f.quantity}`,
    f.deliveryLocation && `Preferred delivery location: ${f.deliveryLocation}`,
    "",
    "Message:",
    f.message,
  ].filter(Boolean)
  return lines.join("\n")
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = "Please enter your name."
    if (!form.inquiryType) next.inquiryType = "Please choose an inquiry type."
    if (!form.message.trim()) next.message = "Please enter a message."
    if (!form.phone.trim() && !form.email.trim())
      next.phone = "Please provide a phone/WhatsApp number or an email so we can reply."
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    // Honeypot: bots fill hidden field → silently ignore.
    if (form.company) return
    if (!validate()) {
      setStatus("error")
      return
    }
    window.open(whatsappLink(buildMessage(form)), "_blank", "noopener,noreferrer")
    setStatus("success")
  }

  const handleEmail = () => {
    if (form.company) return
    if (!validate()) {
      setStatus("error")
      return
    }
    const subject = `${form.inquiryType || "Inquiry"} — ${form.name}`
    window.location.href = mailtoLink(subject, buildMessage(form))
    setStatus("success")
  }

  return (
    <div className="pt-32 pb-20 bg-cream">
      {/* Hero */}
      <section className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Let&apos;s <span className="gradient-text">connect</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Buying produce, arranging off-take, or exploring a partnership? Send us the details and
            we&apos;ll reply on WhatsApp or by email.
          </p>
        </motion.div>
      </section>

      {/* Form + info */}
      <section className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Get in touch</h2>
                <p className="text-muted-foreground">
                  Reach us directly on WhatsApp or email, or use the form and we&apos;ll pick up the
                  conversation with all your details prefilled.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <a
                      href={whatsappLink("Hello Khan Farms, I have an inquiry.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-green-700 transition-colors"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-muted-foreground hover:text-green-700 transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our farms</h3>
                    {FARM_LOCATIONS.map((loc) => (
                      <p key={loc.slug} className="text-muted-foreground text-sm">
                        {loc.displayName}, {loc.state} State
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 md:p-10">
              <form onSubmit={handleWhatsApp} className="space-y-6" noValidate>
                {/* Honeypot (hidden from users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={update("company")}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      className={inputClass}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={form.organization}
                      onChange={update("organization")}
                      className={inputClass}
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      className={inputClass}
                      placeholder="+234 ..."
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      className={inputClass}
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Inquiry type *
                  </label>
                  <select
                    id="inquiryType"
                    value={form.inquiryType}
                    onChange={update("inquiryType")}
                    className={inputClass}
                    aria-invalid={Boolean(errors.inquiryType)}
                  >
                    <option value="">Select one...</option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.inquiryType && (
                    <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="product"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Product of interest
                    </label>
                    <input
                      id="product"
                      type="text"
                      value={form.product}
                      onChange={update("product")}
                      className={inputClass}
                      placeholder="e.g. Maize, Palm oil"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Estimated quantity
                    </label>
                    <input
                      id="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={update("quantity")}
                      className={inputClass}
                      placeholder="e.g. 20 tonnes / month"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="deliveryLocation"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Preferred delivery location
                  </label>
                  <input
                    id="deliveryLocation"
                    type="text"
                    value={form.deliveryLocation}
                    onChange={update("deliveryLocation")}
                    className={inputClass}
                    placeholder="City / state, or farm pickup"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your requirements..."
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" className="btn-primary flex-1 flex items-center justify-center group">
                    Send on WhatsApp
                    <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    type="button"
                    onClick={handleEmail}
                    className="btn-secondary flex-1 flex items-center justify-center group"
                  >
                    Send by email
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-xs text-muted-foreground">
                  Submitting opens WhatsApp or your email app with your details prefilled — nothing
                  is sent until you press send there.
                </p>

                {status === "success" && (
                  <div className="flex items-start gap-2 rounded-lg bg-green-100 border border-green-200 p-4 text-sm text-green-800">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>
                      Your message is ready in WhatsApp or your email app. Press send there and
                      we&apos;ll be in touch.
                    </p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>Please fix the highlighted fields and try again.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Parent company */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Khan Farms is a subsidiary of{" "}
              <span className="gradient-text">Khan Innovations Nigeria Limited</span>
            </h2>
            <p className="text-muted-foreground">
              For inquiries about our parent company or other subsidiaries, please mention it in your
              message.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
