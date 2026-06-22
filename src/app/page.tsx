export const revalidate = 0;
import Link from 'next/link';
import { categories } from '@/data/courses';
import { topicCategories } from '@/data/structure';
import HomeStats from '@/components/HomeStats';
import NextLessonCard from '@/components/NextLessonCard';
import MilestoneCard from '@/components/MilestoneCard';
import WelcomeBack from '@/components/WelcomeBack';
import DailyGoalCard from '@/components/DailyGoalCard';
import DailyTip from '@/components/DailyTip';
import RecentLessons from '@/components/RecentLessons';
import StreakWarning from '@/components/StreakWarning';
import AllCoursesComplete from '@/components/AllCoursesComplete';
import FirstVisitGuide from '@/components/FirstVisitGuide';
import WeeklyGoalCard from '@/components/WeeklyGoalCard';
import HeroCtaButton from '@/components/HeroCtaButton';
import HomeCourseGrid from '@/components/HomeCourseGrid';
import MyCoursesList from '@/components/MyCoursesList';
import RandomLesson from '@/components/RandomLesson';

export default function HomePage() {
  const totalLessons = categories.reduce(
    (a, cat) => a + cat.courses.reduce((b, c) => b + c.lessons.filter(l => !l.isComingSoon).length, 0), 0
  );
  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-7">

      {/* ── Hero ── */}
      <div
        className="rounded-2xl p-5 relative overflow-hidden"
        style={{
          background: 'var(--mb-dark)',
          border: '2px solid var(--mb-dark)',
          boxShadow: '5px 5px 0 var(--mb-gold)',
        }}
      >
        {/* Background accent blob */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
          style={{ background: 'var(--mb-gold)' }}
        />
        <div
          className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-10"
          style={{ background: 'var(--mb-sky)' }}
        />

        <div className="relative">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <div
              className="inline-block text-[9px] font-bold tracking-[3px] px-2.5 py-1 rounded"
              style={{ background: 'rgba(245,200,66,0.15)', color: 'var(--mb-gold)', border: '1px solid rgba(245,200,66,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ALL ACADEMY
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background: 'rgba(76,175,125,0.15)', border: '1px solid rgba(76,175,125,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--mb-green)', animation: 'pulse 2s infinite' }} />
              <span className="text-[9px] font-bold" style={{ color: 'var(--mb-green)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {totalLessons}講義 公開中
              </span>
            </div>
          </div>
          <h1
            className="text-2xl leading-tight mb-2"
            style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'white' }}
          >
            12言語 + 手話を学ぼう。<br />
            <span style={{ color: 'var(--mb-gold)' }}>世界と繋がろう。</span>
          </h1>
          <p
            className="text-xs leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            英語・日本語・中国語・韓国語・ドイツ語・フランス語・スペイン語・イタリア語・アラビア語・ポルトガル語・古典漢文・手話。全{topicCategories.length}言語・{totalLessons}講義を楽しく学ぼう。
          </p>

          <HeroCtaButton />
        </div>
      </div>

      {/* ── Language アプリグリッド ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-green)' }} />
          <h2 className="text-sm font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            Language アプリ
          </h2>
        </div>

        <HomeCourseGrid categories={categories} />
      </div>

      {/* ── Country アプリグリッド ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-sky)' }} />
          <h2 className="text-sm font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            Country アプリ
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-5">
          {[
            { id: 'india', name: 'インド', icon: '/images/countries/インド.jpg' },
            { id: 'taiwan', name: '台湾', icon: '/images/countries/台湾.jpg' },
            { id: 'china', name: '中国', icon: '/images/countries/中国.jpg' },
            { id: 'japan', name: '日本', icon: '/images/countries/日本.jpg' },
            { id: 'germany', name: 'ドイツ', icon: '/images/countries/ドイツ.jpg' },
            { id: 'usa', name: 'アメリカ', icon: '/images/countries/アメリカ.jpg' },
            { id: 'uk', name: 'イギリス', icon: '/images/countries/イギリス.jpg' },
            { id: 'france', name: 'フランス', icon: '/images/countries/フランス.jpg' },
            { id: 'brazil', name: 'ブラジル', icon: '/images/countries/ブラジル.jpg' },
            { id: 'indonesia', name: 'インドネシア', icon: '/images/countries/インドネシア.jpg' },
            { id: 'mexico', name: 'メキシコ', icon: '/images/countries/メキシコ.jpg' },
            { id: 'korea', name: '韓国', icon: '/images/countries/韓国.jpg' },
          ].map((country) => (
            <Link
              key={country.id}
              href={`https://rb-world-countries.vercel.app/countries/${country.id}`}
              target="_blank"
              rel="noopener"
            >
              <div
                className="w-full rounded-2xl overflow-hidden border-2 shadow-sm relative cursor-pointer hover:scale-105 transition-transform"
                style={{
                  aspectRatio: '1/1',
                  borderColor: 'rgba(26,26,46,0.08)',
                  background: '#1a2a4a22',
                  boxShadow: '0 2px 8px rgba(26,122,166,0.3)',
                }}
              >
                <img
                  src={country.icon}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-bold mt-2 text-center text-gray-700" style={{ color: 'rgba(26,26,46,0.7)' }}>
                {country.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* ── 全講義制覇 ── */}
      <AllCoursesComplete />

      {/* ── ストリーク警告 ── */}
      <StreakWarning />

      {/* ── ウェルカムバック ── */}
      <WelcomeBack />

      {/* ── マイコース ── */}
      <MyCoursesList />

      {/* ── 次のレッスン ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-sky)' }} />
          <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            次の講義
          </span>
        </div>
        <NextLessonCard />
        <div className="mt-3">
          <RandomLesson />
        </div>
      </div>

      {/* ── 今日の目標 ── */}
      <DailyGoalCard />

      {/* ── 今日のヒント ── */}
      <DailyTip />

      {/* ── 今週の目標 ── */}
      <WeeklyGoalCard />

      {/* ── Stats ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-gold)' }} />
          <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            マイ実績
          </span>
        </div>
        <HomeStats />
      </div>

      {/* ── マイルストーン ── */}
      <MilestoneCard />

      <RecentLessons />

      {/* ── Country Academy へのリンク ── */}
      <Link href="https://rb-world-countries.vercel.app">
        <div
          className="rounded-2xl p-5 relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          style={{
            background: 'linear-gradient(135deg, #1a4d7a 0%, #2d7aa6 100%)',
            border: '2px solid #2d7aa6',
            boxShadow: '5px 5px 0 rgba(45, 122, 166, 0.3)',
          }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🌍</span>
              <h3 className="text-white font-bold text-lg">Country Academy</h3>
            </div>
            <p className="text-blue-100 text-sm mb-3">
              世界の国々を政治、経済、文化の視点から学べるプラットフォーム。
              {categories.filter(c => c.topicCategoryId?.startsWith('topic-')).length > 0 && (
                <span className="block mt-1 text-xs text-blue-50">
                  • 12ヶ国 + 台湾の詳細プロフィール
                  <br />
                  • 大陸別フィルター機能
                  <br />
                  • Language Academy と連携
                </span>
              )}
            </p>
            <div className="inline-block px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              国を探索する →
            </div>
          </div>
        </div>
      </Link>

      {/* ── はじめての方へ（トグル） ── */}
      <FirstVisitGuide />

    </div>
  );
}
