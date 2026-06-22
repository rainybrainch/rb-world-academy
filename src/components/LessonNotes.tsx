'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  courseId: string;
  lessonId: string;
}

const KEY = (courseId: string, lessonId: string) => `mb_note_${courseId}_${lessonId}`;

export default function LessonNotes({ courseId, lessonId }: Props) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copiedTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function autoResize(el: HTMLTextAreaElement) {
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }

  useEffect(() => {
    const stored = localStorage.getItem(KEY(courseId, lessonId)) ?? '';
    setText(stored);
  }, [courseId, lessonId]);

  useEffect(() => {
    if (open && textareaRef.current) {
      textareaRef.current.focus();
      autoResize(textareaRef.current);
    }
  }, [open]);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
      if (savedTimeout.current) clearTimeout(savedTimeout.current);
      if (copiedTimeout.current) clearTimeout(copiedTimeout.current);
    };
  }, []);

  function handleChange(val: string) {
    setText(val);
    if (textareaRef.current) autoResize(textareaRef.current);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      localStorage.setItem(KEY(courseId, lessonId), val);
      setSaved(true);
      if (savedTimeout.current) clearTimeout(savedTimeout.current);
      savedTimeout.current = setTimeout(() => setSaved(false), 1500);
    }, 600);
  }

  const hasNote = text.trim().length > 0;

  return (
    <div className="mt-8 mb-4">
      <button type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 text-xs font-bold transition-all hover:opacity-70"
        style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        {hasNote ? '📝 メモあり' : 'メモを取る'}
        <span style={{ color: 'rgba(26,26,46,0.3)' }}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div
          className="mt-3 rounded-xl border-2 overflow-hidden"
          style={{ borderColor: 'rgba(26,26,46,0.15)', boxShadow: '2px 2px 0 rgba(26,26,46,0.08)' }}
        >
          <div
            className="flex items-center justify-between px-3 py-2 border-b"
            style={{ background: 'rgba(26,26,46,0.03)', borderColor: 'rgba(26,26,46,0.08)' }}
          >
            <span className="text-[10px] font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              マイメモ
            </span>
            <div className="flex items-center gap-2">
              {copied && (
                <span className="text-[10px]" style={{ color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  ✓ コピー済み
                </span>
              )}
              {!copied && saved && (
                <span className="text-[10px]" style={{ color: 'var(--mb-green)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  ✓ 保存済み
                </span>
              )}
              {text.trim() && (
                <button type="button"
                  onClick={async () => {
                    await navigator.clipboard.writeText(text);
                    setCopied(true);
                    if (copiedTimeout.current) clearTimeout(copiedTimeout.current);
                    copiedTimeout.current = setTimeout(() => setCopied(false), 1500);
                  }}
                  className="text-[10px] font-bold hover:opacity-70 transition-opacity"
                  style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  title="クリップボードにコピー"
                >
                  📋 コピー
                </button>
              )}
            </div>
          </div>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={e => handleChange(e.target.value)}
            placeholder="気づいたこと、疑問、感想などを自由に…"
            rows={4}
            className="w-full resize-none outline-none px-4 py-3 text-sm"
            style={{
              background: 'white',
              color: 'var(--mb-dark)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: '13px',
              overflow: 'hidden',
            }}
            onFocus={e => autoResize(e.currentTarget)}
          />
          {text.length > 0 && (
            <div
              className="px-4 py-1.5 text-right border-t"
              style={{ background: 'rgba(26,26,46,0.02)', borderColor: 'rgba(26,26,46,0.06)' }}
            >
              <span
                className="text-[10px]"
                style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Dela Gothic One', sans-serif" }}
              >
                {text.length}<span style={{ color: 'rgba(26,26,46,0.2)' }}>文字</span>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
