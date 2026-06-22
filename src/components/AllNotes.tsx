'use client';

import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { categories } from '@/data/courses';
import ExportNotes from './ExportNotes';

interface NoteEntry {
  courseId: string;
  lessonId: string;
  courseTitle: string;
  lessonTitle: string;
  text: string;
}

export default function AllNotes() {
  const [notes, setNotes] = useState<NoteEntry[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [courseFilter, setCourseFilter] = useState<string>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [deletingKey, setDeletingKey] = useState<string | null>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const deleteTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const deleteNote = (key: string, courseId: string, lessonId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (deletingKey === key) {
      if (deleteTimeoutRef.current) clearTimeout(deleteTimeoutRef.current);
      localStorage.removeItem(`mb_note_${courseId}_${lessonId}`);
      setNotes(prev => prev.filter(n => !(n.courseId === courseId && n.lessonId === lessonId)));
      setExpanded(null);
      setDeletingKey(null);
    } else {
      if (deleteTimeoutRef.current) clearTimeout(deleteTimeoutRef.current);
      setDeletingKey(key);
      deleteTimeoutRef.current = setTimeout(() => setDeletingKey(dk => dk === key ? null : dk), 2500);
    }
  };

  const copyNote = (key: string, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      setCopiedKey(key);
      copyTimeoutRef.current = setTimeout(() => setCopiedKey(null), 1500);
    }).catch(() => {});
  };

  useEffect(() => {
    const found: NoteEntry[] = [];
    categories.forEach(cat =>
      cat.courses.forEach(course =>
        course.lessons.forEach(lesson => {
          const text = localStorage.getItem(`mb_note_${course.id}_${lesson.id}`)?.trim();
          if (text) found.push({ courseId: course.id, lessonId: lesson.id, courseTitle: course.title, lessonTitle: lesson.title, text });
        })
      )
    );
    setNotes(found);
    setMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      if (deleteTimeoutRef.current) clearTimeout(deleteTimeoutRef.current);
    };
  }, []);

  const uniqueCourses = useMemo(() => {
    const seen = new Map<string, string>();
    const countMap: Record<string, number> = {};
    notes.forEach(n => {
      seen.set(n.courseId, n.courseTitle);
      countMap[n.courseId] = (countMap[n.courseId] ?? 0) + 1;
    });
    return Array.from(seen.entries()).map(([id, title]) => ({ id, title, count: countMap[id] ?? 0 }));
  }, [notes]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return notes.filter(n => {
      if (courseFilter !== 'all' && n.courseId !== courseFilter) return false;
      if (!q) return true;
      return n.lessonTitle.toLowerCase().includes(q) || n.courseTitle.toLowerCase().includes(q) || n.text.toLowerCase().includes(q);
    });
  }, [notes, query, courseFilter]);

  if (!mounted || notes.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold flex items-center gap-2" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
          <span>📝</span> マイメモ一覧
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(26,26,46,0.08)', color: 'rgba(26,26,46,0.6)' }}>
            {(query || courseFilter !== 'all') ? `${filtered.length}/${notes.length}件` : `${notes.length}件`}
          </span>
        </h2>
        <ExportNotes />
      </div>

      {/* Search + filter row */}
      <div className="flex flex-col gap-2 mb-3">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: 'rgba(26,26,46,0.35)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="メモを検索…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full text-xs rounded-lg border-2 pl-8 pr-3 py-2 outline-none transition-colors"
            style={{
              borderColor: query ? 'var(--mb-dark)' : 'rgba(26,26,46,0.15)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
              color: 'var(--mb-dark)',
              background: 'white',
            }}
          />
          {query && (
            <button type="button"
              onClick={() => setQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold"
              style={{ color: 'rgba(26,26,46,0.4)' }}
            >
              ✕
            </button>
          )}
        </div>
        {uniqueCourses.length > 1 && (
          <div className="flex gap-1.5 flex-wrap">
            <button type="button"
              onClick={() => setCourseFilter('all')}
              className="text-[9px] font-bold px-2.5 py-1 rounded-full border transition-all"
              style={{
                background: courseFilter === 'all' ? 'var(--mb-dark)' : 'transparent',
                borderColor: courseFilter === 'all' ? 'var(--mb-dark)' : 'rgba(26,26,46,0.2)',
                color: courseFilter === 'all' ? 'var(--mb-gold)' : 'rgba(26,26,46,0.5)',
                fontFamily: "'Zen Maru Gothic', sans-serif",
              }}
            >
              すべて
            </button>
            {uniqueCourses.map(({ id, title, count }) => (
              <button type="button"
                key={id}
                onClick={() => setCourseFilter(courseFilter === id ? 'all' : id)}
                className="text-[9px] font-bold px-2.5 py-1 rounded-full border transition-all flex items-center gap-1"
                style={{
                  background: courseFilter === id ? 'var(--mb-dark)' : 'transparent',
                  borderColor: courseFilter === id ? 'var(--mb-dark)' : 'rgba(26,26,46,0.2)',
                  color: courseFilter === id ? 'var(--mb-gold)' : 'rgba(26,26,46,0.5)',
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                }}
              >
                <span className="truncate max-w-[100px]">{title}</span>
                <span className="text-[8px] opacity-60 shrink-0">({count})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="text-xs text-center py-4" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          条件に一致するメモが見つかりません
        </p>
      ) : (
        <div className="space-y-2">
          {filtered.map(({ courseId, lessonId, courseTitle, lessonTitle, text }) => {
            const key = `${courseId}/${lessonId}`;
            const isOpen = expanded === key;
            const q = query.toLowerCase().trim();
            const highlight = (str: string) => {
              if (!q) return str;
              const lower = str.toLowerCase();
              const firstIdx = lower.indexOf(q);
              if (firstIdx === -1) return str;
              const parts: React.ReactNode[] = [];
              let last = 0;
              let idx = firstIdx;
              while (idx !== -1) {
                if (idx > last) parts.push(str.slice(last, idx));
                parts.push(<mark key={idx} style={{ background: 'rgba(245,200,66,0.35)', borderRadius: '2px' }}>{str.slice(idx, idx + q.length)}</mark>);
                last = idx + q.length;
                idx = lower.indexOf(q, last);
              }
              if (last < str.length) parts.push(str.slice(last));
              return <>{parts}</>;
            };
            return (
              <div
                key={key}
                className="rounded-xl border-2 overflow-hidden"
                style={{ borderColor: isOpen ? 'var(--mb-dark)' : 'rgba(26,26,46,0.12)', background: 'white' }}
              >
                <button type="button"
                  onClick={() => setExpanded(isOpen ? null : key)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left"
                >
                  <span className="text-base shrink-0">📝</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                      {highlight(lessonTitle)}
                    </div>
                    <div className="text-[10px] truncate" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                      {highlight(courseTitle)}
                    </div>
                    {!isOpen && (
                      <div className="text-[9px] truncate mt-0.5" style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                        {text.slice(0, 40)}{text.length > 40 ? '…' : ''}
                      </div>
                    )}
                  </div>
                  <span className="text-xs shrink-0" style={{ color: 'rgba(26,26,46,0.3)' }}>{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 border-t" style={{ borderColor: 'rgba(26,26,46,0.08)' }}>
                    <p className="text-xs leading-relaxed mt-3 mb-3 whitespace-pre-wrap" style={{ color: 'rgba(26,26,46,0.7)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                      {highlight(text)}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/courses/${courseId}/lessons/${lessonId}`}
                        className="text-[10px] font-bold hover:underline"
                        style={{ color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        講義を見る →
                      </Link>
                      <div className="flex items-center gap-1.5">
                        <button type="button"
                          onClick={(e) => deleteNote(key, courseId, lessonId, e)}
                          className="text-[9px] font-bold px-2 py-1 rounded-lg transition-all"
                          style={{
                            background: deletingKey === key ? 'rgba(232,53,74,0.1)' : 'rgba(26,26,46,0.06)',
                            color: deletingKey === key ? 'var(--mb-red)' : 'rgba(26,26,46,0.3)',
                            fontFamily: "'Zen Maru Gothic', sans-serif",
                          }}
                        >
                          {deletingKey === key ? '本当に削除？' : '削除'}
                        </button>
                        <button type="button"
                          onClick={(e) => copyNote(key, text, e)}
                          className="text-[9px] font-bold px-2 py-1 rounded-lg transition-all"
                          style={{
                            background: copiedKey === key ? 'rgba(76,175,125,0.12)' : 'rgba(26,26,46,0.06)',
                            color: copiedKey === key ? 'var(--mb-green)' : 'rgba(26,26,46,0.4)',
                            fontFamily: "'Zen Maru Gothic', sans-serif",
                          }}
                        >
                          {copiedKey === key ? '✓ コピー済' : 'コピー'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
