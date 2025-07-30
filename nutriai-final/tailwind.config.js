/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#7ED957',
        'brand-blue': '#A2D2FF',
        'brand-purple': '#5E60CE',
        'brand-dark': '#2c2c2c',
      }
    },
  },
  plugins: [],
}