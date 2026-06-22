'use client';

import { useState, useEffect, useCallback } from 'react';

const KEY = 'mb_my_courses';

export function useMyCourses() {
  const [myCourses, setMyCourses] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      setMyCourses(raw ? JSON.parse(raw) : []);
    } catch {
      setMyCourses([]);
    }
    setMounted(true);
  }, []);

  const isSelected = useCallback((courseId: string) => myCourses.includes(courseId), [myCourses]);

  const toggle = useCallback((courseId: string) => {
    setMyCourses(prev => {
      const next = prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const add = useCallback((courseId: string) => {
    setMyCourses(prev => {
      if (prev.includes(courseId)) return prev;
      const next = [...prev, courseId];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const remove = useCallback((courseId: string) => {
    setMyCourses(prev => {
      const next = prev.filter(id => id !== courseId);
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { myCourses, isSelected, toggle, add, remove, mounted };
}
