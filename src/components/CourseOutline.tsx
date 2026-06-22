'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useProgress } from '@/hooks/useProgress';
import type { Course } from '@/types';

interface Props {
  chapters: Course[];
  currentLessonId: string;
  categoryTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseOutline({ chapters, currentLessonId, categoryTitle, isOpen, onClose }: Props) {
  const { isCompleted, mounted } = useProgress();
  const currentRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen && currentRef.current) {
      setTimeout(() => {
        currentRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 80);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const allLessonsWithChapter = chapters.flatMap(ch =>
    ch.lessons.filter(l => !l.isComingSoon).map(l => ({ lesson: l, chapterId: ch.id }))
  );
  const totalCount = allLessonsWithChapter.length;
  const completedCount = mounted
    ? allLessonsWithChapter.filter(({ lesson, chapterId }) => isCompleted(chapterId, lesson.id)).length
    : 0;
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const nextIncompleteEntry = mounted
    ? allLessonsWithChapter.find(({ lesson, chapterId }) => !isCompleted(chapterId, lesson.id))
    : undefined;
  const nextIncomplete = nextIncompleteEntry?.lesson;
  const nextIncompleteChapterId = nextIncompleteEntry?.chapterId;

  // chapter that contains current lesson
  const currentChapterId = chapters.find(ch => ch.lessons.some(l => l.id === currentLessonId))?.id;

  return (
    <>
      <div className="fixed inset-0 z-30" onClick={onClose} aria-hidden="true" />

      <div
        className="fixed z-40 flex flex-col"
        style={{
          top: '3.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(92vw, 400px)',
          maxHeight: 'calc(100vh - 5rem)',
          background: 'var(--mb-cream)',
          border: '2px solid var(--mb-dark)',
          boxShadow: '5px 5px 0 var(--mb-gold)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center justify-between shrink-0"
          style={{ background: 'var(--mb-dark)', borderBottom: '2px solid var(--mb-gold)' }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--mb-gold)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
            </svg>
            <div className="min-w-0">
              <div className="text-xs font-bold tracking-[2px]" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                全体フロー
              </div>
              <div className="text-[11px] text-white/70 truncate" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {categoryTitle}
              </div>
            </div>
          </div>
          <button type="button"
            onClick={onClose}
            className="shrink-0 w-6 h-6 flex items-center justify-center text-white/50 hover:text-white transition-colors text-lg leading-none ml-2"
            aria-label="閉じる"
          >
            ✕
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-4 py-2.5 shrink-0" style={{ background: 'rgba(26,26,46,0.04)', borderBottom: '1px solid rgba(26,26,46,0.08)' }}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              全体進捗
            </span>
            <span className="text-[10px] font-bold" style={{ color: 'var(--mb-green)', fontFamily: "'Dela Gothic One', sans-serif" }}>
              {mounted ? completedCount : '—'} / {totalCount}
            </span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,46,0.1)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${mounted ? pct : 0}%`, background: 'var(--mb-green)' }}
            />
          </div>
        </div>

        {/* Jump to next */}
        {mounted && nextIncomplete && nextIncomplete.id !== currentLessonId && (
          <Link
            href={`/courses/${nextIncompleteChapterId}/lessons/${nextIncomplete.id}`}
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-2.5 border-b text-xs font-bold transition-all hover:opacity-80 shrink-0"
            style={{ background: 'rgba(245,200,66,0.1)', borderColor: 'rgba(245,200,66,0.3)', color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            次の未完了講義へ
          </Link>
        )}

        {/* All chapters + lessons */}
        <div className="flex-1 min-h-0 overflow-y-auto pb-12">
          {chapters.map((chapter) => {
            const isCurrentChapter = chapter.id === currentChapterId;
            const chapterLessons = chapter.lessons.filter(l => !l.isComingSoon);
            const chapterTotal = chapterLessons.length;
            const chapterCompleted = mounted ? chapterLessons.filter(l => isCompleted(chapter.id, l.id)).length : 0;
            const chapterDone = chapterTotal > 0 && chapterCompleted === chapterTotal;

            return (
              <div key={chapter.id}>
                {/* Chapter header */}
                <div
                  className="px-4 py-2 flex items-center gap-2 sticky top-0"
                  style={{
                    background: isCurrentChapter ? 'rgba(245,200,66,0.12)' : 'rgba(26,26,46,0.05)',
                    borderBottom: '1px solid rgba(26,26,46,0.08)',
                    borderLeft: isCurrentChapter ? '3px solid var(--mb-gold)' : '3px solid transparent',
                  }}
                >
                  {chapterDone && (
                    <svg className="w-3 h-3 shrink-0" style={{ color: 'var(--mb-green)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  <span
                    className="text-[11px] font-bold leading-tight"
                    style={{
                      color: isCurrentChapter ? 'var(--mb-dark)' : 'rgba(26,26,46,0.55)',
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                    }}
                  >
                    {chapter.title}
                  </span>
                  <span
                    className="ml-auto text-[9px] font-bold shrink-0"
                    style={{
                      color: mounted && chapterCompleted > 0 ? (chapterDone ? 'var(--mb-green)' : 'var(--mb-sky)') : 'rgba(26,26,46,0.3)',
                      fontFamily: "'Dela Gothic One', sans-serif",
                    }}
                  >
                    {mounted && chapterCompleted > 0 ? `${chapterCompleted}/${chapterTotal}` : `${chapterTotal}講義`}
                  </span>
                </div>

                {/* Lessons in this chapter */}
                {chapter.lessons.map((lesson, idx) => {
                  const isCurrent = lesson.id === currentLessonId;
                  const done = mounted && !lesson.isComingSoon && isCompleted(chapter.id, lesson.id);

                  return (
                    <Link
                      key={lesson.id}
                      ref={isCurrent ? currentRef : undefined}
                      href={`/courses/${chapter.id}/lessons/${lesson.id}`}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-2.5 transition-colors"
                      style={{
                        background: isCurrent ? 'rgba(245,200,66,0.15)' : 'transparent',
                        borderBottom: '1px solid rgba(26,26,46,0.05)',
                        borderLeft: isCurrent ? '3px solid var(--mb-gold)' : '3px solid transparent',
                        paddingLeft: '13px',
                      }}
                    >
                      {/* Number / check */}
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: done ? 'var(--mb-green)' : isCurrent ? 'var(--mb-gold)' : 'rgba(26,26,46,0.08)',
                        }}
                      >
                        {done ? (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span
                            className="text-[9px] font-bold"
                            style={{ color: isCurrent ? 'var(--mb-dark)' : 'rgba(26,26,46,0.4)', fontFamily: "'Dela Gothic One', sans-serif" }}
                          >
                            {idx + 1}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <span
                        className="text-xs leading-relaxed flex-1"
                        style={{
                          color: done ? 'rgba(26,26,46,0.4)' : isCurrent ? 'var(--mb-dark)' : 'rgba(26,26,46,0.65)',
                          fontWeight: isCurrent ? '700' : '500',
                          fontFamily: "'Zen Maru Gothic', sans-serif",
                          textDecoration: done ? 'line-through' : 'none',
                        }}
                      >
                        {lesson.title}
                      </span>

                      {/* Badges */}
                      <div className="flex items-center gap-1 shrink-0">
                        {lesson.duration && lesson.duration !== '—' && !lesson.isComingSoon && (
                          <span className="text-[8px]" style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                            {`約${lesson.duration.split(':')[0]}分`}
                          </span>
                        )}
                        {lesson.isComingSoon && (
                          <span className="text-[8px] font-bold px-1 py-0.5 rounded" style={{ background: 'rgba(26,26,46,0.1)', color: 'rgba(26,26,46,0.4)' }}>
                            準備中
                          </span>
                        )}
                        {lesson.gameTags?.length ? (
                          <span className="text-[9px]">🎲</span>
                        ) : null}
                        {isCurrent && (
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--mb-gold)' }} />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
