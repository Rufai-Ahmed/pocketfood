import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        food: "url('/assets/bg.png')",
      },
      colors: {
        primary: "#a71b31",
        secondary: "#241a43",
      },
    },
  },

  plugins: [],
};
export default config;
