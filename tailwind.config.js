/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "LightPink": "hsl(275, 100%, 97%)",
        "GrayishPurple": "hsl(292, 16%, 49%)",
        "DarkPurple": "hsl(292, 42%, 14%)"
      },
      fontFamily: {
        'sans': ["WorkSans", "sans-serif"]
      },
      backgroundImage: {
        'bgPatternDesktop': "url('/public/assets/images/background-pattern-desktop.svg')",
        'bgPatternMobile': "url('/public/assets/images/background-pattern-mobile.svg')",
      }
    },
  },
  plugins: [],
};
