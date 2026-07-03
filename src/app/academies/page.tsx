'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllAcademies } from '@/data/academies';
import { getCourse } from '@/data/courses';
import { useState, useEffect } from 'react';

// export const metadata: Metadata = {
//   title: 'オールアカデミー | ALL ACADEMY',
//   description: 'RAINYBRAIN が提供する10つのアカデミー。ライフスキルから最新テクノロジーまで、あらゆる学習が揃った総合学習プラットフォーム。',
// };

interface CourseInfo {
  id: string;
  title: string;
}

function AcademyCard({ academy }: { academy: any }) {
  const [courses, setCourses] = useState<CourseInfo[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    // Get courses for this academy
    const courseList = academy.courseIds
      .map((courseId: string) => {
        const course = getCourse(courseId);
        return course ? { id: courseId, title: course.course.title } : null;
      })
      .filter(Boolean);
    setCourses(courseList);
  }, [academy]);

  const visibleCourses = showAllCourses ? courses : courses.slice(0, 5);
  const hiddenCoursesCount = Math.max(0, courses.length - 5);

  // Map academy ID to folder name
  const academyFolderMap: Record<string, string> = {
    'academy-life': 'life',
    'academy-language': 'language',
    'academy-world': 'world',
    'academy-subject': 'subject',
    'academy-hobby': 'hobby',
    'academy-money': 'money',
    'academy-ai-it': 'it-ai',
    'academy-business': 'business',
    'academy-qualification': 'qualification',
    'academy-rb': 'rb',
  };

  const folderName = academyFolderMap[academy.id];
  const iconPath = folderName ? `/Assets/Academies/${folderName}/icon.png` : null;

  return (
    <Link
      href={`/academies/${academy.id}`}
      className="block rounded-xl border-2 transition-all hover:scale-102 active:scale-95 overflow-hidden"
      style={{
        background: 'white',
        borderColor: academy.color,
        boxShadow: `4px 4px 0 ${academy.color}20`,
      }}
    >
      <div className="p-4">
        {/* Academy Icon Section */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden border" style={{ borderColor: academy.color }}>
            {iconPath ? (
              <Image
                src={iconPath}
                alt={academy.title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23f0f0f0" width="64" height="64"/%3E%3Ctext x="32" y="36" font-size="40" text-anchor="middle" fill="%23999"%3E' + encodeURIComponent(academy.icon) + '%3C/text%3E%3C/svg%3E';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl">
                {academy.icon}
              </div>
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {academy.title}
            </h2>
            {courses.length > 0 && (
              <span className="text-xs font-bold" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                📚 {courses.length} コース
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs mb-3 line-clamp-2" style={{ color: 'rgba(26,26,46,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {academy.description}
        </p>

        {/* Courses List */}
        {courses.length > 0 && (
          <div className="border-t pt-3" style={{ borderColor: academy.color }}>
            <div className="text-xs font-bold mb-2" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              📖 作成済みコース
            </div>
            <div className="space-y-1.5">
              {visibleCourses.map((course) => (
                <div key={course.id} className="flex items-center gap-2">
                  <div className="w-6 h-6 flex-shrink-0 rounded bg-gray-100 overflow-hidden flex items-center justify-center text-xs">
                    📚
                  </div>
                  <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.75)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {course.title}
                  </span>
                </div>
              ))}
              {hiddenCoursesCount > 0 && (
                <div
                  className="text-[10px] font-bold pt-1 cursor-pointer"
                  style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllCourses(!showAllCourses);
                  }}
                >
                  +{hiddenCoursesCount} コース
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default function AcademiesPage() {
  const academies = getAllAcademies();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {academies.map((academy) => (
          <AcademyCard key={academy.id} academy={academy} />
        ))}
      </div>
    </div>
  );
}
