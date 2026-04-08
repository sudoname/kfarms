"use client"

import { motion } from "framer-motion"
import { Sprout, TreeDeciduous, Beef, Factory, Leaf, Settings, ArrowRight } from "lucide-react"

const platforms = [
  {
    icon: Sprout,
    title: "Land & Cultivation",
    description: "Strategic land development across Ikoyi, Otu, and Ilero with diversified crop rotation",
    features: ["250 acres operational", "Cassava, maize, beans", "Soil improvement focus"],
  },
  {
    icon: TreeDeciduous,
    title: "Palm Oil",
    description: "Long-term oil palm development as the economic engine of the platform",
    features: ["80,000 trees target", "Systematic plantation growth", "Value chain capture"],
  },
  {
    icon: Beef,
    title: "Livestock",
    description: "Integrated cattle expansion for dairy potential and soil fertility enhancement",
    features: ["10 → 80 head growth", "Manure-driven fertility", "Circular farming model"],
  },
  {
    icon: Factory,
    title: "Processing",
    description: "10-acre palm oil processing hub unlocking additional value from production",
    features: ["Ilero processing center", "Integrated value chain", "Quality control"],
  },
  {
    icon: Leaf,
    title: "Carbon & Sustainability",
    description: "Tree-based sequestration, soil carbon, and future biochar opportunities",
    features: ["Carbon capture pathways", "ESG positioning", "Climate-positive farming"],
  },
  {
    icon: Settings,
    title: "Infrastructure & Operations",
    description: "Growing operational backbone supporting scale, efficiency, and long-term expansion",
    features: ["Multi-site operations", "Equipment & mechanization", "Structured scaling to 1,000 acres"],
  },
]

export function PlatformOverview() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green/5 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            An Integrated <span className="gradient-text">Platform</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Six interconnected pillars driving long-term value creation across the agricultural value chain
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-hover rounded-2xl p-8 group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-green/20 border border-gold/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{platform.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Integration Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">
              How It All <span className="gradient-text">Connects</span>
            </h3>
            <p className="text-muted-foreground">
              Each component reinforces the others, creating a resilient and scalable agricultural ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6">
              <div className="text-gold font-semibold mb-2">Short-Term</div>
              <p className="text-sm text-muted-foreground">
                Cassava and food crops provide early cash flow while palm matures
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-gold font-semibold mb-2">Medium-Term</div>
              <p className="text-sm text-muted-foreground">
                Cattle expansion adds fertility, dairy potential, and diversified revenue
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-gold font-semibold mb-2">Long-Term</div>
              <p className="text-sm text-muted-foreground">
                Oil palm + processing + carbon create compounding value for decades
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
