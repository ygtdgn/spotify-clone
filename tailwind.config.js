/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818'
      },
      fontSize: {
        s: '0.813rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp'),
  ],
}