'use client';

import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

export default function OverallProgressBar() {
  const { completedCount, mounted } = useProgress();

  const totalLessons = categories
    .flatMap(c => c.courses)
    .flatMap(c => c.lessons)
    .filter(l => !l.isComingSoon).length;

  if (!mounted || completedCount === 0) return null;

  const pct = Math.round((completedCount / totalLessons) * 100);

  return (
    <div
      className="mx-4 mb-4 p-3 rounded-xl border-2"
      style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: '2px 2px 0 var(--mb-gold)' }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] font-bold" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          全体進捗
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {completedCount} / {totalLessons} 講義
          </span>
          <span className="text-[11px] font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}>
            {pct}%
          </span>
        </div>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,46,0.08)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: 'var(--mb-gold)' }}
        />
      </div>
    </div>
  );
}
