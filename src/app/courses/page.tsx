import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/courses';
import { topicCategories } from '@/data/structure';

export const metadata: Metadata = {
  title: 'コース一覧 | マネぼうアカデミー',
  description: 'お金・投資・経済・ZAiゲームなど全コースの一覧。自分のペースで学習を始めよう。',
};
import OverallProgressBar from '@/components/OverallProgressBar';
import TopicProgressPill from '@/components/TopicProgressPill';

const topicMeta: Record<string, { icon: string; color: string; shortName: string; tagline: string }> = {
  'cat-money':       { icon: '💴', color: '#5BC8E8', shortName: 'お金',         tagline: 'お金の仕組みを学ぼう' },
  'cat-investment':  { icon: '📈', color: '#4CAF7D', shortName: '投資',         tagline: '資産を育てる方法を知ろう' },
  'cat-economics':   { icon: '🌐', color: '#9B6DD6', shortName: '経済',         tagline: '世界の経済の流れを読む' },
  'cat-politics':    { icon: '🏛',  color: '#E8823A', shortName: '政治',         tagline: '社会のルールを知ろう' },
  'cat-zai':         { icon: '🎲', color: '#F5C842', shortName: 'ZAi',          tagline: 'ゲームで投資を体験しよう' },
  'cat-boardgame':   { icon: '🎯', color: '#F5C842', shortName: 'ゲーム',       tagline: 'ボードゲームで学ぼう' },
  'cat-exam-public': { icon: '📝', color: '#E8354A', shortName: '受験',         tagline: '共通テスト「公共」対策' },
};

const appIconMap: Record<string, string> = {
  'cat-money':       '/images/apps/cat-money.webp',
  'cat-investment':  '/images/apps/cat-investment.webp',
  'cat-economics':   '/images/apps/cat-economics.webp',
  'cat-politics':    '/images/apps/cat-politics.webp',
  'cat-zai':         '/images/apps/cat-game.webp',
  'cat-boardgame':   '/images/apps/cat-game.webp',
};

export default function CoursesPage() {
  const totalCourses = categories.length;
  const totalLessons = categories.reduce((a, cat) => a + cat.courses.reduce((b, c) => b + c.lessons.filter(l => !l.isComingSoon).length, 0), 0);

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
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
          {totalCourses}カテゴリ · {totalLessons}講義
        </p>
      </div>

      {/* Overall progress */}
      <OverallProgressBar />

      {/* App grid */}
      <div className="mt-6 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-gold)' }} />
          <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            カテゴリを選ぶ
          </span>
        </div>

        <div className="space-y-3">
          {topicCategories.map(tc => {
            const tm = topicMeta[tc.id];
            const iconSrc = appIconMap[tc.id];
            const topicCourses = categories.filter(c => c.topicCategoryId === tc.id);
            const hasContent = topicCourses.length > 0;
            const lessonCount = topicCourses.reduce((a, c) => a + c.courses.reduce((b, ch) => b + ch.lessons.filter(l => !l.isComingSoon).length, 0), 0);

            if (!hasContent) return null;

            return (
              <Link
                key={tc.id}
                href={`/categories/${tc.id}`}
                className="flex items-center gap-4 rounded-2xl border-2 overflow-hidden bg-white transition-all hover:-translate-y-0.5 active:translate-y-0"
                style={{ borderColor: 'var(--mb-dark)', boxShadow: `3px 3px 0 ${tm?.color ?? 'var(--mb-gold)'}` }}
              >
                {/* App icon */}
                <div
                  className="w-20 h-20 shrink-0 relative overflow-hidden"
                  style={{ background: `${tm?.color ?? '#ccc'}18` }}
                >
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt={tc.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                      quality={85}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl">
                      {tm?.icon ?? '📚'}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 py-3 pr-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-lg leading-none">{tm?.icon}</span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {tm?.shortName ?? tc.title}
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed line-clamp-1" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {tm?.tagline}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{ background: `${tm?.color ?? '#ccc'}20`, color: tm?.color ?? '#888', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {topicCourses.length}コース
                    </span>
                    <span className="text-[9px]" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                      {lessonCount}講義
                    </span>
                  </div>
                  <TopicProgressPill topicCategoryId={tc.id} color={tm?.color ?? '#888'} />
                </div>

                {/* Arrow */}
                <div className="pr-4 shrink-0">
                  <svg className="w-4 h-4" style={{ color: tm?.color ?? 'var(--mb-gold)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
