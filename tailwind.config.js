/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme': 'rgb(255 120 30)',
        themes:'rgb(0 0 0)'
      },
      keyframes: {
        'progress-bar':{
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
      },
      animation: {
        'progress': 'progress-bar 1s ease',
      }
    },
  },
  plugins: [],
}

