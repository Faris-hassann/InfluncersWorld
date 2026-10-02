/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne Variable"', 'Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans Variable"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Liberation Mono"', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        ink: '#111827',
        mist: '#f7f7f8',
      },
      boxShadow: {
        'ink-2': '2px 2px 0 0 #18181b',
        'ink-3': '3px 3px 0 0 #18181b',
        'ink-4': '4px 4px 0 0 #18181b',
        'ink-6': '6px 6px 0 0 #18181b',
        'amber-4': '4px 4px 0 0 #f59e0b',
        'amber-6': '6px 6px 0 0 #f59e0b',
        'white-2': '2px 2px 0 0 #ffffff',
        header: '0 4px 20px 0 rgba(245, 158, 11, 0.08)',
      },
    },
  },
  plugins: [],
};
