import Link from "next/link"
import type { Metadata } from "next"
import { ShoppingCart, Sprout, Plus } from "lucide-react"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { StatusPill } from "@/components/status-pill"

export const metadata: Metadata = {
  title: "My dashboard",
  robots: { index: false, follow: false },
}

// Per-user data; never prerender at build.
export const dynamic = "force-dynamic"

function formatDate(d: Date) {
  return new Date(d).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default async function AccountPage() {
  const session = await auth()
  // Middleware guarantees a session here, but guard for types.
  if (!session?.user) return null

  const [enquiries, offers] = await Promise.all([
    prisma.enquiry.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    }),
    prisma.sellOffer.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    }),
  ])

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <section className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              My <span className="gradient-text">dashboard</span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome{session.user.name ? `, ${session.user.name}` : ""}.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/enquire" className="btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" /> New enquiry
            </Link>
            <Link href="/sell" className="btn-secondary flex items-center gap-2">
              <Plus className="w-4 h-4" /> Offer produce
            </Link>
          </div>
        </div>

        {/* Enquiries */}
        <div className="mb-14">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
            <ShoppingCart className="w-5 h-5 text-green-700" /> My buy enquiries
          </h2>
          {enquiries.length === 0 ? (
            <div className="glass rounded-2xl p-8 text-center text-muted-foreground">
              You haven&apos;t made any enquiries yet.{" "}
              <Link href="/enquire" className="text-green-700 font-medium hover:underline">
                Make your first enquiry
              </Link>
              .
            </div>
          ) : (
            <div className="space-y-3">
              {enquiries.map((e) => (
                <div key={e.id} className="glass rounded-xl p-5 flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">
                      {e.type}
                      {e.productName ? ` — ${e.productName}` : ""}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{e.message}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                      {e.quantity && <span>Qty: {e.quantity}</span>}
                      {e.deliveryLocation && <span>To: {e.deliveryLocation}</span>}
                      <span>{formatDate(e.createdAt)}</span>
                    </div>
                  </div>
                  <StatusPill status={e.status} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sell offers */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
            <Sprout className="w-5 h-5 text-gold-700" /> My supplier offers
          </h2>
          {offers.length === 0 ? (
            <div className="glass rounded-2xl p-8 text-center text-muted-foreground">
              You haven&apos;t offered any produce yet.{" "}
              <Link href="/sell" className="text-green-700 font-medium hover:underline">
                Offer produce to Khan Farms
              </Link>
              .
            </div>
          ) : (
            <div className="space-y-3">
              {offers.map((o) => (
                <div key={o.id} className="glass rounded-xl p-5 flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">
                      {o.productName} — {o.quantity}
                      {o.unit ? ` ${o.unit}` : ""}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                      {o.askingPrice && <span>Price: {o.askingPrice}</span>}
                      <span>From: {o.location}</span>
                      <span>{formatDate(o.createdAt)}</span>
                    </div>
                  </div>
                  <StatusPill status={o.status} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
