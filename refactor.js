const fs = require('fs');

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Text colors
  content = content.replace(/text-white/g, 'text-[var(--color-text-primary)]');
  content = content.replace(/text-gray-400/g, 'text-[var(--color-text-secondary)]');
  content = content.replace(/text-gray-300/g, 'text-[var(--color-text-secondary)]');
  
  // Specific fix for "bg-white text-black" buttons (App Store buttons)
  content = content.replace(/bg-white text-\[var\(--color-text-primary\)\]/g, 'bg-white text-black');
  
  // Specific fix for "text-black" inside white buttons
  // Oh wait, text-black wasn't replaced.

  // Background and Gradients
  content = content.replace(/bg-\[\#031312\]/g, 'bg-[var(--color-bg)]');
  content = content.replace(/from-\[\#031312\]/g, 'from-[var(--color-bg)]');
  content = content.replace(/to-\[\#031312\]/g, 'to-[var(--color-bg)]');
  content = content.replace(/via-\[\#031312\]/g, 'via-[var(--color-bg)]');

  content = content.replace(/bg-\[\#0A1615\]/g, 'bg-[var(--color-surface)]');
  content = content.replace(/from-\[\#0A1615\]/g, 'from-[var(--color-surface)]');
  content = content.replace(/via-\[\#0A1615\]/g, 'via-[var(--color-surface)]');
  content = content.replace(/to-\[\#0A1615\]/g, 'to-[var(--color-surface)]');

  content = content.replace(/from-\[\#06161B\]/g, 'from-[var(--color-surface)]');
  content = content.replace(/to-\[\#0A1615\]/g, 'to-[var(--color-surface-light)]');

  content = content.replace(/from-\[\#121A2F\]/g, 'from-[var(--color-surface)]');
  content = content.replace(/to-\[\#0B101D\]/g, 'to-[var(--color-surface-light)]');

  content = content.replace(/from-\[\#1A1A1A\]/g, 'from-[var(--color-surface)]');
  content = content.replace(/to-\[\#0A0A0A\]/g, 'to-[var(--color-surface-light)]');

  content = content.replace(/from-\[\#041211\]/g, 'from-[var(--color-bg)]');
  content = content.replace(/via-\[\#041211\]/g, 'via-[var(--color-bg)]');

  content = content.replace(/from-\[\#0A0A0A\]/g, 'from-[var(--color-bg)]');
  content = content.replace(/via-\[\#0A0A0A\]/g, 'via-[var(--color-bg)]');

  // Borders
  content = content.replace(/border-white\/5/g, 'border-[var(--color-border)]');
  content = content.replace(/border-white\/10/g, 'border-[var(--color-border)]');
  content = content.replace(/border-white\/20/g, 'border-[var(--color-border-hover)]');

  // Overlays / Glass
  content = content.replace(/bg-\[\#040908\]/g, 'bg-[var(--color-bg)]');
  content = content.replace(/bg-black\/60/g, 'bg-[var(--color-overlay)]');

  fs.writeFileSync(filePath, content);
  console.log('Refactored', filePath);
}

['src/App.jsx', 'src/features/landing-page/components/Navbar.jsx', 'src/features/landing-page/components/Footer.jsx'].forEach(file => {
  if (fs.existsSync(file)) {
    refactorFile(file);
  }
});
