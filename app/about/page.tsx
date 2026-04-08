"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, TrendingUp, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Long-Term Vision",
    description: "Building for decades, not quarters. Every decision is made with 2030 and beyond in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Scale",
    description: "Combining traditional agricultural wisdom with modern operational discipline and precision.",
  },
  {
    icon: TrendingUp,
    title: "Systematic Growth",
    description: "Disciplined expansion across land, crops, livestock, processing, and carbon pathways.",
  },
  {
    icon: Shield,
    title: "Sustainability First",
    description: "Building climate-positive agriculture through soil improvement, sequestration, and circular systems.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container-custom mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            About <span className="gradient-text">Khan Farms</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Building a modern Nigerian agro-industrial platform through disciplined scale, integration, and long-term value creation
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-black/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Khan Farms is building a vertically integrated agricultural platform in Nigeria that combines land development, crop cultivation, livestock, palm oil processing, and carbon opportunity into a single, coherent system.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Currently operating across approximately 250 acres in Ikoyi (Osun State), Otu (Oyo State), and Ilero, we're scaling systematically toward 1,000 acres by 2030.
              </p>
              <p className="text-lg text-muted-foreground">
                This isn't just about farming. It's about building long-term agricultural infrastructure that delivers value across production, processing, sustainability, and strategic asset ownership.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-6">Why Nigeria?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Massive Scale Potential</h4>
                  <p className="text-muted-foreground">
                    Nigeria has vast arable land and favorable climate for palm, cassava, and livestock
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Growing Market</h4>
                  <p className="text-muted-foreground">
                    Rising domestic demand for palm oil, food products, and value-added agriculture
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Carbon Opportunity</h4>
                  <p className="text-muted-foreground">
                    Climate-positive farming + future carbon markets create additional upside
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="section-subtitle mx-auto">
              The principles that guide everything we build
            </p>
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
                  className="glass-hover rounded-2xl p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="section-padding bg-black/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center glass rounded-2xl p-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              Part of <span className="gradient-text">Khan Innovations Nigeria Limited</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Khan Farms is a subsidiary of Khan Innovations Nigeria Limited, a holding company building integrated platforms across agriculture, real estate, fintech, media, and marketing.
            </p>
            <p className="text-muted-foreground">
              This broader ecosystem allows Khan Farms to leverage infrastructure, capital, and strategic positioning that independent farms cannot access.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
