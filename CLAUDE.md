# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Official website for the Institute for Safety Problems of Nuclear Power Plants (ISP NPP), National Academy of Sciences of Ukraine. Built with Next.js 15 App Router and React 19. The UI is in Ukrainian (Cyrillic).

## Commands

```bash
npm run dev     # development server at localhost:3000
npm run build   # production build
npm run lint    # ESLint check
npm start       # production server
```

## Architecture

**Framework:** Next.js 15 App Router (not Pages Router). All routes live under `app/`.

**Component layers (Atomic Design):**
- `app/components/molecules/` — composed UI blocks (Header, Nav, Footer, Slider, BoxNanu, BoxAdditional)
- `app/components/templates/` — full-page layout wrappers

**Main layout:** `app/components/templates/main-layout/MainLayout.tsx` wraps every page and conditionally renders header, navigation, footer, and sidebar. Pages import this directly.

**Navigation:** The menu structure (Ukrainian labels, nested subpages) is defined in `app/components/molecules/Nav/navItems.ts`. Desktop and mobile nav are split into separate components (`DesktopNav.tsx`, `MobileNav.tsx`) with Framer Motion animations on mobile.

**Styling:**
- Tailwind CSS 4 via `@tailwindcss/postcss` (configured in `postcss.config.mjs`)
- CSS Modules for component-scoped styles (e.g., `Header.module.css`)
- Global styles and CSS custom properties in `app/globals.css`
- Root background is a blue-to-gray gradient; font is Roboto (Cyrillic subset) from Google Fonts

**Path aliases** (defined in `tsconfig.json`):
- `@/*` → repo root
- `@app/*` → `./app`
- `@atoms/*` → `./app/components/atoms`
- `@molecules/*` → `./app/components/molecules`

**i18n:** A `next-intl` config is stubbed but commented out in `app/config.ts`. The site is currently Ukrainian-only; do not activate multi-language without uncommenting and wiring up that config.

**Key UI dependencies:** `@headlessui/react`, `@radix-ui/react-dropdown-menu` / `react-menubar`, `@react-aria/button` / `@react-aria/menu`, `framer-motion`, `clsx` / `classnames`.
