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
        '33': '8.35rem',
        '18.45': '4.613rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      rotate: {
        '30': '30deg',
        '150': '150deg',
        '330': '330deg',
      },
      fontFamily: {
        proxima: ['Fontspring-DEMO-proximanova', 'sans'],
      },
    },
  },
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    options: {
      safelist: [
        'bg-pinkdefault', 'bg-graydefault', 'bg-reddefault',
        'text-pinkdefault', 'text-graydefault', 'text-reddefault',
      ],
    },
  },
  plugins: [],
};
