import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const outDir = path.join(projectRoot, 'out');

console.log('📦 Starting Deployment Package...');

// 1. Verify export output exists
if (!fs.existsSync(outDir)) {
  console.error('❌ Error: "out" directory not found.');
  console.error('👉 Please run "npm run build" first to generate the static output.');
  process.exit(1);
}

// 2. Clean/Create dist folder
if (fs.existsSync(distDir)) {
  console.log('🧹 Cleaning existing dist folder...');
  fs.rmSync(distDir, { recursive: true, force: true });
}

// 3. Move 'out' to 'dist'
console.log('📋 Moving static files to dist...');
fs.renameSync(outDir, distDir);

console.log('\n✅ Deployment Bundle Ready!');
console.log(`📂 Location: ${distDir}`);
console.log('🚀 Upload the contents of "dist" to your server.');
