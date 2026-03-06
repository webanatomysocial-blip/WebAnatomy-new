const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'src');

const cssFiles = [
  'css/index.css',
  'css/Works.css',
  'css/Testimonials.css',
  'css/header.css',
  'css/contact.css',
  'css/Blog.css',
  'css/blog-post.css',
  'css/HomeComponents/ZoomScroll.css',
  'css/HomeComponents/whatWeDoData.css',
  'css/HomeComponents/OurStoryHome.css',
  'css/HomeComponents/HomeTextFade.css',
  'css/HomeComponents/FlipboxCarsoule.css',
  'css/HomeComponents/BlogSection.css',
  'css/CareersComponents/GallerySection.css',
  'css/AboutComponents/WhoWeAre.css',
  'css/AboutComponents/OurProcess.css',
  'css/AboutComponents/OurImpact.css',
  'workCss/ServicesSecondSec.css',
];

function replaceFontWeight(content) {
  const lines = content.split('\n');
  let inFontFace = false;
  let depth = 0;
  const result = [];

  for (const line of lines) {
    if (line.includes('@font-face')) {
      inFontFace = true;
      depth = 0;
    }

    if (inFontFace) {
      depth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      result.push(line);
      if (depth <= 0 && line.includes('}')) {
        inFontFace = false;
      }
    } else {
      const newLine = line.replace(/font-weight:\s*[\w]+;/g, 'font-weight: 200;');
      result.push(newLine);
    }
  }

  return result.join('\n');
}

for (const relPath of cssFiles) {
  const fullPath = path.join(base, relPath);
  if (!fs.existsSync(fullPath)) {
    console.log('SKIP (not found):', relPath);
    continue;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const newContent = replaceFontWeight(content);
  fs.writeFileSync(fullPath, newContent, 'utf8');
  console.log('Updated:', relPath);
}

console.log('Done.');
