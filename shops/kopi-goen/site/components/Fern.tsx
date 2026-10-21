// The staghorn fern from photo-1, flat in pakis: a round shield at the mount and broad,
// strap-like fronds that droop and fork into antler tips. Generated once from a fixed recipe
// (deterministic, so server and client render the same paths).

type V = [number, number];

const r1 = (n: number) => Math.round(n * 10) / 10;
const dir = (deg: number): V => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)];
// Signed shortest turn from `a` towards straight down (90deg in screen space).
const towardDown = (a: number) => ((((90 - a + 540) % 360) + 360) % 360) - 180;

// Widths per fork level: [start, end]. The last level ends almost in a point.
const WIDTHS: [number, number][] = [
  [17, 13],
  [11, 7],
  [6.5, 1.6],
];
const LENGTH = [1, 0.58, 0.46];

function frond(p0: V, angle: number, len: number, level: number, maxLevel: number, out: string[]) {
  // Upward fronds rise before they bend over; everything else droops more.
  const end = angle + towardDown(angle) * (level === 0 && angle < -10 ? 0.2 : 0.34);
  const a = dir(angle);
  const e = dir(end);
  const c: V = [p0[0] + a[0] * len * 0.55, p0[1] + a[1] * len * 0.55];
  const p2: V = [c[0] + e[0] * len * 0.5, c[1] + e[1] * len * 0.5];
  const [w0, w1] = WIDTHS[level];

  // Offset the centre curve by half the width on each side to get a flat, tapering strap.
  const left: V[] = [];
  const right: V[] = [];
  const N = 8;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const u = 1 - t;
    const pt: V = [u * u * p0[0] + 2 * u * t * c[0] + t * t * p2[0], u * u * p0[1] + 2 * u * t * c[1] + t * t * p2[1]];
    const d: V = [2 * u * (c[0] - p0[0]) + 2 * t * (p2[0] - c[0]), 2 * u * (c[1] - p0[1]) + 2 * t * (p2[1] - c[1])];
    const m = Math.hypot(d[0], d[1]) || 1;
    const n: V = [-d[1] / m, d[0] / m];
    const w = (w0 + (w1 - w0) * t) / 2;
    left.push([pt[0] + n[0] * w, pt[1] + n[1] * w]);
    right.push([pt[0] - n[0] * w, pt[1] - n[1] * w]);
  }
  const pts = [...left, ...right.reverse()];
  out.push(`M${pts.map(([x, y]) => `${r1(x)} ${r1(y)}`).join("L")}Z`);

  if (level < maxLevel) {
    const next = len * (LENGTH[level + 1] / LENGTH[level]);
    frond(p2, end - 24, next, level + 1, maxLevel, out);
    frond(p2, end + 22, next * 0.92, level + 1, maxLevel, out);
  }
}

const MOUNT: V = [110, 62];
// [angle, length, forks]: fronds fan out and up from the shield, then droop into antler tips
const RECIPE: [number, number, number][] = [
  [-148, 44, 1],
  [-110, 36, 1],
  [-70, 36, 1],
  [-32, 44, 1],
  [172, 50, 2],
  [138, 54, 2],
  [104, 50, 1],
  [72, 52, 2],
  [38, 52, 2],
  [6, 48, 2],
];
const FRONDS: string[] = (() => {
  const out: string[] = [];
  for (const [a, l, f] of RECIPE) frond(MOUNT, a, l, 0, f, out);
  return out;
})();

export default function Fern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden="true" focusable="false">
      <g fill="var(--color-pakis)" stroke="var(--color-pakis)" strokeWidth="1" strokeLinejoin="round">
        {FRONDS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {/* the dry, papery shield fronds clasping the trunk (photo-1) */}
      <g fill="var(--color-beton-bayang)">
        <ellipse cx={MOUNT[0] - 10} cy={MOUNT[1] - 6} rx="14" ry="18" />
        <ellipse cx={MOUNT[0] + 10} cy={MOUNT[1] - 6} rx="14" ry="18" />
        <ellipse cx={MOUNT[0]} cy={MOUNT[1] + 1} rx="17" ry="15" />
      </g>
      <path
        d={`M${MOUNT[0] - 14} ${MOUNT[1] - 12}q14 -7 28 0M${MOUNT[0] - 16} ${MOUNT[1] - 1}q16 -7 32 0M${MOUNT[0] - 12} ${MOUNT[1] + 9}q12 -6 24 0`}
        fill="none"
        stroke="var(--color-malam)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
