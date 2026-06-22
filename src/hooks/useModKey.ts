'use client';

import { useEffect, useState } from 'react';

export function useModKey() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(
      typeof navigator !== 'undefined' &&
      (navigator.platform.toUpperCase().includes('MAC') || navigator.userAgent.includes('Mac'))
    );
  }, []);

  return {
    isMac,
    symbol: isMac ? '⌘' : 'Ctrl',
    kShortcut: isMac ? '⌘K' : 'Ctrl+K',
    label: isMac ? '⌘K' : 'Ctrl+K',
  };
}
