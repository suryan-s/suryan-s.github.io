import fs from 'fs';

const amp = '&';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0e0e0e"/>
      <stop offset="100%" stop-color="#111"/>
    </linearGradient>
    <linearGradient id="ringGrad" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0097a7"/>
      <stop offset="100%" stop-color="#00bcd4"/>
    </linearGradient>
    <linearGradient id="textGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#fff"/>
      <stop offset="100%" stop-color="#b2ebf2"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bgGrad)"/>

  <line x1="120" y1="100" x2="320" y2="100" stroke="url(#ringGrad)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
  <line x1="880" y1="530" x2="1080" y2="530" stroke="url(#ringGrad)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>

  <circle cx="160" cy="315" r="70" stroke="url(#ringGrad)" stroke-width="12" fill="none"/>
  <path d="M135 315 L155 345 L195 285" stroke="url(#ringGrad)" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

  <text x="320" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="800" fill="url(#textGrad)" letter-spacing="-2">
    Suryan S
  </text>

  <text x="320" y="365" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="400" fill="#8ec5c9" letter-spacing="0.5">
    Full-Stack Engineer ${amp} System Architect
  </text>

  <line x1="320" y1="395" x2="580" y2="395" stroke="url(#ringGrad)" stroke-width="2" stroke-linecap="round" opacity="0.8"/>

  <text x="320" y="440" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#6a9c9f" letter-spacing="0.3">
    Based in India  &#8226;  Open Source Contributor
  </text>

  <text x="1040" y="560" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="500" fill="#4a8c8e" text-anchor="end">
    github.com/suryan-s
  </text>

  <circle cx="1000" cy="150" r="80" stroke="url(#ringGrad)" stroke-width="2" fill="none" opacity="0.1"/>
  <circle cx="1000" cy="150" r="120" stroke="url(#ringGrad)" stroke-width="1" fill="none" opacity="0.05"/>
  <circle cx="200" cy="550" r="60" stroke="url(#ringGrad)" stroke-width="1.5" fill="none" opacity="0.1"/>
</svg>`;

fs.writeFileSync('public/og-image.svg', svg);
console.log('generated');