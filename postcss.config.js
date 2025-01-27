module.exports = {
    plugins: [
        require('postcss-nesting'), // Enables CSS nesting
        require('tailwindcss'),     // Includes Tailwind styles
        require('autoprefixer'),    // Adds vendor prefixes for browser compatibility
    ],
};