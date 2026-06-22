'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'mb_stamps_v1';
const SEED = 4649;

export interface StampEntry {
  date: string;
  at: string;
}

interface StampStore {
  stamps: StampEntry[];
  usedDates: string[];
}

const defaultStore: StampStore = { stamps: [], usedDates: [] };

function localDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function load(): StampStore {
  if (typeof window === 'undefined') return defaultStore;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultStore, ...JSON.parse(raw) } : defaultStore;
  } catch {
    return defaultStore;
  }
}

function save(store: StampStore) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {}
}

export function generateDailyCode(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const code = (y * 1231 + m * 31 + d + SEED) % 10000;
  return String(code).padStart(4, '0');
}

export type StampResult = 'ok' | 'wrong_code' | 'already_used';

export function useStamps() {
  const [store, setStore] = useState<StampStore>(defaultStore);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setStore(load());
    setMounted(true);
  }, []);

  const addStamp = useCallback((code: string): StampResult => {
    const today = localDateStr(new Date());
    if (code !== generateDailyCode(today)) return 'wrong_code';

    const current = load();
    if (current.usedDates.includes(today)) return 'already_used';

    const next: StampStore = {
      stamps: [...current.stamps, { date: today, at: new Date().toISOString() }],
      usedDates: [...current.usedDates, today],
    };
    save(next);
    setStore(next);
    return 'ok';
  }, []);

  const totalStamps = store.stamps.length;
  const todayUsed = mounted && store.usedDates.includes(localDateStr(new Date()));

  const lastStamp = store.stamps.at(-1);
  const expiryDate = lastStamp
    ? (() => {
        const d = new Date(lastStamp.date + 'T00:00:00');
        d.setFullYear(d.getFullYear() + 1);
        return localDateStr(d);
      })()
    : null;

  return { stamps: store.stamps, totalStamps, todayUsed, expiryDate, addStamp, mounted };
}
