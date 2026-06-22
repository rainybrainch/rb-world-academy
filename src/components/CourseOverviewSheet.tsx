'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import type { Category } from '@/types';

interface Props {
  category: Category;
  meta: { shadow: string; icon: string; label: string; color: string };
  onClose: () => void;
}

export default function CourseOverviewSheet({ category, meta, onClose }: Props) {
  const { isCompleted, mounted } = useProgress();
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(category.courses[0]?.id ?? null);

  const totalLessons = category.courses.reduce((a, c) => a + c.lessons.filter(l => !l.isComingSoon).length, 0);
  const completedCount = mounted
    ? category.courses.reduce(
        (a, c) => a + c.lessons.filter(l => !l.isComingSoon && isCompleted(c.id, l.id)).length,
        0
      )
    : 0;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .backdrop { animation: fadeIn 0.2s ease-out; }
        .sheet { animation: slideUp 0.3s cubic-bezier(0.32, 0.72, 0.44, 1); }
      `}</style>

      {/* Backdrop - クリックで閉じる */}
      <div
        className="backdrop fixed inset-0 z-50 bg-black/50 cursor-pointer"
        onClick={onClose}
        role="button"
        aria-label="閉じる"
      />

      {/* Bottom Sheet */}
      <div
        className="sheet fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        style={{
          background: 'var(--mb-cream)',
          maxHeight: '90vh',
          boxShadow: '0 -8px 32px rgba(0,0,0,0.2)',
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-10 h-1 rounded-full" style={{ background: 'rgba(26,26,46,0.2)' }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 shrink-0" style={{ borderColor: 'rgba(26,26,46,0.1)', background: 'transparent' }}>
          <div className="flex items-center gap-3 flex-1">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${meta.color}20` }}
            >
              {meta.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ color: meta.color, fontSize: '11px', fontWeight: 'bold', fontFamily: "'Zen Maru Gothic', sans-serif", marginBottom: '3px' }}>
                {meta.label}
              </div>
              <div className="text-base font-bold text-white" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {category.title}
              </div>
            </div>
          </div>
          <div className="text-right ml-4 shrink-0">
            <div style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif", fontSize: '20px' }}>
              {category.courses.length}章
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {totalLessons}講義
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="overflow-y-auto flex-1" style={{ minHeight: 0 }}>
          <div className="px-5 py-4 space-y-3">
            {category.courses.map((course, courseIdx) => {
              const lessonCount = course.lessons.filter(l => !l.isComingSoon).length;
              const doneCount = mounted
                ? course.lessons.filter(l => !l.isComingSoon && isCompleted(course.id, l.id)).length
                : 0;
              const allDone = mounted && doneCount === lessonCount && lessonCount > 0;
              const isExpanded = expandedCourseId === course.id;

              return (
                <div key={course.id}>
                  {/* Chapter button */}
                  <button
                    onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                    className="w-full flex items-center gap-3 p-4 rounded-2xl border-2 bg-white transition-all hover:shadow-md text-left"
                    style={{
                      borderColor: allDone ? 'var(--mb-green)' : meta.color,
                      boxShadow: allDone ? '0 2px 8px rgba(76,175,125,0.15)' : 'none',
                    }}
                  >
                    {/* Number */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                      style={{
                        background: allDone ? 'var(--mb-green)' : meta.color,
                        color: 'white',
                        fontFamily: "'Dela Gothic One', sans-serif",
                      }}
                    >
                      {allDone ? '✓' : courseIdx + 1}
                    </div>

                    {/* Title & count */}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                        {course.title}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                        {lessonCount}講義
                        {mounted && doneCount > 0 && ` · ${doneCount}完了`}
                      </div>
                    </div>

                    {/* Chevron */}
                    <svg
                      className="w-5 h-5 transition-transform shrink-0"
                      style={{ color: meta.color, transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0L5 14m7-7v12" />
                    </svg>
                  </button>

                  {/* Lessons */}
                  {isExpanded && (
                    <div className="mt-2 ml-8 space-y-1.5 pb-3">
                      {course.lessons
                        .filter(l => !l.isComingSoon)
                        .map((lesson, lIdx) => (
                          <Link
                            key={lesson.id}
                            href={`/courses/${course.id}/lessons/${lesson.id}`}
                            onClick={onClose}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                          >
                            <span className="text-xs font-bold mt-0.5 shrink-0" style={{ color: 'rgba(26,26,46,0.4)' }}>
                              {lIdx + 1}.
                            </span>
                            <span className="text-sm flex-1" style={{ color: isCompleted(course.id, lesson.id) ? 'rgba(76,175,125,0.6)' : 'var(--mb-dark)' }}>
                              {lesson.title}
                            </span>
                            {isCompleted(course.id, lesson.id) && (
                              <span className="text-xs font-bold" style={{ color: 'var(--mb-green)' }}>✓</span>
                            )}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
