#!/bin/bash

# Khan Farms Deployment Script
# Deploys to: root@147.182.242.177:/var/www/kfarms

set -e

SERVER="root@147.182.242.177"
REMOTE_PATH="/var/www/kfarms"
PROJECT_NAME="kfarms"

echo "=========================================="
echo "Khan Farms Deployment to VPS"
echo "=========================================="

# Step 1: Create deployment package
echo "Step 1: Creating deployment package..."
tar --exclude='node_modules' \
    --exclude='.git' \
    --exclude='.next' \
    --exclude='*.log' \
    -czf kfarms-deploy.tar.gz .

echo "✓ Package created: kfarms-deploy.tar.gz"

# Step 2: Create directory on server and upload
echo "Step 2: Creating server directory and uploading..."
ssh $SERVER "mkdir -p $REMOTE_PATH"
scp kfarms-deploy.tar.gz $SERVER:$REMOTE_PATH/

echo "✓ Files uploaded to server"

# Step 3: Extract and setup on server
echo "Step 3: Extracting and setting up on server..."
ssh $SERVER << ENDSSH
cd $REMOTE_PATH

# Extract files
echo "Extracting files..."
tar -xzf kfarms-deploy.tar.gz
rm kfarms-deploy.tar.gz

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build for production
echo "Building for production..."
npm run build

# Stop existing process if running
echo "Stopping existing process..."
pm2 delete $PROJECT_NAME 2>/dev/null || true

# Start with PM2
echo "Starting application with PM2..."
pm2 start npm --name "$PROJECT_NAME" -- start
pm2 save

echo "✓ Application started with PM2"
ENDSSH

# Cleanup local tar file
rm kfarms-deploy.tar.gz

echo ""
echo "=========================================="
echo "✓ Deployment Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Configure Nginx (see below)"
echo "2. Set up SSL certificate"
echo "3. Configure DNS for kfarms.ng"
echo ""
echo "The app is running on port 3000"
echo "Access: http://147.182.242.177:3000"
echo ""
ENDSSH
