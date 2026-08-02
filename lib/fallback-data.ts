import type { PlatformSection, Location } from './sanity.types'

// Fallback platform sections when Sanity has no data
export const fallbackPlatformSections: Omit<PlatformSection, '_id'>[] = [
  {
    id: 'agriculture',
    icon: 'Sprout',
    title: 'Land & Cultivation',
    description: 'Strategic land development across Ikoyi, Otu1, Otu2, and Ilero with diversified crop rotation',
    details: [
      {
        title: 'Multi-Crop Strategy',
        description: 'Cassava, maize, soybeans, and peanuts provide early cash flow while palm matures',
      },
      {
        title: 'Soil Improvement',
        description: 'Systematic rotation and cover crops build fertility for long-term productivity',
      },
      {
        title: 'Operational Scale',
        description: 'Currently farming 850 acres with disciplined expansion pathway to 1,000+ acres',
      },
    ],
    metrics: ['850 acres operational', 'Cassava, maize, beans', 'Soil improvement focus'],
    order: 1,
  },
  {
    id: 'palm-oil',
    icon: 'TreeDeciduous',
    title: 'Palm Oil',
    description: 'Long-term oil palm development as the economic engine of the platform',
    details: [
      {
        title: 'Scale Planting',
        description: '80,000 trees target with systematic plantation growth across all locations',
      },
      {
        title: 'Value Chain Integration',
        description: 'Own processing infrastructure to capture margins from farm to final product',
      },
      {
        title: 'Long-Term Asset',
        description: 'Palm trees produce for 25+ years, building compounding value over decades',
      },
    ],
    metrics: ['80,000 trees target', 'Systematic plantation growth', 'Value chain capture'],
    order: 2,
  },
  {
    id: 'livestock',
    icon: 'Beef',
    title: 'Livestock',
    description: 'Integrated cattle expansion for dairy potential and soil fertility enhancement',
    details: [
      {
        title: 'Herd Expansion',
        description: 'Starting with 10 cattle, scaling to 80+ head for dairy and beef production',
      },
      {
        title: 'Circular Farming',
        description: 'Cattle manure feeds soil fertility, reducing chemical fertilizer dependence',
      },
      {
        title: 'Revenue Diversification',
        description: 'Multiple income streams from dairy, beef, and organic fertilizer production',
      },
    ],
    metrics: ['10 → 80 head growth', 'Manure-driven fertility', 'Circular farming model'],
    order: 3,
  },
  {
    id: 'processing',
    icon: 'Factory',
    title: 'Processing',
    description: '10-acre palm oil processing hub unlocking additional value from production',
    details: [
      {
        title: 'Ilero Processing Center',
        description: '9 tons/day capacity palm oil mill with modern equipment and quality control',
      },
      {
        title: 'Vertical Integration',
        description: 'Control entire value chain from seedling to packaged product',
      },
      {
        title: 'Quality Standards',
        description: 'Food-grade processing to serve premium domestic and export markets',
      },
    ],
    metrics: ['Ilero processing center', 'Integrated value chain', 'Quality control'],
    order: 4,
  },
  {
    id: 'carbon',
    icon: 'Leaf',
    title: 'Carbon & Sustainability',
    description: 'Tree-based sequestration, soil carbon, and future biochar opportunities',
    details: [
      {
        title: 'Tree Sequestration',
        description: '14,000+ trees (oil palm & cashew) capturing CO2 at scale',
      },
      {
        title: 'Soil Carbon',
        description: 'Cover crops and organic matter building long-term carbon storage',
      },
      {
        title: 'Future Markets',
        description: 'Positioning for carbon credit monetization as markets mature',
      },
    ],
    metrics: ['Soil health pathways', 'Tree sequestration', 'Agricultural-waste reuse'],
    order: 5,
  },
  {
    id: 'infrastructure',
    icon: 'Settings',
    title: 'Infrastructure & Operations',
    description: 'Growing operational backbone supporting scale, efficiency, and long-term expansion',
    details: [
      {
        title: 'Multi-Site Operations',
        description: '5 active locations across Southwest Nigeria with centralized management',
      },
      {
        title: 'Equipment & Mechanization',
        description: 'Modern farming equipment and processing facilities for operational efficiency',
      },
      {
        title: 'Team Growth',
        description: '18 workers and expanding to support 1,000-acre vision by 2030',
      },
    ],
    metrics: ['Multi-site operations', 'Equipment & mechanization', 'Structured scaling to 1,000 acres'],
    order: 6,
  },
]

// Fallback locations when Sanity has no data
export const fallbackLocations: Partial<Location>[] = [
  {
    name: 'Ikoyi',
    slug: { current: 'ikoyi' },
    state: 'Osun',
    description: 'Established location in Osun State with palm oil processing facility',
    details: 'Palm oil processing center with 3 tons/day capacity',
    order: 1,
  },
  {
    name: 'Otu1',
    slug: { current: 'otu1' },
    state: 'Oyo',
    description: 'Primary cultivation site in Oyo State focused on food crops',
    details: 'Cassava, maize, and diversified food crop production',
    order: 2,
  },
  {
    name: 'Otu2',
    slug: { current: 'otu2' },
    state: 'Oyo',
    description: 'Expansion site in Oyo State for palm and food crops',
    details: 'Oil palm plantation and food crop cultivation',
    order: 3,
  },
  {
    name: 'Ilero',
    slug: { current: 'ilero' },
    state: 'Oyo',
    description: 'Processing hub with palm oil mill facility',
    details: 'Main processing facility with 6 tons/day capacity',
    order: 4,
  },
  {
    name: 'Ikomu',
    slug: { current: 'ikomu' },
    state: 'Oyo',
    description: 'Major cultivation site in Oyo State focused on palm oil and cash crops',
    details: 'Oil palm plantation with diversified cash crop cultivation across 500 acres',
    order: 5,
  },
]
