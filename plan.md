# Felix Portfolio — Build Plan

## 1. Recommended Tech Stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | Astro | Zero-JS by default, static-first, 98–100 Lighthouse scores |
| **Styling** | Tailwind CSS | Utility-first, rapid custom design, no generic look |
| **Animations** | CSS + Astro View Transitions | Lightweight scroll/fade effects without extra JS |
| **Deployment** | Netlify (or Vercel) | Free tier, auto deploys from git, preview URLs, custom domains |
| **Content** | Astro Content Collections | Type-safe Markdown for project entries |

### Why Astro over Next.js / plain HTML / Vite+React?

- **vs Next.js** — Next ships 40–50 KB of React runtime even for static pages. Overkill for a portfolio with no dynamic data.
- **vs Plain HTML** — No component reuse, no hot reload, manual media queries. Slower to develop and maintain.
- **vs Vite+React** — Client-rendered by default (bad SEO). Needs plugins for pre-rendering. Still ships React runtime.
- **Astro** renders to pure HTML, supports islands for interactivity, and has Vite-powered DX (fast builds, HMR, TypeScript).

---

## 2. File Structure

```
felix-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png          # Open Graph preview image
│   └── images/
│       └── projects/         # Project thumbnails (WebP)
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── Projects.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts         # Content collection schema
│   │   └── projects/         # Markdown files for each project
│   │       ├── project-1.md
│   │       ├── project-2.md
│   │       └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML head, meta tags, global styles
│   ├── pages/
│   │   └── index.astro       # Single-page layout assembling all sections
│   └── styles/
│       └── global.css        # Tailwind directives + custom CSS
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 3. Design Considerations

### Visual Direction
- **Dark theme** as default with high-contrast typography
- **Bold, oversized heading** in the hero (name at 4–6rem, tagline at 1.25rem)
- **Muted accent color** (e.g., indigo-400 or emerald-400) for links and highlights
- **Card-based project grid** — 3 columns on desktop, 1 on mobile
- **Minimal, clean layout** — generous whitespace, no visual clutter

### Typography
- System font stack or a single Google Font (Inter or Geist) for fast loading
- Strong hierarchy: oversized h1, medium h2 section titles, readable body text

### Animations
- Fade-in on scroll for sections (CSS `@keyframes` + `IntersectionObserver` or Astro View Transitions)
- Subtle hover lift on project cards (translate + shadow)
- No heavy animation libraries — keep JS at zero or near-zero

### Responsive
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Hero stacks vertically on mobile, projects collapse to single column

### Performance
- All images in WebP/AVIF with `loading="lazy"`
- Astro's built-in image optimization (`astro:assets`)
- Target: 98+ Lighthouse performance score

### SEO & Social
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- Open Graph + Twitter Card meta tags in `BaseLayout.astro`
- `<title>`, `<meta description>`, canonical URL
- Sitemap via `@astrojs/sitemap`

---

## 4. Step-by-Step Implementation Plan

### Step 1 — Project Scaffolding
- Run `npm create astro@latest` in the project directory
- Install Tailwind CSS (`@astrojs/tailwind`)
- Install sitemap integration (`@astrojs/sitemap`)
- Configure `astro.config.mjs` with integrations
- Set up `global.css` with Tailwind directives and dark theme defaults
- Configure `.gitignore` (node_modules, dist, .env, .DS_Store)

### Step 2 — Base Layout
- Create `BaseLayout.astro` with:
  - HTML boilerplate, charset, viewport
  - SEO meta tags (title, description, OG, Twitter Card)
  - Slot for page content
  - Global font import

### Step 3 — Header Component
- Fixed/sticky navigation bar
- Name/logo on the left
- Section anchor links on the right (Projects, About, Contact)
- Mobile hamburger menu or minimal nav

### Step 4 — Hero Section
- Full-viewport height section
- Large name heading + tagline paragraph
- Optional subtle background gradient or pattern
- Scroll-down indicator (animated chevron)

### Step 5 — Content Collection for Projects
- Define project schema in `src/content/config.ts` (title, description, image, tags, url, date)
- Create 6 Markdown files in `src/content/projects/`
- Add placeholder project thumbnails to `public/images/projects/`

### Step 6 — Projects Section
- Section heading ("Projects" or "Recent Work")
- 3×2 responsive grid of `ProjectCard` components
- Each card shows: thumbnail, title, short description, tech tags
- Hover effect (lift + shadow)
- Link to live project or detail page

### Step 7 — About Section
- Two-column layout: photo/avatar on one side, bio text on the other
- Brief professional bio (3–4 sentences)
- Optional list of skills/technologies
- Collapses to single column on mobile

### Step 8 — Contact Section
- Section heading ("Get in Touch" or "Contact")
- Twitter/X link with icon
- Optional email link
- Simple CTA text encouraging connection

### Step 9 — Footer
- Copyright line
- Repeat social links
- "Built with Astro" credit (optional)

### Step 10 — Animations & Polish
- Add fade-in-on-scroll to each section using CSS + IntersectionObserver (small inline script)
- Add hover transitions on project cards and links
- Test Astro View Transitions for page feel
- Verify smooth scrolling for anchor links

### Step 11 — Performance & SEO Audit
- Run Lighthouse and fix any issues
- Verify all images are optimized (WebP, lazy loaded)
- Check meta tags render correctly (use social preview tools)
- Test on mobile devices / responsive breakpoints
- Validate HTML with W3C validator

### Step 12 — Git Setup
- Install git (`brew install git` if not already installed)
- Initialize git repository (`git init`)
- Connect to git account (`git remote add origin <repo-url>`)
- Make initial commit and push to remote
