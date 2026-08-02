# Khan Farms - Deployment Guide

## ✅ Completed Implementation (Phases 1-4)

The following has been successfully implemented:

### Phase 1: Sanity CMS Foundation
- ✅ Installed Sanity dependencies (next-sanity, @sanity/image-url, sanity)
- ✅ Created Sanity client configuration (`/lib/sanity.client.ts`)
- ✅ Created image URL builder (`/lib/sanity.image.ts`)
- ✅ Created GROQ queries (`/lib/sanity.queries.ts`)
- ✅ Created TypeScript types (`/lib/sanity.types.ts`)
- ✅ Created 3 schemas: Location, Platform Section, Site Settings
- ✅ Mounted Sanity Studio at `/studio` route
- ✅ Updated Next.js config to support Sanity CDN images

### Phase 2: shadcn/ui Components
- ✅ Installed shadcn/ui with all required components
- ✅ Created Image Lightbox component with keyboard navigation
- ✅ Created Gallery Grid component with hover effects
- ✅ Created Video Player component (YouTube/Vimeo support)
- ✅ Created Location Card component

### Phase 3: Dynamic Location Pages
- ✅ Created dynamic route `/app/locations/[slug]/page.tsx`
- ✅ Implemented ISR with 60-second revalidation
- ✅ Added SEO metadata with Open Graph images
- ✅ Created loading skeleton states
- ✅ Updated Platform page to fetch from Sanity and link to locations

