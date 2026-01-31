import { defineCollection, z } from 'astro:content';

const episodesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    episodeNumber: z.number(),
    date: z.string(),
    duration: z.string(),
    youtubeId: z.string().optional(),
    mp3Url: z.string(),
    description: z.string(),
    image: z.string().default('https://ia903208.us.archive.org/22/items/seerah_life_of_the_prophet_saw/___ia_thumb.jpg?cnt=0'),
  }),
});

export const collections = {
  'episodes': episodesCollection,
};
