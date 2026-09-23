"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { INQUIRY_TYPES, PRODUCE } from "@/lib/farm-data"

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-white border border-border focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 transition-colors text-foreground placeholder:text-muted-foreground/60"

interface Props {
  defaultProductSlug?: string
  defaultType?: string
}

export function EnquiryForm({ defaultProductSlug = "", defaultType = INQUIRY_TYPES[0] }: Props) {
  const [type, setType] = useState(defaultType)
  const [productSlug, setProductSlug] = useState(defaultProductSlug)
  const [quantity, setQuantity] = useState("")
  const [deliveryLocation, setDeliveryLocation] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!message.trim()) {
      setError("Please enter a message.")
      setStatus("error")
      return
    }

    const productName = PRODUCE.find((p) => p.slug === productSlug)?.name ?? ""

    setLoading(true)
    const res = await fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, productSlug, productName, quantity, deliveryLocation, message }),
    })
    setLoading(false)

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? "Could not submit your enquiry.")
      setStatus("error")
      return
    }

    setStatus("success")
    setQuantity("")
    setDeliveryLocation("")
    setMessage("")
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">Enquiry submitted</h3>
        <p className="text-muted-foreground mb-6">
          Thank you — our team will review your request and get back to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/account" className="btn-primary">
            View my enquiries
          </Link>
          <button onClick={() => setStatus("idle")} className="btn-secondary">
            Submit another
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">
          Enquiry type *
        </label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)} className={inputClass}>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
            Product
          </label>
          <select id="product" value={productSlug} onChange={(e) => setProductSlug(e.target.value)} className={inputClass}>
            <option value="">Select a product…</option>
            {PRODUCE.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-2">
            Estimated quantity
          </label>
          <input id="quantity" type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} className={inputClass} placeholder="e.g. 20 tonnes / month" />
        </div>
      </div>

      <div>
        <label htmlFor="delivery" className="block text-sm font-medium text-foreground mb-2">
          Preferred delivery location
        </label>
        <input id="delivery" type="text" value={deliveryLocation} onChange={(e) => setDeliveryLocation(e.target.value)} className={inputClass} placeholder="City / state, or farm pickup" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClass} resize-none`} placeholder="Tell us about your requirements…" />
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
        {loading ? "Submitting…" : "Submit enquiry"}
      </button>
    </form>
  )
}
