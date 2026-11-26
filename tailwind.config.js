/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif'],
                heading: ['Rubik', 'sans-serif'],
            },
            colors: {
                ulpgc: {
                    blue:        '#0066A1',
                    'blue-80':   '#3385B4',
                    'blue-50':   '#7FB2D0',
                    'blue-10':   '#E5EFF5',
                    'blue-dark': '#05476D',
                    orange:        '#FFA100',
                    'orange-80':   '#FFB433',
                    'orange-50':   '#FFD07F',
                    'orange-10':   '#FFF5E5',
                    'orange-dark': '#9C6609',
                    gray:        '#565A5C',
                    'gray-80':   '#787B7D',
                    'gray-50':   '#AAACAD',
                    'gray-20':   '#DDDEDE',
                    'gray-10':   '#EEEEEE',
                    'gray-5':    '#F6F7F7',
                    'gray-dark': '#2D3133',
                },
            },
        },
    },
    plugins: [],
}
