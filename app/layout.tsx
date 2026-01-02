import type { Metadata } from 'next';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
