# TechnoRaise

**Elevate Ideas. Empower the Future.**

TechnoRaise is an English-language technology publication covering software development, artificial intelligence, digital solutions, digital transformation, and technology news.

The project is built with [Astro](https://astro.build/) and is designed to ship a fast, accessible, search-friendly static website with minimal client-side JavaScript.

## Technology

- **Astro 6** — static-first site generation and file-based routing.
- **Content Collections** — validated Markdown and MDX article content.
- **MDX** — rich editorial content when Markdown alone is not enough.
- **Astro Sitemap** — XML sitemap generation.
- **TypeScript** — typed project configuration and content metadata.
- **Plain CSS** — a small, purpose-built design system; no UI framework or client-side framework is required for the current site.

## Requirements

- Node.js **22.23.4 or newer** (use an even-numbered Node.js release supported by Astro).
- npm.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Generate the production site in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run check` | Run Astro's diagnostics and TypeScript checks. |

## Project structure

```text
src/
├── components/       # Shared site components
├── content/
│   └── articles/     # Markdown and MDX articles
├── data/             # Editorial categories and site data
├── layouts/          # Shared page and article layouts
├── pages/            # File-based routes
└── styles/           # Global design system
public/               # Static files (favicon, robots, social image)
astro.config.mjs      # Astro, MDX, sitemap and canonical site URL
```

## Writing an article

Create a `.md` or `.mdx` file inside `src/content/articles/`. The filename becomes the article URL slug.

Example frontmatter:

```yaml
---
title: "A practical guide to shipping reliable software"
description: "A concise description of the article for readers and search previews."
pubDate: 2026-11-17
author: "TechnoRaise Editorial Team"
category: "software-development"
tags:
  - engineering
  - software
draft: true
---
```

Set `draft: false` only when the article is ready for publication. Draft articles are excluded from public article pages and category listings. Use original, reviewed content and accurate author details; do not publish placeholder claims or fabricated bylines.

Available category slugs are:

- `software-development`
- `artificial-intelligence`
- `digital-solutions`
- `digital-transformation`
- `technology-news`

## SEO and publishing notes

- The canonical site URL is configured as **https://technoraise.com** in `astro.config.mjs`.
- Page titles, descriptions, canonical URLs, Open Graph metadata and social-card metadata are rendered in the shared layout.
- The site generates an XML sitemap during production builds and provides a `robots.txt` file.
- Article pages emit Article and BreadcrumbList JSON-LD; the site layout emits Organization JSON-LD.
- Structured data is based on visible page content. Add real author profiles, dates, images and organization details before representing them as facts.
- Search visibility is not guaranteed by technical markup. Publish useful original work, maintain editorial accuracy, and monitor indexing and Core Web Vitals after deployment.

## Deployment

This project builds to a static `dist/` directory. It can be deployed from GitHub to any static host that supports Astro's build output, including Cloudflare Pages, Vercel, or GitHub Pages.

Build command: `npm run build`  
Output directory: `dist`

No hosting provider, CMS, analytics service, or external form backend is configured by default. Choose and configure those separately when the requirements are known.

## Before public launch

- Verify domain ownership and DNS, HTTPS, and the preferred canonical hostname.
- Add verified organization and author information where appropriate.
- Replace or complete the contact details and legal copy to reflect the actual publisher, jurisdiction, audience, data processing, and any third-party services used.
- Review every article for originality, accuracy, attribution, and publication readiness.
- Test the production build on mobile and desktop, keyboard navigation, accessibility, metadata, sitemap, and Core Web Vitals.
- Connect Google Search Console and submit the generated sitemap after deployment.

## License

No license has been selected for this repository yet. Unless a license is added, all rights are reserved by the copyright holder.
