module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'budget': "url('/assets/images/budgetBG.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
