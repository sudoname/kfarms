"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Ruler, MapPin, Sprout, Factory } from "lucide-react"
import { METRICS, CROP_VARIETIES } from "@/lib/farm-data"

// Only verified metrics are shown as hard figures.
const stats = [
  {
    icon: Ruler,
    value: METRICS.totalAcreage,
    suffix: " acres",
    label: "Under cultivation & development",
    description: "Across five farms in Oyo & Osun States",
  },
  {
    icon: MapPin,
    value: METRICS.locationsCount,
    suffix: " farms",
    label: "Farm locations",
    description: "Ikoyi, Otu 1, Otu 2, Ilero & Ikomu",
  },
  {
    icon: Sprout,
    value: METRICS.cropVarieties,
    suffix: " crops",
    label: "Crop varieties grown",
    description: "Food crops, tree crops & horticulture",
  },
  {
    icon: Factory,
    value: 2,
    suffix: " hubs",
    label: "Processing sites operating",
    description: "Early-stage processing at Ikoyi & Ilero",
  },
]

function AnimatedCounter({ value, duration = 1.6 }: { value: number; duration?: number }) {
  const prefersReduced = useReducedMotion()
  // Initialise to the final value so SSR / no-JS / reduced-motion render the real number.
  const [count, setCount] = useState(value)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (prefersReduced) {
      setCount(value)
      return
    }
    if (!isInView) return

    setCount(0)
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)
      if (progress < 1) {
        setCount(Math.floor(value * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration, prefersReduced])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function Stats() {
  return (
    <section className="section-padding bg-cream" aria-labelledby="stats-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-700 mb-3">
            Current operations
          </p>
          <h2 id="stats-heading" className="section-title">
            Where we are <span className="gradient-text">today</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Verified figures for our current operations in Oyo and Osun States. Our 2030 targets are
            shown separately on the Vision page.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-8"
              >
                <div className="p-3 rounded-lg bg-green-100 border border-green-200 w-fit mb-4">
                  <Icon className="w-6 h-6 text-green-700" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Crop varieties include {CROP_VARIETIES.slice(0, 6).join(", ")} and more.
        </p>
      </div>
    </section>
  )
}
