/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'extra-light' : "#F5F5FF",
        'primary-light' : "#6A1ED4",
        'primary':'#5F00BA',
        'primary-dark':'#3A0070',
        'secondary-light': "#FFDA36",
        'secondary': '#EFBA4C',
        'secondary-dark' : "#E0A324",
        'secondary-darker': "#E0AF3D",
        'light':"#F0F0F7",
        'gray-light' : "#E4E3F5",
        'gray-cool' : "#888DA7",
        'gray':"#DEDDE9",
        'gray-dark':"#645C6E",
        'dark-video':"#222317",
        "dark":"#030E09",
        "transparent" : "",
        "text-dark": "#11082b",
        "text-med":"#29262e",
      },
      fontFamily: {
        easyGrotesk: ["EasyGrotesk", "sans-serif"],
      },
      screens: {
        'xs': {'min': '200px', 'max' : '639px'},
      },
    },
  },
  
  plugins: [],
}

