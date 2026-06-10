import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const specsSchema = z.object({
  movement: z.string(),
  waterResistance: z.string(),
  caseSize: z.string(),
  origin: z.string(),
});

const watchSchema = z.object({
  brand: z.string(),
  model: z.string(),
  reference: z.string(),
  price: z.number(),
  currency: z.string(),
  image: z.string().optional(),
  imageAlt: z.string(),
  buyUrl: z.string(),
  buyLabel: z.string(),
  specs: specsSchema,
  matchScore: z.number().optional(),
  id: z.string().optional(),
});

const pairs = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/pairs" }),
  schema: z.object({
    category: z.string(),
    pairNumber: z.string(),
    matchScore: z.number(),
    luxury: watchSchema,
    homage: watchSchema,
    homages: z.array(watchSchema),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      slug: z.string(),
    }),
  }),
});

export const collections = { pairs };
