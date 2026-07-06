/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // All Academy Primary Colors
        navy: {
          50: '#f3f4f8',
          100: '#e8eaf2',
          200: '#d1d5e4',
          300: '#aab0cf',
          400: '#7b85b8',
          500: '#5b6aa3',
          600: '#4a5591',
          700: '#3e4675',
          800: '#1a1a2e', // Main Navy
          900: '#0f0f1a',
        },
        gold: {
          50: '#fffbf0',
          100: '#fff6dd',
          200: '#ffecbb',
          300: '#ffe399',
          400: '#ffd966',
          500: '#f5c842', // Main Gold
          600: '#e6b800',
          700: '#ccaa00',
          800: '#b39900',
          900: '#8a7400',
        },
        ocean: {
          50: '#f0fffe',
          100: '#dffffe',
          200: '#b3fffd',
          300: '#7ffffc',
          400: '#4ecdc4', // Main Blue
          500: '#35bfb8',
          600: '#20a8a8',
          700: '#0e8a8a',
          800: '#076b6b',
          900: '#054949',
        },
        sunny: {
          50: '#fffff0',
          100: '#ffffd1',
          200: '#ffff99',
          300: '#fffe4d',
          400: '#ffd93d', // Main Yellow
          500: '#e6c200',
          600: '#ccaa00',
          700: '#b39900',
          800: '#8a7400',
          900: '#665600',
        },
        slate: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },

      fontSize: {
        // Typography System
        '2xl': ['32px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'xl': ['28px', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        'lg': ['24px', { lineHeight: '1.4', letterSpacing: '0' }],
        'base': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'sm': ['14px', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'xs': ['12px', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },

      spacing: {
        // Spacing System (4px base)
        0: '0',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
      },

      borderRadius: {
        // Rounded UI - 角丸システム
        'none': '0',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px', // Primary radius
        '3xl': '32px',
        'full': '9999px',
      },

      boxShadow: {
        // Soft Shadow System
        'none': 'none',
        'xs': '0 1px 2px 0 rgba(26, 26, 46, 0.05)',
        'sm': '0 1px 3px 0 rgba(26, 26, 46, 0.1), 0 1px 2px 0 rgba(26, 26, 46, 0.06)',
        'base': '0 4px 6px -1px rgba(26, 26, 46, 0.1), 0 2px 4px -1px rgba(26, 26, 46, 0.06)',
        'md': '0 10px 15px -3px rgba(26, 26, 46, 0.1), 0 4px 6px -2px rgba(26, 26, 46, 0.05)',
        'lg': '0 20px 25px -5px rgba(26, 26, 46, 0.1), 0 10px 10px -5px rgba(26, 26, 46, 0.04)',
        'xl': '0 25px 50px -12px rgba(26, 26, 46, 0.15)',
        'floating': '0 10px 40px 0 rgba(26, 26, 46, 0.12)',
        'card': '0 4px 12px 0 rgba(26, 26, 46, 0.08)',
        'hover': '0 20px 40px -10px rgba(26, 26, 46, 0.15)',
      },

      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
        'fade-in': 'fadeIn 0.3s ease-in',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(78, 205, 196, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(78, 205, 196, 0.6)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      fontFamily: {
        sans: ['Zen Maru Gothic', 'system-ui', 'sans-serif'],
        display: ['Dela Gothic One', 'Zen Maru Gothic', 'system-ui', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'monospace'],
      },

      backgroundImage: {
        'gradient-navy-gold': 'linear-gradient(135deg, #1a1a2e 0%, #4a5591 100%)',
        'gradient-ocean-blue': 'linear-gradient(135deg, #4ecdc4 0%, #44a0a8 100%)',
        'gradient-sunny': 'linear-gradient(135deg, #ffd93d 0%, #f5c842 100%)',
        'gradient-soft': 'linear-gradient(135deg, rgba(78, 205, 196, 0.08) 0%, rgba(245, 200, 66, 0.08) 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },

      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
      },

      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
        '350': '350ms',
      },
    },
  },
  plugins: [],
};
