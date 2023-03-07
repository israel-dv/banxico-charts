/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-indigo-1000': 'rgb(36,38,51)'
      },
      height: {
        'full-vh': '100vh'
      }
    }
  },
  plugins: []
}
