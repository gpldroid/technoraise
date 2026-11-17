import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://technoraise-nwmv.netlify.app",
  trailingSlash: "always",
  output: "static",
  integrations: [mdx()],
});
