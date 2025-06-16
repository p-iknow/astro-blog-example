import { CollectionEntry, getCollection } from "astro:content";
import { Locale } from "../config/locale";

export const getAllBlogs = async ({ lang }: { lang: Locale }) => {
  const allPostsRaw: CollectionEntry<"blogs">[] = (
    await getCollection("blogs")
  ).sort((a, z) => +new Date(z.data.date) - +new Date(a.data.date));

  return allPostsRaw
    .map((post) => {
      // post.id = "markdown-style-guide.en.mdx"
      // "typescript/abc.en.mdx".split(".")
      // ["typescript/abc", "en", "mdx"]
      const [slug, lang] = post.id.split(".");
      // slug = "markdown-style-guide"
      // lang = "en"
      return {
        ...post,
        slug,
        lang,
      };
    })
    .filter((p) => p.lang === lang);
};
