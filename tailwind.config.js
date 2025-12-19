/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'sage': {
                    50: '#F8FAF8',
                    100: '#ECF4EC',
                    500: '#10B981', // Using the user's requested Sage Green (approximate match to Tailwind's Emerald-500, but ensuring the name is 'sage')
                    600: '#059669',
                },
                'light-gray': '#F8FAF8',
            },
            borderRadius: {
                '2xl': '1rem',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
