import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B2344",
        blue: "#0879D5",
        ice: "#EAF4FF",
        ink: "#10243E"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(11,35,68,.10)"
      }
    },
  },
  plugins: [],
};
export default config;
