# Layout Templates

This directory contains reusable page-level templates for Worowo.

## `ToolLayout.astro`

Use for the default tool page structure:

- tool hero
- two-column `form` + `results` grid
- optional `content`, `faq`, and related tools sections

Best for:

- classic calculator pages
- editor + preview pages that should stay side by side on desktop

## `SinglePageToolLayout.astro`

Use for the single-page integrated tool pattern.

What it does:

- reuses `ToolLayout.astro` for SEO, hero, FAQ, and related tools
- makes the main tool body span across the full tool grid
- lets the page define one continuous custom body instead of separate left/right slots

Best for:

- long-form generators
- "fill above, preview below" workflows
- pages where the tool should feel like one continuous workspace instead of a split editor

Recommended structure inside the default slot:

1. top notice or intro
2. form card / editor sections
3. preview card
4. action row

Current example:

- use when a tool needs one continuous custom body but does not yet need a dedicated document-generator pattern

## `DocumentGeneratorLayout.astro`

Use for document-style generators that should feel like one vertical workspace:

- form / editor block on top
- live printable document preview below
- shared FAQ and related tools still handled by `ToolLayout.astro`

What it does:

- reuses `ToolLayout.astro`
- spans the full tool grid width
- provides `editor` and `preview` slots inside one continuous page flow

Best for:

- packing list generators
- invoice generators
- proforma / commercial invoice generators
- delivery receipt generators

Recommended companion components:

- a shared paper shell such as `src/components/document-generators/shared/DocumentPaper.astro`
- tool-specific `Form`, `Preview`, and specialized subcomponents like `ItemsTable`

Current example:

- `src/pages/packing-shipping/export-packing-list-generator/index.astro`

## Naming rule

When adding a new reusable template:

- use `Layout` suffix for page-level wrappers
- name by interaction pattern, not business domain
- prefer names like `SinglePageToolLayout` or `SplitPreviewToolLayout`
- avoid names tied to one specific tool such as `PackingListLayout`
