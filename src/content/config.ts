import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const shows = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    icon: z.string(),
    order: z.number().default(0),
    highlights: z.array(z.string()).default([]),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, shows, testimonials };
