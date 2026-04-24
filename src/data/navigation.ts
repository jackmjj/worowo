import {
  categoryList,
  type CategoryKey,
  type CategoryTheme,
} from "./categoryDictionary";
import {
  getHeaderMenuToolsByCategory,
  type ToolStatus,
} from "./toolDictionary";

export type HeaderNavChild = {
  key: string;
  title: string;
  href: string;
  status: ToolStatus;
};

export type HeaderNavSection = {
  key: CategoryKey;
  title: string;
  href: string;
  theme: CategoryTheme;
  children: HeaderNavChild[];
};

export const headerNavigation: HeaderNavSection[] = categoryList
  .filter((category) => category.showInHeader)
  .map((category) => ({
    key: category.key as CategoryKey,
    title: category.title,
    href: category.href,
    theme: category.theme,
    children: getHeaderMenuToolsByCategory(category.key as CategoryKey).map((tool) => ({
      key: tool.key,
      title: tool.menuTitle || tool.shortTitle || tool.title,
      href: tool.href,
      status: tool.status,
    })),
  }));

export function getHeaderNavigationByCategory(categoryKey: CategoryKey) {
  return headerNavigation.find((section) => section.key === categoryKey);
}
