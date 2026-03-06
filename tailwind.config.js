const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, 'app/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, 'components/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, 'pages/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#00a701',
          dim: 'rgba(0,167,1,0.12)',
          glow: 'rgba(0,167,1,0.25)',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        display: ['Righteous', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanLight: {
          '0%':   { maskPosition: '-150% 0%' },
          '100%': { maskPosition: '250% 0%' },
        },
        fillHeight: {
          from: { height: '0%' },
          to:   { height: '100%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee:   'marquee 20s linear infinite',
        scanLight: 'scanLight 7s ease-in-out infinite',
        fillHeight:'fillHeight 1.2s ease forwards',
        fadeUp:    'fadeUp 0.4s ease forwards',
      },
    },
  },
  plugins: [],
}
