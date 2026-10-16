// Static string-light garland: a sagging wire with amber bulbs. Never animated.
// "wide" runs full-bleed across the top of the night section; "short" is one sag for a panel.
type Sag = { x0: number; x1: number; top: number; low: number };

function bulbsOn({ x0, x1, top, low }: Sag, ts: number[]) {
  // Quadratic sag with the control point below the middle.
  const cx = (x0 + x1) / 2;
  const cy = 2 * low - top;
  return ts.map((t) => {
    const x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t ** 2 * x1;
    const y = (1 - t) ** 2 * top + 2 * (1 - t) * t * cy + t ** 2 * top;
    return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
  });
}

export default function StringLights({
  variant = "wide",
  className = "",
}: {
  variant?: "wide" | "short";
  className?: string;
}) {
  const wide = variant === "wide";
  const w = wide ? 1440 : 220;
  const h = wide ? 72 : 44;
  const span = wide ? 360 : 220;
  const sags: Sag[] = [];
  for (let x = wide ? -180 : 0; x < w; x += span) {
    sags.push({ x0: x, x1: x + span, top: wide ? 10 : 6, low: wide ? 46 : 26 });
  }
  const ts = wide ? [0.14, 0.32, 0.5, 0.68, 0.86] : [0.12, 0.3, 0.5, 0.7, 0.88];
  const bulbs = sags.flatMap((s) => bulbsOn(s, ts));
  const wire = sags
    .map((s) => `M${s.x0} ${s.top}Q${(s.x0 + s.x1) / 2} ${2 * s.low - s.top} ${s.x1} ${s.top}`)
    .join("");
  const r = wide ? 5.5 : 4;
  const drop = wide ? 7 : 5;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio={wide ? "xMidYMin slice" : "xMidYMid meet"}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={wire} fill="none" stroke="#C9D3F0" strokeOpacity="0.55" strokeWidth="1.5" />
      {bulbs.map((b, i) => (
        <g key={i}>
          <path d={`M${b.x} ${b.y}v${drop}`} stroke="#C9D3F0" strokeOpacity="0.55" strokeWidth="1.5" />
          <circle cx={b.x} cy={b.y + drop + r} r={Math.round(r * 22) / 10} fill="#F2B544" fillOpacity="0.16" />
          <circle cx={b.x} cy={b.y + drop + r} r={r} fill="#F2B544" />
        </g>
      ))}
    </svg>
  );
}
