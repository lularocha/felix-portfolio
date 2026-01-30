# Claude Context — Lula Rocha Portfolio

This document provides context for AI assistants and developers working on this portfolio project.

## Project Overview

Personal portfolio website for **Lula Rocha** — a developer and designer. Built with Astro and Tailwind CSS for optimal performance and developer experience.

**Live Repository:** https://github.com/lularocha/felix-portfolio
**Owner:** @lularocha
**Contact:** lularocha@protonmail.com | https://x.com/lularocha

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Astro** | 5.17.0 | Static site framework |
| **Tailwind CSS** | 4.1.18 | Utility-first styling |
| **TypeScript** | strict mode | Type safety |
| **Node.js** | 25.2.1 | Runtime |
| **npm** | 11.6.2 | Package manager |

### Key Integrations
- `@astrojs/sitemap` — Automatic sitemap generation
- `@tailwindcss/vite` — Tailwind CSS v4 Vite plugin
- Content Collections — Type-safe Markdown content

---

## Project Architecture

### Directory Structure

```
felix-portfolio/
├── public/
│   ├── favicon.ico          # Astro default favicon
│   ├── my-favicon.ico       # Custom favicon (ACTIVE)
│   ├── favicon.svg          # SVG fallback
│   └── images/
│       └── projects/        # Project thumbnails (currently empty)
├── src/
│   ├── components/
│   │   ├── Header.astro     # Sticky nav with mobile menu
│   │   ├── Hero.astro       # Full-viewport hero section
│   │   ├── Projects.astro   # Projects grid wrapper
│   │   ├── ProjectCard.astro# Individual project card
│   │   ├── About.astro      # Bio + skills section
│   │   ├── Contact.astro    # Social links (X, email)
│   │   └── Footer.astro     # Copyright + social icons
│   ├── content/
│   │   ├── config.ts        # Content collection schema
│   │   └── projects/        # 6 Markdown project files
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, SEO meta tags
│   ├── pages/
│   │   └── index.astro      # Main single-page site
│   └── styles/
│       └── global.css       # Tailwind + custom CSS variables
├── my-docs/                 # Project documentation (tracked in git)
│   ├── implementation-notes.txt
│   └── initial-prompt.txt
├── plan.md                  # Implementation plan & tech decisions
└── astro.config.mjs         # Astro configuration
```

### Component Hierarchy

```
BaseLayout.astro
└── index.astro
    ├── Header.astro
    ├── Hero.astro
    ├── Projects.astro
    │   └── ProjectCard.astro (×6)
    ├── About.astro
    ├── Contact.astro
    └── Footer.astro
```

---

## Design System

### Color Palette (Dark Theme)

Defined in `src/styles/global.css` using Tailwind v4 `@theme`:

```css
--color-bg: #0a0a0b              /* Main background */
--color-bg-card: #141416         /* Card background */
--color-bg-card-hover: #1c1c1f   /* Card hover state */
--color-text-primary: #f5f5f7    /* Main text */
--color-text-secondary: #a1a1aa  /* Muted text */
--color-accent: #818cf8          /* Indigo accent */
--color-accent-hover: #a5b4fc    /* Lighter accent */
--color-border: #27272a          /* Subtle borders */
```

### Typography

- **Font:** Inter (Google Fonts) — 400, 500, 600, 700 weights
- **Fallback:** `ui-sans-serif, system-ui, -apple-system, sans-serif`
- **Hierarchy:**
  - Hero H1: `text-5xl sm:text-7xl lg:text-8xl` (80–128px)
  - Section H2: `text-3xl sm:text-4xl` (36–48px)
  - Body: `text-lg` (18px)

### Layout Patterns

- **Max width:** `max-w-6xl` (1152px) for content containers
- **Padding:** `px-6 py-24` for sections
- **Grid:** Projects use `grid sm:grid-cols-2 lg:grid-cols-3` (responsive 1→2→3 columns)
- **Spacing:** `gap-6` for grids, `gap-4` for flex rows

### Animations

- **Fade-in on scroll:** `.fade-in` class + IntersectionObserver (threshold: 0.1)
- **Transitions:** `transition-colors` (200ms default) for hover states
- **Bounce:** Scroll indicator uses `animate-bounce`

---

## Content Management

### Projects Collection

Located in `src/content/projects/` — each project is a Markdown file with frontmatter:

```yaml
---
title: "Project Name"
description: "Brief description (1 sentence)"
tags: ["React", "TypeScript", "Tailwind CSS"]
url: "https://github.com/lularocha"  # Optional
image: "/images/projects/thumb.webp" # Optional
date: 2025-12-01
---
```

**Schema:** Defined in `src/content/config.ts`
**Display:** Sorted by date (newest first) in `Projects.astro`
**Current count:** 6 placeholder projects

### Images

- **Format preference:** WebP or AVIF for web, with `loading="lazy"`
- **Optimization:** Use Astro's built-in `astro:assets` for image optimization
- **Placeholder logic:** If no image provided, ProjectCard shows a gradient placeholder with first letter of title

---

## Code Style Preferences

### General Principles

