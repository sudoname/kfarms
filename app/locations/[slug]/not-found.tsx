import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { FARM_LOCATIONS } from '@/lib/farm-data'

export default function LocationNotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-cream">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
              <MapPin className="w-10 h-10 text-gold-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Location <span className="gradient-text">not found</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We couldn&apos;t find that farm. Explore one of our {FARM_LOCATIONS.length}{' '}
              locations in Oyo and Osun States below.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our farm locations</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {FARM_LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="p-4 rounded-lg bg-white/70 border border-border hover:border-green-300 transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-1">{loc.displayName}</h3>
                  <p className="text-sm text-muted-foreground">
                    {loc.state} State &middot; {loc.acreage} acres
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#our-farms" className="btn-primary">
              View all farms
            </Link>
            <Link href="/" className="btn-secondary">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
