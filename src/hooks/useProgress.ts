'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'mb_progress_v1';

interface ProgressStore {
  completedLessons: string[];    // "courseId/lessonId"
  lastViewedLesson: string | null;  // "courseId/lessonId"
  streakDays: number;
  bestStreak: number;
  lastActiveDate: string | null;   // ISO date string YYYY-MM-DD
  activeDates: string[];            // sorted array of YYYY-MM-DD dates with activity
  lessonCompletionDates: Record<string, string>; // "courseId/lessonId" -> "YYYY-MM-DD"
}

const defaultStore: ProgressStore = {
  completedLessons: [],
  lastViewedLesson: null,
  streakDays: 1,
  bestStreak: 1,
  lastActiveDate: null,
  activeDates: [],
  lessonCompletionDates: {},
};

function load(): ProgressStore {
  if (typeof window === 'undefined') return defaultStore;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultStore, ...JSON.parse(raw) } : defaultStore;
  } catch {
    return defaultStore;
  }
}

function save(store: ProgressStore) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {}
}

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function isoWeekKey(date: Date): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const wk = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(wk).padStart(2, '0')}`;
}

export function useProgress() {
  const [store, setStore] = useState<ProgressStore>(defaultStore);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const s = load();
    if (!s.activeDates) s.activeDates = [];
    const today = todayStr();
    // streak update
    if (!s.bestStreak) s.bestStreak = s.streakDays ?? 1;
    if (s.lastActiveDate && s.lastActiveDate !== today) {
      const diff = Math.round(
        (new Date(today).getTime() - new Date(s.lastActiveDate).getTime()) / 86400000
      );
      s.streakDays = diff === 1 ? s.streakDays + 1 : 1;
    }
    if (s.streakDays > s.bestStreak) s.bestStreak = s.streakDays;
    s.lastActiveDate = today;
    if (!s.activeDates.includes(today)) {
      s.activeDates = [...s.activeDates, today].slice(-90); // keep 90 days max
    }
    save(s);
    setStore(s);
    setMounted(true);
  }, []);

  const completeLesson = useCallback((courseId: string, lessonId: string) => {
    setStore(prev => {
      const key = `${courseId}/${lessonId}`;
      if (prev.completedLessons.includes(key)) return prev;
      const today = todayStr();
      const next: ProgressStore = {
        ...prev,
        completedLessons: [...prev.completedLessons, key],
        lastViewedLesson: key,
        lastActiveDate: today,
        lessonCompletionDates: {
          ...(prev.lessonCompletionDates ?? {}),
          [key]: today,
        },
      };
      save(next);
      return next;
    });
  }, []);

  const uncompleteLesson = useCallback((courseId: string, lessonId: string) => {
    setStore(prev => {
      const key = `${courseId}/${lessonId}`;
      if (!prev.completedLessons.includes(key)) return prev;
      const { [key]: _removed, ...remainingDates } = prev.lessonCompletionDates ?? {};
      const next: ProgressStore = {
        ...prev,
        completedLessons: prev.completedLessons.filter(k => k !== key),
        lessonCompletionDates: remainingDates,
      };
      save(next);
      return next;
    });
  }, []);

  const viewLesson = useCallback((courseId: string, lessonId: string) => {
    setStore(prev => {
      const next: ProgressStore = { ...prev, lastViewedLesson: `${courseId}/${lessonId}`, lastActiveDate: todayStr() };
      save(next);
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (courseId: string, lessonId: string) =>
      store.completedLessons.includes(`${courseId}/${lessonId}`),
    [store.completedLessons]
  );

  const completedCount = store.completedLessons.length;
  const streakDays = store.streakDays;
  const bestStreak = store.bestStreak ?? store.streakDays;
  const lastViewedLesson = store.lastViewedLesson;
  const activeDates = store.activeDates ?? [];

  const thisWeek = isoWeekKey(new Date());
  const lessonCompletionDates = store.lessonCompletionDates ?? {};
  const weeklyCompletedCount = Object.values(lessonCompletionDates).filter(
    d => isoWeekKey(new Date(d + 'T00:00:00')) === thisWeek
  ).length;

  // Per-day lesson count map: "YYYY-MM-DD" -> number
  const dailyLessonCounts: Record<string, number> = {};
  for (const date of Object.values(lessonCompletionDates)) {
    dailyLessonCounts[date] = (dailyLessonCounts[date] ?? 0) + 1;
  }

  const completedLessonKeys = store.completedLessons;

  return { isCompleted, completeLesson, uncompleteLesson, viewLesson, completedCount, streakDays, bestStreak, lastViewedLesson, activeDates, weeklyCompletedCount, dailyLessonCounts, lessonCompletionDates, completedLessonKeys, mounted };
}
