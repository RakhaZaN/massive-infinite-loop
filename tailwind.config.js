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
        customBlueNilai: '#95CEF0',
        customBluePencapaian: '#E8F7FB',
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




