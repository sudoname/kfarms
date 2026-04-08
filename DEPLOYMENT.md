# Khan Farms Deployment Guide

This guide covers deploying the Khan Farms website to production.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Domain (kfarms.ng) configured

## Quick Deploy to Vercel (Recommended)

Vercel is the recommended hosting platform for Next.js applications.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

From the project root:

```bash
vercel
```

Follow the prompts:
- Link to existing project or create new
- Set project name: `kfarms`
- Confirm settings

### Step 4: Configure Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add custom domain: `kfarms.ng` and `www.kfarms.ng`
3. Follow DNS configuration instructions

### Step 5: Production Deploy

```bash
vercel --prod
```

## Alternative: Deploy to Netlify

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Build the Project

```bash
npm run build
```

### Step 3: Deploy

```bash
netlify deploy --prod
```

## Alternative: VPS/Server Deployment

If deploying to your own server:

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Build for Production

```bash
npm run build
```

### Step 3: Start Production Server

```bash
npm start
```

Or use PM2 for process management:

```bash
npm install -g pm2
pm2 start npm --name "kfarms" -- start
pm2 save
pm2 startup
```

### Step 4: Configure Nginx

Create Nginx config `/etc/nginx/sites-available/kfarms.ng`:

```nginx
server {
    listen 80;
    server_name kfarms.ng www.kfarms.ng;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/kfarms.ng /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 5: SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d kfarms.ng -d www.kfarms.ng
```

## Environment Variables

If needed, create `.env.local`:

```bash
# Add any environment variables here
# NEXT_PUBLIC_API_URL=https://api.kfarms.ng
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify animations work smoothly
- [ ] Test contact form submission
- [ ] Verify SEO meta tags
- [ ] Check Google Search Console
- [ ] Set up analytics (if desired)
- [ ] Test page load speed
- [ ] Verify SSL certificate

## DNS Configuration

Point your domain to the hosting provider:

### For Vercel

Add these DNS records at your registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For Netlify

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

## Performance Optimization

The site is already optimized with:
- Next.js automatic code splitting
- Image optimization
- Tailwind CSS purging
- Framer Motion lazy loading
- Smooth scrolling with Lenis

## Monitoring

Consider adding:
- **Uptime Monitoring**: UptimeRobot, Pingdom
- **Analytics**: Vercel Analytics, Google Analytics
- **Error Tracking**: Sentry

## Updates and Maintenance

To deploy updates:

1. Make changes locally
2. Test thoroughly
3. Commit to Git
4. Push to repository
5. Redeploy using Vercel CLI or through Git integration

## Support

For deployment issues:
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com

## Production URLs

- Primary: https://kfarms.ng
- WWW: https://www.kfarms.ng
