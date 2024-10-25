/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        appBlue1 : "#263355",
        appBlue2 : "#73c7e0",
        appWhite : "#fbfafa"
      }
    },
  },
  plugins: [],
}

