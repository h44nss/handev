/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#F5EFE6',
          bg2: '#E8DFD1',
          text: '#2B2B2B',
          accent: '#C97B63',
          brown: '#5E4636',
          glow: '#D8B08C',
          muted: '#9A8878',
        },
        dark: {
          bg: '#1B1A17',
          card: '#2A2622',
          text: '#F3EDE4',
          accent: '#D6A77A',
          muted: '#7A6E65',
          border: '#3A332D',
        },
      },
      fontFamily: {
        clash: ['"Clash Display"', 'sans-serif'],
        sans: ['"General Sans"', '"Inter"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        satoshi: ['"Satoshi"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-slower': 'float 14s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'grain': 'grain 0.5s steps(1) infinite',
        'pulse-warm': 'pulseWarm 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        pulseWarm: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(201, 123, 99, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 8px rgba(201, 123, 99, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
