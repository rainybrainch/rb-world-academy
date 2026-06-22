'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { topicCategories } from '@/data/structure';
import { useProgress } from '@/hooks/useProgress';
import { TOPIC_META as topicMeta } from '@/data/topic-meta';
import type { Category } from '@/types';

// カテゴリIDとアプリアイコン画像のマッピング
const appIconMap: Record<string, string> = {
  'topic-english':          '/images/languages/english.png',
  'topic-japanese':         '/images/languages/japanese.png',
  'topic-chinese':          '/images/languages/chinese.png',
  'topic-korean':           '/images/languages/korean.png',
  'topic-german':           '/images/languages/german.png',
  'topic-french':           '/images/languages/french.png',
  'topic-spanish':          '/images/languages/spanish.png',
  'topic-italian':          '/images/languages/italian.png',
  'topic-arabic':           '/images/languages/arabic.png',
  'topic-portuguese':       '/images/languages/portuguese.png',
  'topic-classical-chinese': '/images/languages/classical-chinese.png',
};

interface Props {
  categories: Category[];
}

export default function HomeCourseGrid({ categories }: Props) {
  const { isCompleted, mounted } = useProgress();
  const allTopics = topicCategories;

  const topicProgressMap = useMemo(() => {
    const map: Record<string, { done: number; total: number }> = {};
    for (const tc of allTopics) {
      const topicCourses = categories.filter(c => c.topicCategoryId === tc.id);
      const allLessons = topicCourses.flatMap(cat =>
        cat.courses.flatMap(ch => ch.lessons.filter(l => !l.isComingSoon).map(l => ({ courseId: ch.id, lessonId: l.id })))
      );
      const done = mounted ? allLessons.filter(({ courseId, lessonId }) => isCompleted(courseId, lessonId)).length : 0;
      map[tc.id] = { done, total: allLessons.length };
    }
    return map;
  }, [categories, isCompleted, mounted, allTopics]);

  return (
    <>
      {/* アプリアイコングリッド */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-5">
        {allTopics.map((tc, i) => {
          const tm = topicMeta[tc.id];
          const iconSrc = appIconMap[tc.id];
          const hasContent = categories.some(c => c.topicCategoryId === tc.id);
          const { done, total } = topicProgressMap[tc.id];
          const isAllDone = done > 0 && done === total;

          const inner = (
            <>
              {/* アイコン本体 */}
              <div
                className="w-full rounded-2xl overflow-hidden border-2 shadow-sm relative"
                style={{
                  aspectRatio: '1/1',
                  borderColor: isAllDone ? 'var(--mb-gold)' : hasContent ? 'rgba(26,26,46,0.08)' : 'rgba(26,26,46,0.04)',
                  background: `${tm?.color ?? '#ccc'}22`,
                  boxShadow: hasContent ? `0 2px 8px ${tm?.color ?? '#ccc'}30` : 'none',
                  opacity: hasContent ? 1 : 0.45,
                }}
              >
                {iconSrc ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={iconSrc}
                      alt={tc.title}
                      fill
                      sizes="(max-width: 640px) 30vw, 120px"
                      className="object-cover"
                      quality={85}
                      priority={i < 6}
                    />
                  </div>
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-2xl"
                    style={{ background: `linear-gradient(135deg, ${tm?.color ?? '#ccc'}40, ${tm?.color ?? '#ccc'}18)` }}
                  >
                    {tm?.icon ?? '📚'}
                  </div>
                )}
                {/* 準備中バッジ */}
                {!hasContent && (
                  <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                    <span
                      className="text-[7px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.85)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      準備中
                    </span>
                  </div>
                )}
                {/* 進捗バッジ */}
                {mounted && done > 0 && (
                  <div
                    className="absolute top-1 right-1 rounded-full flex items-center justify-center px-1.5 text-[7px] font-bold"
                    style={{
                      height: '16px',
                      background: isAllDone ? 'var(--mb-gold)' : 'rgba(0,0,0,0.62)',
                      color: isAllDone ? 'var(--mb-dark)' : 'white',
                      fontFamily: "'Dela Gothic One', sans-serif",
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    {isAllDone ? '✓' : `${done}/${total}`}
                  </div>
                )}
              </div>

              {/* アプリ名 */}
              <span
                className="text-[10px] font-bold text-center leading-tight"
                style={{
                  color: hasContent ? 'var(--mb-dark)' : 'rgba(26,26,46,0.4)',
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                }}
              >
                {tm?.shortName ?? tc.title}
              </span>
            </>
          );

          return hasContent ? (
            <Link
              key={tc.id}
              href={`/categories/${tc.id}`}
              className="app-icon flex flex-col items-center gap-1.5 transition-transform"
              style={{ animation: `appPop 0.3s ease both`, animationDelay: `${i * 50}ms` }}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={tc.id}
              className="flex flex-col items-center gap-1.5 cursor-default"
              style={{ animation: `appPop 0.3s ease both`, animationDelay: `${i * 50}ms` }}
            >
              {inner}
            </div>
          );
        })}
      </div>
    </>
  );
}
