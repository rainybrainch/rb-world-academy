'use client';

import { useEffect, useRef, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

const GOAL_KEY = 'mb_study_goal_date';

const totalLessons = categories.flatMap(c => c.courses).flatMap(c => c.lessons).filter(l => !l.isComingSoon).length;

function localDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function todayStr() {
  return localDateStr(new Date());
}

function minGoalDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return localDateStr(d);
}

function formatGoalDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function daysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + 'T00:00:00');
  return Math.max(1, Math.round((target.getTime() - today.getTime()) / 86400000));
}

export default function StudyGoalCard() {
  const { completedCount, mounted } = useProgress();
  const [goalDate, setGoalDate] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(GOAL_KEY);
      if (saved && saved > todayStr()) setGoalDate(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (editing) setTimeout(() => inputRef.current?.focus(), 50);
  }, [editing]);

  useEffect(() => {
    if (!editing) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setEditing(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [editing]);

  if (!mounted || completedCount === 0) return null;

  const remaining = Math.max(totalLessons - completedCount, 0);

  function save() {
    if (draft && draft > todayStr()) {
      try { localStorage.setItem(GOAL_KEY, draft); } catch {}
      setGoalDate(draft);
    }
    setEditing(false);
  }

  function clear() {
    try { localStorage.removeItem(GOAL_KEY); } catch {}
    setGoalDate(null);
    setEditing(false);
  }

  if (!goalDate && !editing) {
    return (
      <button type="button"
        onClick={() => { setDraft(minGoalDate()); setEditing(true); }}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-xs font-bold transition-all hover:-translate-y-0.5 active:scale-95 mb-8"
        style={{
          background: 'white',
          borderColor: 'rgba(26,26,46,0.15)',
          color: 'rgba(26,26,46,0.5)',
          boxShadow: '2px 2px 0 rgba(26,26,46,0.06)',
          fontFamily: "'Zen Maru Gothic', sans-serif",
        }}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        目標日を設定する
      </button>
    );
  }

  if (editing) {
    return (
      <div
        className="mb-8 p-4 rounded-xl border-2"
        style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: '3px 3px 0 var(--mb-sky)' }}
      >
        <div className="text-xs font-bold mb-3" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          🎯 目標完了日を設定
        </div>
        <input
          ref={inputRef}
          type="date"
          value={draft}
          min={minGoalDate()}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && draft && draft > todayStr()) save(); }}
          className="w-full rounded-lg border-2 px-3 py-2 text-sm mb-3"
          style={{ borderColor: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)', outline: 'none' }}
        />
        <div className="flex gap-2">
          <button type="button"
            onClick={save}
            disabled={!draft || draft <= todayStr()}
            className="flex-1 py-2 rounded-lg border-2 text-xs font-bold disabled:opacity-40"
            style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            設定する
          </button>
          <button type="button"
            onClick={() => setEditing(false)}
            className="py-2 px-4 rounded-lg border-2 text-xs font-bold"
            style={{ borderColor: 'rgba(26,26,46,0.2)', color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            キャンセル
          </button>
        </div>
      </div>
    );
  }

  // Show goal stats
  const days = daysUntil(goalDate!);
  const lessonsPerDay = remaining > 0 ? (remaining / days).toFixed(1) : '0';
  const lessonsPerWeek = remaining > 0 ? Math.ceil((remaining / days) * 7) : 0;
  const onTrack = remaining === 0 || parseFloat(lessonsPerDay) <= 2;

  return (
    <div
      className="mb-8 p-4 rounded-xl border-2"
      style={{
        background: onTrack ? 'white' : 'rgba(245,200,66,0.04)',
        borderColor: onTrack ? 'var(--mb-dark)' : 'var(--mb-gold)',
        boxShadow: `3px 3px 0 ${onTrack ? 'var(--mb-sky)' : 'var(--mb-gold)'}`,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-base">🎯</span>
          <span className="text-xs font-bold" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            目標完了日
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button type="button"
            onClick={() => { setDraft(goalDate!); setEditing(true); }}
            className="text-[9px] px-2 py-0.5 rounded-full border"
            style={{ borderColor: 'rgba(26,26,46,0.2)', color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            変更
          </button>
          <button type="button"
            onClick={clear}
            className="text-[9px] px-2 py-0.5 rounded-full border"
            style={{ borderColor: 'rgba(26,26,46,0.12)', color: 'rgba(26,26,46,0.25)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            削除
          </button>
        </div>
      </div>

      <div className="mb-3">
        <div style={{ fontFamily: "'Dela Gothic One', sans-serif", fontSize: '18px', color: onTrack ? 'var(--mb-dark)' : 'var(--mb-gold)', lineHeight: 1.2 }}>
          {formatGoalDate(goalDate!)}
        </div>
        <div className="text-[10px] mt-0.5" style={{ color: 'rgba(26,26,46,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          あと{days}日 · 残り{remaining}講義
        </div>
      </div>

      {remaining > 0 ? (
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: `1px solid ${onTrack ? 'rgba(91,200,232,0.15)' : 'rgba(245,200,66,0.2)'}` }}
        >
          <div
            className="flex items-center justify-between px-3 py-2"
            style={{ background: onTrack ? 'rgba(91,200,232,0.08)' : 'rgba(245,200,66,0.1)' }}
          >
            <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              必要ペース
            </span>
            <span style={{ fontFamily: "'Dela Gothic One', sans-serif", fontSize: '13px', color: onTrack ? 'var(--mb-sky)' : 'var(--mb-gold)' }}>
              1日{lessonsPerDay}講義 / 週{lessonsPerWeek}講義
            </span>
          </div>
          {onTrack && (
            <div
              className="flex items-center justify-center gap-1.5 py-1.5"
              style={{ background: 'rgba(76,175,125,0.07)' }}
            >
              <svg className="w-3 h-3" style={{ color: 'var(--mb-green)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[9px] font-bold" style={{ color: 'var(--mb-green)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                このペースで目標に間に合います
              </span>
            </div>
          )}
        </div>
      ) : (
        <div
          className="flex items-center justify-center gap-2 py-2 rounded-lg"
          style={{ background: 'rgba(76,175,125,0.1)' }}
        >
          <span className="text-sm">🎉</span>
          <span className="text-[11px] font-bold" style={{ color: 'var(--mb-green)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>全講義完了！目標達成</span>
        </div>
      )}
    </div>
  );
}
