import { defineCollection, z } from "astro:content";
import { LOCALES } from "../config/locale";
export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  author: z.boolean().optional(),
  date: z.coerce.date(),
  lastUpdated: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  series: z.string().optional(),
  lang: z.enum(LOCALES),
  hidden: z.boolean().optional(),
});

export const collections = {
  blogs: defineCollection({
    // loader: glob({
    //   pattern: "**/*.mdx",
    //   base: "./src/content/blogs",
    // }),
    schema: blogSchema,
  }),
};
