import { Suspense } from 'react'
import { sanityFetch } from '@/lib/sanity.fetch'
import { locationsQuery, platformSectionsQuery } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'
import type { Location, PlatformSection } from '@/lib/sanity.types'
import { PlatformSectionsClient } from '@/components/platform/platform-sections-client'
import { LocationsGridClient } from '@/components/platform/locations-grid-client'
import { Skeleton } from '@/components/ui/skeleton'
import { fallbackPlatformSections, fallbackLocations } from '@/lib/fallback-data'

export default async function PlatformPage() {
  // Fetch data from Sanity with fallback
  let platformSections: PlatformSection[] = []
  let locations: Location[] = []

  // Only fetch if Sanity is configured
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder') {
    try {
      [platformSections, locations] = await Promise.all([
        sanityFetch<PlatformSection[]>({
          query: platformSectionsQuery,
          revalidate: 60,
        }),
        sanityFetch<Location[]>({
          query: locationsQuery,
          revalidate: 60,
        }),
      ])
    } catch (error) {
      console.error('Error fetching from Sanity:', error)
    }
  }

  // Use fallback data if Sanity returns empty arrays
  if (platformSections.length === 0) {
    platformSections = fallbackPlatformSections as PlatformSection[]
  }
  if (locations.length === 0) {
    locations = fallbackLocations as Location[]
  }

  // Prepare locations data with featured images
  const locationsWithImages = locations.map((location) => ({
    name: location.name || '',
    slug: location.slug?.current || '',
    state: location.state || '',
    description: location.description || '',
    details: location.details,
    featuredImage: location.featuredImage
      ? urlForImage(location.featuredImage.asset).width(800).url()
      : undefined,
  }))

  return (
    <div className="pt-32 pb-20 bg-cream">
      {/* Hero */}
      <section className="container-custom mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            The <span className="gradient-text">platform</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Six integrated components working together to create a resilient, scalable agricultural business.
          </p>
        </div>
      </section>

      {/* Platform Sections */}
      <Suspense fallback={<PlatformSectionsSkeleton />}>
        <PlatformSectionsClient sections={platformSections} />
      </Suspense>

      {/* Locations */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <span className="gradient-text">footprint</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Operating across five locations in Oyo and Osun States, Southwest Nigeria
            </p>
          </div>

          <Suspense fallback={<LocationsGridSkeleton />}>
            <LocationsGridClient locations={locationsWithImages} />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

function PlatformSectionsSkeleton() {
  return (
    <div className="space-y-20">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <Skeleton className="h-64" />
              <div className="space-y-6">
                {[1, 2, 3].map((j) => (
                  <Skeleton key={j} className="h-24" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function LocationsGridSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-80 rounded-2xl" />
      ))}
    </div>
  )
}
