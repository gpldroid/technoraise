/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "techno-blue": "#0056A3",
        "techno-teal": "#00C896",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        "fs-xs": ["0.75rem", { lineHeight: "1rem" }],
        "fs-sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "fs-base": ["1rem", { lineHeight: "1.5rem" }],
        "fs-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "fs-xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "fs-2xl": ["1.5rem", { lineHeight: "2rem" }],
        "fs-3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "fs-4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "fs-5xl": ["3rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
