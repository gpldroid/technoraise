# TechnoRaise

**Elevate Ideas. Empower the Future.**

TechnoRaise is an English-language technology publication covering software development, artificial intelligence, digital solutions, digital transformation, and technology news.

The project is built with [Astro](https://astro.build/) and is designed to ship a fast, accessible, search-friendly static website with minimal client-side JavaScript.

## Technology

- **Astro 7** — static-first site generation and file-based routing.
- **Content Collections** — validated Markdown and MDX article content.
- **MDX** — rich editorial content when Markdown alone is not enough.
- **TypeScript** — typed project configuration and content metadata.
- **Plain CSS** — a small, purpose-built design system with minimal client-side JavaScript.

## Requirements

- Node.js **22.23.4 or newer**.
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
| `npm run check` | Run Astro diagnostics and TypeScript checks. |

## Project structure

```text
src/
├── components/       # Shared site components
├── content/
│   └── articles/     # Markdown and MDX article content
├── data/             # Editorial categories and site data
├── layouts/          # Shared page and article layouts
├── pages/            # File-based routes
└── styles/           # Global design system
public/               # Static assets
astro.config.mjs      # Astro and MDX configuration
netlify.toml          # Netlify build and publish settings
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

- The intended Netlify production URL is **https://technoraise-nwmv.netlify.app/**.
- Page titles, descriptions, canonical URLs, Open Graph metadata and social-card metadata are rendered in the shared layout.
- Article pages emit Article and BreadcrumbList JSON-LD; the site layout emits Organization JSON-LD.
- Structured data must reflect verified publisher, author, date and image information.
- Search visibility is not guaranteed by technical markup. Publish useful original work, maintain editorial accuracy, and monitor indexing and Core Web Vitals after deployment.

## Deployment on Netlify

The repository is configured for Netlify continuous deployment:

- Build command: `npm run build`
- Publish directory: `dist`
- Build configuration: `netlify.toml`
- Production branch: `main`

To finish connecting the site, open the Netlify project **technoraise-nwmv**, choose **Add new project → Import an existing project**, select GitHub, authorize the `gpldroid/technoraise` repository, and choose `main` as the production branch. Netlify should detect the committed build settings automatically. Each subsequent push to `main` will build and publish the site.

The local `.netlify` directory is ignored by Git and must not be committed.

## Before public launch

- Verify the first Netlify build and production deploy succeed.
- Ensure the production site is publicly viewable (disable team SSO protection for the public production site if it is not intended to be private).
- Verify contact details and legal copy against the actual publisher, jurisdiction, audience and data processing.
- Review articles for originality, accuracy, attribution and publication readiness.
- Test mobile and desktop layouts, keyboard navigation, accessibility, metadata and sitemap.
- Connect Google Search Console and submit the generated sitemap after deployment.

## License

No license has been selected for this repository yet. Unless a license is added, all rights are reserved by the copyright holder.
