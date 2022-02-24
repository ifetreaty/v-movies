module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'title': ["Neris Black", 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#4DA9F8',
        'secondary': '#5CC9FA',
      }
    },
  },
  plugins: [],
}
