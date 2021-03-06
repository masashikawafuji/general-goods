/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false,
  theme: {
    textColor: {
      lighten: colors.gray['50'],
      darken: colors.gray['300'],
      darkest: colors.gray['400'],
      inverse: colors.black,
      danger: colors.red['500'],
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: theme('colors.gray.50'),
            },
            h2: {
              color: theme('colors.gray.50'),
            },
            a: {
              color: theme('colors.gray.300'),
            },
            strong: {
              color: theme('colors.gray.50'),
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
      oswald: ['Oswald', 'Noto Sans JP', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss', require('@tailwindcss/typography')],
};
