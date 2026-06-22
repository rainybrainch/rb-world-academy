'use client';

import { useMemo } from 'react';
import { useProgress } from '@/hooks/useProgress';

interface Props {
  totalLessons: number;
}

function formatDate(d: Date): string {
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default function PacePrediction({ totalLessons }: Props) {
  const { completedCount, dailyLessonCounts, mounted } = useProgress();

  const prediction = useMemo(() => {
    if (!mounted || completedCount < 3) return null;

    const dates = Object.keys(dailyLessonCounts);
    if (dates.length === 0) return null;

    const sorted = [...dates].sort();
    const oldest = new Date(sorted[0] + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const msPerWeek = 7 * 86400000;
    const weeksElapsed = Math.max(
      (today.getTime() - oldest.getTime()) / msPerWeek,
      1
    );

    const totalCompleted = dates.reduce((sum, d) => sum + (dailyLessonCounts[d] ?? 0), 0);
    const weeklyRate = totalCompleted / weeksElapsed;

    if (weeklyRate < 0.5) return null;

    const remaining = Math.max(totalLessons - completedCount, 0);
    if (remaining === 0) return null;

    const weeksNeeded = remaining / weeklyRate;
    const target = new Date(today.getTime() + weeksNeeded * msPerWeek);

    return {
      weeklyRate: Math.round(weeklyRate * 10) / 10,
      remaining,
      targetDate: target,
      weeksNeeded: Math.ceil(weeksNeeded),
    };
  }, [mounted, completedCount, dailyLessonCounts, totalLessons]);

  if (!prediction) return null;

  const pct = Math.round((completedCount / totalLessons) * 100);

  return (
    <div
      className="mb-8 p-5 rounded-xl border-2"
      style={{
        background: 'var(--mb-dark)',
        borderColor: 'var(--mb-dark)',
        boxShadow: '3px 3px 0 var(--mb-green)',
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🎯</span>
        <span
          className="text-xs font-bold tracking-widest"
          style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          学習ペース予測
        </span>
      </div>

      {/* Target date */}
      <div className="mb-4">
        <div
          className="text-[10px] mb-1"
          style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          このペースで続けると
        </div>
        <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'white', fontSize: '20px', lineHeight: 1.2 }}>
          <span style={{ color: 'var(--mb-gold)' }}>{formatDate(prediction.targetDate)}</span>
          <span className="text-sm ml-2" style={{ color: 'rgba(255,255,255,0.6)' }}>に全講義完了</span>
        </div>
        <div
          className="text-[11px] mt-1"
          style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          残り {prediction.remaining} 講義 · あと約 {prediction.weeksNeeded} 週間
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${pct}%`, background: 'var(--mb-green)' }}
          />
        </div>
        <div
          className="text-[10px] mt-1"
          style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          現在 {pct}% 完了
        </div>
      </div>

      {/* Weekly pace stat */}
      <div
        className="flex items-center justify-between px-3 py-2 rounded-lg"
        style={{ background: 'rgba(255,255,255,0.07)' }}
      >
        <span
          className="text-[10px]"
          style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          週平均ペース
        </span>
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
            style={{
              background: prediction.weeklyRate >= 7
                ? 'rgba(232,53,74,0.25)'
                : prediction.weeklyRate >= 4
                  ? 'rgba(76,175,125,0.25)'
                  : 'rgba(91,200,232,0.2)',
              color: prediction.weeklyRate >= 7
                ? 'var(--mb-red)'
                : prediction.weeklyRate >= 4
                  ? 'var(--mb-green)'
                  : 'var(--mb-sky)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            {prediction.weeklyRate >= 7 ? '🚀 快速ペース' : prediction.weeklyRate >= 4 ? '👍 好ペース' : '📖 着実ペース'}
          </span>
          <span
            style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-sky)', fontSize: '14px' }}
          >
            週{prediction.weeklyRate}講義
          </span>
        </div>
      </div>
    </div>
  );
}
