import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    url: z.string().url().optional(),
    image: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { projects };
