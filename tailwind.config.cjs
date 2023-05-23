/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive']
      }
    },
  },

  plugins: [],
};

module.exports = config;
