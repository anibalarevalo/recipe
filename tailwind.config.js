/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        //primary
        'nutmeg': 'hsl(14, 45%, 36%)',
        'dark-raspberry': 'hsl(332, 51%, 32%)',

        //neutral
        'rose-white': 'hsl(330, 100%, 98%)',
        'eggshell': 'hsl(30, 54%, 90%)',
        'light-grey': 'hsl(30, 18%, 87%)',
        'wenge-brown': 'hsl(30, 10%, 34%)',
        'dark-charcoal': 'hsl(24, 5%, 18%)',
      },
    },
    fontFamily: {
      'young-serif': ['young-Serif', 'sans-serif'],
      'outfit': ['outfit', 'sans-serif'],
      'outfit-semibold': ['outfit-semibold', 'sans-serif'],
      'outfit-bold': ['outfit-bold', 'sans-serif'],
    },
  },
  plugins: [],
}