// ============================================================================
// Khan Farms — Central Data Layer (single source of truth)
// ----------------------------------------------------------------------------
// Every page/counter reads from this file. Do not hardcode acreage, coordinates,
// crop lists, or metrics elsewhere. Unknowns are stored as the `TBC` sentinel so
// they can be hidden from public UI until verified.
//
// VERIFIED (safe to display): acreage, coordinates, crop lists, location count.
// TO BE CONFIRMED (hidden until verified): processing capacities, trees planted,
// workforce numbers, livestock counts.
// ============================================================================

// ---------------------------------------------------------------------------
// Status system
// ---------------------------------------------------------------------------
export type AssetStatus =
  | 'operational'
  | 'under-development'
  | 'planned'
  | 'long-term-opportunity'

export const STATUS_LABELS: Record<AssetStatus, string> = {
  operational: 'Operational',
  'under-development': 'Under Development',
  planned: 'Planned',
  'long-term-opportunity': 'Long-Term Opportunity',
}

// ---------------------------------------------------------------------------
// "To be confirmed" sentinel for unverified data
// ---------------------------------------------------------------------------
export const TBC = 'to-be-confirmed' as const
export type TBC = typeof TBC
export type Confirmable<T> = T | TBC
export function isConfirmed<T>(value: Confirmable<T>): value is T {
  return value !== TBC
}

// ---------------------------------------------------------------------------
// Availability (produce)
// ---------------------------------------------------------------------------
export type Availability = 'available-now' | 'upcoming-harvest' | 'planned-production'

export const AVAILABILITY_LABELS: Record<Availability, string> = {
  'available-now': 'Available Now',
  'upcoming-harvest': 'Upcoming Harvest',
  'planned-production': 'Planned Production',
}

// ---------------------------------------------------------------------------
// Company / contact constants
// ---------------------------------------------------------------------------
export const COMPANY = {
  name: 'Khan Farms',
  legalRegion: 'Oyo & Osun States, Nigeria',
  domain: 'kfarms.ng',
  url: 'https://kfarms.ng',
  email: 'info@khan.ng',
  phoneDisplay: '+234 816 816 6109',
  whatsappNumber: '2348168166109', // wa.me format, no +
} as const

export function whatsappLink(message: string): string {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function googleMapsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`
}

export function googleMapsEmbedUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`
}

// ---------------------------------------------------------------------------
// Locations (VERIFIED: acreage, coordinates, crops, state)
// Ikoyi is in Osun State; the other four farms are in Oyo State.
// ---------------------------------------------------------------------------
export interface InfrastructureItem {
  type: string
  status: AssetStatus
  capacity: Confirmable<string>
  description: string
}

export interface FarmLocation {
  name: string
  displayName: string
  slug: string
  state: 'Oyo' | 'Osun'
  acreage: number
  coordinates: { lat: number; lng: number }
  status: AssetStatus
  crops: string[]
  cropStatus: AssetStatus
  summary: string
  description: string
  highlights: string[]
  infrastructure: InfrastructureItem[]
  trees: Confirmable<number>
  workers: Confirmable<number>
  livestock: Confirmable<number>
  order: number
}

