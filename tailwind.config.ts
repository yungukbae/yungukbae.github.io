import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    animation:{
      fadeIn:'fadeIn 0.5s',
      fadeInoDown:'fadeInoDown 1.3s'
    },
    keyframes:{
      fadeIn:{
        '0%':{ opacity:'0'},
        '100%':{ opacity:'1' }
      },
      fadeInoDown:{
        '0%':{ opacity:'0',transform: 'translate3d(0, -100%, 0)'},
        '100%':{ opacity:'1',transform: 'translateZ(0)' }
      }
    }
  },
  plugins: [
  ],
}
export default config
