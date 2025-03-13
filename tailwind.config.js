module.exports = {
    mode: 'jit',
    content: ["./**/*.{html,htm,js}"],
    theme: {
        extend: {
            animation: {
                strobe: 'strobe 0.5s infinite',
            },
            keyframes: {
                strobe: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },
        },
    }
}