"use client"

import { motion } from "framer-motion"
import { Sprout, TreeDeciduous, Beef, Factory, Leaf, Settings, MapPin } from "lucide-react"

const platformSections = [
  {
    id: "agriculture",
    icon: Sprout,
    title: "Land & Cultivation",
    description: "Strategic land development across Ikoyi, Otu, and Ilero forms the foundation of the platform",
    details: [
      {
        title: "Current Operations",
        description: "250 acres currently operational across three strategic locations"
      },
      {
        title: "Crop Rotation",
        description: "Cassava, maize, and beans in rotation supporting near-term productivity"
      },
      {
        title: "Soil Health",
        description: "Continuous soil improvement and land optimization for long-term productivity"
      },
      {
        title: "Diversified System",
        description: "A diversified cropping system balancing near-term cash flow with soil health"
      }
    ],
    metrics: ["250 acres operational", "Cassava, maize, beans", "Soil improvement focus"]
  },
  {
    id: "palm",
    icon: TreeDeciduous,
    title: "Palm Oil",
    description: "Oil palm is the long-term economic engine of the platform, designed for scale, consistency, and value chain control",
    details: [
      {
        title: "Targeting ~80,000 Trees",
        description: "Structured plantation expansion targeting approximately 80,000 oil palm trees"
      },
      {
        title: "Structured Expansion",
        description: "Systematic plantation growth over time with focus on tree health and spacing"
      },
      {
        title: "Integrated Approach",
        description: "Integrated approach to production and processing for maximum value capture"
      },
      {
        title: "Long-Term Value",
        description: "Designed for decades of consistent production and compounding returns"
      }
    ],
    metrics: ["~80,000 trees target", "Structured expansion", "Value chain control"]
  },
  {
    id: "livestock",
    icon: Beef,
    title: "Livestock",
    description: "Cattle are integrated into the system to enhance soil fertility, support future dairy production, and enable a circular agricultural model",
    details: [
      {
        title: "Herd Expansion",
        description: "Systematic growth from ~10 to ~80 cattle through disciplined herd management"
      },
      {
        title: "Manure-Driven Enrichment",
        description: "Cattle waste enhances soil health and reduces external fertilizer dependence"
      },
      {
        title: "Dairy Foundation",
        description: "Building foundation for future dairy operations as herd matures"
      },
      {
        title: "Circular Model",
        description: "Integrated livestock system creating synergies across the entire platform"
      }
    ],
    metrics: ["~10 → ~80 cattle", "Soil enrichment", "Dairy potential"]
  },
  {
    id: "processing",
    icon: Factory,
    title: "Processing",
    description: "A dedicated processing hub enables deeper value capture and operational control across the palm oil value chain",
    details: [
      {
        title: "10-Acre Facility in Ilero",
        description: "Dedicated processing facility for palm fruit processing and oil extraction"
      },
      {
        title: "Improved Yield Efficiency",
        description: "Better extraction rates and reduced waste through controlled processing"
      },
      {
        title: "Product Quality",
        description: "Direct quality control from harvest through final product"
      },
      {
        title: "Infrastructure for Scale",
        description: "Built to support long-term growth and increasing production volumes"
      }
    ],
    metrics: ["10-acre facility", "Yield efficiency", "Long-term scale"]
  },
  {
    id: "carbon",
    icon: Leaf,
    title: "Carbon & Sustainability",
    description: "Sustainability is embedded into the platform through land stewardship, biological systems, and future carbon pathways",
    details: [
      {
        title: "Tree-Based Carbon Sequestration",
        description: "80,000 oil palms and other tree crops capturing significant carbon over decades"
      },
      {
        title: "Soil Carbon Enhancement",
        description: "Regenerative agricultural practices increasing soil organic matter and carbon storage"
      },
      {
        title: "Biochar & Carbon Credit Potential",
        description: "Future opportunity for biochar production and long-term carbon credit monetization"
      },
      {
        title: "Climate-Aligned Model",
        description: "Building a climate-positive agricultural platform for long-term sustainability"
      }
    ],
    metrics: ["Tree sequestration", "Regenerative practices", "Carbon credit potential"]
  },
  {
    id: "infrastructure",
    icon: Settings,
    title: "Infrastructure & Operations",
    description: "Growing operational backbone supporting scale, efficiency, and long-term expansion",
    details: [
      {
        title: "Multi-Site Operations",
        description: "Coordinated management across Osun and Oyo States with centralized oversight"
      },
      {
        title: "Equipment & Mechanization",
        description: "Tractor services and farming equipment enabling efficient cultivation at scale"
      },
      {
        title: "Structured Expansion",
        description: "Disciplined approach toward ~1,000 acres by 2030 with systematic site development"
      },
      {
        title: "Integrated Logistics",
        description: "Farm management systems supporting operations, tracking, and continuous improvement"
      }
    ],
    metrics: ["Multi-site coordination", "Mechanization focus", "Scaling to 1,000 acres"]
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
            Six integrated components working together to create a resilient, scalable agricultural ecosystem
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