1. **Simplicity over abstraction** — No premature optimization or over-engineering
2. **Minimal JavaScript** — Astro renders to static HTML; only use JS where necessary (mobile menu, scroll observer)
3. **Semantic HTML** — Use `<header>`, `<main>`, `<section>`, `<footer>` for accessibility
4. **Mobile-first** — Start with mobile styles, add breakpoints with `sm:`, `md:`, `lg:`

### Astro Components

- **No empty frontmatter** — If a component has no props/logic, use `---\n\n---` or omit entirely
- **Props interface** — Use TypeScript `interface Props {}` for type safety
- **Class organization** — Group Tailwind classes logically: layout → spacing → typography → colors → effects

**Example:**
```astro
class="flex items-center gap-4 px-6 py-3 text-sm font-medium text-bg bg-accent hover:bg-accent-hover transition-colors"
```

### Tailwind Usage

- **Custom properties** — Define reusable values in `@theme` (not arbitrary values)
- **Color references** — Use `text-accent`, `bg-bg-card` (defined in global.css)
- **Avoid inline styles** — Use Tailwind classes exclusively
- **Responsive breakpoints:** `sm:` (640px), `md:` (768px), `lg:` (1024px)

### File Naming

- **Components:** PascalCase (e.g., `ProjectCard.astro`)
- **Content files:** kebab-case with numeric prefix (e.g., `01-ecommerce-dashboard.md`)
- **Layouts:** PascalCase (e.g., `BaseLayout.astro`)

---

## Development Workflow

### Commands

```bash
npm run dev      # Start dev server (http://localhost:4321)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

### Git Workflow

1. **Branch:** `main` (no feature branches currently)
2. **Commit format:** Imperative mood, descriptive summary
3. **Co-authorship:** Include `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>` (or Sonnet 4.5)
4. **Pre-commit checks:** Review staged files with `git diff --cached --stat` before committing
5. **Push:** Always push to `origin/main` after committing

### Security Rules

**Never commit:**
- `.env` files (already in `.gitignore`)
- API keys, credentials, passwords
- `*.pem` files
- `.DS_Store` (macOS metadata)

**Always review** staged changes before committing to catch sensitive data.

---

## Key Configuration Files

### `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://felix-portfolio.netlify.app',  // For sitemap generation
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
```

### `src/styles/global.css`

- Imports Tailwind CSS v4 with `@import "tailwindcss"`
- Defines custom theme variables in `@theme {}`
- Sets global styles (smooth scrolling, font antialiasing, selection color)
- Includes `.fade-in` animation classes

### `tsconfig.json`

- Extends `astro/tsconfigs/strict` for maximum type safety
- Includes all `.astro` files and TypeScript files
- Excludes `dist/` from compilation

---

## SEO & Meta Tags

Located in `src/layouts/BaseLayout.astro`:

- **Title:** `"Lula Rocha — Developer & Designer"`
- **Description:** `"Personal portfolio of Lula Rocha — a developer and designer crafting modern digital experiences."`
- **Open Graph:** Image at `/og-image.png` (currently missing — placeholder reference)
- **Twitter Card:** `summary_large_image`
- **Canonical URL:** Auto-generated from `Astro.site` + `Astro.url.pathname`
- **Sitemap:** Auto-generated at `/sitemap-index.xml`

---

## Future Enhancements

### Planned Improvements (not yet implemented)

1. **Add OG image** — Create `/public/og-image.png` (1200×630px) for social previews
2. **Real project images** — Replace gradient placeholders with actual screenshots
3. **About section photo** — Replace "LR" placeholder with real avatar
4. **Analytics** — Add privacy-friendly analytics (e.g., Plausible, Fathom)
5. **Blog** — Extend content collections to include blog posts
6. **Dark/light toggle** — Optional theme switcher
7. **Contact form** — Add Netlify Forms or form service integration

### Performance Targets

- **Lighthouse score:** 98–100 (currently achieved)
- **No layout shift:** Ensure stable CLS (Cumulative Layout Shift)
- **Image optimization:** Convert all images to WebP/AVIF with lazy loading

---

## Contact & Ownership

- **Owner:** Lula Rocha
- **GitHub:** [@lularocha](https://github.com/lularocha)
- **X/Twitter:** [@lularocha](https://x.com/lularocha)
- **Email:** lularocha@protonmail.com

---

## Notes for AI Assistants

### When making changes:

1. **Always read files first** before editing
2. **Run builds** (`npm run build`) after significant changes to verify compilation
3. **Check dev server** for visual verification (http://localhost:4321)
4. **Review staged changes** before committing (`git diff --cached --stat`)
5. **Use imperative commit messages** with co-authorship attribution

### Project preferences observed:

- Owner prefers **clear explanations** over assumed knowledge
- Likes to **review changes** before they're committed
- Values **simplicity** — no over-engineering or unnecessary features
- Prefers **dark theme** as default (no light mode toggle requested)
- Uses **macOS** (Darwin 24.6.0) with Homebrew-installed tools

### Common tasks:

- **Update content:** Edit Markdown files in `src/content/projects/`
- **Change styling:** Modify `src/styles/global.css` or component classes
- **Add sections:** Create new `.astro` components, import in `index.astro`
- **SEO updates:** Edit `BaseLayout.astro` meta tags

---

**Last updated:** 2026-01-29
**Project status:** Active development
**Build status:** ✅ Passing (590ms build time)
