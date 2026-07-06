'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface AppInfo {
  id: string;
  name: string;
  folderCount: number;
  folders: string[];
}

interface AcademyDetail {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  appCount: number;
  apps: AppInfo[];
}

export default function AcademyDetailPage() {
  const params = useParams();
  const academyId = params?.academyId as string;
  const [academy, setAcademy] = useState<AcademyDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAcademy = async () => {
      try {
        const response = await fetch('/api/academies');
        if (!response.ok) throw new Error('Failed to fetch academies');
        const data = await response.json();

        // find academy by ID
        const foundAcademy = data.academies.find(
          (a: AcademyDetail) => a.id === academyId
        );

        if (!foundAcademy) {
          throw new Error('Academy not found');
        }

        setAcademy(foundAcademy);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load academy');
      } finally {
        setLoading(false);
      }
    };

    if (academyId) {
      fetchAcademy();
    }
  }, [academyId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <p style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error || !academy) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center" style={{ color: 'red', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          <p>エラー: {error || 'Academy not found'}</p>
        </div>
        <div className="mt-4">
          <Link href="/academies" className="text-blue-500 hover:underline" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/academies" className="text-sm" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          ← オールアカデミー
        </Link>

        <div className="mt-4 flex items-center gap-4">
          <div className="text-5xl">{academy.icon}</div>
          <div>
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
              {academy.name}
            </h1>
            <p className="text-sm mt-2" style={{ color: 'rgba(26,26,46,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {academy.description}
            </p>
            <p className="text-xs mt-2" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              📚 {academy.appCount} アプリ
            </p>
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {academy.apps.map((app) => (
          <Link
            key={app.id}
            href={`/academies/${academy.id}/${app.id}`}
            className="block rounded-lg border-2 p-4 transition-all hover:scale-102 active:scale-95"
            style={{
              background: 'white',
              borderColor: academy.color,
              boxShadow: `2px 2px 0 ${academy.color}15`,
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-sm" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
                  {app.name}
                </h3>
                <p className="text-xs mt-1" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  📁 {app.folderCount} フォルダ
                </p>
              </div>
              <div className="text-2xl">📱</div>
            </div>

            {app.folderCount > 0 && (
              <div className="border-t pt-2" style={{ borderColor: academy.color }}>
                <p className="text-xs font-bold mb-1" style={{ color: 'rgba(26,26,46,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  成果物フォルダ:
                </p>
                <div className="text-[10px] space-y-0.5" style={{ color: 'rgba(26,26,46,0.60)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {app.folders.slice(0, 5).map((folder) => (
                    <div key={folder}>• {folder}</div>
                  ))}
                  {app.folderCount > 5 && (
                    <div style={{ color: academy.color }}>... 他 {app.folderCount - 5} 個</div>
                  )}
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
