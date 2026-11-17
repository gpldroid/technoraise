import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    base: "./src/content/articles",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string().min(8).max(100),
    description: z.string().min(40).max(180),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().min(2),
    authorType: z.enum(["Person", "Organization"]).default("Organization"),
    category: z.enum([
      "software-development",
      "artificial-intelligence",
      "digital-solutions",
      "digital-transformation",
      "technology-news",
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    heroImage: z.string().optional(),
    // Set these to the source image's real dimensions to reserve its exact aspect ratio.
    heroImageWidth: z.number().int().positive().default(1600),
    heroImageHeight: z.number().int().positive().default(900),
  }),
});

export const collections = { articles };
