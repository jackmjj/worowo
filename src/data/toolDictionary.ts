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
    href: "/quotes-invoices/invoice-generator/",
    type: "generator",
    status: "live",
    description:
      "Create invoices online for customers, products, tax, totals, and PDF export.",
    menuTitle: "Invoice Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 230,
    blankTemplateKey: "invoice_template",
  },

  quotation_estimate_generator: {
    key: "quotation_estimate_generator",
    categoryKey: "quotes_invoices",
    title: "Quotation / Estimate Generator",
    shortTitle: "Quote / Estimate Generator",
    href: "/quotes-invoices/quote-estimate-generator/",
    type: "generator",
    status: "live",
    description:
      "Create quotes and estimates for products or services with customer info and totals.",
    menuTitle: "Quotation / Estimate Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 210,
  },

  commercial_invoice_generator: {
    key: "commercial_invoice_generator",
    categoryKey: "quotes_invoices",
    title: "Commercial Invoice Generator",
    shortTitle: "Commercial Invoice Generator",
    href: "/quotes-invoices/commercial-invoice-generator/",
    type: "generator",
    status: "live",
    description:
      "Create commercial invoices for international shipments with buyer, seller, shipping details, HS codes, item values, and print-ready totals.",
    menuTitle: "Commercial Invoice Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 240,
  },

  proforma_invoice_generator: {
    key: "proforma_invoice_generator",
    categoryKey: "quotes_invoices",
    title: "Proforma Invoice Generator",
    shortTitle: "Proforma Invoice Generator",
    href: "/quotes-invoices/proforma-invoice-generator/",
    type: "generator",
    status: "live",
    description:
      "Create proforma invoices for international trade, customs preparation, and pre-sale confirmation.",
    menuTitle: "Proforma Invoice Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 220,
  },

  purchase_order_generator: {
    key: "purchase_order_generator",
    categoryKey: "quotes_invoices",
    title: "Purchase Order Generator",
    shortTitle: "Purchase Order Generator",
    href: "/quotes-invoices/purchase-order-generator/",
    type: "generator",
    status: "live",
    description:
      "Create purchase orders for suppliers and vendors with buyer details, item lines, totals, and print-ready PDF output.",
    menuTitle: "Purchase Order Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 200,
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
    order: 400,
    generatorKey: "invoice_generator",
  },

  packing_list_generator: {
    key: "packing_list_generator",
    categoryKey: "packing_shipping",
    title: "Packing List Generator",
    shortTitle: "Packing List Generator",
    href: "/packing-shipping/packing-list-generator/",
    type: "generator",
    status: "live",
    description:
      "Create a simple packing list online, fill in shipment details, and print or save a completed packing list as PDF.",
    menuTitle: "Packing List Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 300,
  },

  export_packing_list_generator: {
    key: "export_packing_list_generator",
    categoryKey: "packing_shipping",
    title: "Export Packing List Generator",
    shortTitle: "Export Packing List Generator",
    href: "/packing-shipping/export-packing-list-generator/",
    type: "generator",
    status: "live",
    description:
      "Create a professional export packing list with exporter, consignee, shipment details, item totals, and print-ready PDF output.",
    menuTitle: "Export Packing List Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 310,
  },

  shipping_mark_generator: {
    key: "shipping_mark_generator",
    categoryKey: "packing_shipping",
    title: "Shipping Mark Generator",
    shortTitle: "Shipping Mark",
    href: "/packing-shipping/shipping-mark-generator/",
    type: "generator",
    status: "live",
    description:
      "Create professional shipping marks for export cartons with main mark, side mark, destination, carton numbers, weight, and measurement.",
    menuTitle: "Shipping Mark Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: false,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 315,
  },

  carton_label_generator: {
    key: "carton_label_generator",
    categoryKey: "packing_shipping",
    title: "Carton Label Generator",
    shortTitle: "Carton Label",
    href: "/packing-shipping/carton-label-generator/",
    type: "generator",
    status: "live",
    description:
      "Generate printable carton labels with SKU, product name, quantity, carton number, weight, dimensions, and handling notes.",
    menuTitle: "Carton Label Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: false,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 317,
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
    order: 410,
    generatorKey: "packing_list_generator",
  },

  delivery_receipt_generator: {
    key: "delivery_receipt_generator",
    categoryKey: "packing_shipping",
    title: "Delivery Receipt Generator",
    shortTitle: "Delivery Receipt Generator",
    href: "/packing-shipping/delivery-receipt-generator/",
    type: "generator",
    status: "live",
    description:
      "Generate delivery receipts with store name, delivery details, item totals, and PDF export.",
    menuTitle: "Delivery Receipt Generator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 320,
  },

  profit_margin_calculator: {
    key: "profit_margin_calculator",
    categoryKey: "business_calculators",
    title: "Profit Margin Calculator",
    shortTitle: "Profit Margin Calculator",
    href: "/business-calculators/profit-margin-calculator/",
    type: "calculator",
    status: "live",
    description:
      "Calculate selling price, gross profit, and margin quickly for products or services.",
    menuTitle: "Profit Margin Calculator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 100,
  },

  sales_commission_calculator: {
    key: "sales_commission_calculator",
    categoryKey: "business_calculators",
    title: "Sales Commission Calculator",
    shortTitle: "Sales Commission Calculator",
    href: "/business-calculators/sales-commission-calculator/",
    type: "calculator",
    status: "live",
    description:
      "Calculate sales commission, bonus, deductions, and net payout, then print or save a commission statement as PDF.",
    menuTitle: "Sales Commission Calculator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 140,
  },

  break_even_point_calculator: {
    key: "break_even_point_calculator",
    categoryKey: "business_calculators",
    title: "Break-Even Point Calculator",
    shortTitle: "Break-Even Point Calculator",
    href: "/business-calculators/break-even-point-calculator/",
    type: "calculator",
    status: "live",
    description:
      "Calculate break-even units, break-even sales, gross margin, and profit projection from fixed and variable costs.",
    menuTitle: "Break-Even Point Calculator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: true,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 110,
  },

  discount_calculator: {
    key: "discount_calculator",
    categoryKey: "business_calculators",
    title: "Discount Calculator",
    shortTitle: "Discount Calculator",
    href: "/business-calculators/discount-calculator/",
    type: "calculator",
    status: "live",
    description:
      "Calculate discounted price, savings, profit margin, and total profit for retail and promotional pricing.",
    menuTitle: "Discount Calculator",
    showInHeaderMenu: true,
    featuredInHeaderMenu: false,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 120,
  },

  unit_price_comparison_calculator: {
    key: "unit_price_comparison_calculator",
    categoryKey: "business_calculators",
    title: "Unit Price Comparison Calculator",
    shortTitle: "Unit Price Comparison",
    href: "/business-calculators/unit-price-comparison/",
    type: "calculator",
    status: "live",
    description:
      "Compare supplier quotes, quantities, fees, landed unit cost, and savings for bulk purchasing decisions.",
    menuTitle: "Unit Price Comparison",
    showInHeaderMenu: true,
    featuredInHeaderMenu: false,
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 130,
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
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 440,
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
    showOnHome: true,
    featuredOnCategoryPage: true,
    order: 420,
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
      tool.showInHeaderMenu
  );
}
