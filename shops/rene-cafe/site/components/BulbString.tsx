import { C } from "@/lib/palette";

// The deck's string of Edison bulbs, strung edge to edge across the night close.
// Static: never flickers. Drawn at 1:1 and cropped from the centre ("slice"), so bulbs keep
// their size: 7 visible on a phone, 9 at 1440.
function Strand({ width, count, className }: { width: number; count: number; className: string }) {
  const top = 6;
  const sag = 26;
  const spans = Math.max(2, Math.round(count / 2)); // wire hangs from a few points
  const spanW = width / spans;
  const wireY = (x: number) => {
    const t = (x % spanW) / spanW;
    return top + 4 * t * (1 - t) * sag;
  };
  let wire = `M0 ${top}`;
  for (let i = 0; i < spans; i++) {
    const x0 = i * spanW;
    wire += ` Q${x0 + spanW / 2} ${top + 2 * sag} ${x0 + spanW} ${top}`;
  }
  const step = width / count;
  const bulbs = Array.from({ length: count }, (_, i) => {
    const x = step * (i + 0.5);
    return { x, y: wireY(x) };
  });
  const height = top + sag + 46;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height={height}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`glow-${count}`}>
          <stop offset="0" stopColor={C.lampu} stopOpacity="0.42" />
          <stop offset="1" stopColor={C.lampu} stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d={wire} fill="none" stroke={C.kaca} strokeOpacity="0.45" strokeWidth="1.5" />
      {bulbs.map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y})`}>
          <circle cy="26" r="30" fill={`url(#glow-${count})`} />
          <rect x="-0.75" y="0" width="1.5" height="12" fill={C.kaca} fillOpacity="0.45" />
          <rect x="-4" y="11" width="8" height="7" fill={C.kaca} fillOpacity="0.55" />
          <path d="M-6 21 a6 6 0 0 1 12 0 v6 a6 8 0 0 1 -12 0 Z" fill={C.lampu} />
        </g>
      ))}
    </svg>
  );
}

export default function BulbString() {
  return (
    <>
      <Strand width={420} count={7} className="bulbs-phone" />
      <Strand width={1600} count={11} className="bulbs-wide" />
    </>
  );
}
