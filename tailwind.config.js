/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
   content: ['./src/**/*.{html,js,jsx}'],
   theme: {
      extend: {
         boxShadow: {
            buttonShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
         },
      },
   },
   plugins: [],
};
