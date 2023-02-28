/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutralNeutral50: '#F3F3F3',
        primaryOrange: '#F16A24',
        secondaryDarkBlue: '#154C91',
        primaryTerracota: '#FFC293',
        darkenOrange: '#ea590e',
      },
    },
  },
  plugins: [],
}
