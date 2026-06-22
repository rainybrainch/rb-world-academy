'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { nextLessonHref } from '@/lib/nextLessonHref';

export default function HeroCtaButton() {
  const { isCompleted, lastViewedLesson, completedCount, mounted } = useProgress();

  let href = '/courses';
  let label = '学習を始める';
  let icon = (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  );

  if (mounted && completedCount > 0) {
    const next = nextLessonHref(isCompleted, lastViewedLesson);
    if (next !== '/courses') {
      href = next;
      label = '続きから学ぶ';
    } else {
      href = '/courses';
      label = 'もう一度見る';
      icon = (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    }
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 rounded-lg border-2 font-bold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
      style={{
        background: 'var(--mb-gold)',
        borderColor: 'var(--mb-gold)',
        color: 'var(--mb-dark)',
        fontFamily: "'Dela Gothic One', sans-serif",
        letterSpacing: '0.03em',
        boxShadow: '3px 3px 0 rgba(255,255,255,0.15)',
      }}
    >
      {icon}
      {label}
    </Link>
  );
}
