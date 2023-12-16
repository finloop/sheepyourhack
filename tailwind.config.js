/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    borderRadius: {
      DEFAULT: '4px',
      'none': '0',
      'sm': '0.125rem',
      'lg': '3rem',
      'large': '12px',
      'full': '9999px',
    }
  },
  plugins: [],
}

