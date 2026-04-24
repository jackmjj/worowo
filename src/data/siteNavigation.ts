export type NavChildItem = {
  title: string;
  href: string;
  description?: string;
  status?: "live" | "coming_soon";
  showInMenu?: boolean;
  featuredInMenu?: boolean;
};

export type NavSection = {
  title: string;
  href: string;
  theme: "blue" | "green" | "purple" | "orange";
  showInHeader?: boolean;
  children: NavChildItem[];
};

export const siteNavigation: NavSection[] = [
  {
    title: "Quotes & Invoices",
    href: "/quotes-invoices/",
    theme: "blue",
    showInHeader: true,
    children: [
      {
        title: "Invoice Generator",
        href: "/invoice-generator/",
        description: "Create invoices online",
        status: "coming_soon",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Quotation / Estimate Generator",
        href: "/quote-estimate-generator/",
        description: "Create quotes and estimates",
        status: "coming_soon",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Proforma Invoice Generator",
        href: "/proforma-invoice-generator/",
        description: "Create proforma invoices",
        status: "coming_soon",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Receipt Generator",
        href: "/receipt-generator/",
        description: "Create payment receipts",
        status: "coming_soon",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Invoice Template",
        href: "/printable-templates/simple-invoice-template/",
        description: "Printable blank invoice",
        status: "live",
        showInMenu: true,
        featuredInMenu: false,
      },
    ],
  },
  {
    title: "Packing & Shipping",
    href: "/packing-shipping/",
    theme: "green",
    showInHeader: true,
    children: [
      {
        title: "Packing List Generator",
        href: "/packing-list-generator/",
        description: "Fill online and print",
        status: "live",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Packing List Template",
        href: "/printable-templates/simple-packing-list-template/",
        description: "Printable blank template",
        status: "live",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Delivery Receipt Generator",
        href: "/delivery-receipt-generator/",
        description: "Create delivery receipts",
        status: "coming_soon",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Delivery Receipt Template",
        href: "/printable-templates/simple-delivery-receipt-template/",
        description: "Printable delivery receipt",
        status: "coming_soon",
        showInMenu: true,
        featuredInMenu: true,
      },
    ],
  },
  {
    title: "Business Calculators",
    href: "/business-calculators/",
    theme: "purple",
    showInHeader: true,
    children: [
      {
        title: "Profit Margin Calculator",
        href: "/calculators/profit-margin-calculator/",
        description: "Calculate margin and profit",
        status: "live",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Markup Calculator",
        href: "/markup-calculator/",
        description: "Calculate markup quickly",
        status: "coming_soon",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Sales Tax Calculator",
        href: "/sales-tax-calculator/",
        description: "Estimate tax amounts",
        status: "coming_soon",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Discount Calculator",
        href: "/discount-calculator/",
        description: "Calculate discounts and final price",
        status: "coming_soon",
        showInMenu: true,
        featuredInMenu: false,
      },
    ],
  },
  {
    title: "Printable Templates",
    href: "/printable-templates/",
    theme: "orange",
    showInHeader: true,
    children: [
      {
        title: "Invoice Template",
        href: "/printable-templates/simple-invoice-template/",
        description: "Printable blank invoice",
        status: "live",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Employee Availability Form",
        href: "/printable-templates/simple-employee-availability-form/",
        description: "Printable availability form",
        status: "live",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Weekly Employee Schedule",
        href: "/printable-templates/simple-weekly-employee-schedule-template/",
        description: "Printable staff schedule",
        status: "live",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Employee Timesheet",
        href: "/printable-templates/simple-employee-timesheet-template/",
        description: "Printable weekly timesheet",
        status: "live",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Daily Cash Drawer Reconciliation",
        href: "/printable-templates/simple-daily-cash-drawer-reconciliation-form/",
        description: "Printable cash balancing form",
        status: "live",
        showInMenu: true,
        featuredInMenu: true,
      },
      {
        title: "Field Service Work Order",
        href: "/printable-templates/simple-field-service-work-order-template/",
        description: "Printable service work order",
        status: "live",
        showInMenu: true,
        featuredInMenu: false,
      },
    ],
  },
];
