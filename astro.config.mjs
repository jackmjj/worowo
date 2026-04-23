import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.worowo.com",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith("-print/") &&
        !page.includes("/preview/") &&
        !page.includes("/test/") &&
        !page.includes("/dev/"),
    }),
  ],
});
