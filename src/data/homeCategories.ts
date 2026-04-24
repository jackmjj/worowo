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
  globe:
    '<circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" />',
  calculator:
    '<rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8" /><path d="M8 11h2" /><path d="M12 11h2" /><path d="M16 11h0" /><path d="M8 15h2" /><path d="M12 15h2" /><path d="M16 15h0" /><path d="M8 19h2" /><path d="M12 19h2" /><path d="M16 19h0" />',
  chartPie:
    '<path d="M12 3v9h9" /><path d="M20.5 14A8.5 8.5 0 1 1 10 3.2" />',
  badgePercent:
    '<path d="M12 3 6 6v6c0 4.5 2.8 7.1 6 9 3.2-1.9 6-4.5 6-9V6z" /><path d="m9 15 6-6" /><circle cx="9" cy="9" r="1" /><circle cx="15" cy="15" r="1" />',
  scale:
    '<path d="M12 4v16" /><path d="M5 8h14" /><path d="m7 8-3 5h6z" /><path d="m17 8-3 5h6z" /><path d="M8 20h8" />',
  ship:
    '<path d="M4 15h16l-2 4H6z" /><path d="M8 15V8h8v7" /><path d="M11 8V5h2v3" /><path d="m4 19 3 2 5-2 5 2 3-2" />',
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

export interface HomeTool {
  name: string;
  desc: string;
  href?: string;
  status?: string;
  icon: string;
}

export interface HomeCategory {
  title: string;
  badge: string;
  description: string;
  href: string;
  moreLabel: string;
  theme: {
    solid: string;
    soft: string;
    softBorder: string;
    badgeBg: string;
    badgeText: string;
    glow: string;
  };
  icon: string;
  moreIcon: string;
  tools: HomeTool[];
}

export const homeCategories: HomeCategory[] = [
  {
    title: "Quotes & Invoices",
    badge: "Documents",
    description: "Professional docs in seconds — ready to send or print.",
    href: "/quotes-invoices/",
    moreLabel: "More quotes & invoice tools",
    theme: {
      solid: "#2563eb",
      soft: "#eff6ff",
      softBorder: "#bfdbfe",
      badgeBg: "#e0ecff",
      badgeText: "#1d4ed8",
      glow: "rgba(37, 99, 235, 0.16)",
    },
    icon: makeIcon("fileText"),
    moreIcon: makeIcon("fileText"),
    tools: [
      {
        name: "Quote / Estimate Generator",
        desc: "Create a clean price quote to send to a client",
        status: "Coming soon",
        icon: makeIcon("filePen"),
      },
      {
        name: "Invoice Generator",
        desc: "Generate a professional invoice, ready to send or print",
        status: "Coming soon",
        icon: makeIcon("fileText"),
      },
      {
        name: "Proforma Invoice Generator",
        desc: "Issue a proforma before the sale is confirmed",
        status: "Coming soon",
        icon: makeIcon("fileCheck"),
      },
      {
        name: "Receipt Generator",
        desc: "Provide a simple proof of payment",
        status: "Coming soon",
        icon: makeIcon("receipt"),
      },
    ],
  },
  {
    title: "Packing & Shipping",
    badge: "Shipping",
    description: "Shipping paperwork without opening complex software.",
    href: "/packing-shipping/",
    moreLabel: "More packing & shipping tools",
    theme: {
      solid: "#1f8f42",
      soft: "#effaf2",
      softBorder: "#c8ebd1",
      badgeBg: "#e7f8eb",
      badgeText: "#228b44",
      glow: "rgba(34, 139, 68, 0.14)",
    },
    icon: makeIcon("package"),
    moreIcon: makeIcon("package"),
    tools: [
      {
        name: "Packing Slip Generator",
        desc: "List the items included in a shipment",
        status: "Coming soon",
        icon: makeIcon("listChecks"),
      },
      {
        name: "Packing List Generator",
        desc: "Detailed list for larger or multi-box shipments",
        href: "/packing-list-generator/",
        icon: makeIcon("boxes"),
      },
      {
        name: "Delivery Note Generator",
        desc: "Confirm what was delivered and when",
        status: "Coming soon",
        icon: makeIcon("truck"),
      },
      {
        name: "Commercial Invoice Generator",
        desc: "Future tool placeholder for shipping-related paperwork",
        status: "Coming soon",
        icon: makeIcon("globe"),
      },
    ],
  },
  {
    title: "Business Calculators",
    badge: "Calculators",
    description: "Fast calculators for profit margin, markup, break-even pricing, and landed cost.",
    href: "/business-calculators/",
    moreLabel: "More business calculators",
    theme: {
      solid: "#7c3aed",
      soft: "#f5efff",
      softBorder: "#decdfd",
      badgeBg: "#efe5ff",
      badgeText: "#6d28d9",
      glow: "rgba(124, 58, 237, 0.14)",
    },
    icon: makeIcon("calculator"),
    moreIcon: makeIcon("calculator"),
    tools: [
      {
        name: "Profit Margin Calculator",
        desc: "See how much profit you actually keep from each sale",
        href: "/calculators/profit-margin-calculator/",
        icon: makeIcon("chartPie"),
      },
      {
        name: "Markup Calculator",
        desc: "Set your selling price from your cost",
        status: "Coming soon",
        icon: makeIcon("badgePercent"),
      },
      {
        name: "Break-even Calculator",
        desc: "Find the minimum price needed to cover your costs",
        status: "Coming soon",
        icon: makeIcon("scale"),
      },
      {
        name: "Landed Cost Calculator",
        desc: "Include shipping, tax, and fees in your true unit cost",
        status: "Coming soon",
        icon: makeIcon("ship"),
      },
    ],
  },
  {
    title: "Printable Templates",
    badge: "Templates",
    description: "Download and print — no editing required.",
    href: "/printable-templates/",
    moreLabel: "More printable templates",
    theme: {
      solid: "#f97316",
      soft: "#fff5ed",
      softBorder: "#fed7aa",
      badgeBg: "#fff0e4",
      badgeText: "#ea580c",
      glow: "rgba(249, 115, 22, 0.14)",
    },
    icon: makeIcon("files"),
    moreIcon: makeIcon("fileText"),
    tools: [
      {
        name: "Simple Invoice Template",
        desc: "A clean A4 printable invoice sheet for billing customers",
        href: "/printable-templates/simple-invoice-template/",
        icon: makeIcon("fileText"),
      },
      {
        name: "Simple Packing List Template",
        desc: "Clean A4 printable packing list for shipping and export paperwork",
        href: "/printable-templates/simple-packing-list-template/",
        icon: makeIcon("clipboardList"),
      },
      {
        name: "Employee Availability Form",
        desc: "Printable weekly availability form for staff scheduling",
        href: "/printable-templates/simple-employee-availability-form/",
        icon: makeIcon("clipboardCheck"),
      },
      {
        name: "Employee Timesheet",
        desc: "Printable weekly timesheet for hours, breaks, and overtime",
        href: "/printable-templates/simple-employee-timesheet-template/",
        icon: makeIcon("receipt"),
      },
    ],
  },
];
