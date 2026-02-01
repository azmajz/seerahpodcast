import { defineCollection, z } from 'astro:content';

const episodesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    duration: z.string(),
    youtubeId: z.string().optional(),
    mp3Url: z.string(),
    summary: z.string(),
    seoDescription: z.string().optional(),
    seoKeywords: z.array(z.string()).optional(),
    highlights: z.array(z.string()),
    image: z.string().default('/thumb.jpg'),
  }),
});

export const collections = {
  'episodes': episodesCollection,
};
