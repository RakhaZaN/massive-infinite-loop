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
        customBlue4: '#1CAAD9',
        customBlue5: '#2277A8',
        customBlue6: '#70B8E3',
        customBlue7 : '#00A7E1',

      },
      width: {
        'customWidthNilai': '375px',
        'c177':'177px',
        'c285':'285px',
        'c251':'251px',
        'c387':'387px',
        
      },
      height: {
        'customHeightNilai': '222px',
        'c187': '187px',
        'c58': '58px',
        'c357': '357px',
        'c399': '399px',
        'c680': '680px',
        'c99': '99px',
        'c1215': '1215px',
        'c194': '194px',
        'c720': '720px',
        'c820': '820px',
        'c400': '400px',
        'c241': '241px',
      },

    },
  },
  plugins: [],
}




