'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface AppInfo {
  id: string;
  name: string;
  folderCount: number;
  folders: string[];
}

interface AcademyData {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  appCount: number;
  apps: AppInfo[];
}

function AcademyCard({ academy }: { academy: AcademyData }) {
  const [showAllApps, setShowAllApps] = useState(false);

  const visibleApps = showAllApps ? academy.apps : academy.apps.slice(0, 5);
  const hiddenAppsCount = Math.max(0, academy.apps.length - 5);

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
          <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden border flex items-center justify-center text-3xl" style={{ borderColor: academy.color }}>
            {academy.icon}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {academy.name}
            </h2>
            {academy.appCount > 0 && (
              <span className="text-xs font-bold" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                📚 {academy.appCount} アプリ
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs mb-3 line-clamp-2" style={{ color: 'rgba(26,26,46,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {academy.description}
        </p>

        {/* Apps List */}
        {academy.appCount > 0 && (
          <div className="border-t pt-3" style={{ borderColor: academy.color }}>
            <div className="text-xs font-bold mb-2" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              📖 アプリ一覧
            </div>
            <div className="space-y-1.5">
              {visibleApps.map((app) => (
                <div key={app.id} className="flex items-center gap-2">
                  <div className="w-6 h-6 flex-shrink-0 rounded bg-gray-100 overflow-hidden flex items-center justify-center text-xs">
                    📱
                  </div>
                  <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.75)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {app.name}
                  </span>
                </div>
              ))}
              {hiddenAppsCount > 0 && (
                <div
                  className="text-[10px] font-bold pt-1 cursor-pointer"
                  style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllApps(!showAllApps);
                  }}
                >
                  +{hiddenAppsCount} アプリ
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
  const [academies, setAcademies] = useState<AcademyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        const response = await fetch('/api/academies');
        if (!response.ok) throw new Error('Failed to fetch academies');
        const data = await response.json();
        setAcademies(data.academies || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load academies');
      } finally {
        setLoading(false);
      }
    };

    fetchAcademies();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <p style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center" style={{ color: 'red', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          <p>エラー: {error}</p>
        </div>
      </div>
    );
  }

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
        <p className="text-xs mt-2" style={{ color: 'rgba(26,26,46,0.50)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {academies.length} アカデミー • {academies.reduce((sum, a) => sum + a.appCount, 0)} アプリ
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
