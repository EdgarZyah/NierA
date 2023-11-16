/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    purge: [
      './src/**/*.js',
      './public/index.html',
    ],
    extend: {
      transitionDuration: {
        '3000': '3000ms',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'NieRbg': '#C8C2AA',
        'NieR': '#4D493E',
        fontFamily: {
          custom: ['NieR', 'sans']
        }
      },
    },
    plugins: [],
  }
}
