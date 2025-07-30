/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Yeni Yeşil Renk Paletimiz
      colors: {
        'brand-primary': '#22c55e',     // Ana, canlı yeşil (Butonlar, vurgular)
        'brand-secondary': '#86efac',   // İkincil, açık yeşil (İkonlar, arka plan elementleri)
        'brand-light': '#f0fdf4',       // En açık, soluk yeşil (Bölüm arka planları)
        'brand-dark': '#15803d',        // Koyu, okunabilir yeşil (Başlıklar, metinler)
        'brand-deep-dark': '#14532d',   // En koyu yeşil (Kontrast için)
      }
    },
  },
  plugins: [],
}