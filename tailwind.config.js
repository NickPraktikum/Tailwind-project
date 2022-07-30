/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      maxWidth: {
        'img-max':"300px",
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      }
    },
  },
  plugins: [],
}
