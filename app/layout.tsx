import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

// Navigation Component
function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-purple-900 to-black border-b border-purple-500/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AS</span>
            </div>
            <span className="text-white font-bold text hidden sm:inline group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all">
              ASG Studios
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Projects
            </Link>
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export const metadata: Metadata = {
  title: 'ASG Studios - Premium Digital Experience',
  description: 'ASG Studios Official Website - Crafted with Next.js, TypeScript, and premium design',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ASG Studios',
    description: 'Premium Official Website for ASG Studios',
    url: 'https://asgstudios.online',
    siteName: 'ASG Studios',
    images: [
      {
        url: 'https://asgstudios.online/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white overflow-x-hidden">
                    <Navigation />
        {children}
      </body>
    </html>
  );
}
