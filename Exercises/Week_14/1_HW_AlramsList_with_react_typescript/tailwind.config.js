/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        blueApp_1 : "#2a4263",
        blueApp_2 : "#0369a1",
        skyBlueApp : "#69a4f7",
        grayApp : "#61687e",
        redApp : "#e1363b"
      }
    },
  },
  plugins: [],
}

