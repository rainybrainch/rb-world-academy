'use client';

import { useEffect, useRef, useState } from 'react';
import { categories } from '@/data/courses';

export default function ExportNotes() {
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let n = 0;
    categories.forEach(cat =>
      cat.courses.forEach(course =>
        course.lessons.forEach(lesson => {
          if (localStorage.getItem(`mb_note_${course.id}_${lesson.id}`)?.trim()) n++;
        })
      )
    );
    setCount(n);
    setMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
    };
  }, []);

  if (!mounted || count === 0) return null;

  async function exportMarkdown() {
    const lines: string[] = [`# マネぼうアカデミー — マイメモ`, `エクスポート日: ${new Date().toLocaleDateString('ja-JP')}`, ''];
    categories.forEach(cat => {
      let catHeader = false;
      cat.courses.forEach(course => {
        let courseHeader = false;
        course.lessons.forEach(lesson => {
          const text = localStorage.getItem(`mb_note_${course.id}_${lesson.id}`)?.trim();
          if (!text) return;
          if (!catHeader) { lines.push(`## ${cat.title}`, ''); catHeader = true; }
          if (!courseHeader) { lines.push(`### ${course.title}`, ''); courseHeader = true; }
          lines.push(`#### ${lesson.title}`, '', text, '');
        });
      });
    });
    await navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
    copiedTimeoutRef.current = setTimeout(() => setCopied(false), 2500);
  }

  return (
    <button type="button"
      onClick={exportMarkdown}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 text-xs font-bold transition-all hover:opacity-80"
      style={{
        borderColor: copied ? 'var(--mb-green)' : 'rgba(26,26,46,0.2)',
        color: copied ? 'var(--mb-green)' : 'rgba(26,26,46,0.6)',
        background: copied ? 'rgba(76,175,125,0.08)' : 'transparent',
        fontFamily: "'Zen Maru Gothic', sans-serif",
      }}
    >
      {copied ? (
        <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>コピー完了！</>
      ) : (
        <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>全メモをMarkdownでエクスポート ({count}件)</>
      )}
    </button>
  );
}
