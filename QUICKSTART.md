# Khan Farms - Quick Start

## Get Running in 3 Steps

### 1. Install Dependencies

```bash
cd C:\Users\yomi\kfarms
npm install
```

This will take 2-3 minutes to install all packages.

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open in Browser

Visit: **http://localhost:3000**

That's it! The website should now be running locally.

---

## What You'll See

✅ Premium dark-themed homepage with smooth animations
✅ Hero section with gradient text and floating elements
✅ Statistics section with animated counters
✅ Platform overview showing all 5 pillars
✅ Smooth scrolling throughout

## Pages Available

- **/** - Homepage
- **/about** - About Khan Farms
- **/vision** - Vision 2030 roadmap
- **/platform** - Platform details
- **/sustainability** - Sustainability initiatives
- **/contact** - Contact form

## Making Changes

- **Homepage sections**: Edit files in `components/home/`
- **Other pages**: Edit files in `app/[page-name]/page.tsx`
- **Navigation**: Edit `components/navigation.tsx`
- **Styles**: Edit `app/globals.css` or `tailwind.config.ts`

## Next Steps

1. ✅ Test the site locally
2. Add actual farm images to `public/images/`
3. Customize content if needed
4. Deploy to production (see DEPLOYMENT.md)

## Common Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Run production build

# Other
npm run lint             # Check code quality
```

## Need Help?

- Full setup guide: See `SETUP_INSTRUCTIONS.md`
- Deployment guide: See `DEPLOYMENT.md`
- Main docs: See `README.md`

---

**Built with:** Next.js 14 | TypeScript | Tailwind CSS | Framer Motion

**Domain:** kfarms.ng
**Company:** Khan Farms (Subsidiary of Khan Innovations Nigeria Limited)
