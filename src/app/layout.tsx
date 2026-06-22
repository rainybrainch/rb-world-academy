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
  title: 'マネぼうアカデミー',
  description: 'ゲームで遊んだら、経済がわかった。お金の知識を楽しく学べるオンライン学習プラットフォーム。',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'マネぼう',
  },
  openGraph: {
    title: 'マネぼうアカデミー',
    description: 'ゲームで遊んだら、経済がわかった。お金の基本から資産形成まで楽しく学ぼう。',
    url: 'https://manebou-juku.vercel.app',
    siteName: 'マネぼうアカデミー',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'マネぼうアカデミー',
    description: 'ゲームで遊んだら、経済がわかった。お金の知識を楽しく学ぼう。',
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
