'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface AppDetail {
  id: string;
  name: string;
  folderCount: number;
  folders: string[];
}

interface AcademyInfo {
  id: string;
  name: string;
  icon: string;
  color: string;
  apps: AppDetail[];
}

export default function AppDetailPage() {
  const params = useParams();
  const academyId = params?.academyId as string;
  const appId = params?.appId as string;
  const [academy, setAcademy] = useState<AcademyInfo | null>(null);
  const [app, setApp] = useState<AppDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/academies');
        if (!response.ok) throw new Error('Failed to fetch academies');
        const data = await response.json();

        // find academy by ID
        const foundAcademy = data.academies.find(
          (a: AcademyInfo) => a.id === academyId
        );

        if (!foundAcademy) {
          throw new Error('Academy not found');
        }

        setAcademy(foundAcademy);

        // find app in academy
        const foundApp = foundAcademy.apps.find(
          (a: AppDetail) => a.id === appId
        );

        if (!foundApp) {
          throw new Error('App not found');
        }

        setApp(foundApp);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    if (academyId && appId) {
      fetchData();
    }
  }, [academyId, appId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <p style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error || !academy || !app) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center" style={{ color: 'red', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          <p>エラー: {error || 'App not found'}</p>
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
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/academies" className="text-sm hover:underline" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          ← オールアカデミー
        </Link>
        <span style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>  /  </span>
        <Link href={`/academies/${academy.id}`} className="text-sm hover:underline" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {academy.name}
        </Link>
      </div>

      {/* App Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">{academy.icon}</div>
          <div>
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
              {app.name}
            </h1>
            <p className="text-sm mt-2" style={{ color: academy.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              📚 {app.folderCount} / 32 フォルダ
            </p>
          </div>
        </div>
      </div>

      {/* Folders Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {app.folders.map((folder) => (
          <div
            key={folder}
            className="rounded-lg border-2 p-3 text-center transition-all hover:scale-105"
            style={{
              background: 'white',
              borderColor: academy.color,
              boxShadow: `1px 1px 0 ${academy.color}10`,
            }}
          >
            <div className="text-3xl mb-2">📁</div>
            <p className="text-[11px] font-bold line-clamp-3" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {folder}
            </p>
          </div>
        ))}
      </div>

      {app.folderCount < 32 && (
        <div className="mt-8 p-4 rounded-lg" style={{ background: 'rgba(255,107,157,0.1)' }}>
          <p className="text-sm" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            ⚠️ 未作成フォルダがあります（{32 - app.folderCount} / 32）
          </p>
        </div>
      )}

      {app.folderCount === 32 && (
        <div className="mt-8 p-4 rounded-lg" style={{ background: 'rgba(150,206,180,0.1)' }}>
          <p className="text-sm" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            ✅ すべてのフォルダが完成しています（32 / 32）
          </p>
        </div>
      )}
    </div>
  );
}
