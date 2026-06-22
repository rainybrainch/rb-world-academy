interface Props {
  pct: number;      // 0-100
  size?: number;    // px
  stroke?: number;  // px
  color?: string;
  trackColor?: string;
}

export default function ProgressRing({ pct, size = 36, stroke = 3, color = 'var(--mb-gold)', trackColor = 'rgba(26,26,46,0.08)' }: Props) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={pct === 100 ? 'var(--mb-green)' : color}
        strokeWidth={stroke}
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 0.5s ease' }}
      />
    </svg>
  );
}
