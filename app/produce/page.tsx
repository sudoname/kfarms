import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ChevronRight, Sprout } from 'lucide-react'
import { PRODUCE, getLocation, whatsappLink } from '@/lib/farm-data'
import { AvailabilityBadge } from '@/components/ui/availability-badge'

export const metadata: Metadata = {
  title: 'Produce',
  description:
    'Maize, cassava, cashew, palm oil, plantain, groundnut, soybeans, tomato and pepper grown across Khan Farms in Oyo and Osun States, Nigeria. Buy directly from the farm.',
  alternates: { canonical: '/produce' },
  openGraph: {
    title: 'Produce | Khan Farms',
    description:
      'Crops grown across Khan Farms in Oyo and Osun States, Nigeria. Buy directly from the farm.',
    url: 'https://kfarms.ng/produce',
    siteName: 'Khan Farms',
    locale: 'en_NG',
    type: 'website',
  },
}

const buyMessage = 'Hello Khan Farms, I would like to buy produce. Please share current availability and pricing.'

export default function ProducePage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Khan Farms Produce',
    itemListElement: PRODUCE.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `https://kfarms.ng/produce/${p.slug}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
              <li className="text-white font-medium">Produce</li>
            </ol>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <Sprout className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">What we grow</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Our produce</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Food crops, tree crops and horticulture grown across our farms in Oyo and Osun States.
            Buy directly from the farm — tell us the crop, quantity and delivery location and we will
            confirm availability.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCE.map((p) => {
              const farms = p.producingFarms
                .map((slug) => getLocation(slug)?.displayName)
                .filter(Boolean)
              return (
                <Link
                  key={p.slug}
                  href={`/produce/${p.slug}`}
                  className="glass glass-hover rounded-2xl p-7 flex flex-col group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-xl font-bold text-foreground">{p.name}</h2>
                    <AvailabilityBadge availability={p.availability} showDot={false} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 flex-grow">{p.summary}</p>
                  {farms.length > 0 && (
                    <p className="text-xs text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground">Grown at:</span>{' '}
                      {farms.join(', ')}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 group-hover:text-green-800">
                    View details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 mt-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Ready to buy?</h2>
              <p className="text-muted-foreground">
                Send us your requirements and we&apos;ll confirm availability and pricing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={whatsappLink(buyMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Buy on WhatsApp
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
