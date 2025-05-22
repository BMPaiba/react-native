/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'cascadia-black': ['CascadiaCode-Bold', 'sans-serif'],
        'cascadia-medium': ['CascadiaCode-Medium', 'sans-serif'],
        "cascadia-light": ["CascadiaCode-Light", "sans-serif"],
      },
      colors: {
        primary: "#49129c",
        secondary: {
          DEFAULT: "#b40080",
          100: "#c5129e",
          200: "#d624b2",
          300: "#e736c6",
          400: "#f848da",
          500: "#fa5afb",
          600: "#fc6cff",
          700: "#fd7eff",
          800: "#fe90ff",
          900: "#ffa2ff",
        },
      },
    },
  },
  plugins: [],
};
