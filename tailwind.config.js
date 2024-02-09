/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'xs': '0px',
      // => @media (min-width: 0px) { ... }

      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '720px',
      // => @media (min-width: 720px) { ... }

      'lg': '960px',
      // => @media (min-width: 960px) { ... }

      'xl': '1199px',
      // => @media (min-width: 1199px) { ... }
    },
  }
}