### Phase 4: Design Modernization
- ✅ Lighter background colors (8% instead of 5%)
- ✅ Brighter gold (#E5C068 - more vibrant)
- ✅ Better contrast for text (70% muted foreground)
- ✅ Enhanced typography with proper letter-spacing
- ✅ Improved glass effects with better shadows
- ✅ More generous spacing and padding

---

## 📋 Remaining Steps

### Phase 5: Set Up Sanity Project

#### Step 1: Create Sanity Account & Project

1. Go to [https://www.sanity.io/](https://www.sanity.io/) and sign up (free tier is sufficient)

2. Create a new project:
   ```bash
   # Option 1: Use Sanity CLI
   npm install -g @sanity/cli
   sanity init

   # Option 2: Create via web dashboard at https://sanity.io/manage
   ```

3. When creating project, choose:
   - **Project Name**: "Khan Farms"
   - **Dataset**: "production"
   - **Template**: Skip (we already have schemas)

#### Step 2: Get Project Credentials

1. Visit [https://sanity.io/manage](https://sanity.io/manage)
2. Select your "Khan Farms" project
3. Go to **Settings**
4. Copy your **Project ID**

#### Step 3: Create API Token

1. In Sanity dashboard, go to **API** section
2. Click **Add API Token**
3. Name: "Frontend Read Token"
4. Permissions: **Viewer** (read-only)
5. Copy the token immediately (you won't see it again)

#### Step 4: Configure Environment Variables

1. Copy the example file:
   ```bash
   copy .env.local.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=sk_test_YOUR_TOKEN_HERE
   ```

3. **IMPORTANT**: Never commit `.env.local` to git!

#### Step 5: Start Sanity Studio Locally

1. Start the Next.js development server:
   ```bash
   npm run dev
   ```

2. Open your browser to: [http://localhost:3000/studio](http://localhost:3000/studio)

3. Sign in with your Sanity account

#### Step 6: Add Initial Content

**Create 4 Location Documents:**

1. In Sanity Studio, go to **Location** content type
2. Click **Create New Document**
3. Add each location:

**Ikoyi:**
- Name: `Ikoyi`
- Slug: `ikoyi` (click Generate)
- State: `Osun State`
- Description: `Primary cultivation area with diversified crops (plantain and palm oil), palm nursery and palm development`
- Details: `Current processing capacity: 5T per day`
- Acreage: `120` (or current actual acreage)
- Crops: Add array items: `Plantain`, `Palm Oil`
- Featured Image: Upload a representative image
- Gallery: Upload 3-6 photos of the location
- Display Order: `1`

**Otu1:**
- Name: `Otu1`
- Slug: `otu1`
- State: `Oyo State`
- Description: `Expansion site for diversified crops: corn, palm oil, cassava, peanut, maize & soya beans`
- Details: `10 head cattle`
- Crops: `Corn`, `Palm Oil`, `Cassava`, `Peanut`, `Maize`, `Soya Beans`
- Infrastructure:
  - Type: `Livestock`, Capacity: `10 head cattle`
- Display Order: `2`

**Otu2:**
- Name: `Otu2`
- Slug: `otu2`
- State: `Oyo State`
- Description: `Additional expansion site with crop rotation: corn, palm oil, cassava, peanut, maize & soya beans`
- Details: `Part of 4-location integrated network`
- Crops: Same as Otu1
- Display Order: `3`

**Ilero:**
- Name: `Ilero`
- Slug: `ilero`
- State: `Oyo State`
- Description: `90 acres of multiple crops: cashew, cassava, plantain, palm oil, corn, tomato, and pepper`
- Details: `4T per day processing facility + planned 10-acre processing hub`
- Acreage: `90`
- Crops: `Cashew`, `Cassava`, `Plantain`, `Palm Oil`, `Corn`, `Tomato`, `Pepper`
- Infrastructure:
  - Type: `Processing Facility`, Capacity: `4 tonnes per day`
- Display Order: `4`

**Create 6 Platform Section Documents:**

Use the Section ID field with slugs (agriculture, palm, livestock, processing, carbon, infrastructure) and copy the content from the original platform page.

---

### Phase 6: Test Build Locally

#### Step 1: Install Dependencies
```bash
npm install
```

#### Step 2: Build for Production
```bash
npm run build
```

**Expected Output:**
- ✓ Compiled successfully
- ✓ Generating static pages
- ✓ Finalizing page optimization

**Common Issues:**

1. **TypeScript Errors**:
   - Run `npm run type-check` to see detailed errors
   - Most common: Missing props in components

2. **Sanity Connection Errors**:
   - Check `.env.local` has correct credentials
   - Verify project ID and dataset name match Sanity dashboard

3. **Image Optimization Errors**:
   - Ensure `cdn.sanity.io` is in `next.config.js` domains
   - Check images are uploaded to Sanity (not just URLs)

#### Step 3: Test Production Build Locally
```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) and test:
- ✅ Homepage loads
- ✅ Platform page loads with Sanity data
- ✅ Individual location pages work (`/locations/ikoyi`, etc.)
- ✅ Image lightbox opens and navigates
- ✅ Videos play when clicked
- ✅ Sanity Studio accessible at `/studio`
- ✅ Mobile responsive

---

### Phase 7: Deploy to Remote Server (147.182.242.177)

#### Prerequisites
- SSH access to server
- Node.js installed on server
- PM2 process manager installed

#### Step 1: Prepare Local Files

1. Ensure `.env.local` is in `.gitignore` (don't commit secrets!)

2. Create a deployment package (excluding node_modules):
   ```bash
   # Windows
   tar --exclude=node_modules --exclude=.git --exclude=.next --exclude=.env.local -czf kfarms-deploy.tar.gz .
   ```

#### Step 2: Upload to Server

```bash
scp kfarms-deploy.tar.gz root@147.182.242.177:/var/www/kfarms/
```

#### Step 3: Deploy on Server

```bash
# SSH into server
ssh root@147.182.242.177

# Navigate to app directory
cd /var/www/kfarms

# Extract files
tar -xzf kfarms-deploy.tar.gz
rm kfarms-deploy.tar.gz

# Create .env.local on server
nano .env.local
# Paste your Sanity credentials, save and exit (Ctrl+X, Y, Enter)

# Install dependencies
npm install --legacy-peer-deps

# Build for production
npm run build

# Restart PM2
pm2 restart kfarms

# Verify it's running
pm2 status
pm2 logs kfarms
```

#### Step 4: Configure Sanity CORS

1. Go to [https://sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **Settings > API > CORS Origins**
4. Click **Add CORS Origin**
5. Add origins:
   - `http://147.182.242.177`
   - `https://kfarms.ng` (if you have a domain)
6. Allow credentials: **Yes**
7. Save

#### Step 5: Verify Deployment

1. Visit: `http://147.182.242.177` or `https://kfarms.ng`
2. Test all pages
3. Test Sanity Studio: `http://147.182.242.177/studio`
4. Upload an image in Studio, verify it appears on site (wait 60 seconds for ISR)

---

## 🎨 Using the CMS

### Accessing Sanity Studio

1. Navigate to: `https://kfarms.ng/studio` (or your domain + /studio)
2. Sign in with your Sanity account
3. You'll see three content types:
   - **Location** - Farm locations with galleries
   - **Platform Section** - The 6 platform pillars
   - **Site Settings** - Global site settings

### Adding Images to Locations

1. Go to **Location** in Studio
2. Select a location (e.g., Ikoyi)
3. Scroll to **Image Gallery** field
4. Click **Add item** to upload images
5. For each image:
   - Upload the file
   - Add **Alt Text** (for accessibility)
   - Optionally add **Caption**
6. Click **Publish** when done

**Best Practices:**
- Upload high-quality images (1920px wide recommended)
- Sanity will automatically optimize and serve WebP/AVIF
- Add descriptive alt text for all images
- Use captions to tell the story of your farm

### Adding Videos

1. Upload your video to **YouTube** or **Vimeo**
2. In Sanity Studio, go to location > **Videos**
3. Click **Add item**
4. Fill in:
   - **Title**: Descriptive video title
   - **URL**: Full YouTube or Vimeo URL
   - **Thumbnail**: Upload a thumbnail image
5. Publish

### Content Updates Appear in 60 Seconds

The site uses ISR (Incremental Static Regeneration):
- Changes in Sanity will appear within 60 seconds
- No need to rebuild the entire site
- For instant updates, you can set up webhooks (advanced)

---

## 🐛 Troubleshooting

### Images Not Loading

**Issue**: Images show broken in production
**Solution**:
1. Check `.env.local` has correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
2. Verify images are uploaded to Sanity (not external URLs)
3. Confirm `cdn.sanity.io` is in `next.config.js` domains

### Studio Won't Load

**Issue**: `/studio` shows blank page or errors
**Solution**:
1. Check browser console for errors
2. Verify `sanity.config.ts` has correct `projectId`
3. Try clearing browser cache and hard refresh (Ctrl+Shift+R)

### Build Fails with TypeScript Errors

**Issue**: `npm run build` fails
**Solution**:
1. Run `npm run type-check` to see specific errors
2. Most common: Missing Sanity data causes null errors
3. Ensure at least one location document exists in Sanity

### Changes Don't Appear on Site

**Issue**: Updated content in Studio but site doesn't change
**Solution**:
1. Wait 60 seconds for ISR to revalidate
2. Try a hard refresh (Ctrl+Shift+R)
3. Check PM2 logs: `pm2 logs kfarms`

### Deployment Fails

**Issue**: PM2 restart fails or site shows error
**Solution**:
1. Check PM2 logs: `pm2 logs kfarms --err`
2. Verify `.env.local` exists on server with correct values
3. Ensure node_modules are installed: `npm install --legacy-peer-deps`
4. Try a fresh build: `npm run build`

---

## 📊 Performance Checklist

After deployment, verify:
- ✅ Lighthouse Performance: 90+
- ✅ Lighthouse Accessibility: 95+
- ✅ All images load as WebP/AVIF
- ✅ Pages load in < 2 seconds
- ✅ Mobile responsive on all screen sizes
- ✅ Image lightbox keyboard navigation works
- ✅ Videos play without issues

---

## 🎯 Next Steps (Optional Enhancements)

1. **Add More Content**:
   - Upload more photos to location galleries
   - Add farm videos to YouTube/Vimeo
   - Populate all 6 platform sections in Sanity

2. **Set Up Webhooks** (Instant Updates):
   - Create `/app/api/revalidate/route.ts`
   - Configure webhook in Sanity dashboard
   - Changes will appear instantly instead of 60-second delay

3. **Analytics**:
   - Add Google Analytics to track visitors
   - Monitor which locations get most views

4. **SEO**:
   - Submit sitemap to Google Search Console
   - Add more descriptive alt text to images
   - Create blog content about the farm

---

## 📞 Support

If you encounter issues:

1. Check this guide's Troubleshooting section
2. Review PM2 logs: `pm2 logs kfarms`
3. Check browser console for JavaScript errors
4. Verify Sanity Studio has content published

---

**Implementation Complete!** 🎉

You now have:
- ✅ Dynamic CMS-powered website
- ✅ Individual location pages with galleries
- ✅ Image lightbox and video player
- ✅ Modern, lighter design
- ✅ Easy content management via Sanity Studio
- ✅ Mobile-responsive layouts
- ✅ Optimized performance

All that's left is to set up your Sanity project (Phase 5), test locally (Phase 6), and deploy (Phase 7)!
