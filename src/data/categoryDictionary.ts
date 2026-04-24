export type CategoryTheme = "blue" | "green" | "purple" | "orange";

export type CategoryDictionaryItem = {
  key: string;
  title: string;
  shortTitle?: string;
  href: string;
  theme: CategoryTheme;
  badge: string;
  description: string;
  showInHeader: boolean;
  showOnHome: boolean;
  order: number;
};

export const categoryDictionary = {
  quotes_invoices: {
    key: "quotes_invoices",
    title: "Quotes & Invoices",
    shortTitle: "Quotes & Invoices",
    href: "/quotes-invoices/",
    theme: "blue",
    badge: "Documents",
    description:
      "Create quotes, invoices, proforma invoices, and receipts with clean layouts for small businesses, service providers, and trade use.",
    showInHeader: true,
    showOnHome: true,
    order: 10,
  },

  packing_shipping: {
    key: "packing_shipping",
    title: "Packing & Shipping",
    shortTitle: "Packing & Shipping",
    href: "/packing-shipping/",
    theme: "green",
    badge: "Shipping",
    description:
      "Use packing lists, delivery documents, and shipping paperwork for e-commerce, wholesale, export shipments, and local delivery workflows.",
    showInHeader: true,
    showOnHome: true,
    order: 20,
  },

  business_calculators: {
    key: "business_calculators",
    title: "Business Calculators",
    shortTitle: "Business Calculators",
    href: "/business-calculators/",
    theme: "purple",
    badge: "Calculators",
    description:
      "Business calculators for pricing, profit margin, markup, break-even planning, landed cost, and other day-to-day commerce tasks.",
    showInHeader: true,
    showOnHome: true,
    order: 30,
  },

  printable_templates: {
    key: "printable_templates",
    title: "Printable Templates",
    shortTitle: "Printable Templates",
    href: "/printable-templates/",
    theme: "orange",
    badge: "Templates",
    description:
      "Ready-to-print business templates for billing, shipping, employee scheduling, store operations, and field service documentation.",
    showInHeader: true,
    showOnHome: true,
    order: 40,
  },
} as const satisfies Record<string, CategoryDictionaryItem>;

export type CategoryKey = keyof typeof categoryDictionary;

export const categoryList = Object.values(categoryDictionary).sort(
  (a, b) => a.order - b.order
);

export function getCategoryByKey(key: CategoryKey) {
  return categoryDictionary[key];
}
