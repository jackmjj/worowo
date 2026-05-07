import {
  categoryDictionary,
  categoryList,
  type CategoryKey,
  type CategoryTheme,
} from "./categoryDictionary";
import { toolDictionary, toolList, type ToolDictionaryItem } from "./toolDictionary";

export type CategoryPageToolItem = {
  key: string;
  title: string;
  href?: string;
  description: string;
  icon: string;
  actionLabel: string;
  status: "live" | "coming_soon";
};

export type CategoryPageSection = {
  key: string;
  title: string;
  description?: string;
  tools: CategoryPageToolItem[];
};

export type CategoryPageData = {
  key: CategoryKey;
  title: string;
  href: string;
  description: string;
  theme: CategoryTheme;
  eyebrow: string;
  sections: CategoryPageSection[];
};

function getCategoryTools(categoryKey: CategoryKey) {
  return toolList
    .filter((tool) => tool.categoryKey === categoryKey && tool.featuredOnCategoryPage)
    .sort((a, b) => a.order - b.order);
}

function getToolIcon(tool: ToolDictionaryItem): string {
  const iconMap: Record<string, string> = {
    invoice_generator: "invoice",
    quotation_estimate_generator: "quote",
    commercial_invoice_generator: "invoice",
    proforma_invoice_generator: "invoice",
    purchase_order_generator: "invoice",
    invoice_template: "invoice",
    packing_list_generator: "packing",
    export_packing_list_generator: "packing",
    shipping_mark_generator: "packing",
    carton_label_generator: "packing",
    packing_list_template: "packing",
    delivery_receipt_generator: "delivery",
    profit_margin_calculator: "profit",
    sales_commission_calculator: "calculator",
    break_even_point_calculator: "calculator",
    discount_calculator: "calculator",
    unit_price_comparison_calculator: "calculator",
    weekly_employee_schedule_template: "calendar",
    employee_timesheet_template: "timesheet",
    field_service_work_order_template: "work",
  };

  return iconMap[tool.key] ?? "grid";
}

function getActionLabel(tool: ToolDictionaryItem): string {
  if (tool.status === "coming_soon") return "Coming soon";
  if (tool.type === "template") return "View template";
  if (tool.type === "calculator") return "Open calculator";
  return "Open generator";
}

function toToolItem(tool: ToolDictionaryItem): CategoryPageToolItem {
  return {
    key: tool.key,
    title: tool.shortTitle || tool.title,
    href: tool.status === "live" ? tool.href : undefined,
    description: tool.description,
    icon: getToolIcon(tool),
    actionLabel: getActionLabel(tool),
    status: tool.status,
  };
}

function getCategorySections(categoryKey: CategoryKey): CategoryPageSection[] {
  if (categoryKey === "quotes_invoices") {
    const tools = getCategoryTools(categoryKey);

    return [
      {
        key: "quote-billing-tools",
        title: "Available Tools",
        description:
          "Prepare customer-facing quote, invoice, purchase, and billing documents quickly.",
        tools: tools.map(toToolItem),
      },
    ];
  }

  if (categoryKey === "packing_shipping") {
    const toolKeys = [
      "packing_list_generator",
      "export_packing_list_generator",
      "shipping_mark_generator",
      "carton_label_generator",
      "delivery_receipt_generator",
    ];

    return [
      {
        key: "shipping-documents",
        title: "Available Tools",
        description:
          "Create shipment records, export packing documents, carton labels, shipping marks, and delivery confirmations.",
        tools: toolKeys.map((key) => toToolItem(toolDictionary[key as keyof typeof toolDictionary])),
      },
    ];
  }

  if (categoryKey === "business_calculators") {
    const tools = getCategoryTools(categoryKey);

    return [
      {
        key: "business-calculators",
        title: "Available Tools",
        description:
          "Quick calculators for pricing, margins, discounts, unit costs, commissions, and daily business decisions.",
        tools: tools.map(toToolItem),
      },
    ];
  }

  if (categoryKey === "printable_templates") {
    return [
      {
        key: "printable-templates",
        title: "Available Templates",
        description:
          "Printable documents for billing, shipping, field service, employee schedules, timesheets, and everyday operations.",
        tools: getCategoryTools(categoryKey).map(toToolItem),
      },
    ];
  }

  return [
    {
      key: `${categoryKey}-tools`,
      title: categoryDictionary[categoryKey].title,
      tools: getCategoryTools(categoryKey).map(toToolItem),
    },
  ];
}

export const categoryPageDataList: CategoryPageData[] = categoryList.map((category) => ({
  key: category.key as CategoryKey,
  title: category.title,
  href: category.href,
  description: category.description,
  theme: category.theme,
  eyebrow: "Category",
  sections: getCategorySections(category.key as CategoryKey),
}));

export function getCategoryPageData(categoryKey: CategoryKey): CategoryPageData {
  const item = categoryPageDataList.find((entry) => entry.key === categoryKey);
  if (!item) {
    throw new Error(`Unknown category page data for key: ${categoryKey}`);
  }
  return item;
}
