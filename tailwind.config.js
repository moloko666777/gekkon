module.exports = {
    mode: 'jit', // Just-In-Time Compiler
    purge: ['./src/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'xs': '360px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontSize: {
            '0': '0',
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '48': '3rem',
            '56': '3.5rem',


            '28': '1.75rem',
            '32': '2rem',
        },
        extend: {
            colors: {
                default: '#fff',
                'crusta': {
                    '500': '#F77D33',
                    'hover': '#ff8135',
                    'active': '#eb7730'
                }, 'seashell-peach': {
                    '500': '#fef2eb'
                }, 'alabaster': {
                    '500': '#FAFAFA'
                }, 'curious-blue': {
                    '500': '#3390D3'
                }, 'silver': {
                    '500': '#c3c3c3'
                }, 'wild-sand': {
                    '500': '#f3f3f3'
                }, 'gunsmoke': {
                    '500': '#878787'
                }, 'abbey': {
                    '500': '#4C4C4C'
                }, 'woodsmoke': {
                    '500': '#101010'
                }
            },
            padding: {
                '5px': '5px',
            },
            fontFamily: {
                body: ['Gotham Pro']
            },
            zIndex: {
                '1': '1',
                '2': '2',
            },
            lineHeight: {
                'h4': '2.875rem',
            }
        },
        spacing: {
            px: '1px',
            0: '0',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',

            30: '1.875rem',
            39: '2.438rem',
            46: '2.875rem',
            72: '4.5rem',
            76: '4.75rem',
            84: '5.25rem',
            86: '5.375rem',
            100: '6.25rem',
            104: '6.5rem',
            122: '7.625rem',
            138: '8.625rem',
            160: '10rem',
            164: '10.25rem',
            176: '11rem',
            196: '12.25rem',
            204: '12.75rem',
            214: '13.375rem',
            220: '13.75rem',
            246: '15.375rem',
            282: '17.625rem',
            340: '21.25rem',
            328: '20.5rem',
            372: '23.25rem',
            384: '24rem',
            588: '36.75rem',
            648: '40.5rem',
            660: '41.25rem',
            680: '42.5rem',
            704: '44rem',
            715: '44.6rem',
            821: '50.75rem',
        },
        minWidth: {
            '150': '9.375rem',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
