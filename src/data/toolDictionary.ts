import type { CategoryKey } from "./categoryDictionary";

export type ToolType = "generator" | "template" | "calculator";
export type ToolStatus = "live" | "coming_soon";

export type ToolDictionaryItem = {
  key: string;
  categoryKey: CategoryKey;
  title: string;
  shortTitle?: string;
  href: string;
  type: ToolType;
  status: ToolStatus;
  description: string;
  menuTitle?: string;
  showInHeaderMenu: boolean;
  featuredInHeaderMenu: boolean;
  showOnHome: boolean;
  featuredOnCategoryPage: boolean;
  order: number;
  blankTemplateKey?: string;
  generatorKey?: string;
};

export const toolDictionary = {
  invoice_generator: {
    key: "invoice_generator",
    categoryKey: "quotes_invoices",
    title: "Invoice Generator",
    shortTitle: "Invoice Generator",
    href: "/invoice-generator/",
    type: "generator",
    status: "coming_soon",
    description:
      "Create invoices online for customers, products, tax, totals, and PDF export.",
    menuTitle: "Invoice Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 100,
    blankTemplateKey: "invoice_template",
  },

  quotation_estimate_generator: {
    key: "quotation_estimate_generator",
    categoryKey: "quotes_invoices",
    title: "Quotation / Estimate Generator",
    shortTitle: "Quote / Estimate Generator",
    href: "/quote-estimate-generator/",
    type: "generator",
    status: "coming_soon",
    description:
      "Create quotes and estimates for products or services with customer info and totals.",
    menuTitle: "Quotation / Estimate Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 110,
  },

  proforma_invoice_generator: {
    key: "proforma_invoice_generator",
    categoryKey: "quotes_invoices",
    title: "Proforma Invoice Generator",
    shortTitle: "Proforma Invoice Generator",
    href: "/proforma-invoice-generator/",
    type: "generator",
    status: "coming_soon",
    description:
      "Create proforma invoices for international trade, customs preparation, and pre-sale confirmation.",
    menuTitle: "Proforma Invoice Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 120,
  },

  receipt_generator: {
    key: "receipt_generator",
    categoryKey: "quotes_invoices",
    title: "Receipt Generator",
    shortTitle: "Receipt Generator",
    href: "/receipt-generator/",
    type: "generator",
    status: "coming_soon",
    description:
      "Generate simple receipts for payments received, cash sales, and record keeping.",
    menuTitle: "Receipt Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 130,
  },

  invoice_template: {
    key: "invoice_template",
    categoryKey: "printable_templates",
    title: "Simple Invoice Template",
    shortTitle: "Invoice Template",
    href: "/printable-templates/simple-invoice-template/",
    type: "template",
    status: "live",
    description:
      "Printable invoice template for billing customers, listing items, tax, and totals.",
    menuTitle: "Invoice Template",
    showInHeaderMenu: true,
    featuredInHeaderMenu: false,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 140,
    generatorKey: "invoice_generator",
  },

  packing_list_generator: {
    key: "packing_list_generator",
    categoryKey: "packing_shipping",
    title: "Packing List Generator",
    shortTitle: "Packing List Generator",
    href: "/packing-list-generator/",
    type: "generator",
    status: "live",
    description:
      "Create a simple packing list online, fill in shipment details, and print or save a completed packing list as PDF.",
    menuTitle: "Packing List Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 200,
    blankTemplateKey: "packing_list_template",
  },

  packing_list_template: {
    key: "packing_list_template",
    categoryKey: "printable_templates",
    title: "Simple Packing List Template",
    shortTitle: "Packing List Template",
    href: "/printable-templates/simple-packing-list-template/",
    type: "template",
    status: "live",
    description:
      "Printable packing list template for shipment contents, carton details, and notes.",
    menuTitle: "Packing List Template",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 210,
    generatorKey: "packing_list_generator",
  },

  delivery_receipt_generator: {
    key: "delivery_receipt_generator",
    categoryKey: "packing_shipping",
    title: "Delivery Receipt Generator",
    shortTitle: "Delivery Receipt Generator",
    href: "/delivery-receipt-generator/",
    type: "generator",
    status: "coming_soon",
    description:
      "Prepare delivery receipts with delivery details, items received, and sign-off confirmation.",
    menuTitle: "Delivery Receipt Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 220,
    blankTemplateKey: "delivery_receipt_template",
  },

  delivery_receipt_template: {
    key: "delivery_receipt_template",
    categoryKey: "printable_templates",
    title: "Simple Delivery Receipt Template",
    shortTitle: "Delivery Receipt Template",
    href: "/printable-templates/simple-delivery-receipt-template/",
    type: "template",
    status: "coming_soon",
    description:
      "Printable delivery receipt template for proof of delivery and signature confirmation.",
    menuTitle: "Delivery Receipt Template",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: false,
    featuredOnCategoryPage: true,
    order: 230,
    generatorKey: "delivery_receipt_generator",
  },

  profit_margin_calculator: {
    key: "profit_margin_calculator",
    categoryKey: "business_calculators",
    title: "Profit Margin Calculator",
    shortTitle: "Profit Margin Calculator",
    href: "/calculators/profit-margin-calculator/",
    type: "calculator",
    status: "live",
    description:
      "Calculate selling price, gross profit, and margin quickly for products or services.",
    menuTitle: "Profit Margin Calculator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 300,
  },

  markup_calculator: {
    key: "markup_calculator",
    categoryKey: "business_calculators",
    title: "Markup Calculator",
    shortTitle: "Markup Calculator",
    href: "/markup-calculator/",
    type: "calculator",
    status: "coming_soon",
    description:
      "Work out markup percentages and recommended selling prices from cost inputs.",
    menuTitle: "Markup Calculator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 310,
  },

  sales_tax_calculator: {
    key: "sales_tax_calculator",
    categoryKey: "business_calculators",
    title: "Sales Tax Calculator",
    shortTitle: "Sales Tax Calculator",
    href: "/sales-tax-calculator/",
    type: "calculator",
    status: "coming_soon",
    description:
      "Calculate pre-tax, tax amount, and final total for U.S. sales tax scenarios.",
    menuTitle: "Sales Tax Calculator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 320,
  },

  discount_calculator: {
    key: "discount_calculator",
    categoryKey: "business_calculators",
    title: "Discount Calculator",
    shortTitle: "Discount Calculator",
    href: "/discount-calculator/",
    type: "calculator",
    status: "coming_soon",
    description:
      "Compute discounts, savings, and final prices for retail and promotional pricing.",
    menuTitle: "Discount Calculator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: false,
    showOnHome: false,
    featuredOnCategoryPage: true,
    order: 330,
  },

  employee_availability_form: {
    key: "employee_availability_form",
    categoryKey: "printable_templates",
    title: "Simple Employee Availability Form",
    shortTitle: "Employee Availability Form",
    href: "/printable-templates/simple-employee-availability-form/",
    type: "template",
    status: "live",
    description:
      "Printable employee availability form for recording weekly work availability, preferred shifts, and unavailable times.",
    menuTitle: "Employee Availability Form",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 400,
  },

  weekly_employee_schedule_template: {
    key: "weekly_employee_schedule_template",
    categoryKey: "printable_templates",
    title: "Simple Weekly Employee Schedule Template",
    shortTitle: "Weekly Employee Schedule",
    href: "/printable-templates/simple-weekly-employee-schedule-template/",
    type: "template",
    status: "live",
    description:
      "Printable weekly staff schedule template for assigning shifts and organizing coverage.",
    menuTitle: "Weekly Employee Schedule",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: false,
    featuredOnCategoryPage: true,
    order: 410,
  },

  employee_timesheet_template: {
    key: "employee_timesheet_template",
    categoryKey: "printable_templates",
    title: "Simple Employee Timesheet Template",
    shortTitle: "Employee Timesheet",
    href: "/printable-templates/simple-employee-timesheet-template/",
    type: "template",
    status: "live",
    description:
      "Printable employee timesheet template for daily hours, breaks, overtime, and total weekly hours.",
    menuTitle: "Employee Timesheet",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 420,
  },

  daily_cash_drawer_reconciliation_form: {
    key: "daily_cash_drawer_reconciliation_form",
    categoryKey: "printable_templates",
    title: "Simple Daily Cash Drawer Reconciliation Form",
    shortTitle: "Daily Cash Drawer Reconciliation",
    href: "/printable-templates/simple-daily-cash-drawer-reconciliation-form/",
    type: "template",
    status: "live",
    description:
      "Printable form for starting cash, cash sales, card payments, payouts, and over/short totals.",
    menuTitle: "Daily Cash Drawer Reconciliation",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: false,
    featuredOnCategoryPage: true,
    order: 430,
  },

  field_service_work_order_template: {
    key: "field_service_work_order_template",
    categoryKey: "printable_templates",
    title: "Simple Field Service Work Order Template",
    shortTitle: "Field Service Work Order",
    href: "/printable-templates/simple-field-service-work-order-template/",
    type: "template",
    status: "live",
    description:
      "Printable work order template for job details, labor hours, materials used, and customer sign-off.",
    menuTitle: "Field Service Work Order",
    showInHeaderMenu: true,
    featuredInHeaderMenu: false,
    showOnHome: false,
    featuredOnCategoryPage: true,
    order: 440,
  },
} as const satisfies Record<string, ToolDictionaryItem>;

export type ToolKey = keyof typeof toolDictionary;

export const toolList = Object.values(toolDictionary).sort(
  (a, b) => a.order - b.order
);

export function getToolByKey(key: ToolKey) {
  return toolDictionary[key];
}

export function getToolsByCategory(categoryKey: CategoryKey) {
  return toolList.filter((tool) => tool.categoryKey === categoryKey);
}

export function getHeaderMenuToolsByCategory(categoryKey: CategoryKey) {
  return toolList.filter(
    (tool) =>
      tool.categoryKey === categoryKey &&
      tool.showInHeaderMenu &&
      tool.featuredInHeaderMenu
  );
}
