'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/types';
import { genres, topicCategories } from '@/data/structure';
import ChapterProgressBadge from '@/components/ChapterProgressBadge';
import CategoryProgressBar from '@/components/CategoryProgressBar';
import OverallProgressBar from '@/components/OverallProgressBar';
import { useProgress } from '@/hooks/useProgress';
import AnimatedCollapse from '@/components/AnimatedCollapse';
import CourseOverviewSheet from '@/components/CourseOverviewSheet';
import { COURSE_META as courseMeta } from '@/data/course-meta';

// カテゴリ（TopicCategory）のアイコン・カラー
const topicMeta: Record<string, { icon: string; color: string; label: string; shadow: string }> = {};

// ジャンルのアイコン・カラー
const genreMeta: Record<string, { icon: string; color: string }> = {
  'g-lecture': { icon: '📖', color: '#5BC8E8' },
  'g-game':    { icon: '🎲', color: '#F5C842' },
  'g-exam':    { icon: '📝', color: '#E8354A' },
};

const LEVEL_COLOR: Record<string, string> = {
  '入門': '#4CAF7D',
  '基礎': '#5BC8E8',
  '応用': '#F5C842',
  '上級': '#E8354A',
};

interface Props {
  categories: Category[];
  totalCourses: number;
  totalLessons: number;
}

