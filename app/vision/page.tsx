"use client"

import { motion } from "framer-motion"
import { Calendar, TrendingUp, Target } from "lucide-react"

const milestones = [
  {
    year: "2024",
    title: "Foundation",
    description: "Initial operations established",
    metrics: [
      "120 acres operational",
      "6,000 trees planted",
      "4 workers",
      "Initial land development",
    ],
    status: "completed",
  },
  {
    year: "2025-2026",
    title: "Rapid Expansion",
    description: "Aggressive scaling across operations and infrastructure",
    metrics: [
      "250 acres operational (2x growth)",
      "14,000 trees planted (oil palm & cashew)",
      "2 mini processing facilities (Ilero & Ikoyi)",
      "14 workers (3.5x growth)",
      "10 cattle added",
      "Cassava production scaled",
      "Carbon credit pathway established by end 2026",
    ],
    status: "current",
  },
  {
    year: "2027-2028",
    title: "Aggressive Scaling",
    description: "Major expansion phase toward 2030 targets",
    metrics: [
      "500-650 acres operational",
      "40,000+ trees planted",
      "Processing capacity expansion",
      "40-50 cattle",
      "Carbon credit monetization begins",
    ],
    status: "planned",
  },
  {
    year: "2029-2030",
    title: "Platform Maturity",
    description: "Reach target scale and full operational integration",
    metrics: [
      "1,000 acres operational",
      "80,000 trees planted",
      "80 cattle",
      "Full processing integration",
      "Active carbon credit generation",
    ],
    status: "planned",
  },
]

const targets = [
  {
    metric: "Land",
    current: "250 acres (2026)",
    target: "1,000 acres (2030)",
    progress: 25,
  },
  {
    metric: "Trees",
    current: "14,000 trees",
    target: "80,000 trees",
    progress: 18,
  },
  {
    metric: "Livestock",
    current: "10 cattle (2026)",
    target: "80 cattle (2030)",
    progress: 12,
  },
  {
    metric: "Processing",
    current: "2 mini facilities",
    target: "Full integration",
    progress: 35,
  },
  {
    metric: "Workforce",
    current: "14 workers",
    target: "Scaled team",
    progress: 30,
  },
  {
    metric: "Carbon",
    current: "Pathway establishing",
    target: "Active monetization",
    progress: 20,
  },
]

export default function VisionPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="container-custom mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">2024 → 2030</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Vision <span className="gradient-text">2030</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            A disciplined roadmap to 1,000 acres, integrated processing, and sustainable carbon pathways
          </p>
        </motion.div>
      </section>

      {/* Progress Overview */}
      <section className="section-padding bg-black/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Current <span className="gradient-text">Progress</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Where we are today on the path to 2030
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {targets.map((target, index) => (
              <motion.div
                key={target.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{target.metric}</h3>
                  <span className="text-sm text-gold font-semibold">{target.progress}%</span>
                </div>
                <div className="mb-4">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${target.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-gold to-gold-400 rounded-full"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{target.current}</span>
                  <TrendingUp className="w-4 h-4 text-gold" />
                  <span className="text-white font-semibold">{target.target}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Growth <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Systematic expansion from 250 to 1,000 acres
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Year */}
                  <div className="md:w-32 flex-shrink-0">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full ${
                      milestone.status === "current"
                        ? "bg-gold text-black font-bold"
                        : "glass text-white"
                    }`}>
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-hover rounded-2xl p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-lg text-muted-foreground">{milestone.description}</p>
                      </div>
                      {milestone.status === "current" && (
                        <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold border border-gold/30">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mt-6">
                      {milestone.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-muted-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-black/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center glass rounded-2xl p-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              By 2030, Khan Farms will be a <span className="gradient-text">1,000-acre integrated platform</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Combining disciplined land development, systematic palm plantation growth, livestock expansion, processing infrastructure, and carbon-positive agricultural practices into Nigeria's leading agro-industrial platform.
            </p>
            <p className="text-muted-foreground">
              Built for decades, not quarters.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
