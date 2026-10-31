import fs from 'fs';

const content = fs.readFileSync('public/og-image.svg', 'utf8');
const fixed = content.replace('Full-Stack Engineer & System Architect', 'Full-Stack Engineer & System Architect');
fs.writeFileSync('public/og-image.svg', fixed);
console.log('fixed');