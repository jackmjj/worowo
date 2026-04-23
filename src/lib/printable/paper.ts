import type { OrientationType, PaperType } from "./types";

export type PaperModeKey =
  | "letter-portrait"
  | "letter-landscape"
  | "a4-portrait"
  | "a4-landscape";

export function getPaperModeKey(
  paper: PaperType,
  orientation: OrientationType
): PaperModeKey {
  return `${paper}-${orientation}` as PaperModeKey;
}

export const PAPER_DIMENSIONS: Record<
  PaperModeKey,
  { width: number; minHeight: number }
> = {
  "letter-portrait": { width: 816, minHeight: 1056 },
  "letter-landscape": { width: 1056, minHeight: 816 },
  "a4-portrait": { width: 794, minHeight: 1123 },
  "a4-landscape": { width: 1123, minHeight: 794 },
};

export const PAPER_PADDING: Record<PaperModeKey, string> = {
  "letter-portrait": "52px 48px 44px",
  "letter-landscape": "44px 48px 42px",
  "a4-portrait": "54px 48px 48px",
  "a4-landscape": "44px 52px 42px",
};

export const PAPER_LABELS: Record<PaperType, string> = {
  letter: "US Letter",
  a4: "A4",
};

export const PAGE_MARGINS: Record<PaperModeKey, string> = {
  "letter-portrait": "0.7in 0.65in 0.7in 0.65in",
  "letter-landscape": "0.65in 0.7in 0.65in 0.7in",
  "a4-portrait": "18mm 16mm 18mm 16mm",
  "a4-landscape": "16mm 18mm 16mm 18mm",
};

export const PAGE_CSS_RULES: Record<PaperModeKey, string> = {
  "letter-portrait": `@page { size: Letter portrait; margin: ${PAGE_MARGINS["letter-portrait"]}; }`,
  "letter-landscape": `@page { size: Letter landscape; margin: ${PAGE_MARGINS["letter-landscape"]}; }`,
  "a4-portrait": `@page { size: A4 portrait; margin: ${PAGE_MARGINS["a4-portrait"]}; }`,
  "a4-landscape": `@page { size: A4 landscape; margin: ${PAGE_MARGINS["a4-landscape"]}; }`,
};

export function getPreviewTitle(
  paper: PaperType,
  orientation: OrientationType
): string {
  return `${PAPER_LABELS[paper]} ${orientation[0].toUpperCase()}${orientation.slice(1)} Template`;
}

export function getPageCssRule(
  paper: PaperType,
  orientation: OrientationType
): string {
  return PAGE_CSS_RULES[getPaperModeKey(paper, orientation)];
}
