export const revalidate = 0;
import Link from 'next/link';
import { categories } from '@/data/courses';
import { topicCategories } from '@/data/structure';
import { countriesList } from '@/data/countries-list';
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
            Language と Country で<br />
            <span style={{ color: 'var(--mb-gold)' }}>世界を学ぼう。</span>
          </h1>
          <p
            className="text-xs leading-relaxed mb-3"
            style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <strong style={{ color: 'var(--mb-green)' }}>🗣️ Language Academy:</strong> 12言語・1440講義で世界の言葉を習得。英語・日本語・中国語・韓国語・ドイツ語・フランス語・スペイン語・イタリア語・アラビア語・ポルトガル語・古典漢文・手話。
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <strong style={{ color: 'var(--mb-sky)' }}>🌍 Country Academy:</strong> 世界の国々の政治・経済・文化を深く理解。インド・台湾・中国・日本・ドイツ・アメリカ・イギリス・フランス・ブラジル・インドネシア・メキシコ・韓国。
          </p>

          <HeroCtaButton />
        </div>
      </div>

      {/* ── Language アプリグリッド ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-green)' }} />
          <h2 className="text-sm font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            🗣️ Language アプリ
          </h2>
        </div>

        <HomeCourseGrid categories={categories} />
      </div>

      {/* ── Country アプリグリッド ── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-sky)' }} />
          <h2 className="text-sm font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            🌍 Country アプリ
          </h2>
          <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(26,122,166,0.1)', color: 'var(--mb-sky)' }}>
            26ヶ国
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {countriesList.map((country) => {
            // カウントリーレポートは外部リンク
            if (country.id === 'countries-report') {
              return (
                <a
                  key={country.id}
                  href={country.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div
                    className="w-full rounded-xl overflow-hidden border relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    style={{
                      aspectRatio: '1/1',
                      borderColor: 'rgba(102,126,234,0.3)',
                      borderWidth: '1.5px',
                      background: 'linear-gradient(135deg, rgba(102,126,234,0.12) 0%, rgba(118,75,162,0.08) 100%)',
                      boxShadow: '0 6px 16px rgba(26,122,166,0.15)',
                    }}
                  >
                    <img
                      src={country.icon}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                    <div
                      className="absolute inset-0 transition-all duration-300 pointer-events-none group-hover:bg-gradient-to-t group-hover:from-black/30"
                      style={{ background: 'transparent' }}
                    />
                  </div>
                  <p className="text-sm font-bold mt-3 text-center leading-snug px-1" style={{ color: 'rgba(26,26,46,0.8)' }}>
                    {country.name}
                  </p>
                </a>
              );
            }

            return (
              <Link
                key={country.id}
                href={`/countries/${country.id}`}
                className="group flex flex-col items-center"
              >
                <div
                  className="w-full rounded-xl overflow-hidden border relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{
                    aspectRatio: '1/1',
                    borderColor: 'rgba(102,126,234,0.3)',
                    borderWidth: '1.5px',
                    background: 'linear-gradient(135deg, rgba(102,126,234,0.12) 0%, rgba(118,75,162,0.08) 100%)',
                    boxShadow: '0 6px 16px rgba(26,122,166,0.15)',
                  }}
                >
                  <img
                    src={country.icon}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                  <div
                    className="absolute inset-0 transition-all duration-300 pointer-events-none group-hover:bg-gradient-to-t group-hover:from-black/30"
                    style={{ background: 'transparent' }}
                  />
                </div>
                <p className="text-sm font-bold mt-3 text-center leading-snug px-1" style={{ color: 'rgba(26,26,46,0.8)' }}>
                  {country.name}
                </p>
              </Link>
            );
          })}
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


      {/* ── はじめての方へ（トグル） ── */}
      <FirstVisitGuide />

    </div>
  );
}
