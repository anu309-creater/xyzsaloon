/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F5F1EA',
          light: '#FAF7F2',
          dark: '#EBE5DA',
        },
        'rich-black': '#111111',
        dark: {
          DEFAULT: '#0D0D0D',
          surface: '#171717',
          elevated: '#212121',
          border: '#2A2A2A',
        },
        champagne: {
          DEFAULT: '#B89B5E',
          light: '#C9B078',
          dark: '#9E8246',
        },
        sand: {
          DEFAULT: '#D9D0C4',
          light: '#E6E0D6',
          dark: '#C4B9AA',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.15em',
        widest: '0.25em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
