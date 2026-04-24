export type GeneratorPaperType = "letter" | "a4";

export type GeneratorConfig = {
  slug: string;
  pageTitle: string;
  description: string;
  category: string;
  defaultPaper: GeneratorPaperType;
  supportedPapers: GeneratorPaperType[];
  documentTitle: string;
  blankTemplateHref?: string;
  blankTemplateLabel?: string;
};

export type PackingListItem = {
  id: string;
  description: string;
  qty: string;
  unit: string;
  cartonNo: string;
  remarks: string;
};

export type PackingListFormState = {
  paper: GeneratorPaperType;
  packingListNo: string;
  date: string;
  referenceNo: string;
  shipperCompany: string;
  shipperAddress: string;
  shipperContact: string;
  consigneeName: string;
  consigneeAddress: string;
  consigneeContact: string;
  shipmentDate: string;
  totalCartons: string;
  totalWeight: string;
  items: PackingListItem[];
  generalRemarks: string;
};
