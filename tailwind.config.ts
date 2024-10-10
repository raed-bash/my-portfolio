import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#E45155",
        gradients: { from: "#FA5252", to: "#DD2476" },
        dark: {
          main: "#121212",
          secondary: "#111111",
          light: { 0: "#212425", 100: "#A6A6A6" },
        },
        light: { main: "#F3F6F6" },
      },
      fontFamily: { poppins: ["Poppins, sans-serif"] },
    },
    container: {
      center: true,
      screens: ["1280px"],
    },
  },
  plugins: [],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
};
export default config;
