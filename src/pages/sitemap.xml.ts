import { getCollection } from "astro:content";

export const prerender = true;

const origin = "https://gpldroid.github.io";
const base = "/technoraise";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  const staticPaths = [
    "/",
    "/about/",
    "/contact/",
    "/categories/",
    "/software-dev/",
    "/ai/",
    "/categories/digital-solutions/",
    "/categories/digital-transformation/",
    "/categories/technology-news/",
    "/editorial-policy/",
    "/privacy-policy/",
    "/terms-of-use/",
  ];

  const articlePaths = articles.map((article) => {
    const slug = article.id.split("/").map(encodeURIComponent).join("/");
    return `/articles/${slug}/`;
  });

  const urls = [...staticPaths, ...articlePaths].map(
    (path) => `  <url><loc>${escapeXml(`${origin}${base}${path}`)}</loc></url>`,
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}