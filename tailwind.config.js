module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pse_purple: {
          DEFAULT: '#52237F',
          light: '#A895BB',
          dark: '#705E82'
        },
        pse_yellow: {
          DEFAULT: '#FFB600',
          dark: '#BF8E3B'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
