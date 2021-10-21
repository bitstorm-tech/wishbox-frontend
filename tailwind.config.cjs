const colors = require('tailwindcss/colors');
const accentColor = colors.red['500'];

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: accentColor,
        primary: colors.indigo['800'],
        darkest: colors.white['800'],
        darker: colors.white['700'],
        dark: colors.white['600']
      },
      boxShadow: {
        'inner-glow': `inset 0 0 20px ${accentColor}`,
        'inner-glow-s': `inset 0 0 5px ${accentColor}`,
        inner: 'inset 0 1px 2px #0f1422, 0 1px 0 #273147'
      }
    }
  },
  plugins: []
};

module.exports = config;
