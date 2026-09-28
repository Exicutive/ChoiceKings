import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#f7f4ff", 100: "#eee8ff", 200: "#ddd1ff", 500: "#7652d6", 600: "#6242bf", 700: "#512fa1", 800: "#3d237d", 900: "#291653" },
        accent: { 50: "#f3efff", 100: "#e5dcff", 500: "#9a7af1", 600: "#805ee0", 700: "#6844c1" },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-head)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
