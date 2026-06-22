'use client';

import { useEffect, useRef } from 'react';

interface Props {
  trigger: boolean;
}

export default function ConfettiBurst({ trigger }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    if (!trigger || fired.current || !canvas.current) return;
    fired.current = true;

    const c = canvas.current;
    const ctx = c.getContext('2d');
    if (!ctx) return;

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const COLORS = ['#F5C842', '#5BC8E8', '#4CAF7D', '#E8354A', '#ffffff'];
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * c.width,
      y: -10,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      w: Math.random() * 8 + 4,
      h: Math.random() * 5 + 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.15,
      life: 1,
    }));

    let frame: number;
    function draw() {
      ctx!.clearRect(0, 0, c.width, c.height);
      let alive = false;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.rot += p.rotV;
        p.life -= 0.008;
        if (p.life <= 0 || p.y > c.height) continue;
        alive = true;
        ctx!.save();
        ctx!.globalAlpha = Math.max(0, p.life);
        ctx!.translate(p.x, p.y);
        ctx!.rotate(p.rot);
        ctx!.fillStyle = p.color;
        ctx!.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx!.restore();
      }
      if (alive) frame = requestAnimationFrame(draw);
    }
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [trigger]);

  if (!trigger) return null;

  return (
    <canvas
      ref={canvas}
      className="fixed inset-0 z-[80] pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