function Highlight({ text, q }: { text: string; q: string }) {
  if (!q) return <>{text}</>;
  const lower = text.toLowerCase();
  const firstIdx = lower.indexOf(q.toLowerCase());
  if (firstIdx === -1) return <>{text}</>;
  const ql = q.toLowerCase();
  const parts: React.ReactNode[] = [];
  let last = 0;
  let idx = firstIdx;
  while (idx !== -1) {
    if (idx > last) parts.push(text.slice(last, idx));
    parts.push(<mark key={idx} style={{ background: 'rgba(245,200,66,0.4)', color: 'inherit', borderRadius: '2px', padding: '0 1px' }}>{text.slice(idx, idx + q.length)}</mark>);
    last = idx + q.length;
    idx = lower.indexOf(ql, last);
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export default function CoursesClient({ categories, totalCourses, totalLessons }: Props) {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showOverviewId, setShowOverviewId] = useState<string | null>(null);
  const { isCompleted, lastViewedLesson, mounted } = useProgress();

  function toggle(key: string) {
    setOpenMap(prev => ({ ...prev, [key]: !prev[key] }));
  }

  function isOpen(catId: string, courseId: string) {
    return openMap[`${catId}/${courseId}`] ?? false;
  }

  const q = query.trim().toLowerCase();

  // ジャンル選択時にカテゴリ選択をリセット
  function selectGenre(id: string | null) {
    setSelectedGenre(id);
    setSelectedTopic(null);
  }

  // Auto-expand the chapter containing the last-viewed lesson on mount
  useEffect(() => {
    if (!mounted || !lastViewedLesson) return;
    const [lvCourseId] = lastViewedLesson.split('/');
    for (const cat of categories) {
      const course = cat.courses.find(c => c.id === lvCourseId);
      if (course) {
        setOpenMap(prev => ({ ...prev, [`${cat.id}/${course.id}`]: true }));
        break;
      }
    }
  }, [mounted]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-expand chapters that have matching lessons when query changes
  useEffect(() => {
    if (!q) return;
    const autoOpen: Record<string, boolean> = {};
    categories.forEach(cat => {
      cat.courses.forEach(course => {
        const matches =
          course.title.toLowerCase().includes(q) ||
          course.lessons.some(l => l.title.toLowerCase().includes(q));
        if (matches) autoOpen[`${cat.id}/${course.id}`] = true;
      });
    });
    setOpenMap(prev => ({ ...prev, ...autoOpen }));
  }, [q, categories]);

  // ジャンル・カテゴリ・クエリでフィルタリング（openMapの変化では再計算しない）
  const filteredCategories = useMemo(() => {
    let cats = categories;

    if (selectedTopic) {
      cats = cats.filter(c => c.topicCategoryId === selectedTopic);
    } else if (selectedGenre) {
      const topicIds = topicCategories
        .filter(tc => tc.genreId === selectedGenre)
        .map(tc => tc.id);
      cats = cats.filter(c => c.topicCategoryId && topicIds.includes(c.topicCategoryId));
    }

    if (q) {
      cats = cats.map(cat => ({
        ...cat,
        courses: cat.courses.filter(course =>
          course.title.toLowerCase().includes(q) ||
          course.lessons.some(l => l.title.toLowerCase().includes(q))
        ),
      })).filter(cat => cat.courses.length > 0);
    }

    return cats;
  }, [categories, selectedTopic, selectedGenre, q]);

  // 現在選択中のジャンル内のトピックカテゴリ
  const visibleTopics = useMemo(
    () => selectedGenre ? topicCategories.filter(tc => tc.genreId === selectedGenre) : topicCategories,
    [selectedGenre]
  );

  // トピックカテゴリごとの講義数
  const topicLessonCounts = useMemo(() => {
    const map: Record<string, number> = {};
    categories.forEach(cat => {
      if (!cat.topicCategoryId) return;
      const count = cat.courses.reduce((a, c) => a + c.lessons.filter(l => !l.isComingSoon).length, 0);
      map[cat.topicCategoryId] = (map[cat.topicCategoryId] ?? 0) + count;
    });
    return map;
  }, [categories]);

  // 検索結果の講義数
  const searchResultLessonCount = useMemo(() => {
    if (!q) return 0;
    return filteredCategories.reduce((a, cat) => a + cat.courses.reduce((b, c) => b + c.lessons.filter(l => !l.isComingSoon).length, 0), 0);
  }, [filteredCategories, q]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div
          className="inline-block text-[10px] font-bold tracking-[4px] px-3 py-1 rounded mb-3"
          style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          COURSES
        </div>
        <h1 className="text-2xl" style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}>
          コース一覧
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          全{genres.length}ジャンル · {topicCategories.length}カテゴリ · {totalCourses}コース · {totalLessons}講義
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: 'rgba(26,26,46,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Escape' && setQuery('')}
          placeholder="コース・講義を検索…"
          className="w-full pl-9 pr-9 py-2.5 rounded-xl border-2 text-sm outline-none transition-all"
          style={{
            borderColor: query ? 'var(--mb-dark)' : 'rgba(26,26,46,0.15)',
            background: 'white',
            color: 'var(--mb-dark)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
            boxShadow: query ? '2px 2px 0 var(--mb-gold)' : 'none',
          }}
        />
        {query && (
          <button type="button" onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'rgba(26,26,46,0.35)' }}>✕</button>
        )}
      </div>
      {q && filteredCategories.length > 0 && (
        <p className="text-xs mb-3 -mt-2" style={{ color: 'rgba(26,26,46,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          「{query}」の検索結果：{searchResultLessonCount}講義
        </p>
      )}

      {/* Genre tabs */}
      <div className="flex gap-2 flex-wrap mb-3">
        <button type="button"
          onClick={() => selectGenre(null)}
          className="text-[11px] font-bold px-3 py-1.5 rounded-full border-2 transition-all"
          style={{
            background: selectedGenre === null ? 'var(--mb-dark)' : 'white',
            borderColor: selectedGenre === null ? 'var(--mb-dark)' : 'rgba(26,26,46,0.15)',
            color: selectedGenre === null ? 'var(--mb-gold)' : 'rgba(26,26,46,0.5)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
            boxShadow: selectedGenre === null ? '2px 2px 0 var(--mb-gold)' : 'none',
          }}
        >
          すべて
        </button>
        {genres.map(genre => {
          const gm = genreMeta[genre.id];
          const active = selectedGenre === genre.id;
          return (
            <button type="button"
              key={genre.id}
              onClick={() => selectGenre(active ? null : genre.id)}
              className="text-[11px] font-bold px-3 py-1.5 rounded-full border-2 transition-all flex items-center gap-1"
              style={{
                background: active ? gm?.color ?? 'var(--mb-dark)' : 'white',
                borderColor: active ? gm?.color ?? 'var(--mb-dark)' : 'rgba(26,26,46,0.15)',
                color: active ? 'var(--mb-dark)' : 'rgba(26,26,46,0.5)',
                fontFamily: "'Zen Maru Gothic', sans-serif",
                boxShadow: active ? `2px 2px 0 ${gm?.color ?? 'var(--mb-gold)'}` : 'none',
              }}
            >
              {gm?.icon} {genre.title}
            </button>
          );
        })}
      </div>

      {/* Topic category chips (second row) */}
      <div className="flex gap-2 flex-wrap mb-5 pl-1">
        {visibleTopics.map(tc => {
          const tm = topicMeta[tc.id];
          const active = selectedTopic === tc.id;
          // この話題カテゴリに属するコースが存在するか確認
          const hasContent = categories.some(c => c.topicCategoryId === tc.id);
          if (!hasContent) return null;
          return (
            <button type="button"
              key={tc.id}
              onClick={() => setSelectedTopic(active ? null : tc.id)}
              className="text-[10px] font-bold px-2.5 py-1 rounded-full border transition-all flex items-center gap-1"
              style={{
                background: active ? `${tm?.color ?? '#ccc'}20` : 'transparent',
                borderColor: active ? tm?.color ?? '#ccc' : 'rgba(26,26,46,0.12)',
                color: active ? tm?.color ?? '#888' : 'rgba(26,26,46,0.4)',
                fontFamily: "'Zen Maru Gothic', sans-serif",
              }}
            >
              {tm?.icon} {tc.title}
              <span className="text-[8px] opacity-60">({topicLessonCounts[tc.id] ?? 0})</span>
            </button>
          );
        })}
      </div>

      {/* Overall progress */}
      <OverallProgressBar />

      {/* No results */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="text-3xl mb-2">🔍</div>
          <p className="text-sm" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {q ? `「${query}」に一致するコースが見つかりません` : 'このカテゴリのコースは準備中です'}
          </p>
        </div>
      )}

      {/* Course list */}
      <div className="space-y-14">
        {filteredCategories.map((category) => {
          const meta = courseMeta[category.id];
          const accent = meta?.color ?? '#ccc';
          const tc = topicCategories.find(t => t.id === category.topicCategoryId);
          const tcMeta = category.topicCategoryId ? topicMeta[category.topicCategoryId] : null;

          return (
            <div key={category.id}>
              {/* Course header */}
              <div
                className="flex items-center gap-3 rounded-xl border-2 mb-6 overflow-hidden"
                style={{ background: 'var(--mb-dark)', borderColor: accent, boxShadow: `4px 4px 0 ${accent}` }}
              >
                {/* Course thumbnail — clickable → show full flow */}
                {category.image ? (
                  <button
                    onClick={() => setShowOverviewId(category.id)}
                    className="w-20 h-16 shrink-0 relative hover:opacity-80 transition-opacity cursor-pointer border-none p-0 bg-transparent"
                  >
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                      quality={80}
                    />
                  </button>
                ) : (
                  <div
                    className="w-14 h-14 shrink-0 flex items-center justify-center text-2xl ml-3 rounded-lg border-2"
                    style={{ background: `${accent}22`, borderColor: accent }}
                  >
                    {meta?.icon ?? '📚'}
                  </div>
                )}

                <div className="flex-1 min-w-0 py-3 pr-2">
                  {/* Breadcrumb: カテゴリ > コース */}
                  <div className="flex items-center gap-1 mb-0.5 flex-wrap">
                    {tc && (
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                        style={{ background: `${tcMeta?.color ?? accent}25`, color: tcMeta?.color ?? accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        {tcMeta?.icon} {tc.title}
                      </span>
                    )}
                    {category.level && (
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                        style={{ background: `${LEVEL_COLOR[category.level] ?? accent}20`, color: LEVEL_COLOR[category.level] ?? accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        {category.level}
                      </span>
                    )}
                  </div>
                  <h2 className="text-sm font-bold text-white leading-tight" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {category.title}
                  </h2>
                </div>
                <div className="shrink-0 py-3 pr-4 text-right min-w-[64px]">
                  <div className="text-[11px] font-bold" style={{ color: accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {category.courses.length}章
                  </div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {category.courses.reduce((a, c) => a + c.lessons.filter(l => !l.isComingSoon).length, 0)}講義
                  </div>
                  <CategoryProgressBar category={category} accentColor={accent} />
                </div>
              </div>

              {/* Chapter + Lesson flow */}
              <div className="relative pl-9">
                <div
                  className="absolute left-[17px] top-0 bottom-0 w-0.5 rounded-full"
                  style={{ background: `${accent}28` }}
                />

                <div className="space-y-3">
                  {category.courses.map((course, chIdx) => {
                    const key = `${category.id}/${course.id}`;
                    const open = isOpen(category.id, course.id);

                    return (
                      <div key={course.id} className="relative">
                        {/* Chapter row (toggle) */}
                        <div className="flex items-center gap-3 -ml-9">
                          <div
                            className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[12px] font-bold border-2 z-10 shrink-0"
                            style={{ background: 'var(--mb-dark)', borderColor: accent, color: accent, fontFamily: "'Dela Gothic One', sans-serif" }}
                          >
                            {chIdx + 1}
                          </div>

                          <button type="button"
                            onClick={() => toggle(key)}
                            className="flex-1 flex items-center gap-3 px-3 py-2.5 rounded-xl border-2 bg-white text-left transition-all hover:-translate-y-0.5 overflow-hidden"
                            style={{ borderColor: 'var(--mb-dark)', boxShadow: `3px 3px 0 ${accent}` }}
                          >
                            {/* Chapter thumbnail (small) */}
                            {course.image ? (
                              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border relative" style={{ borderColor: 'rgba(26,26,46,0.08)' }}>
                                <Image
                                  src={course.image}
                                  alt={course.title}
                                  fill
                                  sizes="40px"
                                  className="object-cover"
                                  quality={75}
                                />
                              </div>
                            ) : (
                              <div
                                className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center text-lg border"
                                style={{ background: `${accent}18`, borderColor: `${accent}40` }}
                              >
                                {meta?.icon ?? '📖'}
                              </div>
                            )}

                            <div className="flex-1 min-w-0">
                              <span
                                className="text-xs font-bold block leading-snug"
                                style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                              >
                                <Highlight text={course.title} q={q} />
                              </span>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span
                                  className="text-[10px]"
                                  style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                                >
                                  {course.lessons.filter(l => !l.isComingSoon).length}講義
                                </span>
                                {course.lessons.some(l => l.gameTags?.length) && (
                                  <span
                                    className="text-[8px] font-bold px-1.5 py-0.5 rounded"
                                    style={{ background: 'rgba(245,200,66,0.2)', color: '#C49010', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                                  >
                                    🎲 ZAi連動
                                  </span>
                                )}
                                <ChapterProgressBadge course={course} courseId={course.id} accentColor={accent} />
                              </div>
                            </div>

                            {/* Chevron */}
                            <svg
                              className="w-4 h-4 shrink-0 transition-transform duration-200"
                              style={{ color: accent, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>

                        {/* Lesson list (collapsible) */}
                        <AnimatedCollapse open={open}>
                          {(() => {
                            const hasStarted = mounted && course.lessons.some(l => !l.isComingSoon && isCompleted(course.id, l.id));
                            const firstIncomplete = course.lessons.find(l => !l.isComingSoon && !(mounted && isCompleted(course.id, l.id)));
                            const startTarget = firstIncomplete ?? course.lessons.find(l => !l.isComingSoon);
                            const startHref = startTarget ? `/courses/${course.id}/lessons/${startTarget.id}` : '#';
                            const allDone = mounted && course.lessons.filter(l => !l.isComingSoon).every(l => isCompleted(course.id, l.id));
                            const startLabel = allDone ? 'もう一度見る' : hasStarted ? '続きから学ぶ' : 'この章を始める';
                            return (
                              <div
                                className="ml-1 mt-1 mb-1 rounded-xl border overflow-hidden"
                                style={{ borderColor: `${accent}40` }}
                              >
                                {/* Banner image when open */}
                                {course.image && (
                                  <div className="relative w-full h-28">
                                    <Image
                                      src={course.image}
                                      alt={course.title}
                                      fill
                                      sizes="(max-width: 672px) 100vw, 672px"
                                      className="object-cover"
                                      quality={75}
                                      priority={chIdx === 0}
                                    />
                                    <div
                                      className="absolute inset-0"
                                      style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(26,26,46,0.7))' }}
                                    />
                                    <div className="absolute bottom-2 left-3 right-3">
                                      <span
                                        className="text-xs font-bold text-white"
                                        style={{ fontFamily: "'Zen Maru Gothic', sans-serif", textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                                      >
                                        {course.title}
                                      </span>
                                    </div>
                                  </div>
                                )}

                                {course.lessons.map((lesson, lIdx) => {
                                  const hasZai = lesson.gameTags && lesson.gameTags.length > 0;
                                  const isComingSoon = lesson.isComingSoon;
                                  const done = mounted && !isComingSoon && isCompleted(course.id, lesson.id);
                                  const isLastViewed = mounted && !done && lastViewedLesson === `${course.id}/${lesson.id}`;

                                  return (
                                    <Link
                                      key={lesson.id}
                                      href={isComingSoon ? '#' : `/courses/${course.id}/lessons/${lesson.id}`}
                                      className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-[rgba(245,200,66,0.06)]"
                                      style={{
                                        borderBottom: lIdx < course.lessons.length - 1 ? `1px solid ${accent}18` : 'none',
                                        background: done ? 'rgba(76,175,125,0.04)' : 'white',
                                        pointerEvents: isComingSoon ? 'none' : undefined,
                                      }}
                                    >
                                      <div className="shrink-0 w-5 flex justify-end">
                                        {done ? (
                                          <svg className="w-4 h-4" style={{ color: 'var(--mb-green)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                          </svg>
                                        ) : (
                                          <span
                                            className="text-[10px] font-bold tabular-nums"
                                            style={{ color: accent, fontFamily: "'Dela Gothic One', sans-serif" }}
                                          >
                                            {chIdx + 1}-{lIdx + 1}
                                          </span>
                                        )}
                                      </div>

                                      <span
                                        className="flex-1 text-xs leading-relaxed"
                                        style={{
                                          color: isComingSoon ? 'rgba(26,26,46,0.3)' : done ? 'rgba(26,26,46,0.4)' : 'rgba(26,26,46,0.85)',
                                          fontFamily: "'Zen Maru Gothic', sans-serif",
                                          fontWeight: isLastViewed ? 700 : 500,
                                          textDecoration: done ? 'line-through' : 'none',
                                        }}
                                      >
                                        <Highlight text={lesson.title} q={q} />
                                        {isLastViewed && (
                                          <span
                                            className="ml-1.5 inline-flex items-center text-[8px] font-bold px-1.5 py-0.5 rounded-full align-middle"
                                            style={{ background: 'rgba(245,200,66,0.18)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                                          >
                                            ▶ 続き
                                          </span>
                                        )}
                                      </span>

                                      <div className="flex items-center gap-1.5 shrink-0">
                                        {hasZai && (
                                          <span
                                            className="text-[8px] font-bold px-1.5 py-0.5 rounded"
                                            style={{ background: 'rgba(245,200,66,0.2)', color: '#C49010', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                                          >
                                            🎲
                                          </span>
                                        )}
                                        {isComingSoon ? (
                                          <span
                                            className="text-[8px] font-bold px-1.5 py-0.5 rounded"
                                            style={{ background: 'rgba(26,26,46,0.06)', color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                                          >
                                            準備中
                                          </span>
                                        ) : (
                                          <>
                                            <span className="text-[9px]" style={{ color: 'rgba(26,26,46,0.3)' }}>{lesson.duration && lesson.duration !== '—' ? `約${lesson.duration.split(':')[0]}分` : (lesson.duration ?? '')}</span>
                                            <svg className="w-3 h-3" style={{ color: accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                          </>
                                        )}
                                      </div>
                                    </Link>
                                  );
                                })}

                                {/* Start / Continue button */}
                                <Link
                                  href={startHref}
                                  className="flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold transition-opacity hover:opacity-80"
                                  style={{ background: accent, color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                                >
                                  {allDone ? (
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                  ) : (
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z"/>
                                    </svg>
                                  )}
                                  {startLabel}
                                </Link>
                              </div>
                            );
                          })()}
                        </AnimatedCollapse>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CourseOverviewSheet Modal */}
      {showOverviewId && (
        <CourseOverviewSheet
          category={categories.find(c => c.id === showOverviewId)!}
          meta={topicMeta[showOverviewId] || { icon: '📚', color: '#5BC8E8' }}
          onClose={() => setShowOverviewId(null)}
        />
      )}
    </div>
  );
}
