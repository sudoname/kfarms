# Khan Farms - Setup Instructions

Complete guide to get the Khan Farms website running locally.

## Quick Start

```bash
# 1. Navigate to project directory
cd kfarms

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

## Detailed Setup

### Step 1: Install Node.js

Download and install Node.js 18+ from: https://nodejs.org

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install Dependencies

From the project root (`kfarms` folder):

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis (smooth scroll)
- shadcn/ui components
- Lucide React icons

### Step 3: Run Development Server

```bash
npm run dev
```

The site will be available at: `http://localhost:3000`

### Step 4: Build for Production (Optional)

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

## Project Structure

```
kfarms/
├── app/                          # Next.js App Router
│   ├── about/                   # About page
│   ├── vision/                  # Vision 2030 page
│   ├── platform/                # Platform overview page
│   ├── sustainability/          # Sustainability page
│   ├── contact/                 # Contact page
│   ├── layout.tsx               # Root layout with navigation
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
│
├── components/                   # Reusable components
│   ├── home/                    # Homepage-specific components
│   │   ├── hero.tsx            # Hero section
│   │   ├── stats.tsx           # Statistics/metrics
│   │   ├── platform-overview.tsx
│   │   └── cta.tsx             # Call-to-action
│   ├── navigation.tsx           # Main navigation
│   ├── footer.tsx               # Footer component
│   └── smooth-scroll.tsx        # Smooth scroll wrapper
│
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper functions
│
├── public/                      # Static assets
│   └── images/                  # Image files
│
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind CSS config
├── next.config.js               # Next.js config
└── README.md                    # Documentation
```

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Run production build locally
npm start

# Lint code
npm run lint
```

## Key Features

### Premium Design System

- Dark theme with gold and green accents
- Glassmorphism effects
- Smooth animations with Framer Motion
- Responsive on all devices

### Performance

- Next.js App Router for optimal performance
- Automatic code splitting
- Image optimization
- CSS purging with Tailwind

### Smooth Scrolling

- Lenis smooth scroll implementation
- 60fps scroll performance
- Natural easing curves

### SEO Optimized

- Meta tags for all pages
- Open Graph tags
- Semantic HTML
- Fast loading times

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  gold: "#D4AF37",  // Primary accent
  green: "#2D4A2B", // Secondary accent
  earth: "#3A3226", // Tertiary color
}
```

### Content

Page content is in:
- Homepage sections: `components/home/`
- Other pages: `app/[page-name]/page.tsx`

### Navigation

Edit navigation items in `components/navigation.tsx`:

```typescript
const navItems = [
  { name: "Platform", href: "/platform" },
  // Add more items here
]
```

## Troubleshooting

### Port Already in Use

If port 3000 is occupied:

```bash
# Kill the process
npx kill-port 3000

# Or run on different port
npm run dev -- -p 3001
```

### Module Not Found

Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Clear Next.js cache:

```bash
rm -rf .next
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. Images should be optimized (WebP format)
2. Keep animations subtle to avoid lag
3. Test on mobile devices
4. Use lighthouse for performance audits

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

## What's Next?

1. Add actual images to `public/images/`
2. Configure contact form backend
3. Set up analytics
4. Deploy to production (see DEPLOYMENT.md)
5. Configure domain DNS

Enjoy building with Khan Farms!
