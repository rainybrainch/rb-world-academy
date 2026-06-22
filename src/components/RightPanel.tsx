'use client';

import { useState } from 'react';

interface RightPanelProps {
  checkItems: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function RightPanel({ checkItems, isOpen, onClose }: RightPanelProps) {
  const [checked, setChecked] = useState<boolean[]>(checkItems.map(() => false));

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const doneCount = checked.filter(Boolean).length;
  const allDone = doneCount === checkItems.length && checkItems.length > 0;
  const progress = checkItems.length > 0 ? (doneCount / checkItems.length) * 100 : 0;

  if (!isOpen) return null;

  return (
    <>
      {/* Invisible backdrop — click to close */}
      <div
        className="fixed inset-0 z-30"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating panel */}
      <div
        className="fixed top-[3.75rem] right-4 z-40 w-72 rounded-2xl overflow-hidden flex flex-col"
        style={{
          border: '2px solid var(--mb-dark)',
          boxShadow: '5px 5px 0 var(--mb-gold)',
          maxHeight: 'calc(100vh - 5rem)',
          background: 'var(--mb-cream)',
        }}
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center justify-between shrink-0"
          style={{ background: 'var(--mb-dark)', borderBottom: '2px solid var(--mb-gold)' }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: 'var(--mb-gold)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span
              className="text-sm font-bold text-white"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              セルフチェック
            </span>
          </div>
          <button type="button"
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center rounded text-white/50 hover:text-white transition-colors text-lg leading-none"
            aria-label="閉じる"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Check items */}
          <div className="space-y-2">
            {checkItems.map((item, i) => (
              <label key={i} className="flex items-start gap-2.5 cursor-pointer group">
                <div className="mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => toggle(i)}
                    className="sr-only"
                  />
                  <div
                    className="w-4 h-4 rounded border-2 flex items-center justify-center transition-colors"
                    style={{
                      borderColor: checked[i] ? 'var(--mb-dark)' : 'rgba(26,26,46,0.3)',
                      background: checked[i] ? 'var(--mb-dark)' : 'transparent',
                    }}
                  >
                    {checked[i] && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span
                  className="text-xs leading-relaxed"
                  style={{
                    color: checked[i] ? 'rgba(26,26,46,0.35)' : 'var(--mb-dark)',
                    textDecoration: checked[i] ? 'line-through' : 'none',
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                  }}
                >
                  {item}
                </span>
              </label>
            ))}
          </div>

          {/* Progress bar */}
          <div>
            <div
              className="flex justify-between text-xs font-bold mb-1.5"
              style={{ color: 'rgba(26,26,46,0.5)' }}
            >
              <span>理解度</span>
              <span>{doneCount}/{checkItems.length}</span>
            </div>
            <div
              className="h-2.5 rounded-full overflow-hidden border"
              style={{ background: 'rgba(26,26,46,0.08)', borderColor: 'rgba(26,26,46,0.15)' }}
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: allDone ? 'var(--mb-green)' : 'var(--mb-gold)',
                }}
              />
            </div>
          </div>

          {/* Completion */}
          {allDone && (
            <div
              className="rounded-xl p-3 text-center border-2"
              style={{
                background: 'rgba(76,175,125,0.1)',
                borderColor: 'var(--mb-green)',
              }}
            >
              <div className="text-sm font-bold" style={{ color: 'var(--mb-green)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                ✓ このレッスン完了！
              </div>
              <div className="text-xs mt-1" style={{ color: 'rgba(26,26,46,0.5)' }}>
                次のレッスンへ進みましょう
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
