# Deploy Khan Farms to VPS

Quick guide to deploy Khan Farms to your VPS at **147.182.242.177**

## Method 1: One-Click Deployment (Windows)

Simply run:

```bash
deploy.bat
```

This will:
1. Create a deployment package
2. Upload to server
3. Install dependencies
4. Build the project
5. Start with PM2

## Method 2: Manual Deployment

### Step 1: Deploy the Code

```bash
# Create package
tar --exclude=node_modules --exclude=.git --exclude=.next -czf kfarms-deploy.tar.gz .

# Upload to server
scp kfarms-deploy.tar.gz root@147.182.242.177:/var/www/kfarms/

# SSH into server
ssh root@147.182.242.177

# Extract files
cd /var/www/kfarms
tar -xzf kfarms-deploy.tar.gz
rm kfarms-deploy.tar.gz
```

### Step 2: Install Dependencies

```bash
# Install Node.js (if not already installed)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Install PM2
npm install -g pm2

# Install project dependencies
npm install
```

### Step 3: Build and Start

```bash
# Build for production
npm run build

# Start with PM2
pm2 start npm --name "kfarms" -- start
pm2 save
pm2 startup
```

### Step 4: Configure Nginx

```bash
# Install Nginx
apt-get update
apt-get install -y nginx

# Create Nginx config
nano /etc/nginx/sites-available/kfarms.ng
```

Paste the configuration from `nginx.conf` file, then:

```bash
# Enable the site
ln -s /etc/nginx/sites-available/kfarms.ng /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Test and restart
nginx -t
systemctl restart nginx
systemctl enable nginx
```

### Step 5: Set up SSL (Optional but Recommended)

```bash
# Install Certbot
apt-get install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d kfarms.ng -d www.kfarms.ng
```

Follow the prompts to set up HTTPS.

## Quick Commands

### Check if site is running

```bash
ssh root@147.182.242.177
pm2 status
```

### View logs

```bash
pm2 logs kfarms
```

### Restart application

```bash
pm2 restart kfarms
```

### Update deployment

Just run `deploy.bat` again - it will update everything automatically.

## DNS Configuration

Point your domain `kfarms.ng` to the server:

```
Type: A
Name: @
Value: 147.182.242.177

Type: A
Name: www
Value: 147.182.242.177
```

## Access Your Site

After deployment:

- **Direct IP**: http://147.182.242.177
- **With domain** (after DNS): http://kfarms.ng
- **With SSL** (after certbot): https://kfarms.ng

## Troubleshooting

### Site not accessible

```bash
# Check if Next.js is running
pm2 status

# Check nginx status
systemctl status nginx

# View logs
pm2 logs kfarms
tail -f /var/log/nginx/kfarms_error.log
```

### Port 3000 already in use

```bash
pm2 delete kfarms
pm2 start npm --name "kfarms" -- start
```

### Nginx not working

```bash
nginx -t  # Test configuration
systemctl restart nginx
```

## Server Requirements

- Ubuntu 20.04+ or Debian
- At least 1GB RAM
- Node.js 18+
- Nginx
- PM2

## What Gets Deployed

✅ Next.js application
✅ All pages and components
✅ Optimized production build
✅ PM2 process management
✅ Nginx reverse proxy
✅ Auto-restart on reboot

## Security Checklist

After deployment:
- [ ] Set up SSL certificate
- [ ] Configure firewall (UFW)
- [ ] Set up automatic updates
- [ ] Configure fail2ban
- [ ] Set up backups

## Performance

The site should load in < 2 seconds on first load, < 1 second on subsequent loads thanks to Next.js optimizations.

---

**Need help?** Check the logs with `pm2 logs kfarms`
