const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "false",
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      "green-down-2": "#E8F2EC",
      "dark-palette-p1": "#17161E",
      "dark-palette-p2": "#282733",
      "dark-palette-p3": "#3A3847",
      "dark-palette-p4": "#4D4B5C",
      "gray-pallete-p3": "#888599",
      "dark-gray-palette-p1": "#605E70",
      "dark-gray-palette-p2": "#737185",
      "dark-gray-palette-p3": "#888599",
      "dark-gray-palette-p4": "#9C99AD",
      "dark-gray-palette-p5": "#B1AEC2",
      "light-palette-p1": "#CBC8DB",
      "light-palette-p2": "#E7E6EF",
      "light-palette-p3": "#F2F1F7",
      "light-palette-p4": "#FAF9FD",
      "light-palette-p5": "#FFFFFF",
      "brand-palette-01": "#121D3A",
      "brand-palette-02": "#31388D",
      "brand-palette-03": "#1A5FFF",
      "brand-palette-04": "#8686E8",
      "brand-palette-05": "#B8C0F4",
      "brand-palette-06": "#D9DEFF",
      "brand-palette-07": "#EDF1FD",
      "brand-palette-08": "#F6F8FE",
      "auxiliary-palette-green": "#259C50",
      "auxiliary-palette-green-down": "#D8F2E1",
      "auxiliary-palette-green-down-2": "#EDF9F1",
      "auxiliary-palette-red": "#CF4F27",
      "auxiliary-palette-red-down": "#FBE0D8",
      "auxiliary-palette-red-down-2": "#FAEEEB",
      "auxiliary-palette-blue": "#5491F5",
      "auxiliary-palette-blue-down": "#DAE8FE",

      //new colors
    },
    extend: {
      colors: {
        gray: {
          1400: "#17161E",
          1300: "#282733",
          1200: "#3A3847",
          1100: "#4D4B5C",
          1000: "#605E70",
          900: "#737185",
          800: "#888599",
          700: "#9C99AD",
          600: "#B1AEC2",
          500: "#CBC8DB",
          400: "#E7E6EF",
          300: "#F2F1F7",
          200: "#FAF9FD",
          100: "#FFFFFF",
        },
        green: {
          900: "#074A3A",
          800: "#0B5A3F",
          700: "#127047",
          600: "#1B864C",
          500: "#259C50",
          400: "#53C371",
          300: "#AAF5AF",
          200: "#D5FAD3",
          100: "#D8F2E1",
        },
        red: {
          900: "#63070B",
          800: "#780E0C",
          700: "#951F13",
          600: "#B2351C",
          500: "#CF4F27",
          400: "#E28358",
          300: "#F0A87B",
          200: "#FBE0D8",
          100: "#FAEEEB",
        },
        blue: {
          900: "#102675",
          800: "#1A398E",
          700: "#2A52B0",
          600: "#3D70D2",
          500: "#5491F5",
          400: "#7EB1F9",
          300: "#98C5FC",
          200: "#DAE8FE",
          100: "#DDEEFE",
        },
        purple: {
          900: "#121D3A",
          800: "#1B2C58",
          700: "#31388D",
          600: "#1A5FFF",
          500: "#8686E8",
          400: "#B8C0F4",
          300: "#D9DEFF",
          200: "#EDF1FD",
          100: "#F6F8FE",
        },
      },

      strokeWidth: {
        1.04: "1.04",
        1.25: "1.25",
      },
      fontFamily: {
        sans: ["Nunito", "Arial", "sans-serif"],
      },
      fontSize: {
        title: "1.5rem",
        body: "1rem",
        text: "0.938rem",
        subtext: "0.875rem",
        micro: "0.813rem",
      },
      lineHeight: {
        150: "150%",
        200: "200%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("flowbite/plugin"),
    function ({ addVariant }) {
      addVariant("group-inline-edit", ".group.inline-edit &");
    },
  ],
  safelist: ["event-item-from-me", "event-from-contacts", "form-input-error"],
};
