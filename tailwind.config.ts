import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
            },
            fontFamily: {
                gill: 'var(--font-gill)',
            },
            keyframes: {
                'ring-draw': {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '50%': { opacity: '1', transform: 'scale(1.05)' },
                    '100%': { opacity: '0', transform: 'scale(0.95)' },
                },
            },
            animation: {
                'ring-draw': 'ring-draw 1s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
