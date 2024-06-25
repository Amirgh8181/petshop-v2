import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '0px',
      'sm': '600px',
      'md': '900px',
      'lg': '1200px',
      'xl': '1536px',
    },

    extend: {
      colors: {
        petBlue: "#575CEE",
        petBg: "#EFF1FD"
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography"),
  ],
};
export default config;
