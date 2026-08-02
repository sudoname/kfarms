import { COMPANY, FARM_LOCATIONS, METRICS } from '@/lib/farm-data'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: COMPANY.url,
    email: COMPANY.email,
    telephone: COMPANY.phoneDisplay,
    description: `Khan Farms operates ${METRICS.totalAcreage} acres across ${METRICS.locationsCount} farms in Oyo and Osun States, Nigeria, growing a diversified range of crops and developing processing infrastructure.`,
    areaServed: 'Oyo & Osun States, Nigeria',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Oyo State',
      addressCountry: 'NG',
    },
    location: FARM_LOCATIONS.map((l) => ({
      '@type': 'Place',
      name: `${l.displayName} Farm`,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: l.coordinates.lat,
        longitude: l.coordinates.lng,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
