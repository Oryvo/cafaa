/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:     '#7B0E21',
        'primary-dark': '#5E0B19',
        secondary:   '#6B6464',
        accent:      '#7B0E21',
        cream:       '#F8F5F3',
        muted:       '#6B6464',
        border:      '#E7DEDA',
      },
    },
  },
  plugins: [],
};
