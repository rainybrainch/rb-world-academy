'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import BottomNav from '@/components/BottomNav';
import ScrollToTop from '@/components/ScrollToTop';
import LevelUpToast from '@/components/LevelUpToast';
import AchievementToast from '@/components/AchievementToast';
import LessonSearch from '@/components/LessonSearch';
import ShortcutHelp from '@/components/ShortcutHelp';
import { useProgress } from '@/hooks/useProgress';
import { ACHIEVEMENTS } from '@/data/achievements';
import { useModKey } from '@/hooks/useModKey';
import { getLevel } from '@/data/levels';
import { clearAllMbData } from '@/lib/clearMbData';

const navItems = [
  {
    href: '/',
    label: 'ホーム',
    sub: 'HOME',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/courses',
    label: 'コース',
    sub: 'COURSES',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: '/stamp',
    label: 'スタンプ',
    sub: 'STAMPS',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    href: '/manual',
    label: '使用マニュアル',
    sub: 'MANUAL',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    href: '/progress',
    label: '学習レポート',
    sub: 'REPORT',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: '/questions',
    label: 'よくある質問',
    sub: 'FAQ',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/news',
    label: 'お知らせ',
    sub: 'NEWS',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    href: '/glossary',
    label: '用語集',
    sub: 'GLOSSARY',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
  },
];


