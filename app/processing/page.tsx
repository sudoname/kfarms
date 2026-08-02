import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ChevronRight, Factory, MapPin } from 'lucide-react'
import { PROCESSING, isConfirmed, whatsappLink, type AssetStatus } from '@/lib/farm-data'
import { StatusBadge } from '@/components/ui/status-badge'

export const metadata: Metadata = {
  title: 'Processing & Infrastructure',
  description:
    'Palm oil processing and value-added infrastructure across Khan Farms in Oyo and Osun States, Nigeria — operational hubs at Ikoyi and Ilero, with further capacity under development and planned.',
  alternates: { canonical: '/processing' },
  openGraph: {
    title: 'Processing & Infrastructure | Khan Farms',
    description:
      'Value-added processing and infrastructure across Khan Farms in Oyo and Osun States, Nigeria.',
    url: 'https://kfarms.ng/processing',
    siteName: 'Khan Farms',
    locale: 'en_NG',
    type: 'website',
  },
}

const TIERS: { status: AssetStatus; heading: string; blurb: string }[] = [
  {
    status: 'operational',
    heading: 'Operational today',
    blurb: 'Facilities running now, capturing value close to where crops are harvested.',
  },
  {
    status: 'under-development',
    heading: 'Under development',
    blurb: 'Capacity being built to keep pace with expanding cultivation.',
  },
  {
    status: 'planned',
    heading: 'Planned',
    blurb: 'Infrastructure planned as our sites mature toward our 2030 targets.',
  },
]

const partnerMessage =
  'Hello Khan Farms, I would like to discuss a processing or infrastructure partnership.'

export default function ProcessingPage() {
  return (
    <>
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
              <li className="text-white font-medium">Processing</li>
            </ol>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <Factory className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Value-added processing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Processing &amp; infrastructure
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            We are building processing capacity close to production so more value is captured on the
            farm. Below is an honest view of what is operational today, what is under development,
            and what is planned.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding bg-cream">
        <div className="container-custom space-y-16">
          {TIERS.map((tier) => {
            const items = PROCESSING.filter((p) => p.status === tier.status)
            if (items.length === 0) return null
            return (
              <div key={tier.status}>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{tier.heading}</h2>
                  <StatusBadge status={tier.status} />
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl">{tier.blurb}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <div key={item.title} className="glass rounded-2xl p-7">
                      <div className="p-3 rounded-lg bg-green-100 border border-green-200 w-fit mb-4">
                        <Factory className="w-6 h-6 text-green-700" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" /> {item.location}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <p className="text-sm text-foreground">
                        <span className="font-semibold">Capacity:</span>{' '}
                        {isConfirmed(item.capacity) ? item.capacity : 'To be confirmed'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          {/* CTA */}
          <div className="glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Partner on processing</h2>
              <p className="text-muted-foreground">
                We welcome partners on processing capacity, equipment and infrastructure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={whatsappLink(partnerMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Discuss a partnership
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
