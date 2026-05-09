import { toolDictionary, type ToolKey, type ToolStatus, type ToolType } from "./toolDictionary";

export type RelatedToolLink = {
  key: ToolKey;
  title: string;
  href: string;
  type: ToolType;
  status: ToolStatus;
};

export type RelatedToolCard = RelatedToolLink & {
  name: string;
  desc: string;
};

export function getBlankTemplateForTool(toolKey: ToolKey): RelatedToolLink | null {
  const tool = toolDictionary[toolKey];
  if (!tool?.blankTemplateKey) return null;

  const related = toolDictionary[tool.blankTemplateKey as ToolKey];
  if (!related) return null;

  return {
    key: related.key as ToolKey,
    title: related.shortTitle || related.title,
    href: related.href,
    type: related.type,
    status: related.status,
  };
}

export function getGeneratorForTool(toolKey: ToolKey): RelatedToolLink | null {
  const tool = toolDictionary[toolKey];
  if (!tool?.generatorKey) return null;

  const related = toolDictionary[tool.generatorKey as ToolKey];
  if (!related) return null;

  return {
    key: related.key as ToolKey,
    title: related.shortTitle || related.title,
    href: related.href,
    type: related.type,
    status: related.status,
  };
}

export function getRelatedToolsForTool(toolKey: ToolKey): RelatedToolCard[] {
  const tool = toolDictionary[toolKey];
  if (!tool?.relatedToolKeys?.length) return [];

  return tool.relatedToolKeys
    .map((relatedKey) => toolDictionary[relatedKey as ToolKey])
    .filter((related): related is NonNullable<typeof related> => Boolean(related))
    .map((related) => ({
      key: related.key as ToolKey,
      title: related.shortTitle || related.title,
      name: related.shortTitle || related.title,
      href: related.href,
      desc: related.description,
      type: related.type,
      status: related.status,
    }));
}
