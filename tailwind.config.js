/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        lightPink: '#f7cad0',
        darkPink: '#e63946',
        lightGray: '#d1d1d1',
        darkGray: '#4a4a4a',
        black: '#222222',
      },
      fontFamily: {
        mysterious: ['"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}
