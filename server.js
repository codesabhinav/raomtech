const { createServer } = require('http');
const next = require('next');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Determine if we're in production mode
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 4000;

// Check if production build exists (BUILD_ID file is required for production)
const buildIdPath = path.join(process.cwd(), '.next', 'BUILD_ID');
const routesManifestPath = path.join(process.cwd(), '.next', 'routes-manifest.json');

// For production, we need BUILD_ID file. For dev, we don't need it.
const needsBuild = isProduction && (!fs.existsSync(buildIdPath) || !fs.existsSync(routesManifestPath));

if (needsBuild) {
  console.log('> Production build not found. Building application...');
  try {
    // Ensure NODE_ENV is set to production for build
    const buildEnv = { ...process.env, NODE_ENV: 'production' };
    execSync('npm run build', { 
      stdio: 'inherit', 
      cwd: process.cwd(),
      env: buildEnv
    });
    console.log('> Build completed successfully');
    
    // Verify build files exist
    if (!fs.existsSync(buildIdPath)) {
      console.error('> Build failed: BUILD_ID file not found after build');
      console.error('> Please run "npm run build" manually and check for errors');
      process.exit(1);
    }
    if (!fs.existsSync(routesManifestPath)) {
      console.error('> Build failed: routes-manifest.json not found after build');
      console.error('> Please run "npm run build" manually and check for errors');
      process.exit(1);
    }
  } catch (error) {
    console.error('> Build failed:', error.message);
    console.error('> Please run "npm run build" manually and check for errors');
    process.exit(1);
  }
}

// Initialize Next.js app (dev mode only if NODE_ENV is not production)
const app = next({ dev: !isProduction });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('> Error starting server:', err);
  process.exit(1);
});