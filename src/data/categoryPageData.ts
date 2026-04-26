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
    proforma_invoice_generator: "invoice",
    receipt_generator: "receipt",
    invoice_template: "invoice",
    packing_list_generator: "packing",
    packing_list_template: "packing",
    delivery_receipt_generator: "delivery",
    delivery_receipt_template: "delivery",
    profit_margin_calculator: "profit",
    markup_calculator: "calculator",
    break_even_point_calculator: "calculator",
    sales_tax_calculator: "tax",
    discount_calculator: "calculator",
    employee_availability_form: "calendar",
    weekly_employee_schedule_template: "calendar",
    employee_timesheet_template: "timesheet",
    daily_cash_drawer_reconciliation_form: "cash",
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
        title: "Quote & Billing Tools",
        description:
          "Use these tools to prepare customer-facing billing documents quickly and generate clean quote and invoice workflows.",
        tools: tools.map(toToolItem),
      },
    ];
  }

  if (categoryKey === "packing_shipping") {
    const toolKeys = [
      "packing_list_generator",
      "packing_list_template",
      "delivery_receipt_generator",
      "delivery_receipt_template",
    ];

    return [
      {
        key: "shipping-documents",
        title: "Shipping Documents",
        description:
          "A compact set of tools and printable templates for shipment records, delivery confirmation, and daily dispatch work.",
        tools: toolKeys.map((key) => toToolItem(toolDictionary[key as keyof typeof toolDictionary])),
      },
    ];
  }

  if (categoryKey === "business_calculators") {
    const tools = getCategoryTools(categoryKey);

    return [
      {
        key: "business-calculators",
        title: "Business Calculators",
        description:
          "These calculators are designed for quick use, clear results, and practical business decisions.",
        tools: tools.map(toToolItem),
      },
    ];
  }

  if (categoryKey === "printable_templates") {
    const templateTools = getCategoryTools(categoryKey).map(toToolItem);

    return [
      {
        key: "quote-billing",
        title: "Quote & Billing",
        tools: templateTools.filter((tool) =>
          ["invoice_template"].includes(tool.key)
        ),
      },
      {
        key: "packing-shipping",
        title: "Packing & Shipping",
        tools: templateTools.filter((tool) =>
          ["packing_list_template", "delivery_receipt_template"].includes(tool.key)
        ),
      },
      {
        key: "employee-hr",
        title: "Employee Scheduling & HR",
        tools: templateTools.filter((tool) =>
          [
            "employee_availability_form",
            "weekly_employee_schedule_template",
            "employee_timesheet_template",
          ].includes(tool.key)
        ),
      },
      {
        key: "store-ops",
        title: "Retail Cash & Store Operations",
        tools: templateTools.filter((tool) =>
          ["daily_cash_drawer_reconciliation_form"].includes(tool.key)
        ),
      },
      {
        key: "field-service",
        title: "Field Service & Job Forms",
        tools: templateTools.filter((tool) =>
          ["field_service_work_order_template"].includes(tool.key)
        ),
      },
    ].filter((section) => section.tools.length > 0);
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
