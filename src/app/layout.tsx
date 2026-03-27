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
        <header className="bg-white dark:bg-zinc-900 p-4 border-b border-gray-200 dark:border-zinc-800">
          <nav className="max-w-3xl mx-auto flex gap-6 justify-center flex-wrap">
            <Link href="/" className="no-underline text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">About</Link>
            {/* <Link href="/pages/about" className="no-underline text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">About</Link> */}
            {/* <Link href="/pages/timeline" className="no-underline text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Timeline</Link> */}
            <Link href="/pages/resume" className="no-underline text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Resume</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}