import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'crem': '#FAF7F5',           // Fundal principal - pace, respirație
        'roz-pudrat': '#EAC4C4',     // Primar - blândețe feminină
        'auriu': '#D4AF6A',          // Secundar - pentru CTA
        'verde-sage': '#9CAF88',     // Accent 1 - echilibru, vindecare
        'lavanda': '#C5B9CD',        // Accent 2 - spiritual blând
        'charcoal': '#3A3A3A',       // Text principal
        'gri-mediu': '#6B6B6B',      // Text secundar
        'gri-deschis': '#E5E5E5',    // Borders decorative
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.3', letterSpacing: '0.05em' }],
        'h1-mobile': ['2.25rem', { lineHeight: '1.3', letterSpacing: '0.05em' }],
        'h2': ['2.5rem', { lineHeight: '1.4' }],
        'h2-mobile': ['1.875rem', { lineHeight: '1.4' }],
        'body': ['1.125rem', { lineHeight: '1.8' }],
        'body-mobile': ['1rem', { lineHeight: '1.8' }],
      },
      spacing: {
        'section': '120px',
        'section-mobile': '80px',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0,0,0,0.08)',
        'header': '0 2px 8px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
