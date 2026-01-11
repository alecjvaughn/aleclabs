module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    './node_modules/@firecms/ui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headers: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0070F4',
        secondary: '#FF5B79',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
