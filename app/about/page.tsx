"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, TrendingUp, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Long-term vision",
    description: "Building for decades, not quarters. Every decision is made with 2030 and beyond in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & scale",
    description: "Combining traditional agricultural knowledge with modern operational discipline and precision.",
  },
  {
    icon: TrendingUp,
    title: "Systematic growth",
    description: "Disciplined expansion across land, crops, livestock and processing.",
  },
  {
    icon: Shield,
    title: "Sustainability first",
    description: "Developing measurable soil, tree-sequestration and agricultural-waste pathways over time.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-cream">
      {/* Hero Section */}
      <section className="container-custom mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            About <span className="gradient-text">Khan Farms</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Building a modern Nigerian agricultural business through disciplined scale, integration,
            and long-term value creation.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our <span className="gradient-text">mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Khan Farms is building an integrated agricultural business in Nigeria that brings
                together land development, crop cultivation, livestock and processing into a single,
                coherent system.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We currently operate across 850 acres in five locations in Oyo and Osun States —
                Ikoyi (Osun); Otu 1, Otu 2, Ilero and Ikomu (Oyo) — and are scaling systematically
                toward 1,000 acres by 2030.
              </p>
              <p className="text-lg text-muted-foreground">
                This is about building durable agricultural infrastructure that delivers value across
                production, processing and long-term asset ownership.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why Nigeria?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Scale potential</h4>
                  <p className="text-muted-foreground">
                    Nigeria has vast arable land and a favourable climate for oil palm, cassava and
                    livestock.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Growing market</h4>
                  <p className="text-muted-foreground">
                    Rising domestic demand for palm oil, food products and value-added agriculture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Long-term value</h4>
                  <p className="text-muted-foreground">
                    Tree crops and processing build assets that appreciate as plantations mature.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our <span className="gradient-text">values</span>
            </h2>
            <p className="section-subtitle mx-auto">The principles that guide everything we build.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass glass-hover rounded-2xl p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center glass rounded-2xl p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Part of <span className="gradient-text">Khan Innovations Nigeria Limited</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Khan Farms is a subsidiary of Khan Innovations Nigeria Limited, a holding company
              building integrated platforms across agriculture, real estate, fintech, media and
              marketing.
            </p>
            <p className="text-muted-foreground">
              This broader ecosystem lets Khan Farms draw on infrastructure, capital and strategic
              positioning that independent farms cannot easily access.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
