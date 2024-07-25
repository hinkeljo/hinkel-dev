import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "cursor-breath": {
          "0%": { opacity: "50" },
          "50%": { opacity: "15" },
          "100%": { opacity: "50" },
        },
      },
      animation: {
        "cursor-breath": "cursor-breath 20s infinite ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest"],
  },
};
export default config;
