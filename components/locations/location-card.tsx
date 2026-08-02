'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface LocationCardProps {
  name: string
  slug: string
  state: string
  description: string
  details?: string
  featuredImage?: string
  index: number
}

export function LocationCard({
  name,
  slug,
  state,
  description,
  details,
  featuredImage,
  index,
}: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/locations/${slug}`}>
        <Card className="glass glass-hover rounded-2xl overflow-hidden h-full group cursor-pointer border-border">
          {/* Featured Image */}
          {featuredImage && (
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featuredImage}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          <CardContent className="p-8">
            {/* Location badge */}
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-gold-700" />
              <span className="text-sm text-gold-700 font-semibold">{state}</span>
            </div>

            {/* Location name */}
            <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-green-700 transition-colors">
              {name}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-3 line-clamp-3">{description}</p>

            {/* Details */}
            {details && (
              <p className="text-sm text-foreground/80 font-medium">{details}</p>
            )}
          </CardContent>

          <CardFooter className="p-8 pt-0">
            <Button variant="ghost" className="group/btn p-0 h-auto text-green-700 hover:text-green-800">
              View gallery
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
