/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        customBlue1: '#95CEF0',
        customBlue2: '#E8F7FB',
        customBlue3: '#2580B5',
      },
      width: {
        'customWidthNilai': '375px',
      },
      height: {
        'customHeightNilai': '222px',
        'c187': '187px',
        'c58': '58px',
      },

    },
  },
  plugins: [],
}




