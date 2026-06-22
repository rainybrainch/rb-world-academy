export const revalidate = 0;
import type { Metadata } from 'next';
import { Dela_Gothic_One, Zen_Maru_Gothic } from 'next/font/google';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';

const delaGothic = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dela',
});

const zenMaru = Zen_Maru_Gothic({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen',
});

export const metadata: Metadata = {
  title: 'ALL ACADEMY',
  description: 'Learn 11 languages and connect with the world on ALL ACADEMY.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ALL ACADEMY',
  },
  openGraph: {
    title: 'ALL ACADEMY',
    description: '11 languages connected to the world. Learn with ALL ACADEMY.',
    url: 'https://rb-world-academy.vercel.app',
    siteName: 'ALL ACADEMY',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ALL ACADEMY',
    description: 'Learn 11 languages. Connect with the world.',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${delaGothic.variable} ${zenMaru.variable}`}>
      <head>
        <meta name="theme-color" content="#1A1A2E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
      </head>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
