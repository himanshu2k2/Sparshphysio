import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sparsh Physiotherapy Clinic - Best Physiotherapy in Kanpur',
  description: 'Kanpur\'s trusted physiotherapy clinic with 17+ years of experience. Science-backed treatment for pain relief, post-surgery recovery, and complete rehabilitation.',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} font-['DM_Sans'] bg-[#f8f6f1]`}>
        <Navbar />
        <main className="pt-[70px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