export const FARM_LOCATIONS: FarmLocation[] = [
  {
    name: 'Ikoyi',
    displayName: 'Ikoyi',
    slug: 'ikoyi',
    state: 'Osun',
    acreage: 60,
    coordinates: { lat: 7.263614, lng: 4.126928 },
    status: 'operational',
    crops: ['Plantain', 'Palm Oil'],
    cropStatus: 'operational',
    summary: 'Established 60-acre site combining plantain cultivation with early palm oil processing.',
    description:
      'Ikoyi is our established site in Osun State, focused on plantain and oil palm. It hosts early-stage palm oil processing that lets us capture more value close to where the fruit is harvested.',
    highlights: [
      'Plantain and oil palm cultivation',
      'On-site palm oil processing',
      'Close to established road access',
    ],
    infrastructure: [
      {
        type: 'Palm Oil Processing',
        status: 'operational',
        capacity: TBC,
        description: 'On-site palm oil processing for fruit harvested at Ikoyi.',
      },
    ],
    trees: TBC,
    workers: TBC,
    livestock: TBC,
    order: 1,
  },
  {
    name: 'Otu1',
    displayName: 'Otu 1',
    slug: 'otu1',
    state: 'Oyo',
    acreage: 100,
    coordinates: { lat: 8.156728, lng: 3.446328 },
    status: 'operational',
    crops: ['Maize', 'Palm Oil', 'Cassava', 'Groundnut', 'Soybeans'],
    cropStatus: 'operational',
    summary: '100-acre diversified cultivation site producing food crops alongside oil palm.',
    description:
      'Otu 1 is a diversified 100-acre cultivation site in Oyo State. It combines fast-turnaround food crops — maize, cassava, groundnut and soybeans — with longer-term oil palm, giving us both near-term produce for buyers and a maturing tree asset.',
    highlights: [
      'Diversified food-crop production',
      'Oil palm development alongside annual crops',
      'Livestock integration under development',
    ],
    infrastructure: [],
    trees: TBC,
    workers: TBC,
    livestock: TBC,
    order: 2,
  },
  {
    name: 'Otu2',
    displayName: 'Otu 2',
    slug: 'otu2',
    state: 'Oyo',
    acreage: 100,
    coordinates: { lat: 8.239619, lng: 3.356581 },
    status: 'operational',
    crops: ['Maize', 'Palm Oil', 'Cassava', 'Groundnut', 'Soybeans'],
    cropStatus: 'operational',
    summary: '100-acre expansion site mirroring Otu 1 with diversified crops and oil palm.',
    description:
      'Otu 2 is a 100-acre expansion site adjacent to our Otu 1 operations in Oyo State. It follows the same diversified model — food crops for near-term supply and oil palm for long-term value.',
    highlights: [
      'Diversified food-crop production',
      'Oil palm development',
      'Contiguous with Otu 1 operations',
    ],
    infrastructure: [],
    trees: TBC,
    workers: TBC,
    livestock: TBC,
    order: 3,
  },
  {
    name: 'Ilero',
    displayName: 'Ilero',
    slug: 'ilero',
    state: 'Oyo',
    acreage: 90,
    coordinates: { lat: 8.123964, lng: 3.463614 },
    status: 'operational',
    crops: ['Cashew', 'Cassava', 'Plantain', 'Palm Oil', 'Maize', 'Tomato', 'Pepper'],
    cropStatus: 'operational',
    summary: '90-acre processing hub with the widest crop range across the farms.',
    description:
      'Ilero is our processing hub in Oyo State and grows the widest range of crops — cashew, cassava, plantain, oil palm, maize, tomato and pepper. Co-locating cultivation with processing shortens the distance between harvest and value-added output.',
    highlights: [
      'Widest crop diversity across the farms',
      'Processing hub for the cluster',
      'Cashew and horticultural crops',
    ],
    infrastructure: [
      {
        type: 'Processing Hub',
        status: 'operational',
        capacity: TBC,
        description: 'Processing facility serving the surrounding farm cluster.',
      },
    ],
    trees: TBC,
    workers: TBC,
    livestock: TBC,
    order: 4,
  },
  {
    name: 'Ikomu',
    displayName: 'Ikomu',
    slug: 'ikomu',
    state: 'Oyo',
    acreage: 500,
    coordinates: { lat: 8.172078, lng: 3.117381 },
    status: 'under-development',
    crops: ['Palm Oil', 'Cassava', 'Maize'],
    cropStatus: 'under-development',
    summary: 'Our largest site at 500 acres, under active development for oil palm and cash crops.',
    description:
      'Ikomu is our largest holding at 500 acres and the centrepiece of our expansion in Oyo State. It is under active development for oil palm at scale alongside cash crops. As development progresses we will publish verified crop, tree and infrastructure figures here.',
    highlights: [
      'Largest single holding (500 acres)',
      'Oil palm development at scale',
      'Land-development and infrastructure partnership opportunities',
    ],
    infrastructure: [
      {
        type: 'Land Development',
        status: 'under-development',
        capacity: TBC,
        description: 'Clearing, planting and access development in progress.',
      },
    ],
    trees: TBC,
    workers: TBC,
    livestock: TBC,
    order: 5,
  },
]

