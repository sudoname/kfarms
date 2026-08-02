import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://kfarms.ng'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/studio/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
