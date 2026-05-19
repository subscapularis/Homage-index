// src/data/pairs.js
// ─────────────────────────────────────────────────────────────
// Single source of truth for all watch pairs.
// To add a new pair: copy a block, fill in the fields, done.
// Images go in /public/images/ — use descriptive filenames.
// ─────────────────────────────────────────────────────────────

export const pairs = [
  {
    id: 'rolex-submariner-san-martin-water-ghost',
    category: 'Dive Watches',
    pairNumber: '001',

    luxury: {
      brand: 'Rolex',
      model: 'Submariner Date',
      reference: '116610LN',
      price: 10300,
      currency: 'USD',
      image: '/images/rolex-submariner-116610ln.jpg',
      imageAlt: 'Rolex Submariner Date 116610LN black dial',
      buyUrl: 'https://www.chrono24.com/rolex/submariner.htm',
      buyLabel: 'View on Chrono24',
      specs: {
        movement: 'Cal. 3235',
        waterResistance: '300m',
        caseSize: '41mm',
        origin: 'Swiss',
      },
    },

    homage: {
      brand: 'San Martin',
      model: 'Water Ghost',
      reference: 'SN004-G',
      price: 189,
      currency: 'USD',
      image: '/images/san-martin-water-ghost-sn004g.jpg',
      imageAlt: 'San Martin Water Ghost SN004-G black dial dive watch',
      buyUrl: 'https://www.aliexpress.com/item/san-martin-water-ghost',
      buyLabel: 'Shop on AliExpress',
      specs: {
        movement: 'NH35A',
        waterResistance: '300m',
        caseSize: '40mm',
        origin: 'China',
      },
    },

    // Overall visual similarity score out of 100
    matchScore: 94,

    // SEO meta — written for the page <head>
    seo: {
      title: 'Best Rolex Submariner Homage — San Martin Water Ghost Review | Homage Index',
      description: 'Looking for the best Rolex Submariner homage? The San Martin Water Ghost scores 94/100 for visual similarity at just $189. Full comparison, specs, and where to buy.',
      slug: 'rolex-submariner-homage',
    },
  },

  {
    id: 'ap-royal-oak-pagani-design-pd-1661',
    category: 'Dress Sports',
    pairNumber: '002',

    luxury: {
      brand: 'Audemars Piguet',
      model: 'Royal Oak',
      reference: '15500ST',
      price: 33700,
      currency: 'USD',
      image: '/images/ap-royal-oak-15500st.jpg',
      imageAlt: 'Audemars Piguet Royal Oak 15500ST blue dial',
      buyUrl: 'https://www.chrono24.com/audemarspiguet/royal-oak.htm',
      buyLabel: 'View on Chrono24',
      specs: {
        movement: 'Cal. 4302',
        waterResistance: '50m',
        caseSize: '41mm',
        origin: 'Swiss',
      },
    },

    homage: {
      brand: 'Pagani Design',
      model: 'Royal Homage',
      reference: 'PD-1661',
      price: 79,
      currency: 'USD',
      image: '/images/pagani-design-pd-1661.jpg',
      imageAlt: 'Pagani Design PD-1661 Royal Oak homage blue dial',
      buyUrl: 'https://www.aliexpress.com/item/pagani-design-pd-1661',
      buyLabel: 'Shop on AliExpress',
      specs: {
        movement: 'Miyota 8215',
        waterResistance: '100m',
        caseSize: '41mm',
        origin: 'China',
      },
    },

    matchScore: 88,

    seo: {
      title: 'Best Audemars Piguet Royal Oak Homage — Pagani Design PD-1661 | Homage Index',
      description: 'The Pagani Design PD-1661 is the most visually similar Royal Oak homage under $100. 88/100 match score. Full review and specs.',
      slug: 'audemars-piguet-royal-oak-homage',
    },
  },
];

// Helper — get a pair by slug (used in dynamic routes)
export function getPairBySlug(slug) {
  return pairs.find(p => p.seo.slug === slug);
}

// Helper — get all slugs (used to generate static paths)
export function getAllSlugs() {
  return pairs.map(p => p.seo.slug);
}
