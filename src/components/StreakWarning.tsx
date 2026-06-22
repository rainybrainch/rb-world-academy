'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { nextLessonHref } from '@/lib/nextLessonHref';

export default function StreakWarning() {
  const { streakDays, completedCount, dailyLessonCounts, isCompleted, lastViewedLesson, mounted } = useProgress();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!mounted || streakDays < 1 || completedCount === 0) return;
    const hour = new Date().getHours();
    if (hour < 17) return; // only show after 5pm
    const t = new Date();
    const today = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
    if (!dailyLessonCounts[today]) setShow(true);
  }, [mounted, streakDays, completedCount, dailyLessonCounts]);

  if (!show) return null;

  const nextHref = nextLessonHref(isCompleted, lastViewedLesson);

  return (
    <div
      className="px-4 py-3 rounded-xl border-2 flex items-center gap-3"
      style={{
        background: 'rgba(232,53,74,0.06)',
        borderColor: 'rgba(232,53,74,0.3)',
        animation: 'pulse-border 2s infinite',
      }}
    >
      <span className="text-2xl shrink-0">🔥</span>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-bold" style={{ color: 'var(--mb-red)', fontFamily: "'Dela Gothic One', sans-serif" }}>
          {streakDays}日連続が終わりそう！
        </div>
        <div className="text-[10px]" style={{ color: 'rgba(26,26,46,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          今日もう1講義でストリーク継続
        </div>
      </div>
      <Link
        href={nextHref}
        className="shrink-0 px-3 py-1.5 rounded-lg border-2 text-[11px] font-bold"
        style={{ background: 'var(--mb-red)', borderColor: 'var(--mb-red)', color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        aria-label={`${streakDays}日連続を継続するために次の講義を学ぶ`}
      >
        学ぶ →
      </Link>
      <button type="button"
        onClick={() => setShow(false)}
        className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-[11px] transition-all hover:opacity-70"
        style={{ color: 'rgba(26,26,46,0.3)', background: 'rgba(26,26,46,0.06)' }}
        aria-label="閉じる"
      >
        ✕
      </button>
    </div>
  );
}
