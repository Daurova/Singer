// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'dance-female': 'dance-female 3s ease-in-out infinite',
        'dance-male': 'dance-male 3s ease-in-out infinite',
        'piano-key': 'piano-key 0.5s ease-in-out',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        'dance-female': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(-5deg)' },
          '50%': { transform: 'translateY(-5px) rotate(5deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-3deg)' },
        },
        'dance-male': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(3deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-2deg)' },
          '75%': { transform: 'translateY(-6px) rotate(4deg)' },
        },
        'piano-key': {
          '0%, 100%': { transform: 'translateY(0)', backgroundColor: '#fff' },
          '50%': { transform: 'translateY(-3px)', backgroundColor: '#fbbf24' },
        },
      },
    },
  },
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'slide': 'slide 2s linear infinite',
        'slide-short': 'slide-short 1.5s linear infinite',
        'bounce': 'bounce 2s infinite',
        'spin': 'spin 1s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'sparkle': 'sparkle 0.5s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'slide-short': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(150%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))',
            opacity: 1 
          },
          '50%': { 
            filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.7))',
            opacity: 0.9 
          },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: 0.7 },
          '50%': { transform: 'scale(1.5) rotate(180deg)', opacity: 1 },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'stars': "url('/images/stars.png')",
        'film-grain': "url('/images/film-grain.png')",
      },
    },
  },
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'navy': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1c2c',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite',
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'slide': 'slide 2s linear infinite',
        'slide-short': 'slide-short 1.5s linear infinite',
        'bounce': 'bounce 2s infinite',
        'spin': 'spin 1s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'sparkle': 'sparkle 0.5s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 1.5s ease-in-out infinite',
        'electric': 'electric 0.8s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'slide-short': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(150%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))',
            opacity: 1 
          },
          '50%': { 
            filter: 'drop-shadow(0 0 12px rgba(173, 216, 230, 0.8))',
            opacity: 0.9 
          },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: 0.7 },
          '50%': { transform: 'scale(1.3) rotate(180deg)', opacity: 1 },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },
        electric: {
          '0%, 100%': { opacity: 0, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.5)' },
        },
      },
      dropShadow: {
        'neon-white': '0 0 10px rgba(255, 255, 255, 0.6)',
        'neon-cyan': '0 0 15px rgba(173, 216, 230, 0.7)',
        'neon-intense': '0 0 20px rgba(255, 255, 255, 0.8)',
      },
      backgroundImage: {
        'stars': "url('/images/stars.png')",
        'film-grain': "url('/images/film-grain.png')",
      },
    },
  },
}