/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#5C059B",
        secondary:"#1E293B",
        accent:"CB5930",
        danger:"#F00"
      }
    },
  },
  plugins: [],
}

