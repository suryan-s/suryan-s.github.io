import sharp from 'sharp';

async function convert() {
  // Favicon sizes
  const faviconSizes = [16, 32, 180, 192, 512];
  for (const size of faviconSizes) {
    await sharp('public/favicon.svg')
      .resize(size, size)
      .png()
      .toFile(`public/favicon-${size}.png`);
    console.log(`✓ favicon-${size}.png`);
  }

  // Apple touch icon (180x180)
  await sharp('public/favicon.svg')
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');
  console.log('✓ apple-touch-icon.png');

  // og-image (1200x630)
  await sharp('public/og-image.svg')
    .resize(1200, 630)
    .png()
    .toFile('public/og-image.png');
  console.log('✓ og-image.png');
}

convert().catch(e => { console.error(e); process.exit(1); });