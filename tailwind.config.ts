import type { Config } from 'tailwindcss'
import { theme } from './src/config/theme'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    ...theme.colors.primary,
                    25: '#f8faff',
                },
                secondary: theme.colors.secondary,
                neutral: theme.colors.neutral,
                green: {
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                },
                blue: {
                    500: '#3b82f6',
                    600: '#2563eb',
                },
                purple: {
                    500: '#a855f7',
                    600: '#9333ea',
                },
                orange: {
                    500: '#f97316',
                    600: '#ea580c',
                },
            },
            fontFamily: {
                sans: theme.fontFamily.sans,
            },
            maxWidth: {
                container: theme.spacing.container,
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'bounce-slow': 'bounce 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}

export default config
