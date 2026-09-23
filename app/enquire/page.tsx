import { redirect } from "next/navigation"
import type { Metadata } from "next"
import { auth } from "@/lib/auth"
import { EnquiryForm } from "@/components/enquiry-form"
import { PRODUCE, INQUIRY_TYPES } from "@/lib/farm-data"

export const metadata: Metadata = {
  title: "Make an enquiry",
  description: "Submit a buy enquiry or request produce from Khan Farms.",
}

export default async function EnquirePage({
  searchParams,
}: {
  searchParams: { product?: string }
}) {
  const session = await auth()
  if (!session?.user) {
    const target = searchParams.product
      ? `/enquire?product=${encodeURIComponent(searchParams.product)}`
      : "/enquire"
    redirect(`/login?callbackUrl=${encodeURIComponent(target)}`)
  }

  const productSlug = PRODUCE.some((p) => p.slug === searchParams.product)
    ? searchParams.product!
    : ""

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <section className="container-custom mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Make an <span className="gradient-text">enquiry</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us what you need. We&apos;ll confirm availability and follow up with terms.
          </p>
        </div>
      </section>

      <section className="container-custom">
        <div className="max-w-2xl mx-auto">
          <EnquiryForm defaultProductSlug={productSlug} defaultType={INQUIRY_TYPES[0]} />
        </div>
      </section>
    </div>
  )
}
