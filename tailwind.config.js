/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-indigo-1000': 'rgb(36,38,51)',
        'gray-opacity': 'rgba(71, 85, 105, 0.7)'
      },
      height: {
        'full-vh': '100vh'
      }
    }
  },
  plugins: []
}
