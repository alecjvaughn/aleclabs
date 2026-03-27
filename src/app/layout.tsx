import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'AlecLabs App',
  description: 'Next.js Resume Basic Template',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: '#fff', padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
          <nav style={{ maxWidth: '768px', margin: '0 auto', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            {/* <Link href="/" style={{ textDecoration: 'none', color: '#374151' }}>Home</Link> */}
            <Link href="/about" style={{ textDecoration: 'none', color: '#374151' }}>About</Link>
            {/* <Link href="/timeline" style={{ textDecoration: 'none', color: '#374151' }}>Timeline</Link> */}
            <Link href="/resume" style={{ textDecoration: 'none', color: '#374151' }}>Resume</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}