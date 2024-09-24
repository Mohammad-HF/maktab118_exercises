/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ["Inter","sans-serif"]
      },
      backgroundColor :{
        grayApp : "#F5F7FA"
      },
      colors :{
        blackApp : "#263238",
        blackPApp : "#18191f",
        greenApp : "#4CAF4F",
        grayApp : "#4D4D4D",
        grayPApp : "#717171"
      }
    },
  },
  plugins: [],
}

