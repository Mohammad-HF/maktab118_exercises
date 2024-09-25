/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        grayApp : "#f9f9f9",
      },
      colors : {
        grayApp : "#b1b1b1",
        grayPApp : "#828282",
        goldApp : "#bd9531"
      }
    },
  },
  plugins: [],
}

