"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, AlertCircle } from "lucide-react"

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-white border border-border focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 transition-colors text-foreground placeholder:text-muted-foreground/60"

interface FormState {
  productName: string
  category: string
  quantity: string
  unit: string
  askingPrice: string
  location: string
  availableFrom: string
  notes: string
}

const initialState: FormState = {
  productName: "",
  category: "",
  quantity: "",
  unit: "",
  askingPrice: "",
  location: "",
  availableFrom: "",
  notes: "",
}

export function SellOfferForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.productName.trim() || !form.quantity.trim() || !form.location.trim()) {
      setError("Please fill in product, quantity and location.")
      setStatus("error")
      return
    }

    setLoading(true)
    const res = await fetch("/api/sell-offers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    setLoading(false)

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? "Could not submit your offer.")
      setStatus("error")
      return
    }

    setStatus("success")
    setForm(initialState)
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">Offer submitted</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for offering to supply Khan Farms. Our team will review and reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/account" className="btn-primary">
            View my offers
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
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-foreground mb-2">
            Product *
          </label>
          <input id="productName" type="text" value={form.productName} onChange={update("productName")} className={inputClass} placeholder="e.g. Maize, Cashew" required />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
            Category
          </label>
          <input id="category" type="text" value={form.category} onChange={update("category")} className={inputClass} placeholder="e.g. Grain, Tree crop" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-2">
            Quantity *
          </label>
          <input id="quantity" type="text" value={form.quantity} onChange={update("quantity")} className={inputClass} placeholder="e.g. 50" required />
        </div>
        <div>
          <label htmlFor="unit" className="block text-sm font-medium text-foreground mb-2">
            Unit
          </label>
          <input id="unit" type="text" value={form.unit} onChange={update("unit")} className={inputClass} placeholder="tonnes, bags…" />
        </div>
        <div>
          <label htmlFor="askingPrice" className="block text-sm font-medium text-foreground mb-2">
            Asking price
          </label>
          <input id="askingPrice" type="text" value={form.askingPrice} onChange={update("askingPrice")} className={inputClass} placeholder="e.g. ₦/tonne" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
            Location *
          </label>
          <input id="location" type="text" value={form.location} onChange={update("location")} className={inputClass} placeholder="City / state" required />
        </div>
        <div>
          <label htmlFor="availableFrom" className="block text-sm font-medium text-foreground mb-2">
            Available from
          </label>
          <input id="availableFrom" type="date" value={form.availableFrom} onChange={update("availableFrom")} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
          Notes
        </label>
        <textarea id="notes" rows={4} value={form.notes} onChange={update("notes")} className={`${inputClass} resize-none`} placeholder="Quality, grade, packaging, logistics…" />
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
        {loading ? "Submitting…" : "Submit offer"}
      </button>
    </form>
  )
}
