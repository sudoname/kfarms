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
        title: "250 Acres Operational",
        description: "Ikoyi: Plantain & palm oil with nursery; Otu: Corn, palm oil & cassava; Ilero: 90 acres of cashew, cassava, plantain, palm oil, corn, tomato & pepper"
      },
      {
        title: "Diversified Cropping",
        description: "Multiple crop species across sites providing revenue diversification and risk mitigation"
      },
      {
        title: "Palm Development",
        description: "Palm oil cultivation and nursery operations supporting long-term plantation growth"
      },
      {
        title: "Soil Health Focus",
        description: "Continuous soil improvement and land optimization for sustainable long-term productivity"
      }
    ],
    metrics: ["250 acres operational", "Multi-crop diversity", "3 strategic locations"]
  },
  {
    id: "palm",
    icon: TreeDeciduous,
    title: "Palm Oil",
    description: "Oil palm is the long-term economic engine of the platform, designed for scale, consistency, and value chain control",
    details: [
      {
        title: "14,000 Trees Planted (2026)",
        description: "Oil palm and cashew trees currently in ground, with aggressive expansion planned"
      },
      {
        title: "Target: 80,000 Trees by 2030",
        description: "Systematic plantation growth over time with focus on tree health and spacing"
      },
      {
        title: "Integrated Approach",
        description: "Combining production and processing for maximum value capture"
      },
      {
        title: "Long-Term Value",
        description: "Designed for decades of consistent production and compounding returns"
      }
    ],
    metrics: ["14,000 trees planted", "80,000 by 2030", "Oil palm & cashew"]
  },
  {
    id: "livestock",
    icon: Beef,
    title: "Livestock",
    description: "Cattle are integrated into the system to enhance soil fertility, support future dairy production, and enable a circular agricultural model",
    details: [
      {
        title: "10 Head Cattle at Otu (2026)",
        description: "Current livestock operations at Otu site, scaling to 80 head across all locations by 2030"
      },
      {
        title: "Manure-Driven Enrichment",
        description: "Cattle waste enhances soil health and reduces external fertilizer dependence"
      },
      {
        title: "Dairy Foundation",
        description: "Building foundation for future dairy operations as herd matures and expands"
      },
      {
        title: "Circular Model",
        description: "Integrated livestock system creating synergies across the entire platform"
      }
    ],
    metrics: ["10 cattle at Otu", "80 by 2030", "Circular farming"]
  },
  {
    id: "processing",
    icon: Factory,
    title: "Processing",
    description: "Distributed processing infrastructure enabling deeper value capture and operational control across the palm oil value chain",
    details: [
      {
        title: "Ikoyi Processing Facility",
        description: "5 tonnes per day processing capacity for immediate value capture from local production"
      },
      {
        title: "Ilero Processing Facility",
        description: "4 tonnes per day processing capacity serving 90 acres of diversified crops"
      },
      {
        title: "Planned Processing Hub",
        description: "10-acre palm oil mill infrastructure in Ilero for long-term expansion and scale"
      },
      {
        title: "Value Chain Integration",
        description: "Direct quality control from harvest through final product across all sites"
      }
    ],
    metrics: ["9T/day capacity", "2 active facilities", "Expansion planned"]
  },
  {
    id: "carbon",
    icon: Leaf,
    title: "Carbon & Sustainability",
    description: "Sustainability is embedded into the platform through land stewardship, biological systems, and future carbon pathways",
    details: [
      {
        title: "Carbon Credit Pathway (Est. End 2026)",
        description: "Establishing carbon credit pathway by end of 2026 for future monetization"
      },
      {
        title: "Tree-Based Carbon Sequestration",
        description: "14,000+ trees currently planted, targeting 80,000 by 2030 for significant carbon capture"
      },
      {
        title: "Soil Carbon Enhancement",
        description: "Regenerative agricultural practices increasing soil organic matter and carbon storage"
      },
      {
        title: "Biochar Potential",
        description: "Future opportunity for biochar production and additional carbon benefits"
      }
    ],
    metrics: ["Pathway est. 2026", "Tree sequestration", "Regenerative practices"]
  },
  {
    id: "infrastructure",
    icon: Settings,
    title: "Infrastructure & Operations",
    description: "Growing operational backbone supporting scale, efficiency, and long-term expansion",
    details: [
      {
        title: "14 Workers (2026)",
        description: "Growing team from 4 workers in 2024 to 14 in 2026, scaling with operations"
      },
      {
        title: "Multi-Site Operations",
        description: "Coordinated management across Osun and Oyo States with centralized oversight"
      },
      {
        title: "Equipment & Mechanization",
        description: "Tractor services and farming equipment enabling efficient cultivation at scale"
      },
      {
        title: "Aggressive Expansion",
        description: "Scaling aggressively from 250 acres (2026) to 1,000 acres by 2030"
      }
    ],
    metrics: ["14 workers", "Multi-site ops", "Aggressive scaling"]
  }
]

const locations = [
  {
    name: "Ikoyi",
    state: "Osun State",
    description: "Primary cultivation area with diversified crops (plantain and palm oil), palm nursery and palm development",
    details: "Current processing capacity: 5T per day"
  },
  {
    name: "Otu",
    state: "Oyo State",
    description: "Expansion site for additional acreage and crop rotation: corn, palm oil, and cassava",
    details: "10 head cattle"
  },
  {
    name: "Ilero",
    state: "Oyo State",
    description: "90 acres of multiple crops: cashew, cassava, plantain, palm oil, corn, tomato, and pepper",
    details: "4T per day processing facility + planned 10-acre processing hub"
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
                <p className="text-muted-foreground mb-3">{location.description}</p>
                {location.details && (
                  <p className="text-sm text-white/80 font-medium">{location.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
