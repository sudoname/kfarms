export interface Location {
  _id: string
  name: string
  slug: { current: string }
  state: string
  description: string
  details?: string
  acreage?: number
  coordinates?: {
    lat: number
    lng: number
  }
  featuredImage?: {
    asset: any
    alt?: string
  }
  gallery?: Array<{
    asset: any
    alt?: string
    caption?: string
  }>
  videos?: Array<{
    title: string
    url: string
    thumbnail: { asset: any }
  }>
  crops?: string[]
  infrastructure?: Array<{
    type: string
    capacity: string
    description: string
  }>
  order?: number
  featured?: boolean
}

export interface PlatformSection {
  _id: string
  id: string
  icon: string
  title: string
  description: string
  details: Array<{
    title: string
    description: string
  }>
  metrics: string[]
  order?: number
}

export interface SiteSettings {
  _id: string
  title: string
  description: string
  heroTitle: string
  heroSubtitle: string
  contactEmail: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
    facebook?: string
  }
}
