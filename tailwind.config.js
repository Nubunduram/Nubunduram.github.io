/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackdefault: "#211E1E",
        graydefault: "#AEAEAE",
        pinkdefault: "#FF8DA2",
        reddefault: "#C20034",
      },
      width: {
        '75': '18.75rem',
        '50': '12.5rem',
        '33': '8.35rem',
        '18.45': '4.613rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.563rem',
        '4xs': '0.5rem',
      },
      rotate: {
        '30': '30deg',
        '150': '150deg',
        '330': '330deg',
      },
      fontFamily: {
        proxima: ['Fontspring-DEMO-proximanova', 'sans'],
      },
      borderRadius: {
        '10': '10px',
      },
    },
  },
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    options: {
      safelist: [
        'bg-pinkdefault', 'bg-graydefault', 'bg-reddefault', 'border-graydefault',
        'text-pinkdefault', 'text-graydefault', 'text-reddefault',
      ],
    },
  },
  plugins: [],
};
