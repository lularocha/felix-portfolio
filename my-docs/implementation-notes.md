# Implementation Notes

## AI Model Used

**Claude Model:** Opus 4.5

> **Tip:** To check and choose model type, use `/model` in the Terminal

---

## Initial Prompt Changes

From the initial prompt, I made the following modifications:

- Changed from default to **6 projects**
- Removed LinkedIn from contact section (Twitter/X only)

---

## Plan Modifications

The only change from the initial plan was for **Step 12. Deployment**:

- Modified to send the project folder as a repo to my GitHub account first
- Vercel deployment will be done separately later
- See `plan.md` file for full details

---

## Initial Implementation Summary

| Section  | Details                                                           |
|----------|-------------------------------------------------------------------|
| Header   | Sticky nav with anchor links + mobile hamburger menu             |
| Hero     | Full-viewport with name, tagline, "View My Work" / "Get in Touch" CTAs |
| Projects | 3×2 responsive card grid with 6 sample projects from content collections |
| About    | Two-column layout with avatar placeholder, bio, and skill tags    |
| Contact  | Twitter/X button + email link                                     |
| Footer   | Copyright + social icons                                          |

---

## Tech Details

- **Astro + Tailwind CSS v4** with zero client JS (except mobile menu toggle + scroll observer)
- **Dark theme** with indigo accent (`#818cf8`)
- **Fade-in-on-scroll animations** via CSS + IntersectionObserver
- **SEO meta tags** (Open Graph, Twitter Card, canonical URL, sitemap)
- **Content collections** for type-safe project data (Markdown files)
- **Build performance:** Passes cleanly in ~590ms

---

## Local Development

**Dev server:** http://localhost:4321/ (Astro's default port)

> Note: You might get a different port if 4321 is already in use.

---

## Customization

### CSS Tweaks

Removed the thin border from project cards to create a cleaner, more minimalist design. Eliminating unnecessary graphic elements reduces visual distractions and keeps the focus on the content itself.

### Text edits

I review and edit all AI-generated text to make it more personal using my way to express myself rather than have the AI write the text for me.

### Project content

The following are placeholders that should be replaced with real content:

- **Projects:** Edit Markdown files in `src/content/projects/`
- **Bio:** Update `About.astro`
- **Twitter handle:** Update `Contact.astro`
- **Site URL:** Update `astro.config.mjs`

---

## Tips & Best Practices

### Model Selection

Switch models to optimize usage limits:

- **Opus 4.5** — Best for complex tasks like planning or writing complex code (higher consumption)
- **Sonnet 4.5** — Good overall performance for most tasks
- **Haiku 3.5** — Good for simple tasks like changing font-size and colors in CSS

### Context Management

Use `/clear` to clear the context window when starting a new task unrelated to previous work.

### Documentation

- **README.md:** Claude creates a README.md file in your root directory — a best practice for GitHub repositories
- **Keep it updated:** If you make changes to the project structure or add features, ask Claude to review your codebase and update the README.md accordingly
- **Documentation folder:** Create a documentation folder (`my-docs/`) with your `plan.md` file and other reference files. Keep them up to date when making changes.

### Learning Resources

Refer to the following pages for more tips and best practices:

- Getting Started / Talking to Claude
- Reference / Prompts
