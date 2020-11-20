module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['monospace'],
    },
    extend: {
      colors: {
        primary: '#eb6f92',
      },
    },
  },
}
