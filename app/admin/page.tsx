import type { Metadata } from "next"
import { ShoppingCart, Sprout } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { StatusSelect } from "@/components/admin/status-select"

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
}

// Reads live data per request; never prerender at build.
export const dynamic = "force-dynamic"

function formatDate(d: Date) {
  return new Date(d).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default async function AdminPage() {
  // Access is enforced by middleware (ADMIN only).
  const [enquiries, offers] = await Promise.all([
    prisma.enquiry.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { name: true, email: true, phone: true, organization: true } },
      },
    }),
    prisma.sellOffer.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { name: true, email: true, phone: true, organization: true } },
      },
    }),
  ])

  const openEnquiries = enquiries.filter((e) => e.status !== "CLOSED").length
  const openOffers = offers.filter((o) => o.status !== "CLOSED").length

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <section className="container-custom">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Admin <span className="gradient-text">dashboard</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            {openEnquiries} open enquiries &middot; {openOffers} open supplier offers
          </p>
        </div>

        {/* Enquiries */}
        <div className="mb-14">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
            <ShoppingCart className="w-5 h-5 text-green-700" /> Buy enquiries ({enquiries.length})
          </h2>
          {enquiries.length === 0 ? (
            <div className="glass rounded-2xl p-8 text-center text-muted-foreground">
              No enquiries yet.
            </div>
          ) : (
            <div className="space-y-3">
              {enquiries.map((e) => (
                <div key={e.id} className="glass rounded-xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">
                        {e.type}
                        {e.productName ? ` — ${e.productName}` : ""}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{e.message}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                        {e.quantity && <span>Qty: {e.quantity}</span>}
                        {e.deliveryLocation && <span>To: {e.deliveryLocation}</span>}
                        <span>{formatDate(e.createdAt)}</span>
                      </div>
                    </div>
                    <StatusSelect id={e.id} kind="enquiries" current={e.status} />
                  </div>
                  <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {e.user.name ?? "Unknown"}
                    </span>{" "}
                    {e.user.organization ? `· ${e.user.organization} ` : ""}
                    {e.user.email ? `· ${e.user.email} ` : ""}
                    {e.user.phone ? `· ${e.user.phone}` : ""}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sell offers */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
            <Sprout className="w-5 h-5 text-gold-700" /> Supplier offers ({offers.length})
          </h2>
          {offers.length === 0 ? (
            <div className="glass rounded-2xl p-8 text-center text-muted-foreground">
              No supplier offers yet.
            </div>
          ) : (
            <div className="space-y-3">
              {offers.map((o) => (
                <div key={o.id} className="glass rounded-xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">
                        {o.productName} — {o.quantity}
                        {o.unit ? ` ${o.unit}` : ""}
                      </p>
                      {o.notes && <p className="text-sm text-muted-foreground mt-1">{o.notes}</p>}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                        {o.category && <span>{o.category}</span>}
                        {o.askingPrice && <span>Price: {o.askingPrice}</span>}
                        <span>From: {o.location}</span>
                        {o.availableFrom && <span>Available: {formatDate(o.availableFrom)}</span>}
                        <span>{formatDate(o.createdAt)}</span>
                      </div>
                    </div>
                    <StatusSelect id={o.id} kind="sell-offers" current={o.status} />
                  </div>
                  <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {o.user.name ?? "Unknown"}
                    </span>{" "}
                    {o.user.organization ? `· ${o.user.organization} ` : ""}
                    {o.user.email ? `· ${o.user.email} ` : ""}
                    {o.user.phone ? `· ${o.user.phone}` : ""}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
