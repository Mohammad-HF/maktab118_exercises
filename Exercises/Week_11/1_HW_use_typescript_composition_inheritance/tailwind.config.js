/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        dropDrown: "dropDrown 2s forwards",
      },
      keyframes: {
        dropDrown: {
          "0%": { left: "0" },
          "50%": { left: "calc(100% - 176.3px)" },
          "100%": { left: "calc(50% - 88px)" },
        },
      },
    },
  },
  plugins: [],
};
