/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        appGreen : "#1d3932",
        appCream : "#eac8a4",
      },
      screens : {
        xs : "450px"
      }
    },
  },
  plugins: [],
}

