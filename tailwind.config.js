/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/js/**/*.jsx",
        "./resources/**/*.blade.php",
    ],
    safelist: [
        'bg-green-500',
        'bg-red-500',
        'bg-yellow-500',
        'bg-blue-500',
        'bg-green-600',
        'bg-gray-400',
        'border-red-500',
        'border-green-500',
        'text-red-500',

    ],
    theme: {
        extend: {
            colors: {
                primary: '#4679BD',        // Biru sedang sesuai tone logo
                'primary-dark': '#3A618F', // Versi gelapnya agar tetap kontras
                accent: '#8d7b4d',         // Bisa kamu sesuaikan juga bila perlu
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Open Sans', 'sans-serif'],
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
}
