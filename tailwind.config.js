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

        'loading': {
          '0%': { transform: 'rotate(0deg)', borderColor: 'transparent' },
          '50%': { transform: 'rotate(180deg)', borderColor: 'green' },
          '100%': { transform: 'rotate(360deg)', borderColor: 'transparent' }
        }
      },
      animation: {
        'progress': 'progress-bar 1s ease',
        'loading': 'loading 3s linear infinite'
      }
    },
  },
  plugins: [],
}
