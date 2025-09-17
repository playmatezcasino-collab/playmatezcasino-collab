/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        'playmatez': {
          green: '#016039',
          white: '#EFEEE7',
          gold: '#A37E2B',
          grey: '#2B2C30',
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #2B2C30 0%, #016039 100%)',
        'gradient-gold': 'linear-gradient(135deg, #A37E2B 0%, #016039 100%)',
      }
    },
  },
  plugins: [],
};