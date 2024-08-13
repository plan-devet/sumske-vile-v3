/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sky2: '#92C7F0',
        sand: '#F8F8EE',
        dirt: '#9C6834',
        logo: '#39B54A',
        dark: '#20170B'
      },
      textColor: {
        light: '#F8F8EE',
        dark: '#9C6834',
        accent: '#92C7F0'  
      },
    },
  },
  plugins: [],
}

