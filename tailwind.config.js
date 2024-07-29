/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        lm:'1140px',
        mn:'1460px',
        mi:'900px',
        mr:'1400px',
        mw:'860px',
        wm:'1090px',
        rm:'643px',
        bh:'768px'
      },
      fontWeight:{
        nm:'490'
      },
      keyframes: {
        slide: {
          '0%, 100%': {
            transform: 'translatex(-100%)'
          },
          '50%': {
            transform: 'translatex(100%)'
          }
        },
        slide2: {
          '50%': {
            transform: 'translatex(-200%)'
          },
          '0%, 100%': {
            transform: 'translatex(100%)'
          }
        }
      },
      animation:{
        'slide':'slide 10s ease-in-out 2 4s',
        'slide2':'slide2 10s ease-in-out 2 4s'
      }
  },
  plugins: [],
}
}

