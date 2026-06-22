'use client';

import { useEffect, useRef, useState } from 'react';
import type { LessonSection } from '@/types';

interface Props {
  sections: LessonSection[];
  alwaysOpen?: boolean;
}

function makeSlug(content: string) {
  return content.replace(/\s+/g, '-').replace(/[^\w　-鿿-]/g, '');
}

export default function LessonTOC({ sections, alwaysOpen }: Props) {
  const headings = sections
    .filter((s): s is Extract<LessonSection, { type: 'heading' }> => s.type === 'heading' && s.level === 2)
    .map(s => ({ slug: makeSlug(s.content), label: s.content }));

  const [open, setOpen] = useState(!!alwaysOpen || headings.length <= 3);
  const [activeSlug, setActiveSlug] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!open || headings.length === 0) return;

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    headings.forEach(({ slug }) => {
      const el = document.getElementById(slug);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [open, headings.length]); // eslint-disable-line react-hooks/exhaustive-deps

  if (headings.length < 2) return null;

  if (alwaysOpen) {
    return (
      <ol className="space-y-1">
        {headings.map(({ slug, label }, i) => {
          const isActive = activeSlug === slug;
          return (
            <li key={slug}>
              <a
                href={`#${slug}`}
                onClick={e => {
                  e.preventDefault();
                  document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setActiveSlug(slug);
                }}
                className="flex items-center gap-2 py-1.5 px-2 rounded-lg transition-all w-full"
                style={{
                  background: isActive ? 'rgba(245,200,66,0.12)' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 transition-all"
                  style={{
                    background: isActive ? 'var(--mb-gold)' : 'rgba(26,26,46,0.07)',
                    color: isActive ? 'var(--mb-dark)' : 'rgba(26,26,46,0.4)',
                    fontFamily: "'Dela Gothic One', sans-serif",
                  }}
                >
                  {i + 1}
                </span>
                <span
                  className="text-[11px] leading-snug flex-1"
                  style={{
                    color: isActive ? 'var(--mb-dark)' : 'rgba(26,26,46,0.6)',
                    fontWeight: isActive ? 700 : 400,
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                  }}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <div
      className="mb-6 rounded-xl border-2 overflow-hidden"
      style={{ borderColor: open ? 'var(--mb-dark)' : 'rgba(26,26,46,0.15)', transition: 'border-color 0.2s' }}
    >
      <button type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-2 px-4 py-2.5 text-left"
        style={{ background: open ? 'var(--mb-dark)' : 'rgba(26,26,46,0.03)' }}
      >
        <svg
          className="w-3.5 h-3.5 shrink-0 transition-transform duration-200"
          style={{ color: open ? 'var(--mb-gold)' : 'rgba(26,26,46,0.4)', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span
          className="text-xs font-bold tracking-[2px]"
          style={{ color: open ? 'var(--mb-gold)' : 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          目次
        </span>
        <span
          className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full"
          style={{
            background: open ? 'rgba(245,200,66,0.15)' : 'rgba(26,26,46,0.06)',
            color: open ? 'var(--mb-gold)' : 'rgba(26,26,46,0.35)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          {headings.length}セクション
        </span>
      </button>

      {open && (
        <ol className="bg-white px-4 py-3 space-y-1">
          {headings.map(({ slug, label }, i) => {
            const isActive = activeSlug === slug;
            return (
              <li key={slug}>
                <a
                  href={`#${slug}`}
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveSlug(slug);
                  }}
                  className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg transition-all text-left w-full"
                  style={{
                    background: isActive ? 'rgba(245,200,66,0.12)' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-all"
                    style={{
                      background: isActive ? 'var(--mb-gold)' : 'rgba(26,26,46,0.06)',
                      color: isActive ? 'var(--mb-dark)' : 'rgba(26,26,46,0.4)',
                      fontFamily: "'Dela Gothic One', sans-serif",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-xs leading-snug flex-1"
                    style={{
                      color: isActive ? 'var(--mb-dark)' : 'rgba(26,26,46,0.65)',
                      fontWeight: isActive ? 700 : 500,
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                    }}
                  >
                    {label}
                  </span>
                  {isActive && (
                    <svg className="w-3 h-3 shrink-0" style={{ color: 'var(--mb-gold)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </a>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
