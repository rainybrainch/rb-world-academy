'use client';

import Link from 'next/link';
import { useState } from 'react';

const steps = [
  { icon: '📖', text: '1講義 3〜10分。スキマ時間でOK' },
  { icon: '🧠', text: '今日の一問・名言・ヒントで毎日知識を定着させよう' },
  { icon: '🏆', text: '連続学習で実績をゲット・レベルアップ' },
  { icon: '📊', text: '学習レポートで進捗・いいね・メモを管理' },
];

export default function FirstVisitGuide() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl border-2 overflow-hidden"
      style={{ borderColor: 'var(--mb-sky)', boxShadow: '4px 4px 0 var(--mb-sky)' }}
    >
      <button type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full px-4 py-3 flex items-center justify-between"
        style={{ background: 'var(--mb-sky)' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">👋</span>
          <span className="text-sm font-bold" style={{ color: 'var(--mb-dark)', fontFamily: "'Dela Gothic One', sans-serif" }}>
            はじめての方へ
          </span>
        </div>
        <span
          className="text-base transition-transform duration-200"
          style={{
            color: 'var(--mb-dark)',
            display: 'inline-block',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="px-4 py-4 bg-white">
          <p className="text-xs mb-3" style={{ color: 'rgba(26,26,46,0.6)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            マネぼうアカデミーは、毎日少しずつ本物のマネーリテラシーが身につくアカデミーです。
          </p>
          <div className="space-y-2 mb-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-base w-6 text-center shrink-0">{s.icon}</span>
                <span className="text-xs" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {s.text}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/courses"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: 'var(--mb-dark)',
              borderColor: 'var(--mb-dark)',
              color: 'var(--mb-gold)',
              fontFamily: "'Dela Gothic One', sans-serif",
              boxShadow: '3px 3px 0 var(--mb-sky)',
            }}
          >
            コース一覧へ →
          </Link>
        </div>
      )}
    </div>
  );
}
