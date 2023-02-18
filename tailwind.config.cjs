/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /grid-cols-./,
    },
    {
      pattern: /w-\b./,
    },
    {
      pattern: /bg-orange-|bg-red-./,
    },
  ],
  theme: {
    extend: {
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        jello: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '40%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '50%': { transform: 'scale3d(0.85, 1.15, 1)' },
          '65%': { transform: 'scale3d(1.05, 0.95, 1)' },
          '75%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
        shake: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
            'transform-origin': ' 50% 50%',
          },
          '10%': { transform: 'rotate(8deg)' },
          '20%, 40%, 60%': { transform: 'rotate(-10deg)' },
          '30%, 50%, 70%': { transform: 'rotate(10deg)' },
          '80%': { transform: 'rotate(-8deg)' },
          '90%': { transform: 'rotate(8deg)' },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-2deg)',
          },
          '50%': {
            transform: 'rotate(2deg)',
          },
        },
        down: {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
        },
      },
      animation: {
        border: 'border 4s ease infinite',
        jello: 'jello .8s ease 0s 1 normal forwards',
        shake: 'shake .5s ease 0s 2 normal forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
        down: 'down 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
