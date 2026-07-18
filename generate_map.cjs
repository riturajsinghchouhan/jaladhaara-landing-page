const fs = require('fs');
let svg = fs.readFileSync('d:/Jaladhaara/src/assets/india_map.svg', 'utf8');

// Strip out XML declarations or doctypes if any
svg = svg.replace(/<\?xml.*\?>/, '');
svg = svg.replace(/<!DOCTYPE.*?>/, '');

// Convert attributes to React camelCase
svg = svg.replace(/xmlns:?[a-zA-Z0-9]*=".*?"/g, ''); // remove xmlns
svg = svg.replace(/class=/g, 'className=');
svg = svg.replace(/viewbox/ig, 'viewBox');

// Add className prop to svg
svg = svg.replace(/<svg/, '<svg className={className}');

const jsx = `import React from 'react';\nexport default function IndiaMap({ className }) {\nreturn (\n${svg}\n);\n}`;

fs.writeFileSync('d:/Jaladhaara/src/IndiaMap.jsx', jsx);
