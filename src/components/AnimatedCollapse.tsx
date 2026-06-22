'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  open: boolean;
  children: React.ReactNode;
}

export default function AnimatedCollapse({ open, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(open ? 'auto' : '0px');
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open) {
      setVisible(true);
      // next frame: measure and animate to real height
      requestAnimationFrame(() => {
        setHeight(`${el.scrollHeight}px`);
        // after transition, set to auto so resize works
        const onEnd = () => setHeight('auto');
        el.addEventListener('transitionend', onEnd, { once: true });
      });
    } else {
      // snap to exact height first, then animate to 0
      setHeight(`${el.scrollHeight}px`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setHeight('0px');
        });
      });
      const onEnd = () => setVisible(false);
      el.addEventListener('transitionend', onEnd, { once: true });
    }
  }, [open]);

  if (!visible && !open) return null;

  return (
    <div
      ref={ref}
      style={{
        height,
        overflow: 'hidden',
        transition: 'height 0.25s ease',
      }}
    >
      {children}
    </div>
  );
}
