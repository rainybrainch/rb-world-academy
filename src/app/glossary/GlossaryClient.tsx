'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';

interface GlossaryEntry {
  term: string;
  definition: string;
  lessonTitle: string;
  courseId: string;
  lessonId: string;
  categoryTitle: string;
}

interface Props {
  entries: GlossaryEntry[];
}

export default function GlossaryClient({ entries }: Props) {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [copiedTerm, setCopiedTerm] = useState<string | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function copyTerm(term: string, definition: string, e: React.MouseEvent) {
    e.stopPropagation();
    navigator.clipboard.writeText(`${term}\n${definition}`).then(() => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      setCopiedTerm(term);
      copyTimerRef.current = setTimeout(() => setCopiedTerm(null), 1500);
    }).catch(() => {});
  }

  const categories = useMemo(() => {
    const seen = new Set<string>();
    const catList = entries.map(e => e.categoryTitle).filter(c => { if (seen.has(c)) return false; seen.add(c); return true; });
    const countMap: Record<string, number> = {};
    for (const e of entries) countMap[e.categoryTitle] = (countMap[e.categoryTitle] ?? 0) + 1;
    return catList.map(c => ({ name: c, count: countMap[c] ?? 0 }));
  }, [entries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter(e => {
      if (activeCategory && e.categoryTitle !== activeCategory) return false;
      if (!q) return true;
      return (
        e.term.toLowerCase().includes(q) ||
        e.definition.toLowerCase().includes(q) ||
        e.lessonTitle.toLowerCase().includes(q)
      );
    });
  }, [entries, query, activeCategory]);

  const q = query.trim().toLowerCase();
  function highlight(str: string) {
    if (!q) return str;
    const lower = str.toLowerCase();
    const firstIdx = lower.indexOf(q);
    if (firstIdx === -1) return str;
    const parts: React.ReactNode[] = [];
    let last = 0;
    let idx = firstIdx;
    while (idx !== -1) {
      if (idx > last) parts.push(str.slice(last, idx));
      parts.push(<mark key={idx} style={{ background: 'rgba(245,200,66,0.4)', borderRadius: '2px' }}>{str.slice(idx, idx + q.length)}</mark>);
      last = idx + q.length;
      idx = lower.indexOf(q, last);
    }
    if (last < str.length) parts.push(str.slice(last));
    return <>{parts}</>;
  }

  // Group by first character
  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryEntry[]>();
    for (const e of filtered) {
      const key = e.term.charAt(0).toUpperCase();
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(e);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b, 'ja'));
  }, [filtered]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div
          className="inline-block text-[10px] font-bold tracking-[4px] px-3 py-1 rounded mb-3"
          style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          GLOSSARY
        </div>
        <h1 className="text-2xl" style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}>
          用語集
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          全{entries.length}用語 — 講義で登場したキーワードを一覧で確認
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: 'rgba(26,26,46,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Escape' && setQuery('')}
          placeholder="用語・説明を検索…"
          className="w-full pl-9 pr-9 py-2.5 rounded-xl border-2 text-sm outline-none transition-all"
          style={{
            borderColor: query ? 'var(--mb-dark)' : 'rgba(26,26,46,0.15)',
            background: 'white',
            color: 'var(--mb-dark)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
            boxShadow: query ? '2px 2px 0 var(--mb-gold)' : 'none',
          }}
        />
        {query && (
          <button type="button" onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'rgba(26,26,46,0.35)' }}>✕</button>
        )}
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button type="button"
          onClick={() => setActiveCategory(null)}
          className="px-3 py-1 rounded-full text-[11px] font-bold border-2 transition-all"
          style={{
            background: activeCategory === null ? 'var(--mb-dark)' : 'transparent',
            borderColor: activeCategory === null ? 'var(--mb-dark)' : 'rgba(26,26,46,0.15)',
            color: activeCategory === null ? 'var(--mb-gold)' : 'rgba(26,26,46,0.45)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          すべて
        </button>
        {categories.map(({ name, count }) => (
          <button type="button"
            key={name}
            onClick={() => setActiveCategory(activeCategory === name ? null : name)}
            className="px-3 py-1 rounded-full text-[11px] font-bold border-2 transition-all flex items-center gap-1"
            style={{
              background: activeCategory === name ? 'var(--mb-dark)' : 'transparent',
              borderColor: activeCategory === name ? 'var(--mb-dark)' : 'rgba(26,26,46,0.15)',
              color: activeCategory === name ? 'var(--mb-gold)' : 'rgba(26,26,46,0.45)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            {name}
            <span className="text-[9px] opacity-70">({count})</span>
          </button>
        ))}
      </div>

      {/* Results count when filtering */}
      {(query || activeCategory) && (
        <p className="text-xs mb-4" style={{ color: 'rgba(26,26,46,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {query && `「${query}」`}{query && activeCategory && ' × '}{activeCategory && `${activeCategory}`}の検索結果：{filtered.length}件
        </p>
      )}

      {/* Grouped list */}
      {grouped.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-3xl mb-3">🔍</div>
          <p className="text-sm" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            「{query}」に一致する用語が見つかりませんでした
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {grouped.map(([letter, items]) => (
            <div key={letter}>
              {/* Section letter */}
              <div
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold mb-3"
                style={{
                  background: 'var(--mb-dark)',
                  color: 'var(--mb-gold)',
                  fontFamily: "'Dela Gothic One', sans-serif",
                }}
              >
                {letter}
              </div>
              <div className="space-y-2">
                {items.map(entry => {
                  const isOpen = expanded === entry.term;
                  return (
                    <div
                      key={entry.term}
                      className="rounded-xl border-2 overflow-hidden transition-all"
                      style={{
                        borderColor: isOpen ? 'var(--mb-dark)' : 'rgba(26,26,46,0.12)',
                        background: 'white',
                        boxShadow: isOpen ? '3px 3px 0 var(--mb-gold)' : 'none',
                      }}
                    >
                      <button type="button"
                        onClick={() => setExpanded(isOpen ? null : entry.term)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left"
                      >
                        <span
                          className="text-sm font-bold"
                          style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          {highlight(entry.term)}
                        </span>
                        <svg
                          className="w-4 h-4 shrink-0 ml-2 transition-transform"
                          style={{
                            color: 'rgba(26,26,46,0.4)',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isOpen && (
                        <div
                          className="px-4 pb-4"
                          style={{ borderTop: '1px solid rgba(26,26,46,0.08)', paddingTop: '12px' }}
                        >
                          <p
                            className="text-sm leading-relaxed mb-3"
                            style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                          >
                            {highlight(entry.definition)}
                          </p>
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/courses/${entry.courseId}/lessons/${entry.lessonId}`}
                              className="inline-flex items-center gap-1 text-[10px] font-bold hover:underline"
                              style={{ color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                            >
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                              {highlight(entry.lessonTitle)} で学ぶ
                            </Link>
                            <button type="button"
                              onClick={(e) => copyTerm(entry.term, entry.definition, e)}
                              className="text-[9px] font-bold px-2 py-1 rounded-lg transition-all"
                              style={{
                                background: copiedTerm === entry.term ? 'rgba(76,175,125,0.12)' : 'rgba(26,26,46,0.06)',
                                color: copiedTerm === entry.term ? 'var(--mb-green)' : 'rgba(26,26,46,0.4)',
                                fontFamily: "'Zen Maru Gothic', sans-serif",
                              }}
                            >
                              {copiedTerm === entry.term ? '✓ コピー済' : 'コピー'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
