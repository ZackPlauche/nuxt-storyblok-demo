/** @type {import('tailwindcss').Config} */
export default {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#e6f7ff',
          '100': '#b3e6ff',
          '200': '#80d5ff',
          '300': '#4dc3ff',
          '400': '#1ab2ff',
          '500': '#21abde',
          '600': '#1a9ec6',
          '700': '#1687a6',
          '800': '#126f86',
          '900': '#0e5766',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

