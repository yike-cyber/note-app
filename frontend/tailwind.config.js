/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#71c6dd",
        "main-light": "#e1f6fb",
        dark: "#3f4156",
        "dark-medium": "#51546e",
        "dark-light": "#696d97",
        light: "#e5e5e5",
        gray: "#8b8b8b",
        "light-gray": "#b2bdbd",
        bg: "#2d2d39",
        success: "#5dd693",
        error: "#fc4b0b",
      },
    },
  },
  plugins: [],
};
