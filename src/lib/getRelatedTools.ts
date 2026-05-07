import {
  toolDictionary,
  type ToolDictionaryItem,
  type ToolKey,
} from "../data/toolDictionary";

function isLiveTool(tool: ToolDictionaryItem | undefined): tool is ToolDictionaryItem {
  return Boolean(tool && tool.status === "live");
}

export function getRelatedTools(currentToolKey: ToolKey, limit = 4): ToolDictionaryItem[] {
  const currentTool = toolDictionary[currentToolKey];

  if (!currentTool) {
    return [];
  }

  if (currentTool.relatedToolKeys?.length) {
    return currentTool.relatedToolKeys
      .map((key) => toolDictionary[key as ToolKey])
      .filter(isLiveTool)
      .slice(0, limit);
  }

  const sameCategoryTools = Object.values(toolDictionary)
    .filter((tool) => {
      return (
        tool.categoryKey === currentTool.categoryKey &&
        tool.key !== currentTool.key &&
        tool.status === "live"
      );
    })
    .sort((a, b) => a.order - b.order);

  const before = sameCategoryTools
    .filter((tool) => tool.order < currentTool.order)
    .sort((a, b) => b.order - a.order);

  const after = sameCategoryTools
    .filter((tool) => tool.order > currentTool.order)
    .sort((a, b) => a.order - b.order);

  const related: ToolDictionaryItem[] = [];
  const maxRounds = Math.max(before.length, after.length);

  for (let i = 0; i < maxRounds; i += 1) {
    if (after[i]) {
      related.push(after[i]);
    }

    if (before[i]) {
      related.push(before[i]);
    }

    if (related.length >= limit) {
      break;
    }
  }

  return related.slice(0, limit);
}
