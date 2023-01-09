/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlack: "#141416",
        myNeon: "#CAFB42",
        myWhite: "#FBFBFB",
      },
      fontFamily: {
        "Syne": ["Syne", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"),],
}