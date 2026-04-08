"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Sprout, TreeDeciduous, Beef, Factory, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: 250,
    suffix: " acres",
    label: "Current Operations",
    description: "Across Ikoyi, Otu, and Ilero",
  },
  {
    icon: TreeDeciduous,
    value: 80000,
    suffix: "",
    label: "Oil Palm Trees (Target)",
    description: "Long-term plantation development",
  },
  {
    icon: Sprout,
    value: 20000,
    suffix: "",
    label: "Plantain Suckers",
    description: "Intercropping for early returns",
  },
  {
    icon: Beef,
    value: 80,
    suffix: " head",
    label: "Cattle (Target)",
    description: "From 10 head, scaling systematically",
  },
  {
    icon: Factory,
    value: 10,
    suffix: " acres",
    label: "Processing Hub",
    description: "Palm oil mill in Ilero",
  },
  {
    icon: TrendingUp,
    value: 1000,
    suffix: " acres",
    label: "Vision 2030",
    description: "Target operational footprint",
  },
]

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

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
  }, [isInView, value, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function Stats() {
  return (
    <section className="section-padding bg-black/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Scale Meets <span className="gradient-text">Precision</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building a disciplined, vertically integrated agricultural platform across Nigeria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-card group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Currently operating across{" "}
            <span className="text-white font-semibold">250 acres</span> |
            Scaling to{" "}
            <span className="text-white font-semibold">1,000 acres</span> by 2030
          </p>
        </motion.div>
      </div>
    </section>
  )
}
