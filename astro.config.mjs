import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://gpldroid.github.io",
  base: "/technoraise",
  trailingSlash: "always",
  output: "static",
  integrations: [mdx()],
});
