"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Sprout,
  Factory,
  Leaf,
  Handshake,
  Truck,
  Landmark,
  Wrench,
  TrendingUp,
  MapPin,
} from "lucide-react"
import {
  FARM_LOCATIONS,
  PRODUCE,
  PROCESSING,
  PARTNERSHIPS,
  BUYER_STEPS,
  AVAILABILITY_LABELS,
  METRICS,
} from "@/lib/farm-data"
import { StatusBadge } from "@/components/ui/status-badge"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  center?: boolean
}) {
  return (
    <div className={center ? "text-center mb-14 max-w-3xl mx-auto" : "mb-14 max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-wider text-gold-700 mb-3">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

// 3. What We Produce
export function WhatWeProduce() {
  const featured = PRODUCE.slice(0, 6)
  return (
    <section className="section-padding bg-white" aria-labelledby="produce-heading">
      <div className="container-custom">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <SectionHeading
            eyebrow="What we produce"
            title={<span id="produce-heading">Food and tree crops, grown in Southwest Nigeria</span>}
            subtitle="A diversified range of crops for aggregators, processors, wholesalers and exporters."
          />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featured.map((p, i) => (
            <motion.div key={p.slug} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Link
                href={`/produce/${p.slug}`}
                className="glass-hover block rounded-xl p-6 h-full"
              >
                <Sprout className="w-6 h-6 text-green-700 mb-3" />
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{AVAILABILITY_LABELS[p.availability]}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/produce" className="btn-primary">
            View all produce
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// 4. Our Farms
export function OurFarms() {
  return (
    <section id="our-farms" className="section-padding bg-cream" aria-labelledby="farms-heading">
      <div className="container-custom">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <SectionHeading
            eyebrow="Our farms"
            title={<span id="farms-heading">{METRICS.locationsCount} farms across Oyo & Osun States</span>}
            subtitle={`${METRICS.totalAcreage} acres in total, from established sites to land under active development.`}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FARM_LOCATIONS.map((loc, i) => (
            <motion.div key={loc.slug} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Link href={`/locations/${loc.slug}`} className="glass-hover block rounded-2xl p-7 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <MapPin className="w-5 h-5" />
                    <span className="font-bold text-xl text-foreground">{loc.displayName}</span>
                  </div>
                  <StatusBadge status={loc.status} />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{loc.summary}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">{loc.acreage} acres</span>
                  <span className="text-green-700 font-medium inline-flex items-center gap-1">
                    View farm <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 5. Processing & Infrastructure
export function ProcessingInfrastructure() {
  const items = PROCESSING.slice(0, 3)
  return (
    <section className="section-padding bg-white" aria-labelledby="processing-heading">
      <div className="container-custom">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <SectionHeading
            eyebrow="Processing & infrastructure"
            title={<span id="processing-heading">Adding value close to production</span>}
            subtitle="Early-stage processing today, with expanded capacity and integrated infrastructure in development."
          />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-7"
            >
              <Factory className="w-7 h-7 text-green-700 mb-4" />
              <StatusBadge status={item.status} className="mb-3" />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/processing" className="btn-secondary">
            Explore processing & infrastructure
          </Link>
        </div>
      </div>
    </section>
  )
}

// 6. Available Produce / Upcoming Harvests
export function AvailableProduce() {
  const now = PRODUCE.filter((p) => p.availability === "available-now").slice(0, 4)
  const upcoming = PRODUCE.filter((p) => p.availability === "upcoming-harvest").slice(0, 4)
  return (
    <section className="section-padding bg-cream" aria-labelledby="availability-heading">
      <div className="container-custom">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <SectionHeading
            eyebrow="Availability"
            title={<span id="availability-heading">Available now & upcoming harvests</span>}
            subtitle="Contact us to confirm current stock and volumes."
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-7">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-600" /> Available now
            </h3>
            <ul className="space-y-2">
              {now.map((p) => (
                <li key={p.slug}>
                  <Link href={`/produce/${p.slug}`} className="flex justify-between py-1.5 text-muted-foreground hover:text-foreground border-b border-border">
                    <span>{p.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-7">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-600" /> Upcoming harvest
            </h3>
            <ul className="space-y-2">
              {upcoming.map((p) => (
                <li key={p.slug}>
                  <Link href={`/produce/${p.slug}`} className="flex justify-between py-1.5 text-muted-foreground hover:text-foreground border-b border-border">
                    <span>{p.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// 7. How We Work With Buyers
export function HowWeWork() {
  return (
    <section className="section-padding bg-white" aria-labelledby="buyers-heading">
      <div className="container-custom">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <SectionHeading
            eyebrow="For buyers"
            title={<span id="buyers-heading">How we work with buyers</span>}
            subtitle="A simple path from enquiry to fulfilment."
          />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {BUYER_STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-7"
            >
              <div className="w-10 h-10 rounded-full bg-green-700 text-white font-bold flex items-center justify-center mb-4">
                {s.step}
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 8. Vision 2030 (future — clearly labelled)
export function VisionPreview() {
  return (
    <section className="section-padding bg-cream" aria-labelledby="vision-heading">
      <div className="container-custom">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="glass rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto">
          <TrendingUp className="w-8 h-8 text-gold-700 mx-auto mb-4" />
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-700 mb-3">Looking ahead</p>
          <h2 id="vision-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Our plan to <span className="gradient-text">1,000 acres</span> by 2030
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            A disciplined roadmap from {METRICS.totalAcreage} acres today to 1,000 acres, with
            integrated processing and measurable sustainability programmes. These are targets, not
            current figures.
          </p>
          <Link href="/vision" className="btn-primary">
            See the roadmap
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// 9. Sustainability (softened claims)
export function SustainabilityPreview() {
  return (
    <section className="section-padding bg-white" aria-labelledby="sustainability-heading">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-700 mb-3">Sustainability</p>
          <h2 id="sustainability-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Building sustainable practices, step by step
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We are developing measurable soil, tree-sequestration, and agricultural-waste pathways
            as our farms mature. We describe what is in place today and what is still in development.
          </p>
          <Link href="/sustainability" className="btn-secondary">
            Our approach
          </Link>
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="glass rounded-2xl p-8">
          <Leaf className="w-8 h-8 text-green-700 mb-4" />
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3"><span className="text-green-700 font-bold">•</span> Tree crops that build long-term value and capture carbon as they grow.</li>
            <li className="flex gap-3"><span className="text-green-700 font-bold">•</span> Crop rotation and cover crops to improve soil health.</li>
            <li className="flex gap-3"><span className="text-green-700 font-bold">•</span> Agricultural-waste and processing by-product pathways in development.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

const PARTNER_ICONS = [Handshake, Factory, Truck, Landmark, Wrench, TrendingUp]

// 10. Partnership Opportunities
export function Partnerships() {
  return (
    <section className="section-padding bg-cream" aria-labelledby="partnerships-heading">
      <div className="container-custom">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <SectionHeading
            eyebrow="For partners"
            title={<span id="partnerships-heading">Partnership opportunities</span>}
            subtitle="We work with off-takers, processors, logistics providers, land developers and strategic investors."
          />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERSHIPS.map((p, i) => {
            const Icon = PARTNER_ICONS[i % PARTNER_ICONS.length]
            return (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-7"
              >
                <Icon className="w-7 h-7 text-green-700 mb-4" />
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// 11. Contact CTA (dark band)
export function ContactCta() {
  return (
    <section className="dark-band section-padding" aria-labelledby="cta-heading">
      <div className="container-custom">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to <span className="gradient-text">buy or partner</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Tell us what you need and we will get back to you with availability and terms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/produce" className="btn-primary">
              Buy farm produce
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Partner with us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
