import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'
import withMT from '@material-tailwind/react/utils/withMT'

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible'
    },
    '.backface-hidden': {
        'backface-visibility': 'hidden'
    }
  })
})

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      alien: ["OCR A Std Regular", "sans-serif"],
    },
    colors: {
      primary: "#bbbbbb",
      secondary: "#444444",
      tertiary: "#090909"
    },
    extend: {
      colors: {
        ...colors
      }
    },
  },
  plugins: [backfaceVisibility],
})

