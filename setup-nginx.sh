#!/bin/bash

# Setup Nginx for Khan Farms
# Run this on the server: bash setup-nginx.sh

SERVER="root@147.182.242.177"

echo "=========================================="
echo "Setting up Nginx for Khan Farms"
echo "=========================================="

ssh $SERVER << 'ENDSSH'

# Install Nginx if not installed
if ! command -v nginx &> /dev/null; then
    echo "Installing Nginx..."
    apt-get update
    apt-get install -y nginx
fi

# Copy nginx configuration
cat > /etc/nginx/sites-available/kfarms.ng << 'EOF'
server {
    listen 80;
    server_name kfarms.ng www.kfarms.ng 147.182.242.177;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Cache static assets
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, immutable";
    }

    # Access and error logs
    access_log /var/log/nginx/kfarms_access.log;
    error_log /var/log/nginx/kfarms_error.log;
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/kfarms.ng /etc/nginx/sites-enabled/

# Remove default site if it exists
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
echo "Testing Nginx configuration..."
nginx -t

# Restart nginx
echo "Restarting Nginx..."
systemctl restart nginx
systemctl enable nginx

echo ""
echo "✓ Nginx configured and running!"
echo ""
echo "Access your site at:"
echo "  http://147.182.242.177"
echo "  http://kfarms.ng (once DNS is configured)"
echo ""
echo "Next step: Set up SSL with:"
echo "  apt-get install -y certbot python3-certbot-nginx"
echo "  certbot --nginx -d kfarms.ng -d www.kfarms.ng"
echo ""

ENDSSH
