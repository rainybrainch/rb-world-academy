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
        console.log('[AcademiesPage] Fetching /api/academies...');
        const response = await fetch('/api/academies');

        console.log(`[AcademiesPage] Response status: ${response.status}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('[AcademiesPage] API Error:', errorData);
          throw new Error(
            `API Error ${response.status}: ${errorData.error || 'Failed to fetch academies'}`
          );
        }

        const data = await response.json();
        console.log(`[AcademiesPage] Loaded ${data.totalAcademies} academies, ${data.totalApps} apps`);
        console.log('[AcademiesPage] Source:', data.source);

        setAcademies(data.academies || []);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load academies';
        console.error('[AcademiesPage] Error:', errorMessage);
        setError(errorMessage);
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
        <div
          style={{
            background: '#fee',
            border: '2px solid #f88',
            borderRadius: '12px',
            padding: '20px',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          <h2 style={{ color: '#c00', marginBottom: '10px', fontSize: '1.2rem' }}>
            ⚠️ データ読み込みエラー
          </h2>
          <p style={{ color: '#666', marginBottom: '15px', fontSize: '0.95rem' }}>
            {error}
          </p>
          <details style={{ fontSize: '0.85rem', color: '#888', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              トラブルシューティング
            </summary>
            <div
              style={{
                background: '#f9f9f9',
                padding: '10px',
                borderRadius: '8px',
                marginTop: '10px',
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                lineHeight: '1.6',
              }}
            >
              <p>✓ ページをリロードしてください（F5キー）</p>
              <p>✓ DevTools Console（F12）でエラーメッセージを確認</p>
              <p>✓ /api/academies に直接アクセスしてレスポンスを確認</p>
              <p>✓ 本番環境ではフォールバックデータを使用しています</p>
              <p style={{ marginTop: '10px' }}>
                環境: <strong>{process.env.NODE_ENV || 'unknown'}</strong>
              </p>
            </div>
          </details>
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
