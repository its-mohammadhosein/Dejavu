/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/*/*.{js,jsx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {

    extend: {

    },
    screens: {
      'sm': '650px'
    }
  },
  darkmode: "class",
  plugins: [],
};
