'use client'

import { motion } from 'framer-motion'
import { Sprout, TreeDeciduous, Beef, Factory, Leaf, Settings } from 'lucide-react'
import type { PlatformSection } from '@/lib/sanity.types'

interface PlatformSectionsClientProps {
  sections: PlatformSection[]
}

const iconMap: Record<string, any> = {
  Sprout,
  TreeDeciduous,
  Beef,
  Factory,
  Leaf,
  Settings,
}

export function PlatformSectionsClient({ sections }: PlatformSectionsClientProps) {
  return (
    <>
      {sections.map((section, index) => {
        const Icon = iconMap[section.icon] || Sprout
        return (
          <section
            key={section.id}
            id={section.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{section.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8">{section.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {section.metrics?.map((metric) => (
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
                  {section.details?.map((detail, i) => (
                    <div key={i} className="glass glass-hover rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{detail.title}</h3>
                      <p className="text-muted-foreground">{detail.description}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
