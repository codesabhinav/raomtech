# Deployment Instructions

## Server Setup (Node 24.6.0 Required)

This project requires Node.js v24.6.0.

### Step 1: Verify Node 24.6.0

The server should already be using Node.js v24.6.0. Verify:
```bash
cd /home/raomtucs/repositories/raomtech
node -v  # Should show v24.6.0
```

If using nvm and need to switch:
```bash
nvm install 24.6.0
nvm use 24.6.0
```

### Step 2: Clean and Rebuild

```bash
cd /home/raomtucs/repositories/raomtech

# Remove old build artifacts
rm -rf .next node_modules package-lock.json

# Install dependencies (will use Node 24.6.0)
npm install

# Build the application (creates .next folder with routes-manifest.json)
# THIS IS CRITICAL - The .next folder MUST exist before running npm start
npm run build

# Verify .next folder was created
ls -la .next/routes-manifest.json  # Should show the file exists

# Start the server (server.js will auto-build if .next is missing)
npm run start
# OR directly: node server.js
```

**Note:** The `server.js` file automatically checks for `.next/routes-manifest.json` and builds if it's missing before starting the server.

### Step 3: Verify

Check that these files exist:
- `.next/routes-manifest.json`
- `.next/app-build-manifest.json`

### Troubleshooting

If you still get the error:
1. Verify Node version: `node -v` (should show v24.6.0)
2. Check if .next folder exists: `ls -la .next/`
3. If .next is missing, run `npm run build` again
4. Check build logs for any errors

### Using PM2

If using PM2:
```bash
pm2 stop all
npm run build  # Optional - server.js will auto-build if missing
pm2 start server.js --name "raomtech"
pm2 save
```

