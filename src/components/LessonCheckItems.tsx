'use client';

import { useState } from 'react';
import type { Lesson } from '@/types';

interface Props {
  lesson: Lesson;
  isOpen: boolean;
  onClose: () => void;
  onAllChecked: (allChecked: boolean) => void;
}

export default function LessonCheckItems({ lesson, isOpen, onClose, onAllChecked }: Props) {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const checkItems = lesson.checkItems || [];
  const allChecked = checkItems.length > 0 && checkItems.every((_, idx) => checkedItems[idx]);

  const handleCheck = (idx: number) => {
    const updated = { ...checkedItems, [idx]: !checkedItems[idx] };
    setCheckedItems(updated);
    const newAllChecked = checkItems.every((_, i) => updated[i]);
    onAllChecked(newAllChecked);
  };

  if (!isOpen || checkItems.length === 0) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-x-4 bottom-20 z-40 rounded-2xl overflow-hidden flex flex-col"
        style={{
          background: 'var(--mb-dark)',
          border: '2px solid var(--mb-gold)',
          maxHeight: '60vh',
        }}
      >
        {/* Header */}
        <div className="px-4 py-3 flex items-center justify-between border-b" style={{ borderColor: 'var(--mb-gold)' }}>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '18px' }}>✓</span>
            <span className="font-bold text-white" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              このレッスンのポイント
            </span>
          </div>
          <span
            className="text-sm font-bold px-2 py-1 rounded-full"
            style={{
              background: 'rgba(245,200,66,0.2)',
              color: 'var(--mb-gold)',
              fontFamily: "'Dela Gothic One', sans-serif",
            }}
          >
            {Object.values(checkedItems).filter(Boolean).length}/{checkItems.length}
          </span>
        </div>

        {/* Items */}
        <div className="overflow-y-auto flex-1 px-4 py-3 space-y-2">
          {checkItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleCheck(idx)}
              className="flex items-start gap-3 w-full p-3 rounded-lg transition-colors hover:bg-white/5 text-left"
              style={{
                background: checkedItems[idx] ? 'rgba(76,175,125,0.15)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${checkedItems[idx] ? 'rgba(76,175,125,0.3)' : 'rgba(255,255,255,0.1)'}`,
              }}
            >
              {/* Checkbox */}
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: checkedItems[idx] ? 'var(--mb-green)' : 'rgba(255,255,255,0.2)',
                  border: checkedItems[idx] ? 'none' : '1px solid rgba(255,255,255,0.3)',
                }}
              >
                {checkedItems[idx] && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>

              {/* Text */}
              <span
                className="text-sm leading-snug"
                style={{
                  color: checkedItems[idx] ? 'rgba(76,175,125,0.8)' : 'rgba(255,255,255,0.7)',
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                  textDecoration: checkedItems[idx] ? 'line-through' : 'none',
                }}
              >
                {item}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        {allChecked && (
          <div className="px-4 py-3 border-t" style={{ borderColor: 'var(--mb-gold)', background: 'rgba(76,175,125,0.08)' }}>
            <div className="text-xs text-center" style={{ color: 'var(--mb-green)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              ✓ 全てのポイントを確認しました。下の「講義完了」ボタンを押してください。
            </div>
          </div>
        )}
      </div>
    </>
  );
}
