'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

function relativeDate(dateStr: string): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(dateStr + 'T00:00:00');
  const diff = Math.round((today.getTime() - d.getTime()) / 86400000);
  if (diff === 0) return '今日';
  if (diff === 1) return '昨日';
  if (diff <= 6) return `${diff}日前`;
  if (diff >= 30) return `${Math.round(diff / 30)}ヶ月前`;
  return `${Math.floor(diff / 7)}週前`;
}

const allLessons = categories.flatMap(cat =>
  cat.courses.flatMap(course =>
    course.lessons
      .filter(l => !l.isComingSoon)
      .map(l => ({ courseId: course.id, courseTitle: course.title, lesson: l }))
  )
);

const INITIAL_COUNT = 5;

export default function RecentLessons() {
  const { completedLessonKeys, lessonCompletionDates, completedCount, mounted } = useProgress();
  const [showAll, setShowAll] = useState(false);

  const recentItems = useMemo(() => {
    if (!mounted || completedCount === 0) return [];
    return [...completedLessonKeys]
      .sort((a, b) => {
        const da = lessonCompletionDates[a] ?? '0000-00-00';
        const db = lessonCompletionDates[b] ?? '0000-00-00';
        return db.localeCompare(da);
      })
      .map(key => {
        const [cId, lId] = key.split('/');
        const found = allLessons.find(l => l.courseId === cId && l.lesson.id === lId);
        return found ? { ...found, key, dateStr: lessonCompletionDates[key] ?? null } : null;
      })
      .filter(Boolean) as (typeof allLessons[0] & { key: string; dateStr: string | null })[];
  }, [mounted, completedCount, completedLessonKeys, lessonCompletionDates]);

  const todayDateStr = useMemo(() => {
    const n = new Date();
    return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`;
  }, []);

  if (!mounted || completedCount === 0) return null;
  if (recentItems.length === 0) return null;

  const displayItems = showAll ? recentItems : recentItems.slice(0, INITIAL_COUNT);
  const hasMore = recentItems.length > INITIAL_COUNT;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-green)' }} />
          <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            最近の学習
          </span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(76,175,125,0.1)', color: 'var(--mb-green)', fontFamily: "'Dela Gothic One', sans-serif" }}>
          {recentItems.length}件
        </span>
      </div>
      <div className="space-y-2">
        {displayItems.map(({ courseId, lesson, courseTitle, key, dateStr }) => (
          <Link
            key={key}
            href={`/courses/${courseId}/lessons/${lesson.id}`}
            className="flex items-center gap-3 p-3 rounded-xl border-2 transition-all hover:-translate-y-px"
            style={{ background: 'white', borderColor: 'rgba(26,26,46,0.12)', boxShadow: '2px 2px 0 rgba(76,175,125,0.2)' }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'var(--mb-green)' }}
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold truncate" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {lesson.title}
              </div>
              <div className="text-[10px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {courseTitle}
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-0.5">
              {dateStr && (
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: dateStr === todayDateStr
                      ? 'rgba(76,175,125,0.12)'
                      : 'rgba(26,26,46,0.05)',
                    color: dateStr === todayDateStr
                      ? 'var(--mb-green)'
                      : 'rgba(26,26,46,0.35)',
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                  }}
                >
                  {relativeDate(dateStr)}
                </span>
              )}
              <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.3)' }}>復習 →</span>
            </div>
          </Link>
        ))}
      </div>
      {hasMore && (
        <button type="button"
          onClick={() => setShowAll(v => !v)}
          className="w-full mt-2 py-2.5 rounded-xl border-2 text-xs font-bold transition-all hover:opacity-80"
          style={{
            borderColor: 'rgba(76,175,125,0.2)',
            color: 'var(--mb-green)',
            background: 'rgba(76,175,125,0.05)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          {showAll ? `▲ 折りたたむ` : `▼ もっと見る（残り${recentItems.length - INITIAL_COUNT}件）`}
        </button>
      )}
    </div>
  );
}
