import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens driven by CSS variables (see globals.css)
        bg: 'var(--color-bg)',
        'bg-subtle': 'var(--color-bg-subtle)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        'text-primary': 'var(--color-text-primary)',
        'text-muted': 'var(--color-text-muted)',
        navy: 'var(--color-navy)',
        gold: 'var(--color-gold)',
        'gold-light': 'var(--color-gold-light)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1100px',
      },
      transitionProperty: {
        theme: 'background-color, color, border-color',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
