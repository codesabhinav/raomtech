const { createServer } = require('http');
const next = require('next');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 4000;

// Check if .next/routes-manifest.json exists, if not, build first
const routesManifestPath = path.join(process.cwd(), '.next', 'routes-manifest.json');

if (!fs.existsSync(routesManifestPath)) {
  console.log('> .next folder not found. Building application...');
  try {
    execSync('npm run build', { stdio: 'inherit', cwd: process.cwd() });
    console.log('> Build completed successfully');
  } catch (error) {
    console.error('> Build failed:', error.message);
    process.exit(1);
  }
}

const app = next({ dev });
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