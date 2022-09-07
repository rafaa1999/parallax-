/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    ".main.js",
  ],
  theme: {
    extend: {
      colors:{
        bkg:"#eee",
        muted:"#ccc",
        accent:"fff"
      }
    },
  },
  plugins: [],
}
