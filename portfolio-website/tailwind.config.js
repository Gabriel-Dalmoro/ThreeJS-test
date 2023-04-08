/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ['Cormorant Garamond', 'serif'],
                body: ['Nunito Sans', 'sans-serif'],
            },
            textColor: {
                bodyColor: '#1a202c', // Dark Gray
                bodyYellow: '#FFD700', // Yellow
                bodyGreen: '#228B22', // Green
                bodyBlue: '#1e3d58', // Dark Blue
            },
            backgroundColor: {
                primary: '#FFD700', // Yellow
                secondary: '#1e3d58', // Dark Blue
                tertiary: '#228B22', // Green
            },
            backgroundImage: {
                'forest-leaves': "url('/forest-leaves.jpg')",
            },
        },
    },
    plugins: [],
};
