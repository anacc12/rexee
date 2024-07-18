/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary':'#5F00BA',
        'secondary': '#EFBA4C',
        'secondary-dark' : "#E0A324"
      }
    },
  },
  plugins: [],
}

