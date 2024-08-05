/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      green: '#CCD5AE',
      'light-green': '#E9EDC9',
      cream: '#FEFAE0',
      beige: '#FAEDCD',
      brown: '#D4A373',
      'dark-brown': '#7D4F29',
      'dark-maroon': '#6D3F4E',
      'darker-maroon': '#4E2A2F',
    },
    extend: {
      fontFamily: {
        'bowlby-one': ['"Bowlby One"', 'sans-serif'],
        'reenie-beanie': ['"Reenie Beanie"', 'cursive'],
        holtwood: ['Holtwood One SC', 'serif'],
        'square-peg': ['Square Peg', 'cursive'],
      },
    },
  },
  plugins: [],
};
