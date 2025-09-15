/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "System"],
      },
      colors: {
        primary: {
          DEFAULT: '#5E2BFF',
          50: '#F3EFFF',
          100: '#E8DEFF',
          200: '#D1BDFF',
          300: '#BA9CFF',
          400: '#A37BFF',
          500: '#5E2BFF',
          600: '#4B22CC',
          700: '#381A99',
          800: '#251166',
          900: '#120933',
        },
        secondary: {
          DEFAULT: '#FFC107',
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FF8F00',
          800: '#FF6F00',
          900: '#E65100',
        },
      },
    },
  },
  plugins: [],
}