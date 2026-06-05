import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const sitemapExcludedPages = new Set([
  "https://www.worowo.com/calculators/",
  "https://www.worowo.com/commercial-invoice-generator/",
  "https://www.worowo.com/invoice-generator/",
  "https://www.worowo.com/packing-list-generator/",
  "https://www.worowo.com/proforma-invoice-generator/",
  "https://www.worowo.com/purchase-order-generator/",
  "https://www.worowo.com/quote-estimate-generator/",
]);

export default defineConfig({
  site: "https://www.worowo.com",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith("-print/") &&
        !sitemapExcludedPages.has(page) &&
        !page.includes("/preview/") &&
        !page.includes("/test/") &&
        !page.includes("/dev/"),
    }),
  ],
});
