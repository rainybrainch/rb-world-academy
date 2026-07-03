import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAcademy, getAllAcademies } from '@/data/academies';
import { getCourse } from '@/data/courses';

interface Props {
  params: Promise<{ academyId: string }>;
}

export function generateStaticParams() {
  return getAllAcademies().map(academy => ({ academyId: academy.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { academyId } = await params;
  const academy = getAcademy(academyId);
  if (!academy) return {};

  return {
    title: `${academy.title} | オールアカデミー | ALL ACADEMY`,
    description: academy.description,
  };
}

export default async function AcademyPage({ params }: Props) {
  const { academyId } = await params;
  const academy = getAcademy(academyId);

  if (!academy) notFound();

  // このアカデミーのコースデータを取得
  const courses = academy.courseIds
    .map(courseId => getCourse(courseId))
    .filter(result => result !== null)
    .map(result => result!);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs mb-4 flex items-center gap-1.5 flex-wrap" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/academies" className="hover:underline">オールアカデミー</Link>
        <span>/</span>
        <span style={{ color: 'var(--mb-dark)' }}>{academy.title}</span>
      </nav>

      {/* Academy Header */}
      <div
        className="rounded-xl p-6 mb-8 border-2"
        style={{
          background: 'white',
          borderColor: academy.color,
          boxShadow: `4px 4px 0 ${academy.color}30`,
        }}
      >
        <div className="text-5xl mb-3">{academy.icon}</div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {academy.title}
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,46,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {academy.description}
        </p>
        {academy.courseIds.length > 0 && (
          <div className="mt-4 pt-4 border-t" style={{ borderColor: academy.color }}>
            <span className="text-sm font-bold" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              📚 {academy.courseIds.length} コース
            </span>
          </div>
        )}
      </div>

      {/* Courses List */}
      {courses.length > 0 ? (
        <div>
          <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            📖 このアカデミーのコース
          </h2>
          <div className="space-y-3">
            {courses.map(({ course, category }) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="block rounded-lg border-2 transition-all hover:scale-102 active:scale-95 overflow-hidden"
                style={{
                  background: 'white',
                  borderColor: 'rgba(26,26,46,0.1)',
                  boxShadow: '2px 2px 0 rgba(26,26,46,0.05)',
                }}
              >
                <div className="flex gap-3">
                  {/* Course Icon Thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-100 overflow-hidden">
                    <img
                      src={`/images/courses/${course.id}/31_course_icon.png`}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/academy-icon.webp';
                        (e.target as HTMLImageElement).className = 'w-full h-full object-contain p-2';
                      }}
                    />
                  </div>
                  {/* Course Info */}
                  <div className="flex-1 p-3 flex flex-col justify-center">
                    <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                      {course.title}
                    </h3>
                    {course.description && (
                      <p className="text-xs mb-2" style={{ color: 'rgba(26,26,46,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                        {course.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                        {course.lessons?.length ?? 0} 講義
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded" style={{ background: academy.color + '20', color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-lg p-6 text-center" style={{ background: 'rgba(26,26,46,0.04)' }}>
          <p className="text-sm" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            このアカデミーのコースはまだ登録されていません。
          </p>
          <p className="text-xs mt-2" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            近日公開予定...
          </p>
        </div>
      )}

      {/* Back Link */}
      <div className="mt-8">
        <Link
          href="/academies"
          className="inline-flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-lg border-2"
          style={{
            background: 'white',
            borderColor: academy.color,
            color: academy.color,
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          ← アカデミー一覧に戻る
        </Link>
      </div>
    </div>
  );
}
