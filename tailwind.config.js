module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            'inter': ['Inter', 'sans-serif'],
            'modak': ['Modak', 'cursive']
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            blue: {
                light: '#C3E4FA',
                DEFAULT: '#84CEFF',
                dark: '#009eeb',
            },
            green:{
                DEFAULT: '#A1FF8A'
            },
            yellow: {
                DEFAULT: '#F1FF77',
            },
            black: {
                darkest: '#000',
                dark: '#1e2232',
                DEFAULT: '#0B0F21',
                light: '#2D3445',
                lightest: '#3c4858',
            },
            white: {
                DEFAULT: '#fff'
            },
            gray: {
                DEFAULT: '#9799A4'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
