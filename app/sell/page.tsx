import { redirect } from "next/navigation"
import type { Metadata } from "next"
import { auth } from "@/lib/auth"
import { SellOfferForm } from "@/components/sell-offer-form"

export const metadata: Metadata = {
  title: "Sell to Khan Farms",
  description:
    "Are you a farmer or aggregator? Offer your produce to Khan Farms — submit what you have available and we'll be in touch.",
}

export default async function SellPage() {
  const session = await auth()
  if (!session?.user) {
    redirect("/login?callbackUrl=/sell")
  }

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <section className="container-custom mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sell to <span className="gradient-text">Khan Farms</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Farmer, aggregator or processor with produce to offer? Tell us what you have available
            and our sourcing team will review your offer.
          </p>
        </div>
      </section>

      <section className="container-custom">
        <div className="max-w-2xl mx-auto">
          <SellOfferForm />
        </div>
      </section>
    </div>
  )
}
