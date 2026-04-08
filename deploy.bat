@echo off
REM Khan Farms Deployment Script for Windows
REM Deploys to: root@147.182.242.177:/var/www/kfarms

SET SERVER=root@147.182.242.177
SET REMOTE_PATH=/var/www/kfarms
SET PROJECT_NAME=kfarms

echo ==========================================
echo Khan Farms Deployment to VPS
echo ==========================================
echo.

echo Step 1: Creating deployment package...
tar --exclude=node_modules --exclude=.git --exclude=.next --exclude=*.log -czf kfarms-deploy.tar.gz .
echo.
echo Package created: kfarms-deploy.tar.gz
echo.

echo Step 2: Creating server directory...
ssh %SERVER% "mkdir -p %REMOTE_PATH%"
echo.

echo Step 3: Uploading files...
scp kfarms-deploy.tar.gz %SERVER%:%REMOTE_PATH%/
echo.
echo Files uploaded!
echo.

echo Step 4: Setting up on server...
ssh %SERVER% "cd %REMOTE_PATH% && tar -xzf kfarms-deploy.tar.gz && rm kfarms-deploy.tar.gz && echo 'Files extracted' && npm install && echo 'Dependencies installed' && npm run build && echo 'Build complete' && pm2 delete %PROJECT_NAME% 2>nul || echo 'No existing process' && pm2 start npm --name %PROJECT_NAME% -- start && pm2 save && echo 'Application started with PM2'"

REM Cleanup
del kfarms-deploy.tar.gz

echo.
echo ==========================================
echo Deployment Complete!
echo ==========================================
echo.
echo App is running on: http://147.182.242.177:3000
echo.
echo Next steps:
echo 1. Configure Nginx (run: deploy-nginx.bat)
echo 2. Set up SSL
echo 3. Configure DNS for kfarms.ng
echo.
pause
