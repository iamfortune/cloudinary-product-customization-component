module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          deep: '#0E2F5A'
        }
      },
      backgroundColor: theme => ({
        'orange': '#db631e'
      })
    },    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
