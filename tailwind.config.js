module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'error-image': "url('../assets/logos/404.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};