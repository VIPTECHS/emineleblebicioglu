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
        ivory: {
          DEFAULT: '#F6F2EB',
          50: '#FAF8F4',
          100: '#F6F2EB',
          200: '#EFECE4',
          300: '#E5E1D6',
        },
        cream: {
          DEFAULT: '#FAF8F4',
          light: '#FCFBF9',
          dark: '#F2EDE4',
        },
        charcoal: {
          DEFAULT: '#20201E',
          50: '#F6F6F6',
          100: '#E2E3E3',
          200: '#BDBFB7',
          700: '#323735',
          800: '#252928',
          900: '#20201E',
          950: '#141413',
        },
        bronze: {
          DEFAULT: '#A88965',
          light: '#BA9E7E',
          dark: '#8E704D',
        },
        champagne: {
          DEFAULT: '#B69B76',
          light: '#C8B294',
          dark: '#9E825C',
        },
        stoneGray: {
          DEFAULT: '#DCD6CB',
          light: '#EBE8E3',
          dark: '#BCB7AD',
        },
        textGray: {
          DEFAULT: '#6E6A65',
          light: '#8A857F',
          dark: '#55514C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        script: ['"Great Vibes"', '"Pinyon Script"', '"Alex Brush"', 'cursive', 'sans-serif'],
        calligraphy: ['"Great Vibes"', '"Pinyon Script"', '"Alex Brush"', 'cursive'],
      },
      letterSpacing: {
        'widest-editorial': '0.22em',
        'subtle': '0.04em',
      },
    },
  },
  plugins: [],
};
