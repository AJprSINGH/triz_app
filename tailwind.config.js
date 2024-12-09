/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'serif'], // Roboto font stack
      merriweather: ['Merriweather', 'serif'], // Merriweather font stack
      noto: ['NotoSans', 'serif'], // Merriweather font stack
    },
    extend: {
      screens: { 
        'sm': { 'min': '207px'}, // Added max width
        'sm2': { 'min':'207','max': '640px' }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        scroll: 'scroll 40s linear infinite', // Extended time for smooth scrolling
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' }, // Starting position
          '100%': { transform: 'translateX(-100%)' }, // Move the entire container by 100% of the container's width
        },
      },
    },
  },
  plugins: [],
};
