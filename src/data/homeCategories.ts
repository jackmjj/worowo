import {
  categoryList,
  type CategoryKey,
  type CategoryTheme,
} from "./categoryDictionary";
import {
  getToolsByCategory,
  toolDictionary,
  type ToolStatus,
  type ToolType,
} from "./toolDictionary";

const iconPaths = {
  fileText:
    '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6" /><path d="M9 17h6" /><path d="M9 9h1.5" />',
  filePen:
    '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="m12.4 18.6 4.7-4.7a1.7 1.7 0 1 0-2.4-2.4L10 16.2 9.7 19z" />',
  fileCheck:
    '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="m9 15 2 2 4-4" />',
  receipt:
    '<path d="M8 3h8l2 2v16l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3V5z" /><path d="M9 8h6" /><path d="M9 12h6" /><path d="M9 16h4" />',
  package:
    '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" /><path d="m12 21 0-9" /><path d="M20 7.5 12 12 4 7.5" />',
  listChecks:
    '<path d="M10 6h10" /><path d="M10 12h10" /><path d="M10 18h10" /><path d="m4 6 1.5 1.5L7.5 5" /><path d="m4 12 1.5 1.5L7.5 11" /><path d="m4 18 1.5 1.5L7.5 17" />',
  boxes:
    '<path d="m3 7 5-3 5 3-5 3z" /><path d="m13 7 5-3 3 2v6l-5 3-3-2" /><path d="m8 10 5 3v6l-5 3-5-3v-6z" />',
  truck:
    '<path d="M3 7h11v8H3z" /><path d="M14 10h3l3 3v2h-6z" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="17.5" cy="17.5" r="1.5" />',
  calculator:
    '<rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8" /><path d="M8 11h2" /><path d="M12 11h2" /><path d="M16 11h0" /><path d="M8 15h2" /><path d="M12 15h2" /><path d="M16 15h0" /><path d="M8 19h2" /><path d="M12 19h2" /><path d="M16 19h0" />',
  chartPie:
    '<path d="M12 3v9h9" /><path d="M20.5 14A8.5 8.5 0 1 1 10 3.2" />',
  badgePercent:
    '<path d="M12 3 6 6v6c0 4.5 2.8 7.1 6 9 3.2-1.9 6-4.5 6-9V6z" /><path d="m9 15 6-6" /><circle cx="9" cy="9" r="1" /><circle cx="15" cy="15" r="1" />',
  files:
    '<path d="M8 3h8l3 3v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /><path d="M14 3v4h4" /><path d="M5 7H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2h9a1 1 0 0 0 1-1" />',
  clipboardList:
    '<rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4.5h6" /><path d="M9 9h6" /><path d="M9 13h6" /><path d="M9 17h6" /><path d="M7.5 9h0" /><path d="M7.5 13h0" /><path d="M7.5 17h0" />',
  clipboardCheck:
    '<rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4.5h6" /><path d="m9 11 1.5 1.5L13 10" /><path d="m9 16 1.5 1.5L13 15" />',
} as const;

function makeIcon(name: keyof typeof iconPaths) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;
}

type HomeToolItem = {
  key: string;
  name: string;
  desc: string;
  href?: string;
  status?: string;
  icon: string;
};

type HomeCategoryTheme = {
  solid: string;
  soft: string;
  softBorder: string;
  badgeBg: string;
  badgeText: string;
  glow: string;
};

export type HomeCategoryCard = {
  key: CategoryKey;
  title: string;
  href: string;
  description: string;
  badge: string;
  theme: HomeCategoryTheme;
  icon: string;
  moreLabel: string;
  moreIcon: string;
  tools: HomeToolItem[];
};

