'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const LATEST_NEWS_DATE = '2026-06-18';
const NEWS_SEEN_KEY = 'mb_news_seen';

const items = [
  {
    href: '/',
    label: 'ホーム',
    icon: (active: boolean) => (
      <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/courses',
    label: 'コース',
    icon: (active: boolean) => (
      <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: '/progress',
    label: 'レポート',
    icon: (active: boolean) => (
      <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    href: '/news',
    label: 'お知らせ',
    icon: (active: boolean) => (
      <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];


export default function BottomNav() {
  const pathname = usePathname();
  const { streakDays, dailyLessonCounts, completedCount, mounted } = useProgress();
  const scrollPct = useScrollProgress();
  const [hasNewNews, setHasNewNews] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(NEWS_SEEN_KEY);
    setHasNewNews(!seen || seen < LATEST_NEWS_DATE);
  }, []);

  useEffect(() => {
    if (pathname === '/news') {
      localStorage.setItem(NEWS_SEEN_KEY, LATEST_NEWS_DATE);
      setHasNewNews(false);
    }
  }, [pathname]);

  const todayStudied = mounted && (() => {
    const n = new Date();
    const k = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`;
    return (dailyLessonCounts[k] ?? 0) > 0;
  })();
  const showStudyNudge = mounted && completedCount > 0 && !todayStudied;
  const showStreak = mounted && streakDays >= 1;
  const isLessonPage = pathname.includes('/lessons/');

  if (isLessonPage) {
    const isDone = scrollPct >= 100;
    return (
      <nav
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3 py-2 rounded-full"
        style={{
          background: 'var(--mb-dark)',
          border: '2px solid var(--mb-gold)',
          boxShadow: '0 4px 12px rgba(26,26,46,0.3)',
        }}
      >
        <Link
          href="/"
          className="flex items-center justify-center w-8 h-8 rounded-full transition-opacity hover:opacity-80"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          title="戻る"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>

        <div
          className="text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
          style={{
            background: isDone ? 'rgba(76,175,125,0.15)' : 'rgba(245,200,66,0.1)',
            color: isDone ? 'var(--mb-green)' : 'var(--mb-gold)',
            fontFamily: "'Dela Gothic One', sans-serif",
          }}
        >
          {isDone ? '✓' : `${Math.round(scrollPct)}%`}
        </div>
      </nav>
    );
  }

  return (
    <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex items-stretch"
        style={{
          background: 'var(--mb-dark)',
          borderTop: '2px solid var(--mb-gold)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          minHeight: '56px',
        }}
      >
        {items.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          const showStreak = item.href === '/progress' && mounted && streakDays >= 1;
          const showNewsBadge = item.href === '/news' && hasNewNews;
          const showCourseNudge = item.href === '/courses' && showStudyNudge;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 relative flex flex-col items-center justify-center gap-0.5 transition-opacity hover:opacity-80"
              style={{ color: isActive ? 'var(--mb-gold)' : 'rgba(255,255,255,0.35)' }}
            >
              <div className="relative">
                {item.icon(isActive)}
                {showNewsBadge && (
                  <div
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
                    style={{ background: 'var(--mb-red)', borderColor: 'var(--mb-dark)' }}
                  />
                )}
                {showCourseNudge && (
                  <div
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
                    style={{ background: 'var(--mb-sky)', borderColor: 'var(--mb-dark)', animation: 'pulse 2s infinite' }}
                  />
                )}
                {showStreak && (
                  <div
                    className="absolute -top-1 -right-1.5 min-w-[14px] h-[14px] rounded-full flex items-center justify-center text-[8px] font-bold px-0.5"
                    style={{ background: isActive ? 'var(--mb-gold)' : 'var(--mb-red)', color: 'white', fontFamily: "'Dela Gothic One', sans-serif" }}
                  >
                    {streakDays}
                  </div>
                )}
              </div>
              <span className="text-[9px] font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {item.label}
              </span>
              {isActive && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: 'var(--mb-gold)' }}
                />
              )}
            </Link>
          );
        })}
      </nav>
  );
}