export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const pathname = usePathname();
  const { completedCount, streakDays, bestStreak, completedLessonKeys, dailyLessonCounts, mounted } = useProgress();
  const drawerBadgeCount = useMemo(
    () => mounted
      ? ACHIEVEMENTS.filter(a => a.check(completedCount, streakDays, bestStreak, completedLessonKeys)).length
      : 0,
    [mounted, completedCount, streakDays, bestStreak, completedLessonKeys],
  );
  const { kShortcut } = useModKey();
  const avatarIcon = useMemo(
    () => mounted && completedCount > 0 ? getLevel(completedCount).icon : null,
    [mounted, completedCount],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'Escape') { setDrawerOpen(false); return; }
      if (e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) { e.preventDefault(); setSearchOpen(true); }
      if (e.key === '?') { e.preventDefault(); setHelpOpen(true); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--mb-cream)' }}>
      {/* Fixed top header — Monebou dark #1A1A2E with gold bottom border */}
      <header
        className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center px-4 gap-3 transition-transform duration-300"
        style={{
          background: 'var(--mb-dark)',
          borderBottom: '3px solid var(--mb-gold)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 flex-1">
          <Link href="/" className="hover:opacity-90 transition-opacity flex items-center gap-2 leading-none">
            <Image
              src="/academy-icon.webp"
              alt="ALL ACADEMY"
              width={36}
              height={36}
              className="rounded-lg shrink-0"
              style={{ objectFit: 'cover' }}
            />
            <div className="flex flex-col leading-none">
              <span style={{ color: 'var(--mb-sky)', fontFamily: "'Dela Gothic One', sans-serif", fontSize: '13px', letterSpacing: '0.04em', lineHeight: 1.1 }}>
                ALL ACADEMY
              </span>
              <span style={{ color: 'rgba(91,200,232,0.5)', fontFamily: "'Dela Gothic One', sans-serif", fontSize: '9px', letterSpacing: '0.06em', lineHeight: 1.1 }}>
                オールアカデミー
              </span>
            </div>
          </Link>
        </div>

        {/* Search button */}
        <button type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="講義を検索"
          className="hidden sm:flex items-center gap-2 px-3 h-8 rounded-lg border transition-opacity hover:opacity-80 shrink-0"
          style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)' }}
          title={`${kShortcut} / / で検索`}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[10px]" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>検索</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.08)', fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)' }}>{kShortcut}</span>
        </button>
        <button type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="講義を検索"
          className="flex sm:hidden w-9 h-9 items-center justify-center rounded-full border-2 hover:opacity-80 transition-opacity shrink-0"
          style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Menu button — hamburger + avatar pill */}
        <button type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-1.5 px-2.5 h-9 rounded-full border-2 hover:opacity-85 transition-opacity shrink-0"
          style={{ borderColor: 'var(--mb-gold)', background: 'rgba(245,200,66,0.15)' }}
          aria-label="メニューを開く"
        >
          {/* Hamburger lines */}
          <div className="flex flex-col gap-[4px]">
            <span className="block w-4 h-[2px] rounded-full" style={{ background: 'var(--mb-gold)' }} />
            <span className="block w-4 h-[2px] rounded-full" style={{ background: 'var(--mb-gold)' }} />
            <span className="block w-4 h-[2px] rounded-full" style={{ background: 'var(--mb-gold)' }} />
          </div>
          {/* Label */}
          <span className="text-[11px] font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            メニュー
          </span>
          {/* Avatar circle */}
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
            style={{ background: 'var(--mb-gold)', color: 'var(--mb-dark)', fontFamily: "'Dela Gothic One', sans-serif" }}
          >
            {avatarIcon ?? 'P'}
          </div>
        </button>
      </header>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px]"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer — dark themed like HP */}
      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(20,20,40,0.98)',
          backdropFilter: 'blur(20px)',
          borderLeft: '3px solid var(--mb-gold)',
        }}
      >
        {/* Drawer close button */}
        <button type="button"
          onClick={() => setDrawerOpen(false)}
          className="absolute top-4 right-5 text-white text-2xl hover:opacity-70 transition-opacity"
          aria-label="閉じる"
        >
          ✕
        </button>

        {/* Drawer header */}
        <div className="pt-16 px-8 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-sky)', fontSize: '18px', lineHeight: 1.2 }}>
              ALL ACADEMY
            </div>
            <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'rgba(91,200,232,0.45)', fontSize: '11px', letterSpacing: '0.05em', marginTop: '2px' }}>
              オールアカデミー
            </div>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', letterSpacing: '2px', marginTop: '4px' }}>
            11言語を学んで世界と繋がろう
          </div>
          {/* 7-day mini heatmap — intensity by lesson count */}
          {mounted && (
            <div className="flex gap-1 mt-4">
              {Array.from({ length: 7 }).map((_, i) => {
                const d = new Date();
                d.setDate(d.getDate() - (6 - i));
                const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                const count = dailyLessonCounts[dateStr] ?? 0;
                const isToday = i === 6;
                const bg = count === 0
                  ? 'rgba(255,255,255,0.1)'
                  : isToday
                    ? 'var(--mb-gold)'
                    : count >= 3 ? 'var(--mb-green)' : count === 2 ? 'rgba(76,175,125,0.7)' : 'rgba(76,175,125,0.45)';
                return (
                  <div key={dateStr} className="flex flex-col items-center gap-0.5 flex-1">
                    <div
                      className="w-full h-2 rounded-full"
                      style={{
                        background: bg,
                        outline: isToday ? '1.5px solid rgba(245,200,66,0.5)' : 'none',
                        outlineOffset: '1px',
                      }}
                      title={count > 0 ? `${dateStr}: ${count}講義` : dateStr}
                    />
                    {count > 0 && (
                      <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.3)', fontFamily: "'Dela Gothic One', sans-serif", lineHeight: 1 }}>
                        {count}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Live progress stats */}
          {mounted && (
            <div className="flex gap-4 mt-3">
              <div className="flex flex-col">
                <span style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif", fontSize: '20px', lineHeight: 1 }}>
                  {completedCount}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '9px', letterSpacing: '1px', marginTop: '2px' }}>LESSONS DONE</span>
              </div>
              <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <div className="flex flex-col">
                <span style={{ color: 'var(--mb-sky)', fontFamily: "'Dela Gothic One', sans-serif", fontSize: '20px', lineHeight: 1 }}>
                  {streakDays}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '9px', letterSpacing: '1px', marginTop: '2px' }}>DAY STREAK</span>
              </div>
              <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <div className="flex flex-col">
                <span style={{ color: 'var(--mb-green)', fontFamily: "'Dela Gothic One', sans-serif", fontSize: '20px', lineHeight: 1 }}>
                  {drawerBadgeCount}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '9px', letterSpacing: '1px', marginTop: '2px' }}>BADGES</span>
              </div>
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-between px-8 py-[18px] transition-colors hover:bg-white/5"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  borderLeft: isActive ? '3px solid var(--mb-gold)' : '3px solid transparent',
                  background: isActive ? 'rgba(245,200,66,0.06)' : undefined,
                  color: isActive ? 'var(--mb-gold)' : 'white',
                }}
              >
                <div className="flex items-center gap-4">
                  <span style={{ color: isActive ? 'var(--mb-gold)' : 'rgba(255,255,255,0.5)' }}>
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', marginTop: '1px' }}>
                      {item.sub}
                    </div>
                  </div>
                </div>
                <svg className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.25)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}

          <button type="button"
            onClick={() => {
              if (confirm('学習データをすべてリセットしますか？\nこの操作は取り消せません。')) {
                try {
                  clearAllMbData();
                } catch {}
                setDrawerOpen(false);
                window.location.href = '/';
              }
            }}
            className="flex items-center justify-between px-8 py-[18px] transition-colors hover:bg-white/5 w-full text-left"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.25)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <div>
                <div className="text-sm font-medium">学習データをリセット</div>
                <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(255,255,255,0.25)', marginTop: '1px' }}>RESET DATA</div>
              </div>
            </div>
            <svg className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.15)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </nav>
      </aside>

      <main className="pt-14 pb-14">
        {children}
      </main>

      <BottomNav />
      <LevelUpToast />
      <AchievementToast />
      <ScrollToTop />
      <LessonSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ShortcutHelp open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}
