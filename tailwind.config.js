/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],

  themes: false,
    theme: {
      extend: {
          colors: {
              'rif': {
                grey: '#bcbcbb',
                blue: '#7497cf',
                red: '#ef7c61',
                green: '#4DB172',
                orange: '#ee9e5e',
              },
          }
      },
    fontFamily: {
      'futura': ['"Futura PT"'],
      'tavolga': ['Tavolga'],
    }
  },
  plugins: [require("daisyui")],
    daisyui: {
    themes: false,
  }
}
