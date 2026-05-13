import { getPreviewTitle } from "./paper";
import type { PrintableTemplateConfig } from "./types";

export const printableTemplateConfigs: PrintableTemplateConfig[] = [
  {
    slug: "simple-invoice-template",
    pageTitle: "Simple Invoice Template",
    printTitle: "INVOICE",
    description:
      "A printable invoice template for billing customers, listing items, recording totals, and saving clean invoice PDFs for small business or freelance use.",
    category: "Quote & Billing",
    seoTitle: "Simple Invoice Template | worowo",
    canonical: "https://www.worowo.com/printable-templates/simple-invoice-template/",
    pageEyebrow: "Printable Template",
    defaultPaper: "a4",
    defaultOrientation: "portrait",
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["portrait"],
    previewPaper: "a4",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("a4", "portrait"),
    previewDescription:
      "Preview the full printable page below. This template is available in both US Letter and A4 print formats.",
    recommendedPaperNote: "Recommended paper size: A4",
    guideSections: [
      {
        title: "How To Use This Invoice Template",
        body:
          "Use this blank invoice template when you need a clean billing form that can be printed, filled by hand, or saved as a PDF. It works well for simple customer billing, freelance work, and small business records.",
        bullets: [
          "Add seller and customer details before listing billable items.",
          "Write clear descriptions, quantities, rates, and totals.",
          "Keep one copy for your accounting records and one for the customer.",
        ],
      },
      {
        title: "When A Printable Invoice Helps",
        body:
          "A printable invoice is useful when you need a fast offline document, a backup billing form, or a simple paper workflow without entering information into a full invoice generator.",
      },
    ],
    faqItems: [
      {
        question: "Can I print this invoice template as PDF?",
        answer:
          "Yes. Choose A4 or US Letter, then use the print button or the full printable page to print the invoice or save it as a PDF.",
      },
      {
        question: "Is this invoice template free to use?",
        answer:
          "Yes. You can use this printable invoice template for small business, freelance, and everyday billing needs.",
      },
      {
        question: "Should I use this template or the invoice generator?",
        answer:
          "Use this template for a blank form you can fill by hand. Use the invoice generator when you want editable fields, automatic totals, and a completed digital invoice.",
      },
    ],
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
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["portrait"],
    previewPaper: "a4",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("a4", "portrait"),
    previewDescription:
      "Preview the full printable page below. This template is available in both US Letter and A4 print formats.",
    recommendedPaperNote: "Recommended paper size: A4",
    guideSections: [
      {
        title: "How To Use This Packing List Template",
        body:
          "Use this printable packing list template when you need a clean blank form for shipment records, carton contents, and delivery paperwork. You can print it first and complete it by hand, or save the page as PDF for later use.",
        bullets: [
          "Add shipper and consignee details clearly.",
          "List each item, quantity, carton count, and remarks.",
          "Keep one copy for shipping records and one for the buyer or receiver.",
        ],
      },
      {
        title: "When To Use A Printable Packing List",
        body:
          "A blank packing list template is useful when your team needs a flexible paper-based document for warehouse work, local delivery, export prep, or manual shipment checks.",
        bullets: [
          "Ecommerce and wholesale order packing",
          "Manual warehouse checks before dispatch",
          "Local delivery handover paperwork",
          "Backup documentation for export shipments",
        ],
      },
    ],
    faqItems: [
      {
        question: "Can I print this packing list template as PDF?",
        answer:
          "Yes. Choose A4 or US Letter, then use your browser print dialog to print it or save it as a PDF.",
      },
      {
        question: "Is this packing list template free to use?",
        answer:
          "Yes. You can use this printable packing list template for ecommerce, shipping, warehouse, and export documentation needs.",
      },
      {
        question: "What should I include on a packing list?",
        answer:
          "A packing list usually includes shipper and consignee details, shipment reference, item descriptions, quantities, carton counts, and remarks.",
      },
      {
        question: "Should I use this template or the online packing list generator?",
        answer:
          "Use this template if you want a blank printable form to fill by hand. Use the online packing list generator if you want structured input and a completed digital document.",
      },
    ],
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
    defaultPaper: "a4",
    defaultOrientation: "landscape",
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["landscape"],
    previewPaper: "a4",
    previewOrientation: "landscape",
    previewTitle: getPreviewTitle("a4", "landscape"),
    previewDescription:
      "Preview the full printable page below. This template is available in both US Letter and A4 print formats.",
    recommendedPaperNote: "Recommended paper size: US Letter",
    guideSections: [
      {
        title: "How To Use This Weekly Schedule Template",
        body:
          "Use this weekly employee schedule template to plan shifts, coverage, and days off before posting a staff schedule. The landscape layout gives each weekday enough room for employee names, roles, and notes.",
        bullets: [
          "Write the week range at the top of the form.",
          "Add employee names, roles, and shift times by day.",
          "Use notes for coverage reminders, approvals, or changes.",
        ],
      },
      {
        title: "When A Printable Schedule Works Best",
        body:
          "A printable schedule is helpful for retail, food service, salons, field teams, and small offices that need a simple staff planning sheet posted in a shared workspace.",
      },
    ],
    faqItems: [
      {
        question: "Can I print the weekly schedule on A4 paper?",
        answer:
          "Yes. The template supports both US Letter and A4 in landscape orientation.",
      },
      {
        question: "Can I save the schedule as PDF?",
        answer:
          "Yes. Use the print button and choose Save as PDF from your browser print dialog.",
      },
      {
        question: "Is this schedule editable online?",
        answer:
          "This is a blank printable template. Print it or save it as PDF, then fill it in by hand or annotate the PDF in another app.",
      },
    ],
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
    defaultPaper: "a4",
    defaultOrientation: "portrait",
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["portrait"],
    previewPaper: "a4",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("a4", "portrait"),
    previewDescription:
      "Preview the full printable page below. This template is available in both US Letter and A4 print formats.",
    recommendedPaperNote: "Recommended paper size: US Letter",
    guideSections: [
      {
        title: "How To Use This Timesheet Template",
        body:
          "Use this employee timesheet template to record daily start times, meal breaks, end times, regular hours, overtime, and approvals for one work week.",
        bullets: [
          "Fill in the week beginning and ending dates.",
          "Record each workday's time in, meal break, time out, and notes.",
          "Have the employee and supervisor sign the completed sheet.",
        ],
      },
      {
        title: "When A Printable Timesheet Helps",
        body:
          "A blank timesheet is useful for small teams, temporary work, field crews, and backup payroll records when a paper sign-off is easier than a digital time clock.",
      },
    ],
    faqItems: [
      {
        question: "Can this timesheet track overtime?",
        answer:
          "Yes. The weekly table includes regular hours and overtime hours columns for each day.",
      },
      {
        question: "Can I print the timesheet on A4?",
        answer:
          "Yes. You can switch between US Letter and A4 before printing.",
      },
      {
        question: "Does this template calculate total hours automatically?",
        answer:
          "No. This is a printable blank form. Enter totals manually after reviewing the daily entries.",
      },
    ],
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
    defaultPaper: "a4",
    defaultOrientation: "portrait",
    supportedPapers: ["letter", "a4"],
    supportedOrientations: ["portrait"],
    previewPaper: "a4",
    previewOrientation: "portrait",
    previewTitle: getPreviewTitle("a4", "portrait"),
    previewDescription:
      "Preview the full printable page below. This template is available in both US Letter and A4 print formats.",
    recommendedPaperNote: "Recommended paper size: US Letter",
    guideSections: [
      {
        title: "How To Use This Work Order Template",
        body:
          "Use this field service work order template to document customer details, job timing, work performed, materials used, charges, and completion sign-off during on-site service work.",
        bullets: [
          "Add customer, technician, and service address details.",
          "Record the requested service, labor time, materials, and notes.",
          "Collect technician and customer signatures when the job is complete.",
        ],
      },
      {
        title: "When A Printable Work Order Helps",
        body:
          "A printable work order is useful for repair, cleaning, maintenance, HVAC, plumbing, and other field service jobs where a simple paper record is needed on site.",
      },
    ],
    faqItems: [
      {
        question: "Can I print this work order as PDF?",
        answer:
          "Yes. Choose the paper size, then print the work order or save it as a PDF from your browser.",
      },
      {
        question: "Does this work order include materials and labor?",
        answer:
          "Yes. It includes sections for job details, work performed, materials used, charges, and signatures.",
      },
      {
        question: "Is this template suitable for field service teams?",
        answer:
          "Yes. It is designed for simple on-site service documentation and customer acknowledgment.",
      },
    ],
  },
];

export const printableTemplateConfigMap = Object.fromEntries(
  printableTemplateConfigs.map((config) => [config.slug, config])
) as Record<string, PrintableTemplateConfig>;

export function getPrintableTemplateConfig(slug: string): PrintableTemplateConfig {
  return printableTemplateConfigMap[slug];
}
