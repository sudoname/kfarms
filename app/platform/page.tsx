"use client"

import { motion } from "framer-motion"
import { Sprout, TreeDeciduous, Beef, Factory, Leaf, MapPin } from "lucide-react"

const platformSections = [
  {
    id: "agriculture",
    icon: Sprout,
    title: "Agriculture & Cultivation",
    description: "Diversified crop strategy supporting near-term cash flow and soil health",
    details: [
      {
        title: "Cassava",
        description: "Primary short-cycle crop across 90% of land, providing early returns while palm matures"
      },
      {
        title: "Maize & Beans",
        description: "Food crop rotation for soil improvement and diversified revenue"
      },
      {
        title: "Plantain",
        description: "20,000 suckers intercropped with palm for additional near-term income"
      },
      {
        title: "Cashew",
        description: "Tree crop diversification with export potential"
      }
    ],
    metrics: ["250 acres operational", "90% cassava rotation", "20,000 plantain suckers"]
  },
  {
    id: "palm",
    icon: TreeDeciduous,
    title: "Palm Oil Development",
    description: "The long-term economic engine of the platform",
    details: [
      {
        title: "Systematic Planting",
        description: "Disciplined approach to reaching 80,000 oil palm trees by 2030"
      },
      {
        title: "Yield Optimization",
        description: "Focus on tree health, spacing, and long-term productivity"
      },
      {
        title: "Processing Integration",
        description: "Capture value through vertical integration with processing infrastructure"
      }
    ],
    metrics: ["80,000 trees target", "Long-term plantation model", "Value chain capture"]
  },
  {
    id: "livestock",
    icon: Beef,
    title: "Livestock Integration",
    description: "Cattle expansion creating circularity and additional revenue",
    details: [
      {
        title: "Systematic Growth",
        description: "Expanding from 10 to 80 head of cattle through disciplined herd management"
      },
      {
        title: "Manure-Driven Fertility",
        description: "Cattle waste enhances soil health and reduces external fertilizer dependence"
      },
      {
        title: "Dairy Potential",
        description: "Future revenue stream as herd matures and infrastructure develops"
      }
    ],
    metrics: ["10 → 80 head target", "Circular farming model", "Soil improvement"]
  },
  {
    id: "processing",
    icon: Factory,
    title: "Processing Infrastructure",
    description: "10-acre palm oil mill unlocking additional value",
    details: [
      {
        title: "Ilero Processing Hub",
        description: "Dedicated 10-acre site for palm fruit processing and oil extraction"
      },
      {
        title: "Value Addition",
        description: "Moving beyond raw production to capture processing margins"
      },
      {
        title: "Quality Control",
        description: "Direct oversight of the entire value chain from farm to finished product"
      }
    ],
    metrics: ["10-acre processing facility", "Vertical integration", "Quality assurance"]
  },
  {
    id: "carbon",
    icon: Leaf,
    title: "Carbon & Sustainability",
    description: "Climate-positive agriculture and future carbon opportunity",
    details: [
      {
        title: "Tree-Based Sequestration",
        description: "80,000 oil palms creating significant carbon capture over decades"
      },
      {
        title: "Soil Carbon Enhancement",
        description: "Improved agricultural practices increasing soil organic matter"
      },
      {
        title: "Biochar Potential",
        description: "Future opportunity to convert palm waste into biochar for carbon and soil benefits"
      },
      {
        title: "ESG Positioning",
        description: "Building climate-positive agriculture for long-term value and credibility"
      }
    ],
    metrics: ["Tree sequestration", "Soil improvement", "Future carbon credits"]
  }
]

const locations = [
  {
    name: "Ikoyi",
    state: "Osun State",
    description: "Primary cultivation area with diversified crops and palm development"
  },
  {
    name: "Otu",
    state: "Oyo State",
    description: "Expansion site for additional acreage and crop rotation"
  },
  {
    name: "Ilero",
    state: "Oyo State",
    description: "10-acre processing hub with palm oil mill infrastructure"
  }
]

export default function PlatformPage() {
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            The <span className="gradient-text">Platform</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Five integrated components working together to create a resilient, scalable agricultural ecosystem
          </p>
        </motion.div>
      </section>

      {/* Platform Sections */}
      {platformSections.map((section, index) => {
        const Icon = section.icon
        return (
          <section
            key={section.id}
            id={section.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-black/30' : ''}`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-green/20 border border-gold/30 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8">{section.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {section.metrics.map((metric) => (
                      <span key={metric} className="px-4 py-2 rounded-full glass text-sm font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {section.details.map((detail, i) => (
                    <div key={i} className="glass-hover rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
                      <p className="text-muted-foreground">{detail.description}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Locations */}
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
              Our <span className="gradient-text">Footprint</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Operating across three strategic locations in Southwest Nigeria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-hover rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                <p className="text-sm text-gold font-semibold mb-3">{location.state}</p>
                <p className="text-muted-foreground">{location.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
