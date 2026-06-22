'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/types';
import type { TopicCategory } from '@/types';
import { useMyCourses } from '@/hooks/useMyCourses';
import { useProgress } from '@/hooks/useProgress';
import CategoryCardProgress from '@/components/CategoryCardProgress';
import CourseOverviewSheet from '@/components/CourseOverviewSheet';
import { TOPIC_META as topicMeta } from '@/data/topic-meta';

const LEVEL_COLOR: Record<string, string> = {
  '入門': '#4CAF7D',
  '基礎': '#5BC8E8',
  '応用': '#F5C842',
  '上級': '#E8354A',
};

interface Props {
  tc: TopicCategory;
  courses: Category[];
}

export default function CategoryPageClient({ tc, courses }: Props) {
  const { isSelected, toggle, mounted } = useMyCourses();
  const { isCompleted } = useProgress();
  const tm = topicMeta[tc.id];
  const accent = tm?.color ?? '#5BC8E8';
  const [overviewOpen, setOverviewOpen] = useState<string | null>(null);

  const totalLessons = courses.reduce((a, c) => a + c.courses.reduce((b, ch) => b + ch.lessons.filter(l => !l.isComingSoon).length, 0), 0);
  const completedLessons = mounted
    ? courses.reduce((a, c) => a + c.courses.reduce((b, ch) => b + ch.lessons.filter(l => !l.isComingSoon && isCompleted(ch.id, l.id)).length, 0), 0)
    : 0;
  const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="max-w-xl mx-auto px-4 py-6">

      {/* パンくず */}
      <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>›</span>
        <Link href="/courses" className="hover:underline">コース</Link>
        <span>›</span>
        <span style={{ color: accent }}>{tc.title}</span>
      </div>

      {/* カテゴリヘッダー */}
      <div
        className="rounded-2xl overflow-hidden mb-6 border-2"
        style={{ borderColor: accent, boxShadow: `4px 4px 0 ${accent}` }}
      >
        {tc.image ? (
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image src={tc.image} alt={tc.title} fill className="object-cover" quality={85} priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(26,26,46,0.75))' }} />
            <div className="absolute bottom-3 left-4 right-4">
              <div className="text-lg font-bold text-white" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
                {tm?.tagline}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="w-full flex flex-col items-center justify-center py-8 gap-2"
            style={{ background: `${accent}18`, aspectRatio: '16/9' }}
          >
            <span className="text-5xl">{tm?.icon ?? '📚'}</span>
            <span className="text-lg font-bold" style={{ color: accent, fontFamily: "'Dela Gothic One', sans-serif" }}>
              {tm?.tagline}
            </span>
          </div>
        )}

        <div className="px-4 pt-3 pb-2 flex items-center justify-between" style={{ background: 'var(--mb-dark)' }}>
          <div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>カテゴリ</div>
            <div className="text-sm font-bold text-white" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>{tc.title}</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold" style={{ color: accent, fontFamily: "'Dela Gothic One', sans-serif" }}>{courses.length}コース</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {mounted && completedLessons > 0 ? `${completedLessons}/` : ''}{totalLessons}講義
            </div>
          </div>
        </div>
        {mounted && completedLessons > 0 && (
          <div className="px-4 pb-3" style={{ background: 'var(--mb-dark)' }}>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: pct === 100 ? 'var(--mb-gold)' : accent }}
                />
              </div>
              <span className="text-[10px] font-bold shrink-0" style={{ color: pct === 100 ? 'var(--mb-gold)' : accent, fontFamily: "'Dela Gothic One', sans-serif" }}>
                {pct}%
              </span>
            </div>
          </div>
        )}
      </div>

      {/* マイコース表示（選択済みがある場合） */}
      {mounted && courses.some(c => isSelected(c.id)) && (
        <div className="mb-5 p-3 rounded-xl border-2" style={{ background: `${accent}08`, borderColor: accent }}>
          <div className="text-[10px] font-bold mb-2" style={{ color: accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            ⭐ 学習中のコース
          </div>
          <div className="flex flex-wrap gap-1.5">
            {courses.filter(c => isSelected(c.id)).map(c => (
              <Link
                key={c.id}
                href={`/courses/${c.courses[0]?.id ?? ''}`}
                className="text-[10px] font-bold px-2.5 py-1 rounded-full border-2 transition-all hover:opacity-80"
                style={{ background: `${accent}18`, borderColor: accent, color: accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* アプリ一覧 */}
      <div className="mb-3 flex items-center gap-2">
        <div className="w-1.5 h-4 rounded-full" style={{ background: accent }} />
        <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          COURSES
        </span>
        <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          学ぶコースを選んでね
        </span>
      </div>

      <div className="space-y-4">
        {courses.map(course => {
          const chapterCount = course.courses.length;
          const lessonCount = course.courses.reduce((a, c) => a + c.lessons.filter(l => !l.isComingSoon).length, 0);
          const selected = mounted && isSelected(course.id);

          const allLessons = course.courses.flatMap(ch =>
            ch.lessons.filter(l => !l.isComingSoon).map(l => ({ courseId: ch.id, lessonId: l.id }))
          );
          const doneLessons = mounted ? allLessons.filter(({ courseId, lessonId }) => isCompleted(courseId, lessonId)).length : 0;
          const allDone = doneLessons === allLessons.length && allLessons.length > 0;
          const nextLesson = mounted && doneLessons > 0
            ? allLessons.find(({ courseId, lessonId }) => !isCompleted(courseId, lessonId))
            : null;
          const startHref = nextLesson
            ? `/courses/${nextLesson.courseId}/lessons/${nextLesson.lessonId}`
            : `/courses/${course.courses[0]?.id ?? ''}`;
          const startLabel = mounted && allDone ? '復習する' : doneLessons > 0 ? '続きから' : '学習を始める';

          return (
            <div
              key={course.id}
              className="rounded-xl border-2 bg-white overflow-hidden"
              style={{
                borderColor: selected ? accent : 'var(--mb-dark)',
                boxShadow: selected ? `3px 3px 0 ${accent}` : '3px 3px 0 rgba(26,26,46,0.15)',
              }}
            >
              {/* コース画像 16:9 */}
              {course.image ? (
                <Link href={startHref}>
                  <div className="relative w-full cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 576px"
                      className="object-cover"
                      quality={80}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(26,26,46,0.65))' }} />
                    {course.level && (
                      <div
                        className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: LEVEL_COLOR[course.level] ?? accent, color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        {course.level}
                      </div>
                    )}
                    {selected && (
                      <div
                        className="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                        style={{ background: accent, color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        ⭐ 学習中
                      </div>
                    )}
                    <div className="absolute bottom-2 left-3 right-3">
                      <span className="text-sm font-bold text-white" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {course.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  className="w-full flex items-center justify-center relative"
                  style={{ background: `${accent}12`, aspectRatio: '16/9' }}
                >
                  <span className="text-4xl">📖</span>
                  {selected && (
                    <div
                      className="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{ background: accent, color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      ⭐ 学習中
                    </div>
                  )}
                </div>
              )}

              {/* コース情報 */}
              <div className="p-3">
                {!course.image && (
                  <>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {course.level && (
                        <span
                          className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: `${LEVEL_COLOR[course.level] ?? accent}20`, color: LEVEL_COLOR[course.level] ?? accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          {course.level}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold mb-1" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                      {course.title}
                    </div>
                  </>
                )}
                <p className="text-xs mb-3 line-clamp-2" style={{ color: 'rgba(26,26,46,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <button type="button"
                    onClick={() => setOverviewOpen(course.id)}
                    className="text-[10px] flex items-center gap-1.5 transition-opacity hover:opacity-70"
                    style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {chapterCount}章 · {lessonCount}講義
                    {mounted && allDone && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(76,175,125,0.12)', color: 'var(--mb-green)', fontFamily: "'Dela Gothic One', sans-serif" }}>完了！</span>
                    )}
                  </button>
                  <CategoryCardProgress category={course} />
                </div>

                {/* アクションボタン */}
                <div className="flex gap-2">
                  <Link
                    href={startHref}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-bold border-2 transition-all hover:opacity-80"
                    style={{
                      background: accent,
                      borderColor: accent,
                      color: 'var(--mb-dark)',
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                    }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    {startLabel}
                  </Link>

                  <button type="button"
                    onClick={() => toggle(course.id)}
                    className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-[11px] font-bold border-2 transition-all hover:opacity-80"
                    style={{
                      background: selected ? `${accent}18` : 'transparent',
                      borderColor: selected ? accent : 'rgba(26,26,46,0.2)',
                      color: selected ? accent : 'rgba(26,26,46,0.4)',
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                    }}
                  >
                    {selected ? '⭐' : '☆'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* アプリ一覧へ */}
      <Link
        href="/courses"
        className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 text-sm font-bold"
        style={{ borderColor: accent, color: accent, background: `${accent}10`, fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        ← コース一覧に戻る
      </Link>

      {/* 全体フローモーダル */}
      {overviewOpen && (
        <CourseOverviewSheet
          category={courses.find(c => c.id === overviewOpen)!}
          meta={{ shadow: 'none', icon: tm?.icon || '📖', label: tc.title, color: accent }}
          onClose={() => setOverviewOpen(null)}
        />
      )}
    </div>
  );
}
