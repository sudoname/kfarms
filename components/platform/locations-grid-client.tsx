'use client'

import { LocationCard } from '@/components/locations/location-card'

interface LocationData {
  name: string
  slug: string
  state: string
  description: string
  details?: string
  featuredImage?: string
}

interface LocationsGridClientProps {
  locations: LocationData[]
}

export function LocationsGridClient({ locations }: LocationsGridClientProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {locations.map((location, index) => (
        <LocationCard
          key={location.slug}
          name={location.name}
          slug={location.slug}
          state={location.state}
          description={location.description}
          details={location.details}
          featuredImage={location.featuredImage}
          index={index}
        />
      ))}
    </div>
  )
}
