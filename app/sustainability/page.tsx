"use client"

import { motion } from "framer-motion"
import { Leaf, TreePine, Droplets, Recycle, TrendingUp, Target } from "lucide-react"

const sustainabilityPillars = [
  {
    icon: TreePine,
    title: "Tree-Based Carbon Capture",
    description: "Long-term sequestration through systematic palm plantation development",
    details: [
      "80,000 oil palm trees absorbing CO₂ over decades",
      "Additional tree crops (cashew) contributing to carbon balance",
      "Permanence through long-lived perennial plantations"
    ]
  },
  {
    icon: Droplets,
    title: "Soil Carbon Enhancement",
    description: "Building organic matter and improving soil health systematically",
    details: [
      "Manure from cattle improving soil fertility and carbon content",
      "Cover cropping and rotation preventing erosion",
      "No-till or minimal-till practices where feasible"
    ]
  },
  {
    icon: Recycle,
    title: "Circular Systems",
    description: "Integrated farming creating closed-loop resource flows",
    details: [
      "Cattle manure → soil fertility → higher yields",
      "Palm waste → potential biochar → carbon sequestration",
      "Reduced external input dependence"
    ]
  },
  {
    icon: Leaf,
    title: "Biochar Potential",
    description: "Future opportunity to convert agricultural waste into stable carbon",
    details: [
      "Palm fruit processing generates significant biomass",
      "Biochar from this waste sequesters carbon for centuries",
      "Soil amendment benefits alongside carbon capture"
    ]
  }
]

const carbonPathways = [
  {
    pathway: "Tree Sequestration",
    current: "Foundation planting underway",
    timeline: "2024-2050+",
    potential: "High - 80,000 mature palms"
  },
  {
    pathway: "Soil Carbon",
    current: "Manure integration active",
    timeline: "2024-2030",
    potential: "Medium - systematic soil building"
  },
  {
    pathway: "Biochar Production",
    current: "Future opportunity",
    timeline: "2027+",
    potential: "High - palm waste utilization"
  },
  {
    pathway: "Carbon Credits",
    current: "Market monitoring",
    timeline: "2028+",
    potential: "Revenue upside when markets mature"
  }
]

export default function SustainabilityPage() {
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
            <Leaf className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">Climate-Positive Agriculture</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Sustainability</span> by Design
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Building agriculture that improves the land, captures carbon, and creates long-term environmental value
          </p>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-black/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Not CSR. <span className="gradient-text">Business Model.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sustainability isn't a separate initiative at Khan Farms. It's embedded in the core operating model.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Trees sequester carbon while generating palm oil revenue. Livestock manure improves soil while supporting dairy potential. Palm waste can become biochar, simultaneously sequestering carbon and enhancing soil.
              </p>
              <p className="text-lg text-muted-foreground">
                This creates a farming system where environmental benefit and economic value compound together over decades.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-6">Why This Matters</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">ESG Credibility</h4>
                    <p className="text-muted-foreground text-sm">
                      Positions Khan Farms as a serious, forward-thinking agricultural platform
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Future Revenue</h4>
                    <p className="text-muted-foreground text-sm">
                      Carbon markets are maturing - creates potential upside beyond agriculture
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Leaf className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Land Health</h4>
                    <p className="text-muted-foreground text-sm">
                      Improved soil and carbon practices increase long-term productivity
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
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
              Four <span className="gradient-text">Pathways</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Integrated approaches to climate-positive agriculture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-hover rounded-2xl p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-green/20 border border-gold/30 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <span className="text-gold mt-1">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Carbon Pathways */}
      <section className="section-padding bg-black/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Carbon <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building toward carbon-positive agriculture and future monetization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carbonPathways.map((pathway, index) => (
              <motion.div
                key={pathway.pathway}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-bold mb-3">{pathway.pathway}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground block mb-1">Status</span>
                    <span className="text-white font-medium">{pathway.current}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Timeline</span>
                    <span className="text-white font-medium">{pathway.timeline}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Potential</span>
                    <span className="text-gold font-semibold">{pathway.potential}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center glass rounded-xl p-8"
          >
            <p className="text-muted-foreground">
              As carbon markets mature and ESG requirements tighten, Khan Farms' integrated sustainability model positions the platform for additional value creation beyond traditional agricultural revenue.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
