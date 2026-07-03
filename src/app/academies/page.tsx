import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllAcademies } from '@/data/academies';

export const metadata: Metadata = {
  title: 'オールアカデミー | ALL ACADEMY',
  description: 'RAINYBRAIN が提供する10つのアカデミー。ライフスキルから最新テクノロジーまで、あらゆる学習が揃った総合学習プラットフォーム。',
};

export default function AcademiesPage() {
  const academies = getAllAcademies();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
          🎓 オールアカデミー
        </h1>
        <p className="text-sm" style={{ color: 'rgba(26,26,46,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          10つの専門アカデミーで、あらゆる学習分野をカバー。あなたの興味から始めよう。
        </p>
      </div>

      {/* Academy Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {academies.map((academy) => (
          <Link
            key={academy.id}
            href={`/academies/${academy.id}`}
            className="block rounded-xl p-4 border-2 transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'white',
              borderColor: academy.color,
              boxShadow: `3px 3px 0 ${academy.color}20`,
            }}
          >
            <div className="text-4xl mb-2">{academy.icon}</div>
            <h2 className="text-lg font-bold mb-1" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {academy.title}
            </h2>
            <p className="text-xs" style={{ color: 'rgba(26,26,46,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {academy.description}
            </p>
            {academy.courseIds.length > 0 && (
              <div className="mt-2 pt-2 border-t" style={{ borderColor: academy.color }}>
                <span className="text-[10px] font-bold" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {academy.courseIds.length} コース
                </span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
