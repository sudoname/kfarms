"use client"

import { motion } from "framer-motion"
import { Leaf, TreePine, Droplets, Recycle, TrendingUp, Target } from "lucide-react"

const pathways = [
  {
    icon: TreePine,
    title: "Tree-based sequestration",
    description: "Perennial tree crops that build long-lived carbon stocks as plantations mature.",
    details: [
      "Oil palm and cashew planted for decades-long productivity",
      "Permanence through long-lived perennial plantations",
      "Sequestration potential grows as canopy establishes",
    ],
  },
  {
    icon: Droplets,
    title: "Soil health & carbon",
    description: "Building organic matter and improving soil structure across our farms over time.",
    details: [
      "Cattle manure returned to fields to improve fertility",
      "Cover cropping and rotation to reduce erosion",
      "Minimal-till practices where feasible",
    ],
  },
  {
    icon: Recycle,
    title: "Circular resource flows",
    description: "Integrated farming that keeps nutrients and by-products within the system.",
    details: [
      "Livestock manure feeds soil fertility",
      "Processing by-products reused rather than discarded",
      "Reduced dependence on external inputs",
    ],
  },
  {
    icon: Leaf,
    title: "Agricultural-waste reuse",
    description: "Exploring higher-value uses for palm and crop residues as operations scale.",
    details: [
      "Palm processing generates significant biomass",
      "Potential biochar and soil-amendment pathways",
      "Opportunity being assessed as volumes grow",
    ],
  },
]

const roadmap = [
  {
    pathway: "Tree sequestration",
    current: "Foundation planting underway",
    horizon: "Long term",
    note: "Grows with plantation maturity",
  },
  {
    pathway: "Soil carbon",
    current: "Manure integration active",
    horizon: "Ongoing",
    note: "Systematic soil building",
  },
  {
    pathway: "Waste reuse / biochar",
    current: "Under assessment",
    horizon: "Future",
    note: "Depends on processing scale",
  },
  {
    pathway: "Carbon markets",
    current: "Monitoring",
    horizon: "Future",
    note: "Optionality as markets mature",
  },
]

export default function SustainabilityPage() {
  return (
    <div className="pt-32 pb-20 bg-cream">
      {/* Hero */}
      <section className="container-custom mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <Leaf className="w-4 h-4 text-green-700" />
            <span className="text-sm font-medium text-foreground">Sustainability pathways</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            <span className="gradient-text">Sustainability</span> by design
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Developing measurable soil, tree-sequestration, and agricultural-waste pathways as our
            operations grow — building agriculture that improves the land over time.
          </p>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Part of the <span className="gradient-text">operating model</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We treat sustainability as part of how the farm runs, not a separate initiative.
                Perennial tree crops generate revenue while building carbon stocks. Livestock manure
                improves soil while supporting future dairy potential.
              </p>
              <p className="text-lg text-muted-foreground">
                The aim is a farming system where environmental improvement and economic value build
                together over decades — measured honestly as the data comes in.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why this matters</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Responsible growth</h4>
                    <p className="text-muted-foreground text-sm">
                      Positions Khan Farms as a serious, long-term agricultural operator.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Future optionality</h4>
                    <p className="text-muted-foreground text-sm">
                      Carbon and by-product markets may create upside beyond core agriculture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Leaf className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Land health</h4>
                    <p className="text-muted-foreground text-sm">
                      Better soil and tree cover support long-term productivity.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pathways */}
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
              Four <span className="gradient-text">pathways</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Integrated approaches we are developing across our farms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pathways.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass glass-hover rounded-2xl p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <span className="text-green-700 mt-1">•</span>
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

      {/* Roadmap */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Sustainability <span className="gradient-text">roadmap</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Where each pathway stands today, described honestly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.pathway}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-bold mb-3 text-foreground">{item.pathway}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground block mb-1">Status</span>
                    <span className="text-foreground font-medium">{item.current}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Horizon</span>
                    <span className="text-foreground font-medium">{item.horizon}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Note</span>
                    <span className="text-green-700 font-semibold">{item.note}</span>
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
            className="mt-12 max-w-3xl mx-auto text-center glass rounded-xl p-8"
          >
            <p className="text-muted-foreground">
              As these pathways develop and the data matures, we will report progress transparently.
              We avoid overstating outcomes — every claim here reflects work that is genuinely
              underway or being assessed.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
