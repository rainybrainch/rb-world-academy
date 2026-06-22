import { categories } from './courses';

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  desc: string;
  check: (completedCount: number, streakDays: number, bestStreak: number, completedLessonKeys: string[]) => boolean;
  progress?: (completedCount: number, streakDays: number, bestStreak: number, completedLessonKeys: string[]) => { current: number; total: number } | null;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_step',
    icon: '🌱',
    title: '最初の一歩',
    desc: '初めての講義を完了',
    check: (c) => c >= 1,
    progress: (c) => ({ current: Math.min(c, 1), total: 1 }),
  },
  {
    id: 'five_lessons',
    icon: '⭐',
    title: '5講義クリア',
    desc: '5講義を完了した',
    check: (c) => c >= 5,
    progress: (c) => ({ current: Math.min(c, 5), total: 5 }),
  },
  {
    id: 'ten_lessons',
    icon: '🌟',
    title: '10講義クリア',
    desc: '10講義を完了した',
    check: (c) => c >= 10,
    progress: (c) => ({ current: Math.min(c, 10), total: 10 }),
  },
  {
    id: 'fifteen_lessons',
    icon: '🔑',
    title: '15講義クリア',
    desc: '15講義を完了した',
    check: (c) => c >= 15,
    progress: (c) => ({ current: Math.min(c, 15), total: 15 }),
  },
  {
    id: 'twenty_lessons',
    icon: '💎',
    title: '20講義クリア',
    desc: '20講義を完了した',
    check: (c) => c >= 20,
    progress: (c) => ({ current: Math.min(c, 20), total: 20 }),
  },
  {
    id: 'three_streak',
    icon: '🔥',
    title: '3日連続学習',
    desc: '3日連続で学習した',
    check: (_, streak) => streak >= 3,
    progress: (_, streak) => ({ current: Math.min(streak, 3), total: 3 }),
  },
  {
    id: 'seven_streak',
    icon: '⚡',
    title: '1週間連続',
    desc: '7日連続で学習した',
    check: (_, streak) => streak >= 7,
    progress: (_, streak) => ({ current: Math.min(streak, 7), total: 7 }),
  },
  {
    id: 'best_streak_7',
    icon: '🏅',
    title: '伝説の学習者',
    desc: '最高連続記録7日以上',
    check: (_, _s, best) => best >= 7,
    progress: (_, _s, best) => ({ current: Math.min(best, 7), total: 7 }),
  },
  {
    id: 'chapter_clear',
    icon: '📗',
    title: '章マスター',
    desc: '1つの章を全講義完了',
    check: (_, _s, _b, keys) => {
      return categories.some(cat =>
        cat.courses.some(course => {
          const available = course.lessons.filter(l => !l.isComingSoon);
          if (available.length === 0) return false;
          return available.every(l => keys.includes(`${course.id}/${l.id}`));
        })
      );
    },
    progress: (_, _s, _b, keys) => {
      let best = { current: 0, total: 1 };
      categories.forEach(cat =>
        cat.courses.forEach(course => {
          const available = course.lessons.filter(l => !l.isComingSoon);
          if (!available.length) return;
          const done = available.filter(l => keys.includes(`${course.id}/${l.id}`)).length;
          if (done / available.length > best.current / best.total) best = { current: done, total: available.length };
        })
      );
      return best;
    },
  },
  {
    id: 'category_clear',
    icon: '🏆',
    title: 'カテゴリ制覇',
    desc: '1つのカテゴリを全講義完了',
    check: (_, _s, _b, keys) => {
      return categories.some(cat => {
        const available = cat.courses.flatMap(c =>
          c.lessons.filter(l => !l.isComingSoon).map(l => `${c.id}/${l.id}`)
        );
        if (available.length === 0) return false;
        return available.every(k => keys.includes(k));
      });
    },
    progress: (_, _s, _b, keys) => {
      let best = { current: 0, total: 1 };
      categories.forEach(cat => {
        const available = cat.courses.flatMap(c =>
          c.lessons.filter(l => !l.isComingSoon).map(l => `${c.id}/${l.id}`)
        );
        if (!available.length) return;
        const done = available.filter(k => keys.includes(k)).length;
        if (done / available.length > best.current / best.total) best = { current: done, total: available.length };
      });
      return best;
    },
  },
  {
    id: 'twenty_five_lessons',
    icon: '🎗️',
    title: '25講義突破',
    desc: '25講義を完了した',
    check: (c) => c >= 25,
    progress: (c) => ({ current: Math.min(c, 25), total: 25 }),
  },
  {
    id: 'thirty_lessons',
    icon: '🎖️',
    title: '30講義の壁',
    desc: '30講義を完了した',
    check: (c) => c >= 30,
    progress: (c) => ({ current: Math.min(c, 30), total: 30 }),
  },
  {
    id: 'fourteen_streak',
    icon: '🌙',
    title: '2週間連続',
    desc: '14日連続で学習した',
    check: (_, streak) => streak >= 14,
    progress: (_, streak) => ({ current: Math.min(streak, 14), total: 14 }),
  },
  {
    id: 'note_taker',
    icon: '📝',
    title: 'メモ魔',
    desc: '5講義以上にメモを残した',
    check: () => {
      try {
        return Object.keys(localStorage).filter(k => k.startsWith('mb_note_') && localStorage.getItem(k)).length >= 5;
      } catch { return false; }
    },
    progress: () => {
      try {
        const count = Object.keys(localStorage).filter(k => k.startsWith('mb_note_') && localStorage.getItem(k)).length;
        return { current: Math.min(count, 5), total: 5 };
      } catch { return null; }
    },
  },
  {
    id: 'fifty_lessons',
    icon: '🥇',
    title: '50講義の頂',
    desc: '50講義を完了した',
    check: (c) => c >= 50,
    progress: (c) => ({ current: Math.min(c, 50), total: 50 }),
  },
  {
    id: 'sixty_lessons',
    icon: '🌊',
    title: '60講義の波',
    desc: '60講義を完了した',
    check: (c) => c >= 60,
    progress: (c) => ({ current: Math.min(c, 60), total: 60 }),
  },
  {
    id: 'seventy_five_lessons',
    icon: '🎯',
    title: '75講義突破',
    desc: '75講義を完了した',
    check: (c) => c >= 75,
    progress: (c) => ({ current: Math.min(c, 75), total: 75 }),
  },
  {
    id: 'thirty_streak',
    icon: '🔮',
    title: '1ヶ月連続',
    desc: '30日連続で学習した',
    check: (_, streak) => streak >= 30,
    progress: (_, streak) => ({ current: Math.min(streak, 30), total: 30 }),
  },
  {
    id: 'like_lover',
    icon: '❤️',
    title: 'いいね魔',
    desc: '5講義以上にいいねした',
    check: () => {
      try {
        return Object.keys(localStorage).filter(k => k.startsWith('mb_like_') && localStorage.getItem(k) === '1').length >= 5;
      } catch { return false; }
    },
    progress: () => {
      try {
        const count = Object.keys(localStorage).filter(k => k.startsWith('mb_like_') && localStorage.getItem(k) === '1').length;
        return { current: Math.min(count, 5), total: 5 };
      } catch { return null; }
    },
  },
  {
    id: 'speed_day',
    icon: '🚀',
    title: '集中学習',
    desc: '1日に3講義以上完了',
    check: () => {
      try {
        const raw = localStorage.getItem('mb_progress_v1');
        const store = raw ? JSON.parse(raw) : null;
        const counts: Record<string, number> = store?.dailyLessonCounts ?? {};
        return Object.values(counts).some((n: number) => n >= 3);
      } catch { return false; }
    },
    progress: () => {
      try {
        const raw = localStorage.getItem('mb_progress_v1');
        const store = raw ? JSON.parse(raw) : null;
        const counts: Record<string, number> = store?.dailyLessonCounts ?? {};
        const max = Math.max(0, ...Object.values(counts));
        return { current: Math.min(max, 3), total: 3 };
      } catch { return null; }
    },
  },
  {
    id: 'check_complete',
    icon: '✅',
    title: 'チェック魔',
    desc: '10講義以上のチェックを全完了',
    check: () => {
      try {
        const count = Object.keys(localStorage).filter(k => {
          if (!k.startsWith('mb_checks_')) return false;
          const val = localStorage.getItem(k);
          if (!val) return false;
          const arr: boolean[] = JSON.parse(val);
          return arr.length > 0 && arr.every(Boolean);
        }).length;
        return count >= 10;
      } catch { return false; }
    },
    progress: () => {
      try {
        const count = Object.keys(localStorage).filter(k => {
          if (!k.startsWith('mb_checks_')) return false;
          const val = localStorage.getItem(k);
          if (!val) return false;
          const arr: boolean[] = JSON.parse(val);
          return arr.length > 0 && arr.every(Boolean);
        }).length;
        return { current: Math.min(count, 10), total: 10 };
      } catch { return null; }
    },
  },
  {
    id: 'best_streak_30',
    icon: '🌈',
    title: '伝説の30日',
    desc: '最高連続記録30日以上',
    check: (_, _s, best) => best >= 30,
    progress: (_, _s, best) => ({ current: Math.min(best, 30), total: 30 }),
  },
  {
    id: 'weekly_perfect',
    icon: '🗓️',
    title: '週間パーフェクト',
    desc: '1週間連続で毎日学習',
    check: () => {
      try {
        const raw = localStorage.getItem('mb_progress_v1');
        const store = raw ? JSON.parse(raw) : null;
        const counts: Record<string, number> = store?.dailyLessonCounts ?? {};
        const dates = Object.keys(counts).filter(d => (counts[d] ?? 0) > 0).sort();
        if (dates.length < 7) return false;
        for (let i = 0; i <= dates.length - 7; i++) {
          let consecutive = true;
          for (let j = 1; j < 7; j++) {
            const a = new Date(dates[i + j - 1] + 'T00:00:00');
            const b = new Date(dates[i + j] + 'T00:00:00');
            if (Math.round((b.getTime() - a.getTime()) / 86400000) !== 1) { consecutive = false; break; }
          }
          if (consecutive) return true;
        }
        return false;
      } catch { return false; }
    },
    progress: (_, streak) => ({ current: Math.min(streak, 7), total: 7 }),
  },
  {
    id: 'hundred_lessons',
    icon: '💯',
    title: '100講義の奇跡',
    desc: '100講義を完了した',
    check: (c) => c >= 100,
    progress: (c) => ({ current: Math.min(c, 100), total: 100 }),
  },
  {
    id: 'note_taker_10',
    icon: '📓',
    title: 'メモの達人',
    desc: '10講義以上にメモを残した',
    check: () => {
      try {
        return Object.keys(localStorage).filter(k => k.startsWith('mb_note_') && localStorage.getItem(k)).length >= 10;
      } catch { return false; }
    },
    progress: () => {
      try {
        const count = Object.keys(localStorage).filter(k => k.startsWith('mb_note_') && localStorage.getItem(k)).length;
        return { current: Math.min(count, 10), total: 10 };
      } catch { return null; }
    },
  },
  {
    id: 'like_lover_10',
    icon: '💖',
    title: 'いいね上手',
    desc: '10講義以上にいいねした',
    check: () => {
      try {
        return Object.keys(localStorage).filter(k => k.startsWith('mb_like_') && localStorage.getItem(k) === '1').length >= 10;
      } catch { return false; }
    },
    progress: () => {
      try {
        const count = Object.keys(localStorage).filter(k => k.startsWith('mb_like_') && localStorage.getItem(k) === '1').length;
        return { current: Math.min(count, 10), total: 10 };
      } catch { return null; }
    },
  },
  {
    id: 'super_speed',
    icon: '🌩️',
    title: '超集中学習',
    desc: '1日に5講義以上完了',
    check: () => {
      try {
        const raw = localStorage.getItem('mb_progress_v1');
        const store = raw ? JSON.parse(raw) : null;
        const counts: Record<string, number> = store?.dailyLessonCounts ?? {};
        return Object.values(counts).some((n: number) => n >= 5);
      } catch { return false; }
    },
    progress: () => {
      try {
        const raw = localStorage.getItem('mb_progress_v1');
        const store = raw ? JSON.parse(raw) : null;
        const counts: Record<string, number> = store?.dailyLessonCounts ?? {};
        const max = Math.max(0, ...Object.values(counts));
        return { current: Math.min(max, 5), total: 5 };
      } catch { return null; }
    },
  },
  {
    id: 'twenty_one_streak',
    icon: '🌻',
    title: '3週間連続',
    desc: '21日連続で学習した',
    check: (_, streak) => streak >= 21,
    progress: (_, streak) => ({ current: Math.min(streak, 21), total: 21 }),
  },
  {
    id: 'quiz_5',
    icon: '🧠',
    title: '一問入魂',
    desc: 'クイズに5問以上回答した',
    check: () => {
      try {
        const raw = localStorage.getItem('mb_quiz_reactions');
        const r = raw ? JSON.parse(raw) as { knew: number; learned: number } : { knew: 0, learned: 0 };
        return (r.knew + r.learned) >= 5;
      } catch { return false; }
    },
    progress: () => {
      try {
        const raw = localStorage.getItem('mb_quiz_reactions');
        const r = raw ? JSON.parse(raw) as { knew: number; learned: number } : { knew: 0, learned: 0 };
        const total = r.knew + r.learned;
        return { current: Math.min(total, 5), total: 5 };
      } catch { return null; }
    },
  },
  {
    id: 'quiz_streak_3',
    icon: '🧩',
    title: 'クイズ3日連続',
    desc: '3日連続でクイズに回答した',
    check: () => {
      try {
        const best = parseInt(localStorage.getItem('mb_quiz_best_streak') ?? '0', 10);
        return best >= 3;
      } catch { return false; }
    },
    progress: () => {
      try {
        const best = parseInt(localStorage.getItem('mb_quiz_best_streak') ?? '0', 10);
        return { current: Math.min(best, 3), total: 3 };
      } catch { return null; }
    },
  },
  {
    id: 'quiz_streak_7',
    icon: '🔬',
    title: 'クイズ1週間連続',
    desc: '7日連続でクイズに回答した',
    check: () => {
      try {
        const best = parseInt(localStorage.getItem('mb_quiz_best_streak') ?? '0', 10);
        return best >= 7;
      } catch { return false; }
    },
    progress: () => {
      try {
        const best = parseInt(localStorage.getItem('mb_quiz_best_streak') ?? '0', 10);
        return { current: Math.min(best, 7), total: 7 };
      } catch { return null; }
    },
  },
  {
    id: 'quiz_20',
    icon: '🎓',
    title: 'クイズマスター',
    desc: 'クイズに20問以上回答した',
    check: () => {
      try {
        const raw = localStorage.getItem('mb_quiz_reactions');
        const r = raw ? JSON.parse(raw) as { knew: number; learned: number } : { knew: 0, learned: 0 };
        return (r.knew + r.learned) >= 20;
      } catch { return false; }
    },
    progress: () => {
      try {
        const raw = localStorage.getItem('mb_quiz_reactions');
        const r = raw ? JSON.parse(raw) as { knew: number; learned: number } : { knew: 0, learned: 0 };
        const total = r.knew + r.learned;
        return { current: Math.min(total, 20), total: 20 };
      } catch { return null; }
    },
  },
  {
    id: 'forty_lessons',
    icon: '💎',
    title: '40講義突破',
    desc: '40講義を完了した',
    check: (c) => c >= 40,
    progress: (c) => ({ current: Math.min(c, 40), total: 40 }),
  },
  {
    id: 'best_streak_14',
    icon: '🌠',
    title: '伝説の2週間',
    desc: '最高連続記録14日以上',
    check: (_, _s, best) => best >= 14,
    progress: (_, _s, best) => ({ current: Math.min(best, 14), total: 14 }),
  },
  {
    id: 'best_streak_21',
    icon: '🌌',
    title: '伝説の3週間',
    desc: '最高連続記録21日以上',
    check: (_, _s, best) => best >= 21,
    progress: (_, _s, best) => ({ current: Math.min(best, 21), total: 21 }),
  },
  {
    id: 'first_stamp',
    icon: '🎫',
    title: '初スタンプ',
    desc: '初めてスタンプを押した',
    check: () => {
      try {
        const raw = localStorage.getItem('mb_stamps_v1');
        const store = raw ? JSON.parse(raw) : null;
        return (store?.stamps?.length ?? 0) >= 1;
      } catch { return false; }
    },
    progress: () => {
      try {
        const raw = localStorage.getItem('mb_stamps_v1');
        const store = raw ? JSON.parse(raw) : null;
        return { current: Math.min(store?.stamps?.length ?? 0, 1), total: 1 };
      } catch { return null; }
    },
  },
  {
    id: 'stamp_5',
    icon: '🎟️',
    title: 'スタンプ常連',
    desc: 'スタンプを5回押した',
    check: () => {
      try {
        const raw = localStorage.getItem('mb_stamps_v1');
        const store = raw ? JSON.parse(raw) : null;
        return (store?.stamps?.length ?? 0) >= 5;
      } catch { return false; }
    },
    progress: () => {
      try {
        const raw = localStorage.getItem('mb_stamps_v1');
        const store = raw ? JSON.parse(raw) : null;
        const count = store?.stamps?.length ?? 0;
        return { current: Math.min(count, 5), total: 5 };
      } catch { return null; }
    },
  },
  {
    id: 'stamp_10',
    icon: '🎪',
    title: 'スタンプ職人',
    desc: 'スタンプを10回押した',
    check: () => {
      try {
        const raw = localStorage.getItem('mb_stamps_v1');
        const store = raw ? JSON.parse(raw) : null;
        return (store?.stamps?.length ?? 0) >= 10;
      } catch { return false; }
    },
    progress: () => {
      try {
        const raw = localStorage.getItem('mb_stamps_v1');
        const store = raw ? JSON.parse(raw) : null;
        const count = store?.stamps?.length ?? 0;
        return { current: Math.min(count, 10), total: 10 };
      } catch { return null; }
    },
  },
  {
    id: 'all_categories',
    icon: '👑',
    title: '完全制覇',
    desc: '全カテゴリ・全講義を完了',
    check: (_, _s, _b, keys) => {
      return categories.every(cat => {
        const available = cat.courses.flatMap(c =>
          c.lessons.filter(l => !l.isComingSoon).map(l => `${c.id}/${l.id}`)
        );
        if (available.length === 0) return true;
        return available.every(k => keys.includes(k));
      });
    },
    progress: (_, _s, _b, keys) => {
      const total = categories.flatMap(cat =>
        cat.courses.flatMap(c => c.lessons.filter(l => !l.isComingSoon).map(l => `${c.id}/${l.id}`))
      ).length;
      const done = keys.length;
      return { current: Math.min(done, total), total };
    },
  },
];
