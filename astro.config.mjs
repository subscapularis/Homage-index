import { defineConfig, fontProviders, svgoOptimizer } from 'astro/config';

export default defineConfig({
  site: 'https://homageindex.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: true,
  experimental: {
    svgOptimizer: svgoOptimizer()
  },
  fonts: [
    {
      name: 'Cormorant Garamond',
      cssVariable: '--font-display',
      provider: fontProviders.google(),
      weights: ['300', '400'],
      styles: ['normal', 'italic'],
    },
    {
      name: 'Josefin Sans',
      cssVariable: '--font-body',
      provider: fontProviders.google(),
      weights: ['300', '400'],
      styles: ['normal'],
    },
  ],
});