import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['digimon', 'item', 'quest', 'guide', 'news', 'patch']),
    tags: z.array(z.string()),
    gameVersion: z.string(),
    updated: z.coerce.date(),
    draft: z.boolean(),
    related: z.array(z.string())
  })
});

export const collections = { articles };
