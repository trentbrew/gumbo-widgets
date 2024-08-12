/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        base: '#F0E4C9',
        'accent-1': '#D9B99B',
        'accent-2': '#A88F65',
        'dark-1': '#40434E',
        'dark-2': '#282D33',
        'cool-dark': '#35393F',
        'warm-dark': '#423D33',
        'muted-green': '#4A5754',
        'deep-green': '#1E3932',
        black: '#000000',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  plugins: [require('daisyui')],
}
