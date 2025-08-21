// This is a utility script to help migrate all components to src directory
// Run with: node migrate-components.js

import fs from 'fs';
import path from 'path';

const componentFiles = [
  'Hero.tsx',
  'Services.tsx', 
  'Portfolio.tsx',
  'About.tsx',
  'Testimonials.tsx',
  'Footer.tsx',
  'animations.tsx'
];

// Read each component file and convert to JSX
componentFiles.forEach(file => {
  const srcPath = path.join('components', file);
  const destPath = path.join('src', 'components', file.replace('.tsx', '.jsx'));
  
  if (fs.existsSync(srcPath)) {
    let content = fs.readFileSync(srcPath, 'utf8');
    // Update import paths to be relative to src
    content = content.replace(/from '\.\//g, "from './");
    
    fs.writeFileSync(destPath, content);
    console.log(`Migrated ${file} to ${destPath}`);
  }
});

console.log('Component migration complete!');