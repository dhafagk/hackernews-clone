/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        verdana: ["Verdana", "Geneva", "sans-serif"],
      },
      colors: {
        primary: "#f60",
        text: "#828282",
        link: "#000",
        bg: "#f6f6ef",
      },
    },
  },
  plugins: [],
};
