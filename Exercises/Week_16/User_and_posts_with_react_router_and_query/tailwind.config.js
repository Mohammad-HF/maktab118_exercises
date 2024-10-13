/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        appGreen : "#9dbcab",
        appWhite : "#ccd5d5"
      },
      backgroundColor : {
        appTeal : "#184e4a"
      }
    },
  },
  plugins: [],
}

