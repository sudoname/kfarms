"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

type EnquiryStatus = "NEW" | "IN_REVIEW" | "RESPONDED" | "CLOSED"

const OPTIONS: { value: EnquiryStatus; label: string }[] = [
  { value: "NEW", label: "New" },
  { value: "IN_REVIEW", label: "In review" },
  { value: "RESPONDED", label: "Responded" },
  { value: "CLOSED", label: "Closed" },
]

export function StatusSelect({
  id,
  kind,
  current,
}: {
  id: string
  kind: "enquiries" | "sell-offers"
  current: EnquiryStatus
}) {
  const router = useRouter()
  const [status, setStatus] = useState<EnquiryStatus>(current)
  const [saving, setSaving] = useState(false)

  const onChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value as EnquiryStatus
    const prev = status
    setStatus(next)
    setSaving(true)
    const res = await fetch(`/api/${kind}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    })
    setSaving(false)
    if (!res.ok) {
      setStatus(prev)
      return
    }
    router.refresh()
  }

  return (
    <select
      value={status}
      onChange={onChange}
      disabled={saving}
      className="px-2.5 py-1.5 rounded-lg bg-white border border-border text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 disabled:opacity-60"
    >
      {OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}