export function getLocation(slug: string): FarmLocation | undefined {
  return FARM_LOCATIONS.find((l) => l.slug === slug)
}

export const LOCATION_SLUGS = FARM_LOCATIONS.map((l) => l.slug)

// ---------------------------------------------------------------------------
// Produce (VERIFIED crop varieties across the farms)
// ---------------------------------------------------------------------------
export interface ProduceItem {
  name: string
  slug: string
  category: 'grain' | 'tuber' | 'tree-crop' | 'oilseed' | 'horticulture' | 'processed'
  availability: Availability
  producingFarms: string[] // slugs
  summary: string
  description: string
  buyerTypes: string[]
  // Verified-only fields; TBC hides them from the UI.
  qualitySpecs: Confirmable<string[]>
  packaging: Confirmable<string[]>
  estimatedQuantity: Confirmable<string>
}

export const PRODUCE: ProduceItem[] = [
  {
    name: 'Maize',
    slug: 'maize',
    category: 'grain',
    availability: 'available-now',
    producingFarms: ['otu1', 'otu2', 'ilero', 'ikomu'],
    summary: 'Field maize grown across multiple Oyo State sites.',
    description:
      'Maize is one of our core annual crops, grown across Otu 1, Otu 2 and Ilero. It supports both fresh sale and downstream feed and food uses.',
    buyerTypes: ['Aggregators', 'Feed millers', 'Food processors', 'Wholesalers'],
    qualitySpecs: TBC,
    packaging: TBC,
    estimatedQuantity: TBC,
  },
  {
    name: 'Cassava',
    slug: 'cassava',
    category: 'tuber',
    availability: 'available-now',
    producingFarms: ['otu1', 'otu2', 'ilero', 'ikomu'],
    summary: 'Cassava tubers for fresh sale and processing into flour, starch and garri.',
    description:
      'Cassava is grown across several of our sites and is well suited to processing into flour, starch and garri. It provides reliable near-term cash flow alongside our tree crops.',
    buyerTypes: ['Processors', 'Aggregators', 'Wholesalers'],
    qualitySpecs: TBC,
    packaging: TBC,
    estimatedQuantity: TBC,
  },
  {
    name: 'Cashew',
    slug: 'cashew',
    category: 'tree-crop',
    availability: 'upcoming-harvest',
    producingFarms: ['ilero'],
    summary: 'Raw cashew nuts from our Ilero site.',
    description:
      'Cashew is cultivated at Ilero as part of our tree-crop portfolio. Raw cashew nuts are of interest to exporters and processors.',
    buyerTypes: ['Exporters', 'Processors', 'Aggregators'],
    qualitySpecs: TBC,
    packaging: TBC,
    estimatedQuantity: TBC,
  },
  {
    name: 'Palm Oil',
    slug: 'palm-oil',
    category: 'processed',
    availability: 'available-now',
    producingFarms: ['ikoyi', 'otu1', 'otu2', 'ilero', 'ikomu'],
    summary: 'Palm oil from fruit grown and processed across our sites.',
    description:
      'Oil palm is grown across all of our sites, with early-stage processing at Ikoyi and Ilero. Palm oil is a long-term economic anchor for the business as plantations mature.',
    buyerTypes: ['Food manufacturers', 'Wholesalers', 'Distributors'],
    qualitySpecs: TBC,
    packaging: TBC,
    estimatedQuantity: TBC,
  },
  {
    name: 'Plantain',
    slug: 'plantain',
    category: 'tree-crop',
    availability: 'available-now',
    producingFarms: ['ikoyi', 'ilero'],
    summary: 'Fresh plantain from Ikoyi and Ilero.',
    description:
      'Plantain is grown at Ikoyi and Ilero for fresh sale to markets, aggregators and processors.',
    buyerTypes: ['Wholesalers', 'Aggregators', 'Processors'],
    qualitySpecs: TBC,
    packaging: TBC,
    estimatedQuantity: TBC,
  },
  {
    name: 'Groundnut',
    slug: 'groundnut',
    category: 'oilseed',
    availability: 'available-now',
    producingFarms: ['otu1', 'otu2'],
    summary: 'Groundnut (peanut) grown at our Otu sites.',
    description:
      'Groundnut is cultivated at Otu 1 and Otu 2 as part of our diversified crop rotation, supplying both food and oil-processing markets.',
    buyerTypes: ['Processors', 'Aggregators', 'Wholesalers'],
    qualitySpecs: TBC,
    packaging: TBC,
    estimatedQuantity: TBC,
  },
  {
    name: 'Soybeans',
    slug: 'soybeans',
    category: 'oilseed',
    availability: 'available-now',
    producingFarms: ['otu1', 'otu2'],
    summary: 'Soybeans grown at our Otu sites for feed and food processing.',
    description:
      'Soybeans are grown at Otu 1 and Otu 2, supplying feed millers and food processors and supporting soil health through rotation.',
    buyerTypes: ['Feed millers', 'Processors', 'Aggregators'],
    qualitySpecs: TBC,
    packaging: TBC,
    estimatedQuantity: TBC,
  },
  {
    name: 'Tomato',
    slug: 'tomato',
    category: 'horticulture',
    availability: 'upcoming-harvest',
    producingFarms: ['ilero'],
    summary: 'Fresh tomato from Ilero.',
    description:
      'Tomato is grown at Ilero as part of our horticultural crops, supplying fresh markets and processors.',
    buyerTypes: ['Wholesalers', 'Markets', 'Processors'],
    qualitySpecs: TBC,
    packaging: TBC,
    estimatedQuantity: TBC,
  },
  {
    name: 'Pepper',
    slug: 'pepper',
    category: 'horticulture',
    availability: 'upcoming-harvest',
    producingFarms: ['ilero'],
    summary: 'Fresh pepper from Ilero.',
    description:
      'Pepper is grown at Ilero alongside tomato, supplying fresh markets and processors across the region.',
    buyerTypes: ['Wholesalers', 'Markets', 'Processors'],
    qualitySpecs: TBC,
    packaging: TBC,
    estimatedQuantity: TBC,
  },
]

