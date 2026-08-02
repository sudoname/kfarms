import { groq } from 'next-sanity'

export const locationsQuery = groq`
  *[_type == "location"] | order(order asc) {
    _id,
    name,
    slug,
    state,
    description,
    details,
    acreage,
    featuredImage {
      asset->,
      alt
    },
    order,
    featured
  }
`

export const locationBySlugQuery = groq`
  *[_type == "location" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    state,
    description,
    details,
    acreage,
    coordinates,
    featuredImage {
      asset->,
      alt
    },
    gallery[] {
      asset->,
      alt,
      caption
    },
    videos[] {
      title,
      url,
      thumbnail {
        asset->
      }
    },
    crops,
    infrastructure[] {
      type,
      capacity,
      description
    }
  }
`

export const platformSectionsQuery = groq`
  *[_type == "platformSection"] | order(order asc) {
    _id,
    "id": id.current,
    icon,
    title,
    description,
    details[] {
      title,
      description
    },
    metrics,
    order
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    heroTitle,
    heroSubtitle,
    contactEmail,
    socialLinks {
      twitter,
      linkedin,
      facebook
    }
  }
`
