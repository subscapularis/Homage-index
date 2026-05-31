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

    // Default primary homage for dynamic details page [slug].astro comparison
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

    // All homages in the grid on the homepage
    homages: [
      {
        id: 'san-martin-water-ghost-sn004g',
        brand: 'San Martin',
        model: 'Water Ghost',
        reference: 'SN004-G',
        price: 189,
        currency: 'USD',
        matchScore: 94,
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
      {
        id: 'pagani-design-pd-1661-submariner',
        brand: 'Pagani Design',
        model: 'PD-1661 Sub',
        reference: 'PD-1661-S',
        price: 89,
        currency: 'USD',
        matchScore: 85,
        image: '/images/pagani-design-submariner.jpg',
        imageAlt: 'Pagani Design PD-1661 Submariner homage black dial',
        buyUrl: 'https://www.aliexpress.com/item/pagani-design-submariner',
        buyLabel: 'Shop on AliExpress',
        specs: {
          movement: 'NH35A',
          waterResistance: '100m',
          caseSize: '40mm',
          origin: 'China',
        },
      },
      {
        id: 'steinhart-ocean-one-black',
        brand: 'Steinhart',
        model: 'Ocean One Black',
        reference: '103-0658',
        price: 460,
        currency: 'USD',
        matchScore: 90,
        image: '/images/steinhart-ocean-one.jpg',
        imageAlt: 'Steinhart Ocean One Black dive watch',
        buyUrl: 'https://www.steinhartwatches.de/en/diver-watch/ocean-one-double-green-ceramic-premium-939.html',
        buyLabel: 'Shop on Steinhart',
        specs: {
          movement: 'SW200-1',
          waterResistance: '300m',
          caseSize: '42mm',
          origin: 'Swiss',
        },
      },
      {
        id: 'invicta-pro-diver-8926ob',
        brand: 'Invicta',
        model: 'Pro Diver',
        reference: '8926OB',
        price: 85,
        currency: 'USD',
        matchScore: 82,
        image: '/images/invicta-pro-diver-8926ob.jpg',
        imageAlt: 'Invicta Pro Diver 8926OB automatic black dial dive watch',
        buyUrl: 'https://www.amazon.com/Invicta-8926OB-Collection-Stainless-Automatic/dp/B000JQFX1G',
        buyLabel: 'Shop on Amazon',
        specs: {
          movement: 'NH35A',
          waterResistance: '200m',
          caseSize: '40mm',
          origin: 'Japan Movt',
        },
      },
      {
        id: 'loreo-submariner-automatic',
        brand: 'Loreo',
        model: 'Submariner Auto',
        reference: 'L9201G',
        price: 75,
        currency: 'USD',
        matchScore: 80,
        image: '/images/loreo-submariner.jpg',
        imageAlt: 'Loreo Submariner automatic black dial dive watch',
        buyUrl: 'https://www.aliexpress.com/item/loreo-submariner-automatic',
        buyLabel: 'Shop on AliExpress',
        specs: {
          movement: 'Seagull Auto',
          waterResistance: '200m',
          caseSize: '40mm',
          origin: 'China',
        },
      }
    ],

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

    // Default primary homage for dynamic details page [slug].astro comparison
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

    // All homages in the grid on the homepage
    homages: [
      {
        id: 'pagani-design-pd-1661-royal',
        brand: 'Pagani Design',
        model: 'Royal Homage',
        reference: 'PD-1661',
        price: 79,
        currency: 'USD',
        matchScore: 88,
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
      {
        id: 'cadisen-royal-oak-c8185',
        brand: 'Cadisen',
        model: 'Royal Oak',
        reference: 'C8185',
        price: 75,
        currency: 'USD',
        matchScore: 84,
        image: '/images/cadisen-royal-oak.jpg',
        imageAlt: 'Cadisen C8185 Royal Oak homage blue dial automatic',
        buyUrl: 'https://www.aliexpress.com/item/cadisen-royal-oak',
        buyLabel: 'Shop on AliExpress',
        specs: {
          movement: 'Miyota 8215',
          waterResistance: '50m',
          caseSize: '40mm',
          origin: 'China',
        },
      },
      {
        id: 'didun-design-royal-oak',
        brand: 'Didun Design',
        model: 'Royal',
        reference: 'DD-15500',
        price: 95,
        currency: 'USD',
        matchScore: 86,
        image: '/images/didun-design-royal.jpg',
        imageAlt: 'Didun Design Royal Oak homage blue dial automatic watch',
        buyUrl: 'https://www.aliexpress.com/item/didun-design-royal-oak',
        buyLabel: 'Shop on AliExpress',
        specs: {
          movement: 'Citizen Auto',
          waterResistance: '30m',
          caseSize: '41mm',
          origin: 'China',
        },
      },
      {
        id: 'specht-sohne-royal-oak',
        brand: 'Specht & Sohne',
        model: 'Royal Oak Homage',
        reference: 'SP-15500',
        price: 135,
        currency: 'USD',
        matchScore: 91,
        image: '/images/specht-sohne-royal.jpg',
        imageAlt: 'Specht & Sohne Royal Oak homage blue dial automatic watch',
        buyUrl: 'https://www.aliexpress.com/item/specht-sohne-royal-oak',
        buyLabel: 'Shop on AliExpress',
        specs: {
          movement: 'NH35A',
          waterResistance: '50m',
          caseSize: '41mm',
          origin: 'China',
        },
      }
    ],

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
