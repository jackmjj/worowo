import { getPreviewTitle } from "./paper";
import type { PrintableTemplateConfig } from "./types";

export const printableTemplateConfigs: PrintableTemplateConfig[] = [
  {
    slug: "simple-invoice-template",
    pageTitle: "Simple Invoice Template",
    printTitle: "INVOICE",
    description:
      "A printable invoice template for billing customers, listing items, recording totals, and saving clean invoice PDFs for small business or freelance use.",
    category: "Retail Cash & Store Operations",
    seoTitle: "Simple Invoice Template | worowo",
    canonical: "https://www.worowo.com/printable-templates/simple-invoice-template/",
    pageEyebrow: "Printable Template",
    defaultPaper: "a4",
    defaultOrientation: "portrait",
    supportedPapers: ["a4", "letter"],
    supportedOrientations: ["portrait"],
    previewPaper: "a4",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("a4", "portrait"),
    previewDescription:
      "Preview the invoice below, then open the print page to switch between A4 and US Letter before printing or saving as PDF.",
  },
  {
    slug: "simple-packing-list-template",
    pageTitle: "Simple Packing List Template",
    printTitle: "PACKING LIST",
    description:
      "Free simple packing list template in a clean printable format. Print it, fill it by hand, or save it as PDF for ecommerce, shipping, trading, and export use.",
    category: "Packing & Shipping",
    seoTitle: "Simple Packing List Template | worowo",
    canonical:
      "https://www.worowo.com/printable-templates/simple-packing-list-template/",
    pageEyebrow: "Printable Template",
    defaultPaper: "a4",
    defaultOrientation: "portrait",
    supportedPapers: ["a4", "letter"],
    supportedOrientations: ["portrait"],
    previewPaper: "a4",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("a4", "portrait"),
    previewDescription:
      "Preview the packing list below, then open the print page to switch paper size before printing or saving as PDF.",
  },
  {
    slug: "simple-employee-availability-form",
    pageTitle: "Simple Employee Availability Form",
    printTitle: "EMPLOYEE AVAILABILITY FORM",
    description:
      "Printable employee availability form for recording weekly work availability, preferred shifts, and unavailable times. Great for part-time staff, retail stores, restaurants, and service businesses.",
    category: "Employee Scheduling & HR",
    seoTitle:
      "Simple Employee Availability Form Template | Printable Weekly Work Availability",
    canonical:
      "https://www.worowo.com/printable-templates/simple-employee-availability-form/",
    pageEyebrow: "Printable Template",
    defaultPaper: "letter",
    defaultOrientation: "portrait",
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["portrait"],
    previewPaper: "letter",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("letter", "portrait"),
    previewDescription:
      "Preview the availability form below. The print page supports both US Letter and A4 output.",
  },
  {
    slug: "simple-weekly-employee-schedule-template",
    pageTitle: "Simple Weekly Employee Schedule Template",
    printTitle: "WEEKLY EMPLOYEE SCHEDULE",
    description:
      "Printable weekly employee schedule template for assigning shifts, tracking days off, and organizing staff coverage. Ideal for retail stores, salons, restaurants, and small service teams.",
    category: "Employee Scheduling & HR",
    seoTitle:
      "Simple Weekly Employee Schedule Template | Printable Staff Shift Schedule",
    canonical:
      "https://www.worowo.com/printable-templates/simple-weekly-employee-schedule-template/",
    pageEyebrow: "Printable Template",
    defaultPaper: "letter",
    defaultOrientation: "landscape",
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["landscape"],
    previewPaper: "letter",
    previewOrientation: "landscape",
    previewTitle: getPreviewTitle("letter", "landscape"),
    previewDescription:
      "Preview the schedule below. The print page supports both US Letter and A4 in landscape format.",
  },
  {
    slug: "simple-employee-timesheet-template",
    pageTitle: "Simple Employee Timesheet Template",
    printTitle: "EMPLOYEE TIMESHEET",
    description:
      "Printable employee timesheet template for tracking daily hours, breaks, overtime, and total weekly hours. Useful for payroll records, shift work, and small business time tracking.",
    category: "Employee Scheduling & HR",
    seoTitle:
      "Simple Employee Timesheet Template | Printable Weekly Time Sheet",
    canonical:
      "https://www.worowo.com/printable-templates/simple-employee-timesheet-template/",
    pageEyebrow: "Printable Template",
    defaultPaper: "letter",
    defaultOrientation: "portrait",
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["portrait"],
    previewPaper: "letter",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("letter", "portrait"),
    previewDescription:
      "Preview the timesheet below. The print page supports both US Letter and A4 output.",
  },
  {
    slug: "simple-daily-cash-drawer-reconciliation-form",
    pageTitle: "Simple Daily Cash Drawer Reconciliation Form",
    printTitle: "DAILY CASH DRAWER RECONCILIATION",
    description:
      "Printable daily cash drawer reconciliation form for recording starting cash, cash sales, card payments, checks, payouts, and over or short totals at closing.",
    category: "Retail Cash & Store Operations",
    seoTitle:
      "Simple Daily Cash Drawer Reconciliation Form | Printable Cash Count Sheet",
    canonical:
      "https://www.worowo.com/printable-templates/simple-daily-cash-drawer-reconciliation-form/",
    pageEyebrow: "Printable Template",
    defaultPaper: "letter",
    defaultOrientation: "portrait",
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["portrait"],
    previewPaper: "letter",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("letter", "portrait"),
    previewDescription:
      "Preview the reconciliation form below. The print page supports both US Letter and A4 output.",
  },
  {
    slug: "simple-field-service-work-order-template",
    pageTitle: "Simple Field Service Work Order Template",
    printTitle: "FIELD SERVICE WORK ORDER",
    description:
      "Printable field service work order template for recording job details, labor hours, materials used, service notes, and customer sign-off on site. Ideal for repair, cleaning, HVAC, plumbing, and maintenance businesses.",
    category: "Field Service & Job Forms",
    seoTitle:
      "Simple Field Service Work Order Template | Printable Job Service Form",
    canonical:
      "https://www.worowo.com/printable-templates/simple-field-service-work-order-template/",
    pageEyebrow: "Printable Template",
    defaultPaper: "letter",
    defaultOrientation: "portrait",
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["portrait"],
    previewPaper: "letter",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("letter", "portrait"),
    previewDescription:
      "Preview the work order below. The print page supports both US Letter and A4 output.",
  },
];

export const printableTemplateConfigMap = Object.fromEntries(
  printableTemplateConfigs.map((config) => [config.slug, config])
) as Record<string, PrintableTemplateConfig>;

export function getPrintableTemplateConfig(slug: string): PrintableTemplateConfig {
  return printableTemplateConfigMap[slug];
}
