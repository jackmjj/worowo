export type PaperType = "letter" | "a4";
export type OrientationType = "portrait" | "landscape";

export type PrintableTemplateConfig = {
  slug: string;
  pageTitle: string;
  printTitle: string;
  description: string;
  category: string;
  seoTitle?: string;
  canonical?: string;
  pageEyebrow?: string;
  defaultPaper: PaperType;
  defaultOrientation: OrientationType;
  supportedPapers: PaperType[];
  supportedOrientations: OrientationType[];
  previewPaper?: PaperType;
  previewOrientation?: OrientationType;
  previewTitle?: string;
  previewDescription?: string;
};
