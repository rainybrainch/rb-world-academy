'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import LessonContent from './LessonContent';
import LessonScrollProgress from './LessonScrollProgress';
import RelatedLessons from './RelatedLessons';
import LessonCheckItems from './LessonCheckItems';
import { useCompletionSound } from '@/hooks/useCompletionSound';
import { useSwipe } from '@/hooks/useSwipe';
import RightPanel from './RightPanel';
import CourseOutline from './CourseOutline';
import ConfettiBurst from './ConfettiBurst';
import CourseCompleteModal from './CourseCompleteModal';
import { useProgress } from '@/hooks/useProgress';
import { useScrollMemory, clearScrollMemory } from '@/hooks/useScrollMemory';
import { categories } from '@/data/courses';
import type { Lesson, Course } from '@/types';

const COMPLETION_QUOTES = [
  'その一歩が、資産への道。',
  '知識は、最高の投資だ。',
  '学ぶことをやめた日が、成長の止まる日。',
  '複利は知識にも効く。',
  '今日の学びが、未来の選択肢を増やす。',
  '賢いお金の使い方は、まず学ぶことから。',
  'お見事！知識が積み上がっています。',
  '一歩一歩が、経済的自由への道。',
  '知識という貯金が、また増えた。',
  '毎日の小さな積み上げが、大きな差をつくる。',
  'インプットしたら、アウトプットして定着させよう。',
  'お金を動かす前に、知識を動かせ。',
  '続けることが、最大の才能だ。',
  '今日学んだことを、誰かに話してみよう。',
  '一つ知るたびに、世界が少し広がる。',
  'この知識が、いつかあなたを助ける日が来る。',
  '学ぶことに、遅すぎることはない。',
  '今日も前に進んだ。それだけで十分だ。',
  '知識の種を蒔いた。あとは時間が育てる。',
  '理解した瞬間が、最高の報酬だ。',
  'お金と友達になる第一歩を踏んだ。',
  '正しく知ることで、正しく動ける。',
  '昨日の自分より、ほんの少し賢くなった。',
  '稼ぐより、守ることを先に学べ。',
  'わかる人とわからない人の差は、学んだかどうかだけ。',
  '投資の前に、まず自分への投資。それが今日のこの一歩。',
  '知識は盗まれない。どこへ行っても使える。',
  '次の講義も待っている。いつでも戻ってこい。',
  '失敗は授業料。でも知識で失敗を減らせる。',
  'お金のことは誰も教えてくれない。だから自分で学ぶ人が強くなる。',
  'ゆっくりでいい。学んでいる時間は必ず報われる。',
  '今日の知識が、明日の判断を変える。',
  '学ぶことに恥はない。知らなかったことより、知ろうとしないことが問題だ。',
  '一章終えるたびに、お金と友達に近づいている。',
  'この積み上げが、必ずどこかで役に立つ。',
  '学んだことは、誰にも奪われない。',
  '理解した数だけ、選択肢が増える。',
  '知識は使うほど磨かれる。今日も一つ使ってみよう。',
  'すぐに役立たなくても、いつか必ずつながる。',
  '「なんとなく」から「ちゃんとわかる」に変わった瞬間だ。',
  '焦らなくていい。コツコツが、一番速い。',
];

interface AdjacentLesson {
  lesson: { id: string; title: string };
  chapterTitle: string;
  courseId: string;
}

interface LessonShellProps {
  lesson: Lesson;
  course: Course;
  courseId: string;
  categoryId: string;
  courseTitle: string;
  chapterTitle: string;
  prev: AdjacentLesson | null;
  next: AdjacentLesson | null;
}

