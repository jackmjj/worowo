import { printableTemplateConfigs } from "../lib/printable/config";

export interface PrintableTemplateEntry {
  slug: string;
  cardTitle: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
}

export const printableTemplateEntries: PrintableTemplateEntry[] =
  printableTemplateConfigs.map((config) => ({
    slug: config.slug,
    cardTitle: config.pageTitle.replace(/^Simple\s+/, "").replace(/\s+Template$/, ""),
    h1: config.pageTitle,
    seoTitle: config.seoTitle ?? `${config.pageTitle} | worowo`,
    metaDescription: config.description,
    category: config.category,
  }));
