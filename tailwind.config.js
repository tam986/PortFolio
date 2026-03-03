/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#FF6B35",
        darkbg: "#0A0F1C"
      }
    },
  },
  plugins: [],
}