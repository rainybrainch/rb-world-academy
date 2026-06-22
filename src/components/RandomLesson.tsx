'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

const MODE_KEY = 'mb_random_mode';

export default function RandomLesson() {
  const { isCompleted, completedCount, mounted } = useProgress();
  const router = useRouter();
  const [spinning, setSpinning] = useState(false);
  const [mode, setMode] = useState<'new' | 'review'>('new');
  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(MODE_KEY);
    if (saved === 'new' || saved === 'review') setMode(saved);
  }, []);

  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    };
  }, []);

  function changeMode(m: 'new' | 'review') {
    setMode(m);
    localStorage.setItem(MODE_KEY, m);
  }

  if (!mounted) return null;

  const newPool = categories.flatMap(cat =>
    cat.courses.flatMap(course =>
      course.lessons
        .filter(l => !l.isComingSoon && !isCompleted(course.id, l.id))
        .map(l => ({ courseId: course.id, lessonId: l.id, title: l.title }))
    )
  );

  const reviewPool = categories.flatMap(cat =>
    cat.courses.flatMap(course =>
      course.lessons
        .filter(l => !l.isComingSoon && isCompleted(course.id, l.id))
        .map(l => ({ courseId: course.id, lessonId: l.id, title: l.title }))
    )
  );

  const pool = mode === 'new' ? newPool : reviewPool;

  // Hide if nothing to show in either mode
  if (newPool.length === 0 && reviewPool.length === 0) return null;

  function go() {
    if (pool.length === 0) return;
    setSpinning(true);
    if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    spinTimeoutRef.current = setTimeout(() => {
      const pick = pool[Math.floor(Math.random() * pool.length)];
      router.push(`/courses/${pick.courseId}/lessons/${pick.lessonId}`);
    }, 400);
  }

  const isNew = mode === 'new';
  const accent = isNew ? 'var(--mb-dark)' : 'var(--mb-green)';
  const accentBg = isNew ? 'rgba(26,26,46,0.15)' : 'rgba(76,175,125,0.15)';

  return (
    <div
      className="rounded-xl border-2 overflow-hidden"
      style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: `3px 3px 0 ${accentBg === 'rgba(76,175,125,0.15)' ? 'var(--mb-green)' : 'rgba(26,26,46,0.15)'}` }}
    >
      {/* Mode toggle */}
      {completedCount > 0 && (
        <div
          className="flex border-b-2"
          style={{ borderColor: 'rgba(26,26,46,0.08)' }}
        >
          {(['new', 'review'] as const).map(m => (
            <button type="button"
              key={m}
              onClick={() => changeMode(m)}
              className="flex-1 py-2 text-[10px] font-bold transition-colors"
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                color: mode === m ? (m === 'new' ? 'var(--mb-dark)' : 'var(--mb-green)') : 'rgba(26,26,46,0.35)',
                background: mode === m ? (m === 'new' ? 'rgba(26,26,46,0.05)' : 'rgba(76,175,125,0.07)') : 'transparent',
                borderBottom: mode === m ? `2px solid ${m === 'new' ? 'var(--mb-dark)' : 'var(--mb-green)'}` : '2px solid transparent',
              }}
            >
              {m === 'new' ? '🎲 未完了' : '🔁 復習'}
            </button>
          ))}
        </div>
      )}

      {/* Button */}
      <button type="button"
        onClick={go}
        disabled={spinning || pool.length === 0}
        className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
        style={{
          color: accent,
          fontFamily: "'Zen Maru Gothic', sans-serif",
        }}
      >
        <span
          style={{
            display: 'inline-block',
            animation: spinning ? 'spin 0.4s linear' : 'none',
            fontSize: '18px',
          }}
        >
          {isNew ? '🎲' : '🔁'}
        </span>
        {pool.length === 0
          ? (isNew ? '未完了講義なし' : '完了済み講義なし')
          : isNew
            ? <>ランダム講義に挑戦 <span className="text-[10px] opacity-50">（残り{pool.length}講義）</span></>
            : <>ランダム復習 <span className="text-[10px] opacity-50">（{pool.length}講義）</span></>
        }
      </button>
    </div>
  );
}
