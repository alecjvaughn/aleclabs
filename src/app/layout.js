export const metadata = {
  title: 'AlecLabs App',
  description: 'Next.js Skeleton App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}