export function getProduce(slug: string): ProduceItem | undefined {
  return PRODUCE.find((p) => p.slug === slug)
}

export const PRODUCE_SLUGS = PRODUCE.map((p) => p.slug)

// ---------------------------------------------------------------------------
// Processing & infrastructure (tiered by status; capacities TBC)
// ---------------------------------------------------------------------------
export interface ProcessingItem {
  title: string
  status: AssetStatus
  location: string // human label
  capacity: Confirmable<string>
  description: string
}

export const PROCESSING: ProcessingItem[] = [
  {
    title: 'Palm Oil Processing — Ikoyi',
    status: 'operational',
    location: 'Ikoyi, Osun State',
    capacity: TBC,
    description:
      'Early-stage palm oil processing co-located with cultivation at Ikoyi, capturing value close to harvest.',
  },
  {
    title: 'Processing Hub — Ilero',
    status: 'operational',
    location: 'Ilero, Oyo State',
    capacity: TBC,
    description:
      'Processing hub serving the surrounding farm cluster, where our widest crop range is grown.',
  },
  {
    title: 'Expanded Processing Capacity',
    status: 'under-development',
    location: 'Oyo & Osun cluster',
    capacity: TBC,
    description:
      'Additional processing capacity is being developed to keep pace with expanding cultivation and to broaden the range of value-added outputs.',
  },
  {
    title: 'Integrated Processing at Ikomu',
    status: 'planned',
    location: 'Ikomu, Oyo State',
    capacity: TBC,
    description:
      'As our 500-acre Ikomu site matures, integrated processing is planned to capture value from oil palm and cash crops at scale.',
  },
  {
    title: 'Logistics & Storage Infrastructure',
    status: 'planned',
    location: 'Oyo & Osun cluster',
    capacity: TBC,
    description:
      'Storage, handling and logistics infrastructure is planned to support reliable off-take and reduce post-harvest losses.',
  },
]

