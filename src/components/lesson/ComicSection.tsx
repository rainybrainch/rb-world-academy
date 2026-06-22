'use client';

import Image from 'next/image';
import type { ComicData } from '@/types';

interface Props {
  comic: ComicData;
}

const CHARACTER_COLORS: Record<string, { bg: string; label: string }> = {
  'えんだ':     { bg: 'var(--mb-sky)',   label: '#1a1a2e' },
  'ためぞう':   { bg: 'var(--mb-gold)',  label: '#1a1a2e' },
  'かうっしー': { bg: 'var(--mb-red)',   label: '#ffffff' },
  'おーる局長': { bg: 'var(--mb-green)', label: '#ffffff' },
};

const ROLE_ICON: Record<string, string> = {
  '問題提起': '❓',
  '勘違い':   '😅',
  '極論':     '🔥',
  '解説':     '💡',
};

export default function ComicSection({ comic }: Props) {
  const hasImage = !!comic.image;

  return (
    <div className="mb-8">
      {/* タイトル */}
      <div
        className="flex items-center gap-2 mb-4"
      >
        <span className="text-lg">📖</span>
        <h2
          className="text-base font-bold"
          style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}
        >
          今日の4コマ漫画
        </h2>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-bold"
          style={{ background: 'var(--mb-gold)', color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          {comic.title}
        </span>
      </div>

      {/* 漫画画像（存在する場合） */}
      {hasImage && (
        <div
          className="w-full rounded-2xl overflow-hidden border-2 mb-4"
          style={{ borderColor: 'var(--mb-dark)', boxShadow: '4px 4px 0 var(--mb-gold)' }}
        >
          <Image
            src={comic.image}
            alt={comic.title}
            width={800}
            height={600}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      )}

      {/* 画像がない場合：テキストパネル表示 */}
      {!hasImage && (
        <div
          className="rounded-2xl border-2 overflow-hidden mb-4"
          style={{ borderColor: 'var(--mb-dark)', boxShadow: '4px 4px 0 var(--mb-gold)' }}
        >
          <div className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: 'var(--mb-dark)' }}>
            {comic.panels.map((panel, i) => {
              const colors = CHARACTER_COLORS[panel.character] ?? { bg: '#ccc', label: '#1a1a2e' };
              const icon = ROLE_ICON[panel.role] ?? '💬';
              return (
                <div
                  key={i}
                  className="p-3 flex flex-col gap-2 min-h-[120px]"
                  style={{ background: i % 2 === 0 ? 'white' : 'rgba(255,253,245,0.8)' }}
                >
                  {/* キャラ名バッジ */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-base leading-none">{icon}</span>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: colors.bg, color: colors.label, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {panel.character}
                    </span>
                    <span
                      className="text-[9px] opacity-50"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}
                    >
                      {panel.role}
                    </span>
                  </div>
                  {/* セリフ */}
                  <p
                    className="text-xs leading-relaxed flex-1"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}
                  >
                    {panel.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 今日の学び */}
      {comic.learning.length > 0 && (
        <div
          className="rounded-2xl border-2 p-4"
          style={{
            borderColor: 'var(--mb-green)',
            background: 'rgba(76,175,125,0.06)',
            boxShadow: '3px 3px 0 rgba(76,175,125,0.3)',
          }}
        >
          <div
            className="flex items-center gap-1.5 mb-3 text-sm font-bold"
            style={{ color: 'var(--mb-green)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            今日の学び
          </div>
          <ul className="space-y-1.5">
            {comic.learning.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}
              >
                <span className="shrink-0 mt-0.5 font-bold" style={{ color: 'var(--mb-green)' }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 区切り線 */}
      <div className="mt-8 mb-6 border-t-2 border-dashed" style={{ borderColor: 'rgba(26,26,46,0.1)' }} />
    </div>
  );
}
