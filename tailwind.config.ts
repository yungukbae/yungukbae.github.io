import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    animation: {
      fadeIn: "fadeIn 2s",
      fadeInoDown: "fadeInoDown 1.3s",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      fadeInoDown: {
        "0%": { opacity: "0", transform: "translate3d(0, -100%, 0)" },
        "100%": { opacity: "1", transform: "translateZ(0)" },
      },
      rotate: {
        "100%": {
          transform: "rotate(1turn)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
