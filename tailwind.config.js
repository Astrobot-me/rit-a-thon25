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
        "inter":["Inter", "serif"]
      },
      colors:{
        "pamplet":"#FEC539",
        "peek":"#1875BB",
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}