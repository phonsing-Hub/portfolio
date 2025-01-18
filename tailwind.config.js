import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: { marginBottom: "0.25rem" },
            ul: { marginBottom: 0, marginTop: 0 },
            li: { margin: 0 },
            ol: { marginBottom: "0.25rem", marginTop: "0.25rem" },
            // pre: {
            //   borderRadius: "0.5rem",
            //   padding: "0.1rem",
            //   margin: "0",
            //   fontSize: "0.75rem",
            //   lineHeight: "1rem",
            // },
            code: {
              //   backgroundColor: "#1e1e1e",
              //   padding: "0.2rem 0.4rem",
              borderRadius: "0.3rem",
            },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), require("@tailwindcss/typography")],
};
