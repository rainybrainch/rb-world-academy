'use client';

import { useEffect, useState } from 'react';

type FontSize = 'sm' | 'md' | 'lg';
const KEY = 'mb_font_size';

export function useFontSize() {
  const [size, setSize] = useState<FontSize>('md');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY) as FontSize | null;
    if (saved && ['sm', 'md', 'lg'].includes(saved)) setSize(saved);
    setMounted(true);
  }, []);

  function cycle() {
    setSize(prev => {
      const next: FontSize = prev === 'sm' ? 'md' : prev === 'md' ? 'lg' : 'sm';
      localStorage.setItem(KEY, next);
      return next;
    });
  }

  const cssSize = size === 'sm' ? '13px' : size === 'lg' ? '17px' : '15px';
  const label = size === 'sm' ? 'A' : size === 'lg' ? 'A' : 'A';
  const labelSize = size === 'sm' ? '10px' : size === 'lg' ? '14px' : '12px';

  return { size, cycle, cssSize, label, labelSize, mounted };
}
