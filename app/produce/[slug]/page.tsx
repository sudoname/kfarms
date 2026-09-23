import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ChevronRight, MapPin, Package, CheckCircle2, Users } from 'lucide-react'
import {
  getProduce,
  getLocation,
  PRODUCE_SLUGS,
  isConfirmed,
  whatsappLink,
  AVAILABILITY_LABELS,
} from '@/lib/farm-data'
import { AvailabilityBadge } from '@/components/ui/availability-badge'

interface ProducePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return PRODUCE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProducePageProps): Promise<Metadata> {
  const { slug } = await params
  const item = getProduce(slug)
  if (!item) return {}

  const title = `${item.name} — ${AVAILABILITY_LABELS[item.availability]}`
  const description = `${item.name} grown at Khan Farms in Oyo and Osun States, Nigeria. ${item.summary} Buy directly from the farm.`

  return {
    title,
    description,
    alternates: { canonical: `/produce/${slug}` },
    openGraph: {
      title: `${item.name} | Khan Farms`,
      description,
      url: `https://kfarms.ng/produce/${slug}`,
      siteName: 'Khan Farms',
      locale: 'en_NG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.name} | Khan Farms`,
      description,
    },
  }
}

export default async function ProduceDetailPage({ params }: ProducePageProps) {
  const { slug } = await params
  const item = getProduce(slug)
  if (!item) notFound()

  const farms = item.producingFarms
    .map((s) => getLocation(s))
    .filter((l): l is NonNullable<typeof l> => Boolean(l))

  const quoteMessage = `Hello Khan Farms, I would like a quote for ${item.name}. Please share current availability, pricing and minimum order.`

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.name,
    description: item.summary,
    category: item.category,
    brand: { '@type': 'Brand', name: 'Khan Farms' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kfarms.ng' },
      { '@type': 'ListItem', position: 2, name: 'Produce', item: 'https://kfarms.ng/produce' },
      {
        '@type': 'ListItem',
        position: 3,
        name: item.name,
        item: `https://kfarms.ng/produce/${slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="dark-band relative pt-32 pb-16">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              <li>
                <Link href="/produce" className="hover:text-white">
                  Produce
                </Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              <li className="text-white font-medium">{item.name}</li>
            </ol>
          </nav>
          <div className="mb-4">
            <AvailabilityBadge availability={item.availability} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{item.name}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">{item.description}</p>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {/* Producing farms */}
            <div className="glass rounded-2xl p-7">
              <h2 className="flex items-center gap-2 font-semibold mb-4">
                <MapPin className="w-5 h-5 text-green-700" /> Grown at
              </h2>
              {farms.length > 0 ? (
                <div className="space-y-3">
                  {farms.map((farm) => (
                    <Link
                      key={farm.slug}
                      href={`/locations/${farm.slug}`}
                      className="flex items-center justify-between gap-2 group"
                    >
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-green-700">
                          {farm.displayName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {farm.state} State &middot; {farm.acreage} acres
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-green-700" />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Farm details will be published soon.</p>
              )}
            </div>

            {/* Buyer types */}
            <div className="glass rounded-2xl p-7">
              <h2 className="flex items-center gap-2 font-semibold mb-4">
                <Users className="w-5 h-5 text-gold-700" /> Who buys this
              </h2>
              <div className="flex flex-wrap gap-2">
                {item.buyerTypes.map((buyer) => (
                  <span
                    key={buyer}
                    className="px-3 py-1.5 rounded-full bg-green-100 text-green-800 border border-green-200 text-sm font-medium"
                  >
                    {buyer}
                  </span>
                ))}
              </div>
            </div>

            {/* Specs (only if confirmed) */}
            <div className="glass rounded-2xl p-7">
              <h2 className="flex items-center gap-2 font-semibold mb-4">
                <Package className="w-5 h-5 text-green-700" /> Supply details
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                  <p className="text-base font-semibold text-foreground">
                    {AVAILABILITY_LABELS[item.availability]}
                  </p>
                </div>

                {isConfirmed(item.estimatedQuantity) && (
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated quantity</p>
                    <p className="text-base font-semibold text-foreground">
                      {item.estimatedQuantity}
                    </p>
                  </div>
                )}

                {isConfirmed(item.qualitySpecs) && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Quality</p>
                    <ul className="space-y-1">
                      {item.qualitySpecs.map((spec) => (
                        <li key={spec} className="flex gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {isConfirmed(item.packaging) && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Packaging</p>
                    <ul className="space-y-1">
                      {item.packaging.map((pack) => (
                        <li key={pack} className="flex gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                          {pack}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!isConfirmed(item.estimatedQuantity) &&
                  !isConfirmed(item.qualitySpecs) &&
                  !isConfirmed(item.packaging) && (
                    <p className="text-sm text-muted-foreground">
                      Volumes, grades and packaging are confirmed per order. Request a quote and we
                      will share current details.
                    </p>
                  )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Request a quote for {item.name}</h2>
              <p className="text-muted-foreground">
                Tell us your quantity and delivery location — we&apos;ll confirm availability and
                pricing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href={`/enquire?product=${item.slug}`} className="btn-primary">
                Request to buy
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <a
                href={whatsappLink(quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Quick quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
