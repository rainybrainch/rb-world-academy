'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '@/data/courses';
import { useModKey } from '@/hooks/useModKey';
import { useProgress } from '@/hooks/useProgress';

interface Result {
  lessonId: string;
  lessonTitle: string;
  courseId: string;
  courseTitle: string;
  categoryTitle: string;
  duration?: string;
}

const allLessons: Result[] = categories.flatMap(cat =>
  cat.courses.flatMap(course =>
    course.lessons
      .filter(l => !l.isComingSoon)
      .map(l => ({
        lessonId: l.id,
        lessonTitle: l.title,
        courseId: course.id,
        courseTitle: course.title,
        categoryTitle: cat.title,
        duration: l.duration,
      }))
  )
);

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LessonSearch({ open, onClose }: Props) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { kShortcut } = useModKey();
  const { isCompleted, mounted, lessonCompletionDates } = useProgress();

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Build recently-completed list from hook (memoized — recompute only when completions change)
  const recentResults = useMemo((): Result[] => {
    if (!mounted) return allLessons.slice(0, 8);
    const sorted = Object.entries(lessonCompletionDates).sort((a, b) => b[1].localeCompare(a[1])).slice(0, 8);
    const results: Result[] = [];
    for (const [key] of sorted) {
      const [cId, lId] = key.split('/');
      const found = allLessons.find(r => r.courseId === cId && r.lessonId === lId);
      if (found) results.push(found);
    }
    return results.length > 0 ? results : allLessons.slice(0, 8);
  }, [mounted, lessonCompletionDates]);

  const q = query.trim().toLowerCase();
  const results = q.length < 1
    ? recentResults
    : allLessons.filter(r =>
        r.lessonTitle.toLowerCase().includes(q) ||
        r.courseTitle.toLowerCase().includes(q) ||
        r.categoryTitle.toLowerCase().includes(q)
      ).slice(0, 12);

  useEffect(() => { setActiveIndex(0); }, [q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(i => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[activeIndex]) navigate(results[activeIndex]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, results, activeIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const item = listRef.current.children[activeIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  function navigate(r: Result) {
    router.push(`/courses/${r.courseId}/lessons/${r.lessonId}`);
    onClose();
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center pt-[72px] px-4"
      style={{ background: 'rgba(10,10,26,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="講義検索"
    >
      <div
        className="w-full max-w-md rounded-2xl border-2 overflow-hidden"
        style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-gold)', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <svg className="w-4 h-4 shrink-0" aria-hidden="true" style={{ color: 'rgba(255,255,255,0.4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="講義を検索..."
            aria-label="講義を検索"
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif", caretColor: 'var(--mb-gold)' }}
          />
          <button type="button"
            onClick={onClose}
            className="text-xs px-2 py-0.5 rounded border shrink-0"
            style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div ref={listRef} className="overflow-y-auto max-h-[60vh]">
          {q.length === 0 && (
            <div className="px-4 py-2 text-[10px] tracking-widest" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {mounted && recentResults[0] && recentResults.some(r => isCompleted(r.courseId, r.lessonId)) ? '最近学習した講義' : '講義一覧'}
            </div>
          )}
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              「{query.trim()}」に一致する講義が見つかりません
            </div>
          ) : (
            results.map((r, i) => (
              <button type="button"
                key={`${r.courseId}/${r.lessonId}`}
                onClick={() => navigate(r)}
                onMouseEnter={() => setActiveIndex(i)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                style={{
                  borderBottom: i < results.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  background: i === activeIndex ? 'rgba(245,200,66,0.08)' : 'transparent',
                  borderLeft: i === activeIndex ? '2px solid var(--mb-gold)' : '2px solid transparent',
                }}
              >
                {(() => {
                  const done = mounted && isCompleted(r.courseId, r.lessonId);
                  return (
                    <div
                      className="w-7 h-7 rounded flex items-center justify-center shrink-0 text-[11px] font-bold"
                      style={{
                        background: done ? 'rgba(76,175,125,0.2)' : 'rgba(245,200,66,0.12)',
                        color: done ? 'var(--mb-green)' : 'var(--mb-gold)',
                        fontFamily: "'Dela Gothic One', sans-serif",
                      }}
                    >
                      {done ? (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (i + 1)}
                    </div>
                  );
                })()}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate" style={{ color: mounted && isCompleted(r.courseId, r.lessonId) ? 'rgba(255,255,255,0.4)' : 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {r.lessonTitle}
                  </div>
                  <div className="text-[10px] truncate" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {r.courseTitle}
                  </div>
                </div>
                {r.duration && r.duration !== '—' && (
                  <span className="text-[10px] shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>{`約${r.duration.split(':')[0]}分`}</span>
                )}
              </button>
            ))
          )}
        </div>

        <div className="px-4 py-2 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-[9px] tracking-widest" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {results.length}件 · <kbd style={{ fontFamily: 'monospace' }}>{kShortcut}</kbd>/<kbd style={{ fontFamily: 'monospace' }}>/</kbd> で開く · ESCで閉じる
          </span>
          {mounted && (() => {
            const doneCount = results.filter(r => isCompleted(r.courseId, r.lessonId)).length;
            return doneCount > 0 ? (
              <span className="text-[9px] font-bold" style={{ color: 'var(--mb-green)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                ✓ {doneCount}件完了
              </span>
            ) : null;
          })()}
        </div>
      </div>
    </div>
  );
}
