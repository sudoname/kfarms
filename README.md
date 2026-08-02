# Khan Farms Website

A premium, modern website for Khan Farms (kfarms.ng) - a Nigerian agro-industrial platform building long-term value through land, crops, livestock, processing, and carbon.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Smooth Scrolling**: Lenis
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd kfarms
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
kfarms/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── vision/            # Vision 2030 page
│   ├── platform/          # Platform page
│   ├── sustainability/    # Sustainability page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── home/             # Homepage sections
│   ├── navigation.tsx    # Main navigation
│   ├── footer.tsx        # Footer component
│   └── smooth-scroll.tsx # Smooth scroll wrapper
├── lib/                   # Utility functions
│   └── utils.ts          # Classname utilities
└── public/               # Static assets
```

## Building for Production

```bash
npm run build
npm start
```

## Design Philosophy

This website is designed to feel like a premium, world-class agricultural platform - comparable to companies like Anduril, Palantir, or Tesla in terms of design quality.

### Key Design Principles

- **Premium Dark Theme**: Sophisticated dark color palette with gold accents
- **Smooth Animations**: Subtle, elegant animations using Framer Motion
- **Performance First**: Optimized for fast loading and smooth scrolling
- **Mobile Responsive**: Beautiful on all screen sizes
- **Accessible**: Semantic HTML and ARIA labels where needed

### Color Palette

- **Background**: Deep charcoal/black (#0D0D0D)
- **Gold Accent**: #D4AF37
- **Green Accent**: #2D4A2B
- **Earth Tones**: #3A3226
- **Text**: Cream/off-white for contrast

## Content Strategy

All copy is written to be:
- **Confident**: Not overly hyped, but credible and strong
- **Strategic**: Focused on long-term value, not short-term tactics
- **Premium**: Sophisticated language befitting a serious agricultural platform
- **Specific**: Real numbers (450 acres, 80,000 trees, etc.)

## SEO Optimization

The site includes:
- Optimized meta tags and descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading times
- Mobile-first responsive design

## Deployment

This Next.js application can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

For production deployment:
1. Set environment variables (if needed)
2. Run `npm run build`
3. Deploy the `.next` folder and `public` directory

## License

© 2024 Khan Farms. A subsidiary of Khan Innovations Nigeria Limited.
