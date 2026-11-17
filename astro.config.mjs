import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // GitHub Pages project site: https://gpldroid.github.io/technoraise/
  site: "https://gpldroid.github.io",
  base: "/technoraise",
  trailingSlash: "always",
  output: "static",
  integrations: [mdx(), sitemap()],
});