export default function LessonShell({
  lesson,
  course,
  courseId,
  categoryId,
  courseTitle,
  chapterTitle,
  prev,
  next,
}: LessonShellProps) {
  const [checkOpen, setCheckOpen] = useState(false);
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [completionQuote, setCompletionQuote] = useState('');
  const [autoNextCount, setAutoNextCount] = useState<number | null>(null);
  const [showCourseComplete, setShowCourseComplete] = useState(false);
  const [allPointsChecked, setAllPointsChecked] = useState(false);
  const { isCompleted, completeLesson, uncompleteLesson, viewLesson, mounted } = useProgress();
  const playSound = useCompletionSound();
  const router = useRouter();

  useEffect(() => {
    viewLesson(courseId, lesson.id);
  }, [courseId, lesson.id, viewLesson]);

  useEffect(() => {
    if (autoNextCount === null || autoNextCount <= 0) {
      if (autoNextCount === 0 && next) {
        router.push(`/courses/${next.courseId}/lessons/${next.lesson.id}`);
      }
      return;
    }
    const t = setTimeout(() => setAutoNextCount(c => (c !== null ? c - 1 : null)), 1000);
    return () => clearTimeout(t);
  }, [autoNextCount, next, courseId, router]);

  const completed = mounted && isCompleted(courseId, lesson.id);

  // Find next course in same category (for CourseCompleteModal)
  const nextCourseInCategory = (() => {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return null;
    const idx = cat.courses.findIndex(c => c.id === courseId);
    return idx >= 0 && idx < cat.courses.length - 1 ? cat.courses[idx + 1] : null;
  })();

  // Restore and save scroll position for non-completed lessons
  useScrollMemory(courseId, lesson.id, mounted && !completed);

  useSwipe({
    onSwipeLeft: () => {
      if (next && isCompleted(courseId, lesson.id)) {
        router.push(`/courses/${next.courseId}/lessons/${next.lesson.id}`);
      }
    },
    onSwipeRight: () => {
      if (prev) router.push(`/courses/${prev.courseId}/lessons/${prev.lesson.id}`);
    },
  });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'Escape') {
        if (checkOpen) { setCheckOpen(false); return; }
        if (outlineOpen) { setOutlineOpen(false); return; }
        if (autoNextCount !== null) { setAutoNextCount(null); return; }
      }
      if (e.key === 'ArrowRight' && next && isCompleted(courseId, lesson.id)) {
        router.push(`/courses/${next.courseId}/lessons/${next.lesson.id}`);
      }
      if (e.key === 'ArrowLeft' && prev) {
        router.push(`/courses/${prev.courseId}/lessons/${prev.lesson.id}`);
      }
      if ((e.key === 'c' || e.key === 'C') && !e.metaKey && !e.ctrlKey && !completed) {
        handleComplete();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [courseId, lesson.id, next, prev, isCompleted, router, completed, checkOpen, outlineOpen, autoNextCount]);

  function fireConfetti() {
    setConfettiKey(k => k + 1);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }

  function handleComplete() {
    completeLesson(courseId, lesson.id);
    clearScrollMemory(courseId, lesson.id);
    playSound();
    try { navigator.vibrate?.([30, 20, 60]); } catch {}
    setCompletionQuote(COMPLETION_QUOTES[Math.floor(Math.random() * COMPLETION_QUOTES.length)]);
    setJustCompleted(true);
    fireConfetti();
    // Detect if this was the last lesson in the course
    const availableLessons = course.lessons.filter(l => !l.isComingSoon);
    // Fire chapter-complete modal when finishing the last lesson of the current chapter
    const isLastInChapter = availableLessons[availableLessons.length - 1]?.id === lesson.id;
    if (isLastInChapter) {
      setTimeout(() => { setJustCompleted(false); setShowCourseComplete(true); }, 2600);
    } else {
      setTimeout(() => setJustCompleted(false), 2500);
      if (next) setAutoNextCount(5);
    }
  }

  function handleCompleteAndNext() {
    completeLesson(courseId, lesson.id);
    clearScrollMemory(courseId, lesson.id);
    playSound();
    try { navigator.vibrate?.([30, 20, 60]); } catch {}
    if (next) {
      router.push(`/courses/${next.courseId}/lessons/${next.lesson.id}`);
    }
  }

  // Prefetch next lesson as soon as current is completed
  useEffect(() => {
    if (completed && next) {
      router.prefetch(`/courses/${next.courseId}/lessons/${next.lesson.id}`);
    }
  }, [completed, next, router]);

  const { lessonIndex, lessonTotal } = useMemo(() => {
    const all = (categories.find(c => c.id === categoryId)?.courses ?? [course])
      .flatMap(ch => ch.lessons.filter(l => !l.isComingSoon));
    return { lessonIndex: all.findIndex(l => l.id === lesson.id), lessonTotal: all.length };
  }, [categoryId, course, lesson.id]);

  return (
    <div className="min-h-screen">
      <LessonScrollProgress />
      <ConfettiBurst key={confettiKey} trigger={showConfetti} />
      {showCourseComplete && (
        <CourseCompleteModal
          courseTitle={chapterTitle}
          categoryId={categoryId}
          nextCourseId={nextCourseInCategory?.id ?? null}
          nextCourseTitle={nextCourseInCategory?.title ?? null}
          nextFirstLessonId={nextCourseInCategory?.lessons.find(l => !l.isComingSoon)?.id ?? null}
          onClose={() => setShowCourseComplete(false)}
        />
      )}

      {/* Completion celebration overlay */}
      {justCompleted && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none"
          style={{ animation: 'fadeInOut 2s ease forwards' }}
        >
          <div
            className="flex flex-col items-center gap-3 px-10 py-8 rounded-2xl border-2"
            style={{
              background: 'rgba(26,26,46,0.95)',
              borderColor: 'var(--mb-gold)',
              boxShadow: '0 0 40px rgba(245,200,66,0.3)',
            }}
          >
            <div className="text-5xl">🎉</div>
            <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-gold)', fontSize: '18px' }}>
              講義完了！
            </div>
            <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
              {lesson.title}
            </div>
            {completionQuote && (
              <div
                className="mt-1 text-center max-w-[220px] leading-relaxed"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '10px' }}
              >
                {completionQuote}
              </div>
            )}
          </div>
        </div>
      )}

      <LessonContent
        lesson={lesson}
        courseId={courseId}
        courseTitle={courseTitle}
        chapterTitle={chapterTitle}
        prev={prev}
        next={next}
        checkOpen={checkOpen}
        onToggleCheck={() => setCheckOpen(!checkOpen)}
        outlineOpen={outlineOpen}
        onToggleOutline={() => setOutlineOpen(!outlineOpen)}
        isCompleted={completed}
        lessonIndex={lessonIndex}
        lessonTotal={lessonTotal}
      />

      {/* Floating Action Button — 右下の丸いボタン */}
      {!completed && (
        <button
          type="button"
          onClick={handleComplete}
          className="fixed bottom-20 right-4 w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold transition-all hover:scale-110 active:scale-95 animate-pulse"
          style={{
            background: 'var(--mb-gold)',
            color: 'var(--mb-dark)',
            zIndex: 45,
            boxShadow: '0 6px 20px rgba(245,200,66,0.6), 0 0 30px rgba(245,200,66,0.3)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
            animationIterationCount: 'infinite',
            animationDuration: '2s',
          }}
          title="講義を完了にする [C]"
        >
          <div className="flex flex-col items-center gap-0.5">
            <span>✓</span>
            <span className="text-[9px]" style={{ letterSpacing: '-0.5px' }}>完了</span>
          </div>
        </button>
      )}

      {/* Related lessons */}
      <RelatedLessons categoryId={categoryId} courseId={courseId} lessonId={lesson.id} />

      <RightPanel
        checkItems={lesson.checkItems}
        isOpen={checkOpen}
        onClose={() => setCheckOpen(false)}
      />
      <CourseOutline
        chapters={categories.find(c => c.id === categoryId)?.courses ?? [course]}
        currentLessonId={lesson.id}
        categoryTitle={courseTitle}
        isOpen={outlineOpen}
        onClose={() => setOutlineOpen(false)}
      />
    </div>
  );
}
