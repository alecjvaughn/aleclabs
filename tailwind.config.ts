import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--foreground)',
            '--tw-prose-headings': 'var(--foreground)',
            '--tw-prose-bold': 'var(--foreground)',
            '--tw-prose-invert-body': 'var(--foreground)',
            '--tw-prose-invert-headings': 'var(--foreground)',
            '--tw-prose-invert-bold': 'var(--foreground)',
            h2: {
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              paddingBottom: '0.5rem',
              borderBottomWidth: '1px',
              borderColor: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;