function getThemeTokens(theme: CategoryTheme): HomeCategoryTheme {
  const themeMap: Record<CategoryTheme, HomeCategoryTheme> = {
    blue: {
      solid: "#2563eb",
      soft: "#eff6ff",
      softBorder: "#bfdbfe",
      badgeBg: "#e0ecff",
      badgeText: "#1d4ed8",
      glow: "rgba(37, 99, 235, 0.16)",
    },
    green: {
      solid: "#1f8f42",
      soft: "#effaf2",
      softBorder: "#c8ebd1",
      badgeBg: "#e7f8eb",
      badgeText: "#228b44",
      glow: "rgba(34, 139, 68, 0.14)",
    },
    purple: {
      solid: "#7c3aed",
      soft: "#f5efff",
      softBorder: "#decdfd",
      badgeBg: "#efe5ff",
      badgeText: "#6d28d9",
      glow: "rgba(124, 58, 237, 0.14)",
    },
    orange: {
      solid: "#f97316",
      soft: "#fff5ed",
      softBorder: "#fed7aa",
      badgeBg: "#fff0e4",
      badgeText: "#ea580c",
      glow: "rgba(249, 115, 22, 0.14)",
    },
  };

  return themeMap[theme];
}

function getCategoryIcon(categoryKey: CategoryKey): string {
  const icons: Record<CategoryKey, string> = {
    quotes_invoices: makeIcon("fileText"),
    packing_shipping: makeIcon("package"),
    business_calculators: makeIcon("calculator"),
    printable_templates: makeIcon("files"),
  };

  return icons[categoryKey];
}

function getToolIcon(toolKey: string, toolType: ToolType): string {
  const icons: Record<string, string> = {
    quotation_estimate_generator: makeIcon("filePen"),
    invoice_generator: makeIcon("fileText"),
    proforma_invoice_generator: makeIcon("fileCheck"),
    receipt_generator: makeIcon("receipt"),
    packing_list_generator: makeIcon("boxes"),
    packing_list_template: makeIcon("clipboardList"),
    delivery_receipt_generator: makeIcon("truck"),
    delivery_receipt_template: makeIcon("truck"),
    profit_margin_calculator: makeIcon("chartPie"),
    markup_calculator: makeIcon("badgePercent"),
    invoice_template: makeIcon("fileText"),
    employee_availability_form: makeIcon("clipboardCheck"),
    employee_timesheet_template: makeIcon("receipt"),
  };

  if (icons[toolKey]) return icons[toolKey];

  if (toolType === "calculator") return makeIcon("calculator");
  if (toolType === "template") return makeIcon("clipboardList");
  return makeIcon("fileText");
}

function getStatusLabel(status: ToolStatus) {
  if (status === "coming_soon") return "Coming soon";
  return undefined;
}

function getHomeTools(categoryKey: CategoryKey) {
  const baseTools = getToolsByCategory(categoryKey);
  const tools =
    categoryKey === "packing_shipping"
      ? [
          ...baseTools,
          toolDictionary.packing_list_template,
          toolDictionary.delivery_receipt_template,
        ]
      : baseTools;

  return tools
    .filter((tool) => tool.showOnHome)
    .sort((a, b) => a.order - b.order)
    .slice(0, 4)
    .map((tool) => ({
      key: tool.key,
      name: tool.shortTitle || tool.title,
      desc: tool.description,
      href: tool.status === "live" ? tool.href : undefined,
      status: getStatusLabel(tool.status),
      icon: getToolIcon(tool.key, tool.type),
    }));
}

export const homeCategories: HomeCategoryCard[] = categoryList
  .filter((category) => category.showOnHome)
  .map((category) => ({
    key: category.key as CategoryKey,
    title: category.title,
    href: category.href,
    description: category.description,
    badge: category.badge,
    theme: getThemeTokens(category.theme),
    icon: getCategoryIcon(category.key as CategoryKey),
    moreLabel: `More ${category.title.toLowerCase()} tools`,
    moreIcon: getCategoryIcon(category.key as CategoryKey),
    tools: getHomeTools(category.key as CategoryKey),
  }));
