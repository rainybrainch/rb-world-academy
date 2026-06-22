'use client';

import { useMemo, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { ACHIEVEMENTS } from '@/data/achievements';

export default function AchievementsCard() {
  const { completedCount, streakDays, bestStreak, completedLessonKeys, mounted } = useProgress();
  const [showUnearned, setShowUnearned] = useState(false);

  const { earned, unearnedWithProgress } = useMemo(() => {
    if (!mounted) return { earned: [], unearnedWithProgress: [] };
    const earned = ACHIEVEMENTS.filter(a => a.check(completedCount, streakDays, bestStreak, completedLessonKeys));
    const unearnedWithProgress = ACHIEVEMENTS
      .filter(a => !earned.includes(a))
      .map(a => {
        const p = a.progress?.(completedCount, streakDays, bestStreak, completedLessonKeys);
        return { a, pct: p ? p.current / p.total : 0, p };
      })
      .filter(x => x.pct > 0)
      .sort((a, b) => b.pct - a.pct)
      .slice(0, 3);
    return { earned, unearnedWithProgress };
  }, [mounted, completedCount, streakDays, bestStreak, completedLessonKeys]);

  if (!mounted) return null;

  if (earned.length === 0 && unearnedWithProgress.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
          実績
        </h2>
        <span className="text-xs font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}>
          {earned.length}/{ACHIEVEMENTS.length}
        </span>
      </div>

      {/* Next to unlock section */}
      {unearnedWithProgress.length > 0 && (
        <div
          className="mb-4 p-3 rounded-xl border-2"
          style={{ borderColor: 'rgba(26,26,46,0.1)', background: 'rgba(245,200,66,0.03)' }}
        >
          <div className="text-[9px] font-bold tracking-[2px] mb-2.5" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            🎯 次の実績まであと…
          </div>
          <div className="space-y-2.5">
            {unearnedWithProgress.map(({ a, pct, p }) => (
              <div key={a.id}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base shrink-0" style={{ filter: 'grayscale(0.5)' }} aria-hidden="true">{a.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                        {a.title}
                      </span>
                      <div className="text-[8px] leading-tight mt-0.5" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{a.desc}</div>
                      </div>
                      {p && (
                        <span className="text-[9px] font-bold shrink-0 ml-1" style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}>
                          {p.current}/{p.total}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden ml-7"
                  style={{ background: 'rgba(26,26,46,0.08)' }}
                  role="progressbar"
                  aria-valuenow={Math.round(pct * 100)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${a.title}: ${p ? `${p.current}/${p.total}` : '0%'} 進捗`}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${Math.round(pct * 100)}%`, background: 'var(--mb-gold)' }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-2">
        {[...ACHIEVEMENTS].sort((a, b) => {
          const aE = earned.includes(a) ? 1 : 0;
          const bE = earned.includes(b) ? 1 : 0;
          return bE - aE;
        }).filter(a => earned.includes(a) || showUnearned).map(a => {
          const isEarned = earned.includes(a);
          return (
            <div
              key={a.id}
              className="flex flex-col items-center text-center p-3 rounded-xl border-2 transition-all"
              style={{
                borderColor: isEarned ? 'var(--mb-gold)' : 'rgba(26,26,46,0.1)',
                background: isEarned ? 'rgba(245,200,66,0.06)' : 'white',
                boxShadow: isEarned ? '2px 2px 0 var(--mb-gold)' : 'none',
                opacity: isEarned ? 1 : 0.45,
                filter: isEarned ? 'none' : 'grayscale(1)',
              }}
              aria-label={isEarned ? `${a.title}: 獲得済み。${a.desc}` : `${a.title}: 未獲得。${a.desc}`}
            >
              <span className="text-2xl mb-1" aria-hidden="true">{a.icon}</span>
              <span className="text-[10px] font-bold leading-tight" style={{ color: isEarned ? 'var(--mb-dark)' : 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {a.title}
              </span>
              <span className="text-[8px] mt-0.5 leading-tight" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {a.desc}
              </span>
            </div>
          );
        })}
      </div>

      {ACHIEVEMENTS.length - earned.length > 0 && (
        <button
          type="button"
          onClick={() => setShowUnearned(v => !v)}
          className="mt-3 w-full text-[10px] font-bold py-2 rounded-lg border transition-all"
          style={{
            borderColor: 'rgba(26,26,46,0.15)',
            color: 'rgba(26,26,46,0.4)',
            background: 'transparent',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
          aria-label={showUnearned ? `未取得の実績を隠す` : `未取得の実績を見る（${ACHIEVEMENTS.length - earned.length}個）`}
        >
          {showUnearned ? '未取得を隠す ▲' : `未取得の実績を見る（${ACHIEVEMENTS.length - earned.length}個） ▼`}
        </button>
      )}
    </div>
  );
}
