import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { PageTransition } from '@/components/shared/PageTransition';

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080'),
  title: 'Sparsh Physiotherapy Clinic - Best Physiotherapy in Kanpur',
  description: 'Kanpur\'s trusted physiotherapy clinic with 17+ years of experience. Science-backed treatment for pain relief, post-surgery recovery, and complete rehabilitation.',
  icons: {
    icon: '/Simage.png',
    shortcut: '/Simage.png',
    apple: '/Simage.png',
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
 <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} font-['DM_Sans']}`}>
  <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange={false}
      >
        <PageTransition>
          <Navbar />
          <main className="pt-[70px]">
          <script src="https://webswami-backend-backend.up.railway.app/widget.js" data-bot-id="f9c3294a-595e-4085-ab5b-a748261a37c4"></script>
          {children}
          </main>
          <Footer />
        </PageTransition>
      </ThemeProvider>
      </body>
    </html>
  );
}
