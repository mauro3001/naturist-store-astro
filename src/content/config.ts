import { defineCollection, z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        content: z.string(),
        description: z.string(),
        buy: z.string().url(),
    }),
});

export const collections = { products };