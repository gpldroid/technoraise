import { getCollection } from "astro:content";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import satori from "satori";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const WIDTH = 1200;
const HEIGHT = 630;
const BLUE = "#0056A3";
const TEAL = "#00C896";

const fontData = Promise.all([
  readFile(fileURLToPath(import.meta.resolve("@fontsource/inter/files/inter-latin-400-normal.woff2"))),
  readFile(fileURLToPath(import.meta.resolve("@fontsource/inter/files/inter-latin-700-normal.woff2"))),
]);

let wasmInitialization: Promise<void> | undefined;

async function initializeRenderer() {
  wasmInitialization ??= (async () => {
    const wasmPath = fileURLToPath(import.meta.resolve("@resvg/resvg-wasm/index_bg.wasm"));
    await initWasm(await readFile(wasmPath));
  })();
  await wasmInitialization;
}

function element(
  type: string,
  style: Record<string, string | number>,
  children?: unknown,
) {
  return { type, props: { style, ...(children === undefined ? {} : { children }) } };
}

function categoryLabel(category: string) {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function getStaticPaths() {
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  return articles.map((article) => ({
    params: { slug: article.id },
    props: { article },
  }));
}

export async function GET({ props }: { props: { article: Awaited<ReturnType<typeof getCollection<"articles">>>[number] } }) {
  const { article } = props;
  await initializeRenderer();

  // Prefer the hand-authored SVG artwork and rasterize it to PNG for broad
  // Open Graph and Twitter compatibility. The SVG remains the editable master.
  try {
    const artworkPath = fileURLToPath(
      new URL(`../../../public/images/og/${article.id}.svg`, import.meta.url),
    );
    const artwork = await readFile(artworkPath, "utf8");
    const png = new Resvg(artwork, {
      fitTo: { mode: "width", value: WIDTH },
      background: "#06152B",
    }).render().asPng();
    const pngBuffer = png.buffer.slice(
      png.byteOffset,
      png.byteOffset + png.byteLength,
    ) as ArrayBuffer;
    return new Response(pngBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": String(png.byteLength),
      },
    });
  } catch {
    // Keep the existing metadata-driven card as a safe fallback.
  }

  const [regularFont, boldFont] = await fontData;

  const publishedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(article.data.pubDate);

  const tree = element("div", {
    width: WIDTH,
    height: HEIGHT,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "58px 72px 54px",
    backgroundColor: BLUE,
    color: "#FFFFFF",
    fontFamily: "Inter",
    position: "relative",
    overflow: "hidden",
  }, [
    element("div", {
      position: "absolute",
      right: -100,
      top: -170,
      width: 500,
      height: 500,
      borderRadius: 250,
      border: "2px solid rgba(255,255,255,0.12)",
    }),
    element("div", {
      position: "absolute",
      right: 80,
      bottom: -270,
      width: 560,
      height: 560,
      borderRadius: 280,
      backgroundColor: "rgba(0,200,150,0.10)",
    }),
    element("div", {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    }, [
      element("div", { display: "flex", alignItems: "center", gap: 14 }, [
        element("div", {
          width: 42,
          height: 42,
          borderRadius: 12,
          backgroundColor: TEAL,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: BLUE,
          fontSize: 27,
          fontWeight: 700,
        }, "T"),
        element("div", { fontSize: 30, fontWeight: 700, letterSpacing: -0.8 }, "TechnoRaise"),
      ]),
      element("div", {
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: 2,
        color: "#C8E6FF",
      }, "TECHNOLOGY • IDEAS • INNOVATION"),
    ]),
    element("div", {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      width: 1000,
      marginTop: 16,
      marginBottom: 12,
    }, [
      element("div", {
        alignSelf: "flex-start",
        backgroundColor: TEAL,
        color: "#062C4B",
        borderRadius: 20,
        padding: "9px 18px",
        fontSize: 17,
        fontWeight: 700,
      }, categoryLabel(article.data.category).toUpperCase()),
      element("div", {
        fontSize: 58,
        lineHeight: 1.12,
        fontWeight: 700,
        letterSpacing: -1.5,
        maxHeight: 190,
        overflow: "hidden",
      }, article.data.title),
      element("div", {
        fontSize: 23,
        lineHeight: 1.35,
        color: "#DCEEFF",
        maxHeight: 66,
        overflow: "hidden",
      }, article.data.description),
    ]),
    element("div", {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "1px solid rgba(255,255,255,0.28)",
      paddingTop: 20,
      width: "100%",
      color: "#DCEEFF",
      fontSize: 17,
    }, [
      element("div", { display: "flex", alignItems: "center", gap: 10 }, [
        element("div", { width: 9, height: 9, borderRadius: 5, backgroundColor: TEAL }),
        element("div", {}, "Insights for a changing digital world"),
      ]),
      element("div", { fontWeight: 700 }, publishedDate),
    ]),
  ]);

  const svg = await satori(tree as never, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: "Inter", data: regularFont, weight: 400, style: "normal" },
      { name: "Inter", data: boldFont, weight: 700, style: "normal" },
    ],
  });

  const png = new Resvg(svg, {
    fitTo: { mode: "original" },
    background: BLUE,
  }).render().asPng();
  const pngBuffer = png.buffer.slice(
    png.byteOffset,
    png.byteOffset + png.byteLength,
  ) as ArrayBuffer;

  return new Response(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Length": String(png.byteLength),
    },
  });
}
