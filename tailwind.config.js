/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-light' : "#6A1ED4",
        'primary':'#5F00BA',
        'secondary-light': "",
        'secondary': '#EFBA4C',
        'secondary-dark' : "#E0A324",
        'secondary-darker': "#E0AF3D",
        'light':"#F0F0F7",
        'gray-light' : "#E4E3F5",
        'gray':"#DEDDE9",
        'dark-video':"#222317",
        "dark":"#030E09"
      },
      fontFamily: {
        'EasyGrotesk': ['EasyGrotesk', 'sans-serif']
      },
    },
  },
  
  plugins: [],
}

