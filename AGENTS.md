# Agent Instructions for ISP Next.js Project

## Project Overview

This is an institutional website for the Institute for Safety Problems (ISP) built with **Next.js 16** and **React 19**. The site is bilingual (Ukrainian `uk` / English `en`) using `next-intl` v4.9.1 with Ukraine as the default locale. Content is organized across multiple sections: About, Publications, QMS, Structure, and more.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **UI:** React 19, TypeScript 5
- **Styling:** Tailwind CSS 4.1 + CSS Modules + PostCSS
- **i18n:** next-intl 4.9.1 (server-side routing with `as-needed` prefix mode)
- **Component Libraries:** Radix UI, Headless UI, React Aria, Heroicons
- **Animations:** Framer Motion
- **Linting:** ESLint 9

## Build & Development

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Check code with ESLint
```

## Architecture

### Localization with next-intl

- **Configuration:** [app/i18n/routing.ts](app/i18n/routing.ts), [app/i18n/request.ts](app/i18n/request.ts), [app/i18n/navigation.ts](app/i18n/navigation.ts)
- **Routes:** Dynamic segment `[locale]` in [app/[locale]/layout.tsx](app/[locale]/layout.tsx)
- **Translations:** JSON files in [messages/](messages/) (`en.json`, `uk.json`)
- **Prefix mode:** `as-needed` → URLs show `/en/path` only for English; root is Ukrainian
- **Middleware:** [proxy.ts](proxy.ts) handles i18n route matching

**Server Components:** Use `getTranslations()` with namespaced keys
```typescript
const t = getTranslations('header');
```

**Client Components:** Use `useTranslations()` and `useLocale()` hooks + `"use client"` directive

### Component Structure (Atomic Design)

- **Molecules:** [app/components/molecules/](app/components/molecules/) — Reusable interactive units (Header, Footer, Nav, Slider, etc.)
- **Templates:** [app/components/templates/](app/components/templates/) — Layout composition (MainLayout)
- **Pages:** [app/[locale]/](app/[locale]/) — Route-level pages as async Server Components

**Component Patterns:**
- Default: Async Server Component (no `"use client"`)
- Add `"use client"` only for interactive features (hooks, event handlers)
- Colocate CSS Modules with components (e.g., `Header.tsx` + `Header.module.css`)
- Use CSS Modules for component-scoped styles; Tailwind for utilities
- Combine both: `className={clsx(styles.container, "flex md:flex-row")}` (using `clsx` or `classnames`)

### Path Aliases

Import components cleanly using configured aliases in [tsconfig.json](tsconfig.json):
```typescript
import Header from '@molecules/Header/Header';
import { MainLayout } from '@templates';
```

## Naming & File Conventions

- **Files:** PascalCase for components, camelCase for utilities/hooks
- **Folders:** kebab-case for route segments (e.g., `areas-of-activity`, `council-of-young-scientists`)
- **CSS Modules:** `ComponentName.module.css` colocated with component
- **Translations:** Namespaced keys in JSON (e.g., `{"header": {...}, "footer": {...}}`)

## Common Development Tasks

### Add a New Page

1. Create folder in [app/[locale]/](app/[locale]/): `new-section/page.tsx`
2. Export async Server Component that fetches translations with `getTranslations('section-namespace')`
3. Use `MainLayout` template for consistent layout
4. Add translation keys to [messages/en.json](messages/en.json) and [messages/uk.json](messages/uk.json)

### Add a New Reusable Component

1. Create folder in [app/components/molecules/](app/components/molecules/): `ComponentName/ComponentName.tsx`
2. Add `"use client"` if component uses hooks/events, otherwise use Server Component
3. Create colocated CSS Module: `ComponentName.module.css`
4. Export from [app/components/templates/index.ts](app/components/templates/index.ts) for easy importing
5. Use `useTranslations('component-namespace')` in client components
6. Use `getTranslations('component-namespace')` in server components

### Update Translations

1. Edit JSON in [messages/en.json](messages/en.json) and [messages/uk.json](messages/uk.json)
2. Use namespaced keys: `{"header": {"title": "..."}, "footer": {...}}`
3. In components, call `t('namespace')` or use nested key paths like `t('header.title')`

### Add a New Route with Nested Sections

Example structure for new section with subsections:
```
app/[locale]/new-section/
  page.tsx              # Main page
  subsection-1/page.tsx
  subsection-2/page.tsx
```

Create a shared layout with consistent styling using `MainLayout` template.

## Important Patterns & Gotchas

1. **Locale-first routing:** Always use the `[locale]` segment. Routes like `app/page.tsx` are outside i18n—don't use them for main content.

2. **Server vs. Client Components:** Keep Server Components when possible (default); only add `"use client"` for interactivity. Lean on `getTranslations()` for data fetching.

3. **CSS Module scope:** CSS Modules are locally scoped. Use `clsx()` to combine modules with Tailwind utilities in className.

4. **Responsive design:** Use Tailwind breakpoints (`md:`, `lg:`) consistently. Check existing Nav/Header for mobile/desktop patterns (e.g., `hidden md:flex`).

5. **Framer Motion usage:** Header and Nav components use Framer Motion for animations. Import from `framer-motion` and wrap interactive elements in `motion.*` tags.

6. **i18n request context:** All Server Components have access to locale via `getLocale()` and translations via `getTranslations()`. These come from `next-intl/server` and require middleware setup in [proxy.ts](proxy.ts).

7. **Href locale switching:** When creating links to switch locales, use the `setLocale()` helper or manually navigate with locale segment (e.g., `/en/path` or `/uk/path`).

8. **TypeScript strict mode:** Project uses `strict: true`—always add explicit types for function parameters and return values.

## Files to Reference

- **Layout & i18n setup:** [app/[locale]/layout.tsx](app/[locale]/layout.tsx)
- **Navigation:** [app/components/molecules/Nav/](app/components/molecules/Nav/)
- **Header with locale switcher:** [app/components/molecules/Header/Header.tsx](app/components/molecules/Header/Header.tsx)
- **Page example with data fetching:** [app/[locale]/page.tsx](app/[locale]/page.tsx)
- **Template example:** [app/components/templates/main-layout/MainLayout.tsx](app/components/templates/main-layout/MainLayout.tsx)
- **Routing config:** [next.config.ts](next.config.ts), [app/i18n/routing.ts](app/i18n/routing.ts)
- **Translations:** [messages/en.json](messages/en.json), [messages/uk.json](messages/uk.json)
