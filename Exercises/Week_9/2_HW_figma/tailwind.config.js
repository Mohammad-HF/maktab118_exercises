/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        circular : ["circular","ui-sans-serif"]
      },
      colors : {
        appPink : "#F85E9F",
        appOrang : "#FF5722",
        appgray : "#191825",
        appBlue : "#5D50C6",
      },
      boxShadow : {
        appShadow : "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
      },
      fontSize : {
        "3.5xl" : ["32px","38.4px"],
      },
   screens :{
    tablet : "1024px",
    desktop : "1440px",
   }
    },
  },
  plugins: [],
}

