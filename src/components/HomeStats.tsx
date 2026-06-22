'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { ACHIEVEMENTS } from '@/data/achievements';

function useCountUp(target: number, duration = 600): number {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (target === 0) { setValue(0); return; }
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current !== null) cancelAnimationFrame(raf.current); };
  }, [target, duration]);

  return value;
}

export default function HomeStats() {
  const { completedCount, streakDays, bestStreak, weeklyCompletedCount, completedLessonKeys, mounted } = useProgress();

  const earnedCount = useMemo(
    () => mounted ? ACHIEVEMENTS.filter(a => a.check(completedCount, streakDays, bestStreak, completedLessonKeys)).length : 0,
    [mounted, completedCount, streakDays, bestStreak, completedLessonKeys]
  );

  const animatedLessons = useCountUp(mounted ? completedCount : 0, 700);
  const animatedStreak = useCountUp(mounted ? streakDays : 0, 500);
  const animatedBadges = useCountUp(earnedCount, 400);

  const stats = [
    {
      label: '獲得実績',
      sub: 'ACHIEVEMENTS',
      value: mounted ? `${animatedBadges}/${ACHIEVEMENTS.length}` : `0/${ACHIEVEMENTS.length}`,
      color: 'var(--mb-sky)',
      icon: '🏅',
      extra: null as string | null,
    },
    {
      label: '積み立て講義',
      sub: 'LESSONS',
      value: mounted ? String(animatedLessons) : '0',
      color: 'var(--mb-green)',
      icon: '📚',
      extra: mounted && weeklyCompletedCount > 0 ? `今週${weeklyCompletedCount}講義` : null,
    },
    {
      label: '連続学習',
      sub: 'STREAK',
      value: mounted ? `${animatedStreak}日` : '0日',
      color: 'var(--mb-gold)',
      icon: streakDays >= 3 ? '🔥' : '✨',
      extra: mounted && bestStreak > streakDays ? `最高${bestStreak}日` : null,
    },
  ];

  if (!mounted) {
    return (
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="rounded-xl border-2 p-3" style={{ borderColor: 'rgba(26,26,46,0.1)' }}>
            <div className="w-7 h-7 rounded-full mx-auto mb-2" style={{ background: 'rgba(26,26,46,0.08)' }} />
            <div className="h-6 w-10 mx-auto mb-1 rounded" style={{ background: 'rgba(26,26,46,0.08)' }} />
            <div className="h-2.5 w-14 mx-auto rounded" style={{ background: 'rgba(26,26,46,0.08)' }} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((stat) => {
        // Build aria-label with full stat description
        const ariaLabel = `${stat.label}。${stat.value}${stat.extra ? `。${stat.extra}` : ''}。詳細は進捗ページへ`;
        return (
          <Link
            key={stat.sub}
            href="/progress"
            className="block bg-white rounded-xl p-3 text-center border-2 transition-all hover:-translate-y-0.5 active:translate-y-0"
            style={{ borderColor: 'var(--mb-dark)', boxShadow: `3px 3px 0 ${stat.color}` }}
            aria-label={ariaLabel}
          >
            <div className="text-lg mb-1" aria-hidden="true">{stat.icon}</div>
            <div
              className="text-xl font-bold leading-none"
              style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}
            >
              {stat.value}
            </div>
            <div
              className="text-[9px] mt-1 font-bold"
              style={{ color: stat.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {stat.label}
            </div>
            {stat.extra && (
              <div
                className="text-[9px] mt-0.5"
                style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {stat.extra}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
