/**
 * scripts/generate-sitemap.cjs
 * Generates public/sitemap.xml with the current date as <lastmod>.
 * Run before each build: node scripts/generate-sitemap.cjs
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://elaesthetics-bremen.de';

// All pages organized by type with priority and changeFrequency
const pages = [
  // Homepage
  { path: '/', priority: '1.0', changefreq: 'monthly' },

  // Hub-Seiten
  { path: '/botulinumtoxin/', priority: '0.9', changefreq: 'monthly' },
  { path: '/hyaluron/', priority: '0.9', changefreq: 'monthly' },
  { path: '/eigenbluttherapie/', priority: '0.9', changefreq: 'monthly' },
  { path: '/mesotherapie/', priority: '0.9', changefreq: 'monthly' },

  // Botulinumtoxin Spokes
  { path: '/botulinumtoxin/faltenbehandlung/', priority: '0.8', changefreq: 'monthly' },
  { path: '/botulinumtoxin/aesthetische-behandlungen/', priority: '0.8', changefreq: 'monthly' },
  { path: '/botulinumtoxin/masseter/', priority: '0.8', changefreq: 'monthly' },
  { path: '/botulinumtoxin/hyperhidrose/', priority: '0.8', changefreq: 'monthly' },
  { path: '/botulinumtoxin/migraene/', priority: '0.8', changefreq: 'monthly' },
  { path: '/botulinumtoxin/mesobotox/', priority: '0.8', changefreq: 'monthly' },

  // Hyaluron Spokes
  { path: '/hyaluron/filler/', priority: '0.8', changefreq: 'monthly' },
  { path: '/hyaluron/skinbooster/', priority: '0.8', changefreq: 'monthly' },
  { path: '/hyaluron/profhilo/', priority: '0.8', changefreq: 'monthly' },
  { path: '/hyaluron/hylase/', priority: '0.8', changefreq: 'monthly' },

  // Eigenbluttherapie Spokes
  { path: '/eigenbluttherapie/vampir-lifting/', priority: '0.8', changefreq: 'monthly' },
  { path: '/eigenbluttherapie/microneedling/', priority: '0.8', changefreq: 'monthly' },
  { path: '/eigenbluttherapie/haare/', priority: '0.8', changefreq: 'monthly' },

  // Mesotherapie Spokes
  { path: '/mesotherapie/haut/', priority: '0.8', changefreq: 'monthly' },
  { path: '/mesotherapie/haare/', priority: '0.8', changefreq: 'monthly' },

  // Standalone-Behandlungen
  { path: '/biostimulation/', priority: '0.8', changefreq: 'monthly' },
  { path: '/polynukleotide/', priority: '0.9', changefreq: 'monthly' },
  { path: '/medizinisches-microneedling/', priority: '0.8', changefreq: 'monthly' },
  { path: '/fett-weg-spritze/', priority: '0.8', changefreq: 'monthly' },
  { path: '/chemisches-peeling/', priority: '0.8', changefreq: 'monthly' },

  // Lösungsseiten
  { path: '/faltenbehandlung/', priority: '0.9', changefreq: 'monthly' },
  { path: '/haarausfall-behandlung/', priority: '0.8', changefreq: 'monthly' },
  { path: '/filler/', priority: '0.8', changefreq: 'monthly' },
  { path: '/augen-behandlung/', priority: '0.8', changefreq: 'monthly' },
  { path: '/longevity/', priority: '0.8', changefreq: 'monthly' },
  { path: '/medizinische-behandlungen/', priority: '0.8', changefreq: 'monthly' },

  // Utility-Seiten
  { path: '/preise/', priority: '0.7', changefreq: 'monthly' },
  { path: '/kontakt/', priority: '0.6', changefreq: 'yearly' },
  { path: '/impressum/', priority: '0.2', changefreq: 'yearly' },
  { path: '/datenschutz/', priority: '0.2', changefreq: 'yearly' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
      (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf-8');
console.log(`✅ sitemap.xml generated with ${pages.length} URLs`);
