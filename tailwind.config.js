module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pse_purple: {
          DEFAULT: '#52237F',
          light: '#b399d4',
          medium: '#8E76A7',
          dark: '#32213A'
        },
        pse_yellow: {
          DEFAULT: '#FFB600',
          very_light: '#ffeb99',
          light: '#DFA21E',
          dark: '#BF8E3B'
        },
        pse_gray: {
          DEFAULT: '#2D2D2A',
          light: '#99A1A6',
          dark: '#2D2D2A',
          black: '#090809'
        },
        pse_white: {
          DEFAULT: '#faebff'
        }
      }
    },
    fontFamily: {
      display: ['Monsterrat', 'Poppins'] 
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
