'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useModKey } from '@/hooks/useModKey';

function useGlobalShortcuts() {
  const { kShortcut } = useModKey();
  return [
    { key: `${kShortcut} / /`, desc: '講義を検索する' },
    { key: '?', desc: 'このヘルプを表示' },
  ];
}

const LESSON_SHORTCUTS = [
  { key: '← →', desc: '前後の講義に移動' },
  { key: 'C', desc: '講義を完了にする' },
  { key: 'ESC', desc: 'パネルを閉じる' },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ShortcutHelp({ open, onClose }: Props) {
  const pathname = usePathname();
  const isLesson = pathname.includes('/lessons/');
  const GLOBAL_SHORTCUTS = useGlobalShortcuts();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center px-4"
      style={{ background: 'rgba(10,10,26,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="キーボードショートカット"
    >
      <div
        className="w-full max-w-sm rounded-2xl border-2 overflow-hidden"
        style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-gold)', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
      >
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex items-center gap-2">
            <span style={{ color: 'var(--mb-gold)', fontSize: '16px' }}>⌨️</span>
            <span className="text-sm font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}>
              キーボードショートカット
            </span>
          </div>
          <button type="button"
            onClick={onClose}
            className="text-xs px-2 py-0.5 rounded border"
            style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ESC
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <div className="text-[9px] tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              全ページ共通
            </div>
            <div className="space-y-2">
              {GLOBAL_SHORTCUTS.map(s => (
                <div key={s.key} className="flex items-center justify-between">
                  <kbd
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'var(--mb-gold)',
                      fontFamily: "'Dela Gothic One', sans-serif",
                    }}
                  >
                    {s.key}
                  </kbd>
                  <span className="text-xs text-right" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
            <div className="text-[9px] tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              講義ページ
            </div>
            <div className="space-y-2">
              {LESSON_SHORTCUTS.map(s => (
                <div key={s.key} className="flex items-center justify-between">
                  <kbd
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold"
                    style={{
                      background: isLesson ? 'rgba(245,200,66,0.12)' : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${isLesson ? 'rgba(245,200,66,0.3)' : 'rgba(255,255,255,0.12)'}`,
                      color: isLesson ? 'var(--mb-gold)' : 'rgba(255,255,255,0.35)',
                      fontFamily: "'Dela Gothic One', sans-serif",
                    }}
                  >
                    {s.key}
                  </kbd>
                  <span className="text-xs text-right" style={{ color: isLesson ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 pb-3 text-center">
          <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            どこでも ? キーで表示
          </span>
        </div>
      </div>
    </div>
  );
}
