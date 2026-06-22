'use client';

import { useProgress } from '@/hooks/useProgress';
import type { Category } from '@/types';

interface Props {
  category: Category;
}

export default function CategoryCardProgress({ category }: Props) {
  const { isCompleted, mounted } = useProgress();
  if (!mounted) return null;

  const total = category.courses.flatMap(c => c.lessons.filter(l => !l.isComingSoon)).length;
  const done = category.courses.flatMap(c =>
    c.lessons.filter(l => !l.isComingSoon && isCompleted(c.id, l.id))
  ).length;

  if (done === 0) return null;
  const pct = Math.round((done / total) * 100);
  const isFullDone = pct === 100;

  if (isFullDone) {
    return (
      <div
        className="mx-3 mb-3 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-bold"
        style={{
          background: 'var(--mb-gold)',
          color: 'var(--mb-dark)',
          fontFamily: "'Zen Maru Gothic', sans-serif",
          boxShadow: '2px 2px 0 rgba(26,26,46,0.15)',
        }}
      >
        <span>🏆</span>
        <span>完全制覇！</span>
      </div>
    );
  }

  return (
    <div className="px-3 pb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[9px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {done}/{total}
        </span>
        <span className="text-[9px] font-bold" style={{ color: 'var(--mb-sky)', fontFamily: "'Dela Gothic One', sans-serif" }}>
          {pct}%
        </span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,46,0.08)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: 'var(--mb-gold)' }}
        />
      </div>
    </div>
  );
}
