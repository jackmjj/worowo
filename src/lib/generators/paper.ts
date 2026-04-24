import type { GeneratorPaperType } from "./types";

export const GENERATOR_PAPER_LABELS: Record<GeneratorPaperType, string> = {
  letter: "US Letter",
  a4: "A4",
};

export const GENERATOR_PAPER_DIMENSIONS: Record<
  GeneratorPaperType,
  { width: number; minHeight: number }
> = {
  letter: { width: 816, minHeight: 1056 },
  a4: { width: 794, minHeight: 1123 },
};

export function getGeneratorPageRule(paper: GeneratorPaperType): string {
  if (paper === "a4") {
    return "@page { size: A4 portrait; margin: 18mm 16mm 18mm 16mm; }";
  }

  return "@page { size: Letter portrait; margin: 0.7in 0.65in 0.7in 0.65in; }";
}