// ---------------------------------------------------------------------------
// Metrics (current, verified). Unverified metrics are TBC and hidden.
// ---------------------------------------------------------------------------
const uniqueCrops = Array.from(new Set(FARM_LOCATIONS.flatMap((l) => l.crops)))

export const METRICS = {
  totalAcreage: FARM_LOCATIONS.reduce((sum, l) => sum + l.acreage, 0), // 850
  locationsCount: FARM_LOCATIONS.length, // 5
  statesCount: 2, // Oyo (4 farms) & Osun (Ikoyi)
  cropVarieties: uniqueCrops.length,
  // TO BE CONFIRMED — not shown as hard figures in public UI:
  treesPlanted: TBC as Confirmable<number>,
  workers: TBC as Confirmable<number>,
  livestock: TBC as Confirmable<number>,
} as const

export const CROP_VARIETIES = uniqueCrops

// ---------------------------------------------------------------------------
// Vision 2030 targets (clearly future — never presented as current)
// ---------------------------------------------------------------------------
export interface VisionTarget {
  metric: string
  current: string
  target: string
  status: AssetStatus
}

export const TARGETS_2030: VisionTarget[] = [
  { metric: 'Land under cultivation', current: '850 acres', target: '1,000 acres', status: 'planned' },
  { metric: 'Oil palm & tree crops', current: 'Established & expanding', target: 'Plantation at scale', status: 'planned' },
  { metric: 'Processing', current: 'Early-stage at Ikoyi & Ilero', target: 'Integrated processing', status: 'planned' },
  { metric: 'Livestock', current: 'Integration under way', target: 'Expanded herd', status: 'planned' },
  { metric: 'Sustainability', current: 'Pathways in development', target: 'Measurable programmes', status: 'under-development' },
]

// ---------------------------------------------------------------------------
// Partnership opportunities
// ---------------------------------------------------------------------------
export interface PartnershipOpportunity {
  title: string
  description: string
  inquiryType: string
}

export const PARTNERSHIPS: PartnershipOpportunity[] = [
  {
    title: 'Off-take & Supply',
    description: 'Reliable supply agreements for maize, cassava, palm oil and other crops.',
    inquiryType: 'Off-take agreement',
  },
  {
    title: 'Processing',
    description: 'Partner on processing capacity to add value close to production.',
    inquiryType: 'Processing partnership',
  },
  {
    title: 'Logistics',
    description: 'Storage, handling and transport partnerships to strengthen off-take.',
    inquiryType: 'Logistics partnership',
  },
  {
    title: 'Land Development',
    description: 'Co-develop our 500-acre Ikomu site and future acreage.',
    inquiryType: 'Land-development partnership',
  },
  {
    title: 'Equipment & Infrastructure',
    description: 'Supply or finance farm equipment and processing infrastructure.',
    inquiryType: 'Equipment/infrastructure',
  },
  {
    title: 'Investment & Strategic',
    description: 'Long-term strategic and investment partnerships aligned with our 2030 plan.',
    inquiryType: 'Investment/strategic partnership',
  },
]

// ---------------------------------------------------------------------------
// Contact inquiry types (used by the contact form)
// ---------------------------------------------------------------------------
export const INQUIRY_TYPES = [
  'Purchase farm produce',
  'Off-take agreement',
  'Processing partnership',
  'Logistics partnership',
  'Land-development partnership',
  'Equipment/infrastructure',
  'Investment/strategic partnership',
  'General inquiry',
] as const
export type InquiryType = (typeof INQUIRY_TYPES)[number]

// ---------------------------------------------------------------------------
// How we work with buyers
// ---------------------------------------------------------------------------
export const BUYER_STEPS = [
  {
    step: 1,
    title: 'Tell us what you need',
    description: 'Share the crop, quantity and delivery location through our form or WhatsApp.',
  },
  {
    step: 2,
    title: 'We confirm availability',
    description: 'We check current stock and upcoming harvests and send you a quote.',
  },
  {
    step: 3,
    title: 'Agree terms & fulfil',
    description: 'We agree pricing, packaging and pickup or delivery, then fulfil the order.',
  },
]
