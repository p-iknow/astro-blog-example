import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import tailwind from "@tailwindcss/vite";
import astroExpressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { remarkCallout } from "@r4ai/remark-callout";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
export default defineConfig({
  site: "https://omarelhawary.me",
  vite: { resolve: { alias: { "@": "/src" } }, plugins: [tailwind()] },
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkCallout],
    shikiConfig: {
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
      ],
    },
  },
  prefetch: { prefetchAll: true },
  integrations: [
    astroExpressiveCode({
      themes: ["light-plus", "dracula-soft"],
      useDarkModeMediaQuery: true,
      themeCssRoot: "html",
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      plugins: [pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: false,
      },
    }),
    mdx(),
    sitemap(),
    solid(),
  ],
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
    // routing: {
    //   prefixDefaultLocale: true,
    // },
  },
});
