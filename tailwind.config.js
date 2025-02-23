/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Krona":["Krona One", "serif"],
      },
      colors:{
        "pamplet":"#FEC539",
        "peek":"#1875BB",
      }
    },
  },
  plugins: [],
}