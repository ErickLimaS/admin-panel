import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    gridColumn: {
      "main": "span 4 / span 4"
    },
    extend: {
      colors: {
        "background": "#f0f0f2",
        "primary": "#ff5722",
        "secondary": "#15283c"
      },
    },
  },
  plugins: [],
};
export default config;
