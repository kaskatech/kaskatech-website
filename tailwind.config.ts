import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand purple — Accenture-inspired, matches logo gradient
        brand:        '#6D28D9',
        'brand-light':'#8B5CF6',
        'brand-dark': '#4C1D95',
        'brand-glow': '#A855F7',
        // Backgrounds
        smoke:        '#F8F7FC',
        mist:         '#EDE9F8',
        // Dark
        dark:         '#0D0D14',
        charcoal:     '#1A1729',
        // Legacy aliases
        navy:         '#0D0D14',
        blue:         '#6D28D9',
        gold:         '#F5A623',
        green:        '#10B981',
        red:          '#EF4444',
        teal:         '#14B8A6',
        cream:        '#F8F7FC',
        stone:        '#EDE9F8',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        premium:       '0 4px 32px rgba(109,40,217,0.10), 0 1px 4px rgba(0,0,0,0.06)',
        'glow-brand':  '0 0 40px rgba(109,40,217,0.25)',
        'glow-gold':   '0 0 40px rgba(245,166,35,0.20)',
        'glow-blue':   '0 0 40px rgba(109,40,217,0.20)',
      },
      borderRadius: { '4xl': '2rem' },
    },
  },
  plugins: [],
}
export default config
