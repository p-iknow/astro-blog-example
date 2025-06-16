/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  // tailwindStylesheet: "./src/styles/tw-config.css",
};
