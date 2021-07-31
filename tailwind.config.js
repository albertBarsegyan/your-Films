module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'error-image': "url('../assets/logos/404.jpg')",
        'background-1': "url('../assets/img/forms_back.jpg')",
        'background-2': "url('../assets/img/login_back.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};