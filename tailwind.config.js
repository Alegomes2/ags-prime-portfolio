/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        primary: "#00f5ff",
        secondary: "#00ff9f",
        accent: "#7f5af0",
      }
    },
  },
  plugins: [],
}