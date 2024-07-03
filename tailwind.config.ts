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
        petBlue: "#2EAECC",
        darkPetBlue:"#00334C",
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
  daisyui: {
    themes: [
      {
        light:{
          ...require("daisyui/src/theming/themes")["light"],
          "primary":"#2EAECC",//petblue
          "base-100": "#F1FBFF",//background
          "base-200": "#E6F4F1",//btn background
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          //this line keep old color and we can add new color
          "primary":"#00334C",//petblue for dark
          "base-100": "#1f1f1f",//background
          "base-200": "#394855",//btn background
        }
      }
    ],
  },
};
export default config;


/*
 {
          "primary": "#575CEE",
          "secondary": "#fff",
          "accent": "#000",
          "neutral": "#000",
          "neutral-content": "#000",
          "base-100": "#fff",//background
          "base-200": "#fff",//btn background
          "base-300": "#000",
          "info": "#000",
          "success": "#000",
          "warning": "#000",
          "error": "#000",
        },
*/