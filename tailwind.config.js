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