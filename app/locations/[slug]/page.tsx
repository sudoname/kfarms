import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MapPin, Leaf, Factory, ArrowRight, ChevronRight } from 'lucide-react'
import { sanityFetch } from '@/lib/sanity.fetch'
import { locationBySlugQuery } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'
import type { Location } from '@/lib/sanity.types'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { VideoPlayer } from '@/components/gallery/video-player'
import { LocationMap } from '@/components/locations/location-map'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StatusBadge } from '@/components/ui/status-badge'
import {
  getLocation,
  LOCATION_SLUGS,
  isConfirmed,
  googleMapsUrl,
  whatsappLink,
} from '@/lib/farm-data'

interface LocationPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return LOCATION_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) return {}

  const title = `${loc.displayName} Farm (${loc.acreage} acres)`
  const description = `${loc.displayName} is a ${loc.acreage}-acre farm in ${loc.state} State, Nigeria. ${loc.summary}`

  return {
    title,
    description,
    alternates: { canonical: `/locations/${slug}` },
    openGraph: {
      title: `${title} | Khan Farms`,
      description,
      url: `https://kfarms.ng/locations/${slug}`,
      siteName: 'Khan Farms',
      locale: 'en_NG',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Khan Farms`,
      description,
    },
  }
}

// Best-effort fetch of CMS media; never blocks the page.
async function getSanityMedia(slug: string): Promise<Location | null> {
  if (
    !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'placeholder'
  ) {
    return null
  }
  try {
    return await sanityFetch<Location>({
      query: locationBySlugQuery,
      params: { slug },
      revalidate: 60,
    })
  } catch {
    return null
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) notFound()

  const cms = await getSanityMedia(slug)

  const featuredImage = cms?.featuredImage
    ? urlForImage(cms.featuredImage.asset).width(1920).url()
    : null

  const galleryImages =
    cms?.gallery?.map((img) => ({
      url: urlForImage(img.asset).width(1200).url(),
      alt: img.alt || loc.displayName,
      caption: img.caption,
    })) || []

  const visibleInfra = loc.infrastructure

  const buyerMessage = `Hello Khan Farms, I am interested in produce from your ${loc.displayName} farm. Please share availability.`
  const partnerMessage = `Hello Khan Farms, I would like to discuss a partnership opportunity related to your ${loc.displayName} farm.`

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${loc.displayName} Farm`,
    description: loc.summary,
    address: {
      '@type': 'PostalAddress',
      addressRegion: `${loc.state} State`,
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.coordinates.lat,
      longitude: loc.coordinates.lng,
    },
    hasMap: googleMapsUrl(loc.coordinates.lat, loc.coordinates.lng),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kfarms.ng' },
      { '@type': 'ListItem', position: 2, name: 'Our Farms', item: 'https://kfarms.ng/locations/ikoyi' },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${loc.displayName} Farm`,
        item: `https://kfarms.ng/locations/${slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="dark-band relative h-[56vh] min-h-[440px] flex items-end pt-24">
        <div className="absolute inset-0">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={cms?.featuredImage?.alt || `${loc.displayName} farm in ${loc.state} State`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-black" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85" />
        </div>

        <div className="container-custom relative pb-14">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <ChevronRight className="w-4 h-4" />
              <li className="text-white font-medium">{loc.displayName}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold">{loc.state} State, Nigeria</span>
            </div>
            <StatusBadge status={loc.status} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{loc.displayName}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">{loc.description}</p>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {/* Facts */}
            <div className="glass rounded-2xl p-7">
              <h2 className="text-gold-700 font-semibold mb-4">Farm details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Acreage</p>
                  <p className="text-2xl font-bold text-foreground">{loc.acreage} acres</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">State</p>
                  <p className="text-lg font-semibold text-foreground">{loc.state} State</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Coordinates</p>
                  <p className="text-base font-medium text-foreground">
                    {loc.coordinates.lat.toFixed(6)}, {loc.coordinates.lng.toFixed(6)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1.5">Status</p>
                  <StatusBadge status={loc.status} />
                </div>
              </div>
            </div>

            {/* Crops */}
            <div className="glass rounded-2xl p-7">
              <h2 className="flex items-center gap-2 font-semibold mb-4">
                <Leaf className="w-5 h-5 text-green-700" /> Crops grown
              </h2>
              <div className="flex flex-wrap gap-2">
                {loc.crops.map((crop) => (
                  <span
                    key={crop}
                    className="px-3 py-1.5 rounded-full bg-green-100 text-green-800 border border-green-200 text-sm font-medium"
                  >
                    {crop}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                {loc.highlights.map((h) => (
                  <p key={h} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-green-700 font-bold">•</span> {h}
                  </p>
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div className="glass rounded-2xl p-7">
              <h2 className="flex items-center gap-2 font-semibold mb-4">
                <Factory className="w-5 h-5 text-gold-700" /> Infrastructure
              </h2>
              {visibleInfra.length > 0 ? (
                <div className="space-y-4">
                  {visibleInfra.map((infra) => (
                    <div key={infra.type}>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="font-semibold text-foreground">{infra.type}</p>
                        <StatusBadge status={infra.status} showDot={false} />
                      </div>
                      <p className="text-sm text-muted-foreground">{infra.description}</p>
                      {isConfirmed(infra.capacity) && (
                        <p className="text-sm text-foreground mt-1">Capacity: {infra.capacity}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Infrastructure details for this farm will be published as they are confirmed.
                </p>
              )}
            </div>
          </div>

          {/* CTAs */}
          <div className="glass rounded-2xl p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Interested in {loc.displayName}?</h2>
              <p className="text-muted-foreground">Buy produce from this farm or explore a partnership.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href={whatsappLink(buyerMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Buy from this farm
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
              <a href={whatsappLink(partnerMessage)} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Partner with us
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mb-14">
            <LocationMap coordinates={loc.coordinates} name={loc.displayName} />
          </div>

          {/* Media */}
          {(galleryImages.length > 0 || (cms?.videos && cms.videos.length > 0)) && (
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="photos">Photo gallery</TabsTrigger>
                {cms?.videos && cms.videos.length > 0 && <TabsTrigger value="videos">Videos</TabsTrigger>}
              </TabsList>

              <TabsContent value="photos">
                <GalleryGrid images={galleryImages} />
              </TabsContent>

              {cms?.videos && cms.videos.length > 0 && (
                <TabsContent value="videos">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cms.videos.map((video, index) => (
                      <VideoPlayer
                        key={index}
                        title={video.title}
                        url={video.url}
                        thumbnail={urlForImage(video.thumbnail.asset).width(800).url()}
                      />
                    ))}
                  </div>
                </TabsContent>
              )}
            </Tabs>
          )}
        </div>
      </section>
    </>
  )
}
