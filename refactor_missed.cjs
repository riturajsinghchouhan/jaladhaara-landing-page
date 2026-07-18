const fs = require('fs');

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix remaining hardcoded dark green colors
  content = content.replace(/bg-\[\#082220\]\/80/g, 'bg-[var(--color-surface)]/80');
  content = content.replace(/bg-\[\#0A2624\]/g, 'bg-[var(--color-surface)]');
  content = content.replace(/text-\[\#0A2624\]/g, 'text-[var(--color-bg)]');
  
  // Fix missed ones
  content = content.replace(/bg-\[\#031312\]/g, 'bg-[var(--color-bg)]');
  content = content.replace(/from-\[\#031312\]/g, 'from-[var(--color-bg)]');
  content = content.replace(/from-\[\#121A2F\]/g, 'from-[var(--color-surface)]');

  fs.writeFileSync(filePath, content);
  console.log('Refactored missed colors in', filePath);
}

['src/App.jsx', 'src/features/landing-page/components/Navbar.jsx', 'src/features/landing-page/components/Footer.jsx'].forEach(file => {
  if (fs.existsSync(file)) {
    refactorFile(file);
  }
});
