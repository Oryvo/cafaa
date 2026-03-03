/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B3D2E',
        secondary: '#2E4D44',
        accent: '#C5A059',
        cream: '#FDFCF0',
      },
    },
  },
  plugins: [],
};