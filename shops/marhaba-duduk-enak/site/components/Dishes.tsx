import type { DishId } from "@/content";

// Flat top-down dishes on the terrazzo table, drawn from the guests' photos and the brief.
// 2–4 tones each, outlines only on rims, one soft contact shadow under each dish.

type Pt = [number, number];
const f = (n: number) => n.toFixed(1);

// Deterministic irregular blob (kerupuk, chicken, patches).
function blob(cx: number, cy: number, r: number, wobble: number, seed: number, n = 14) {
  const pts: Pt[] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = r + Math.sin(a * 3 + seed) * wobble + Math.sin(a * 7 + seed * 2.3) * wobble * 0.5;
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  // smooth closed path through midpoints
  let d = "";
  for (let i = 0; i < n; i++) {
    const p = pts[i];
    const q = pts[(i + 1) % n];
    const m: Pt = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    d += i === 0 ? `M${f(m[0])} ${f(m[1])}` : "";
    const nn = pts[(i + 2) % n];
    const m2: Pt = [(q[0] + nn[0]) / 2, (q[1] + nn[1]) / 2];
    d += `Q${f(q[0])} ${f(q[1])} ${f(m2[0])} ${f(m2[1])}`;
  }
  return d + "Z";
}

// Wavy noodle from (x, y) along angle a.
function noodle(x: number, y: number, a: number, len: number, amp = 1.8, period = 4.2) {
  const steps = Math.round(len / 1.2);
  const ca = Math.cos(a);
  const sa = Math.sin(a);
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * len;
    const o = Math.sin((t / period) * Math.PI * 2) * amp;
    const px = x + ca * t - sa * o;
    const py = y + sa * t + ca * o;
    d += `${i ? "L" : "M"}${f(px)} ${f(py)}`;
  }
  return d;
}

function Shadow({ id, cx, cy, r }: { id: string; cx: number; cy: number; r: number }) {
  return (
    <>
      <defs>
        <radialGradient id={id}>
          <stop offset="0" stopColor="#141612" stopOpacity="0.26" />
          <stop offset="0.78" stopColor="#141612" stopOpacity="0.12" />
          <stop offset="1" stopColor="#141612" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill={`url(#${id})`} />
    </>
  );
}

export function MieKari({ label }: { label: string }) {
  const noodles: [number, number, number, number][] = [
    [40, 74, -0.15, 26],
    [44, 79, -0.05, 22],
    [36, 68, 0.05, 14],
    [64, 60, -1.2, 18],
    [70, 66, -1.35, 20],
    [74, 58, -1.6, 14],
    [56, 72, -0.6, 14],
    [52, 30, 0.2, 10],
  ];
  return (
    <svg viewBox="-6 -6 114 114" role="img" aria-label={label}>
      <Shadow id="sh-mie" cx={54} cy={56} r={51} />
      <circle cx="50" cy="50" r="46" fill="#141612" />
      <circle cx="50" cy="50" r="44.4" fill="none" stroke="#2A2D27" strokeWidth="3" />
      <circle cx="50" cy="50" r="40.5" fill="#0E100D" />
      <circle cx="50" cy="50" r="38.5" fill="#B5652B" />
      <g fill="#C4743A">
        <ellipse cx="30" cy="66" rx="3" ry="2" />
        <ellipse cx="62" cy="80" rx="2.4" ry="1.6" />
        <ellipse cx="80" cy="44" rx="2" ry="1.4" />
        <ellipse cx="24" cy="50" rx="1.8" ry="1.2" />
      </g>
      <g fill="none" stroke="#E8C46A" strokeWidth="2.3" strokeLinecap="round">
        {noodles.map(([x, y, a, l], i) => (
          <path key={i} d={noodle(x, y, a, l)} />
        ))}
      </g>
      {/* fried tofu */}
      <g transform="rotate(-14 26 54)">
        <rect x="16" y="45" width="20" height="21" rx="3.5" fill="#A8712C" />
        <rect x="16" y="44" width="19" height="19" rx="3.5" fill="#C58B3E" />
      </g>
      {/* chicken */}
      <g>
        <path d={blob(46, 56, 7.5, 1.4, 1)} fill="#B0703F" />
        <path d={blob(45, 55, 7, 1.3, 1)} fill="#C98A55" />
        <path d={blob(58, 48, 6.5, 1.2, 2)} fill="#B0703F" />
        <path d={blob(57, 47, 6, 1.2, 2)} fill="#C98A55" />
        <path d={blob(52, 66, 6, 1.1, 3)} fill="#B0703F" />
        <path d={blob(51, 65, 5.6, 1.1, 3)} fill="#C98A55" />
        <path d={blob(38, 44, 5.4, 1, 4)} fill="#C98A55" />
        <path d={blob(64, 70, 5, 1, 5)} fill="#C98A55" />
      </g>
      {/* boiled egg halves */}
      <g>
        <ellipse cx="68" cy="31" rx="10.5" ry="8.2" transform="rotate(24 68 31)" fill="#F6F3EA" />
        <circle cx="68.6" cy="31.4" r="4.9" fill="#E9A93A" />
        <ellipse cx="78" cy="48" rx="10" ry="7.8" transform="rotate(64 78 48)" fill="#F6F3EA" />
        <circle cx="78.2" cy="48.6" r="4.7" fill="#E9A93A" />
      </g>
      {/* scallion and fried shallots */}
      <g fill="#7FA650">
        {[
          [50, 52, 30],
          [54, 55, -40],
          [47, 50, 75],
          [56, 52, 10],
          [51, 58, -70],
          [44, 58, 50],
        ].map(([x, y, a], i) => (
          <rect key={i} x={x - 0.8} y={y - 3.5} width="1.6" height="7" rx="0.8" transform={`rotate(${a} ${x} ${y})`} />
        ))}
      </g>
      <g fill="#8A5A2B">
        <circle cx="49" cy="56" r="1.1" />
        <circle cx="55" cy="50" r="0.9" />
        <circle cx="42" cy="52" r="1" />
        <circle cx="60" cy="56" r="0.9" />
      </g>
      {/* kerupuk over the rim */}
      <g>
        <path d={blob(23, 22, 16, 2.2, 7, 18)} fill="#D9C391" transform="translate(1.4 1.6)" />
        <path d={blob(23, 22, 16, 2.2, 7, 18)} fill="#EEDDB8" />
        <path d={blob(40, 12, 13, 1.8, 9, 18)} fill="#D9C391" transform="translate(1.4 1.6)" />
        <path d={blob(40, 12, 13, 1.8, 9, 18)} fill="#EEDDB8" />
        <g fill="#E2CC9A">
          <circle cx="18" cy="18" r="1.4" />
          <circle cx="26" cy="27" r="1.2" />
          <circle cx="29" cy="16" r="1" />
          <circle cx="40" cy="9" r="1.2" />
          <circle cx="44" cy="16" r="1" />
        </g>
      </g>
    </svg>
  );
}

export function CaesarSalad({ label }: { label: string }) {
  const leaves: [number, number, number, number, string][] = [
    [34, 36, -30, 1, "#7FA44A"],
    [62, 32, 40, 0.95, "#A9C46B"],
    [70, 58, 110, 1, "#7FA44A"],
    [46, 70, 200, 0.95, "#A9C46B"],
    [28, 58, -100, 0.9, "#7FA44A"],
    [50, 46, 10, 0.85, "#A9C46B"],
    [56, 58, 150, 0.8, "#7FA44A"],
    [40, 52, -60, 0.8, "#A9C46B"],
    [62, 44, 80, 0.75, "#7FA44A"],
  ];
  const leaf = "M0 14Q-9 2-5-10Q0-17 5-10Q9 2 0 14Z";
  return (
    <svg viewBox="-6 -6 114 114" role="img" aria-label={label}>
      <Shadow id="sh-salad" cx={54} cy={56} r={51} />
      <circle cx="50" cy="50" r="46" fill="#F5F5EF" />
      <circle cx="50" cy="50" r="44.6" fill="none" stroke="#DAD8CF" strokeWidth="2.8" />
      <circle cx="50" cy="50" r="38" fill="#ECEBE4" />
      <g>
        {leaves.map(([x, y, a, s, c], i) => (
          <g key={i} transform={`translate(${x} ${y}) rotate(${a}) scale(${s * 1.5})`}>
            <path d={leaf} fill={c} />
            <path d="M0 12V-10" stroke="#CFE09F" strokeWidth="0.7" strokeOpacity="0.8" />
          </g>
        ))}
      </g>
      {/* croutons */}
      <g>
        {[
          [44, 40, 15],
          [60, 50, -20],
          [38, 60, 35],
          [56, 66, 5],
          [66, 38, 50],
          [30, 46, -10],
        ].map(([x, y, a], i) => (
          <g key={i} transform={`rotate(${a} ${x} ${y})`}>
            <rect x={x - 3.6} y={y - 3.2} width="7.2" height="7.2" rx="1.6" fill="#B07F3E" />
            <rect x={x - 3.6} y={y - 3.6} width="6.6" height="6.6" rx="1.6" fill="#C99A55" />
          </g>
        ))}
      </g>
      {/* parmesan shavings */}
      <g fill="#F1E7C9">
        <path d="M48 52l9-3 1 3-9 2z" />
        <path d="M34 34l7 1-1 3-7-1z" />
        <path d="M64 62l6-5 2 2-6 5z" />
        <path d="M42 66l8 1-1 2.6-8-1z" />
        <path d="M56 36l6 3-1.5 2.4-6-3z" />
      </g>
    </svg>
  );
}

export function UmmAli({ label }: { label: string }) {
  const almonds: [number, number, number][] = [
    [40, 36, 20],
    [58, 40, -35],
    [50, 56, 70],
    [36, 58, -10],
    [64, 60, 40],
    [48, 30, 90],
    [70, 46, -70],
    [30, 46, 60],
    [56, 68, 10],
  ];
  const pista: [number, number][] = [
    [46, 44],
    [60, 52],
    [38, 50],
    [54, 34],
    [44, 64],
    [66, 40],
    [32, 38],
    [62, 66],
    [50, 50],
  ];
  const raisins: [number, number, number][] = [
    [52, 44, 30],
    [42, 56, -20],
    [60, 60, 60],
    [36, 42, 0],
    [56, 30, -40],
    [68, 52, 20],
  ];
  return (
    <svg viewBox="-8 -6 116 112" role="img" aria-label={label}>
      <Shadow id="sh-ummali" cx={53} cy={54} r={49} />
      {/* baking dish with two ear handles */}
      <ellipse cx="3" cy="50" rx="9" ry="12" fill="#F5F5EF" stroke="#DAD8CF" strokeWidth="2" />
      <ellipse cx="97" cy="50" rx="9" ry="12" fill="#F5F5EF" stroke="#DAD8CF" strokeWidth="2" />
      <circle cx="50" cy="50" r="43" fill="#F5F5EF" />
      <circle cx="50" cy="50" r="41.6" fill="none" stroke="#DAD8CF" strokeWidth="2.8" />
      <circle cx="50" cy="50" r="36" fill="#D9A15A" />
      <g fill="#B97A3A">
        <path d={blob(40, 40, 7, 1.6, 1)} />
        <path d={blob(62, 46, 6, 1.4, 2)} />
        <path d={blob(48, 62, 7.5, 1.6, 3)} />
        <path d={blob(30, 58, 4.5, 1, 4)} />
        <path d={blob(64, 64, 4.5, 1, 5)} />
        <path d={blob(54, 28, 4, 1, 6)} />
      </g>
      <g fill="#EADBB8">
        {almonds.map(([x, y, a], i) => (
          <ellipse key={i} cx={x} cy={y} rx="4" ry="1.3" transform={`rotate(${a} ${x} ${y})`} />
        ))}
      </g>
      <g fill="#9DB86A">
        {pista.map(([x, y], i) => (
          <path key={i} d={blob(x, y, 1.7, 0.4, i, 7)} />
        ))}
      </g>
      <g fill="#5A2E1E">
        {raisins.map(([x, y, a], i) => (
          <ellipse key={i} cx={x} cy={y} rx="2.2" ry="1.5" transform={`rotate(${a} ${x} ${y})`} />
        ))}
      </g>
    </svg>
  );
}

export function KopiSusuKurma({ label }: { label: string }) {
  return (
    <svg viewBox="-4 -4 108 108" role="img" aria-label={label}>
      <Shadow id="sh-kurma" cx={46} cy={47} r={38} />
      <circle cx="42" cy="42" r="34" fill="#F5F5EF" fillOpacity="0.45" stroke="#F5F5EF" strokeOpacity="0.6" strokeWidth="2.6" />
      <circle cx="42" cy="42" r="30.8" fill="none" stroke="#CBC7B9" strokeWidth="1.2" />
      <circle cx="42" cy="42" r="30" fill="#B98B5E" />
      {/* milk clouding into the coffee, a few ice edges */}
      <path d={blob(36, 34, 13, 2.6, 2, 16)} fill="#C9A074" />
      <path d={blob(52, 50, 8, 1.8, 5, 14)} fill="#C9A074" fillOpacity="0.8" />
      <g fill="#D8BE98" fillOpacity="0.75">
        <rect x="44" y="24" width="11" height="10" rx="2" transform="rotate(14 49 29)" />
        <rect x="27" y="47" width="10" height="9" rx="2" transform="rotate(-20 32 51)" />
      </g>
      <path d="M17 28A30 30 0 0 1 28 15" fill="none" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" />
      {/* two dates beside the glass */}
      <g transform="rotate(38 82 82)">
        <ellipse cx="82" cy="82" rx="10" ry="5.6" fill="#5A2E1E" />
        <path d="M75 80Q82 77.5 89 80" fill="none" stroke="#7A4430" strokeWidth="1.4" strokeLinecap="round" />
      </g>
      <g transform="rotate(-12 86 64)">
        <ellipse cx="86" cy="64" rx="9.4" ry="5.3" fill="#5A2E1E" />
        <path d="M79.5 62.4Q86 60 92.5 62.4" fill="none" stroke="#7A4430" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function Cappuccino({ label }: { label: string }) {
  return (
    <svg viewBox="-4 -4 108 108" role="img" aria-label={label}>
      <Shadow id="sh-capp" cx={52} cy={53} r={48} />
      {/* saucer */}
      <circle cx="48" cy="48" r="44" fill="#F5F5EF" />
      <circle cx="48" cy="48" r="42.8" fill="none" stroke="#DAD8CF" strokeWidth="2.4" />
      <circle cx="48" cy="48" r="34" fill="none" stroke="#E4E1D8" strokeWidth="1.5" />
      {/* handle at 4 o'clock */}
      <g transform="rotate(30 48 48)">
        <rect x="74" y="43" width="17" height="10" rx="5" fill="#F5F5EF" stroke="#DAD8CF" strokeWidth="1.6" />
      </g>
      {/* cup */}
      <circle cx="48" cy="48" r="30" fill="#F5F5EF" stroke="#D2CFC5" strokeWidth="1.8" />
      <circle cx="48" cy="48" r="26.5" fill="#8A5A35" />
      <circle cx="48" cy="48" r="22" fill="#EFE4D2" />
      {/* tulip */}
      <g fill="#C8A27A">
        <ellipse cx="48" cy="57" rx="10.5" ry="6" />
        <ellipse cx="48" cy="47.5" rx="8.6" ry="5" />
        <ellipse cx="48" cy="39.4" rx="6.6" ry="4.2" />
      </g>
      <g fill="#EFE4D2">
        <ellipse cx="48" cy="54.6" rx="8.4" ry="4.2" />
        <ellipse cx="48" cy="45.4" rx="6.8" ry="3.5" />
        <ellipse cx="48" cy="37.8" rx="4.8" ry="2.8" />
      </g>
      <path d="M48 64.5V34.5" stroke="#C8A27A" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export const DISH_ART: Record<DishId, { Art: (p: { label: string }) => React.JSX.Element; size: "bowl" | "salad" | "dish" | "cup" }> = {
  mie: { Art: MieKari, size: "bowl" },
  salad: { Art: CaesarSalad, size: "salad" },
  ummali: { Art: UmmAli, size: "dish" },
  kurma: { Art: KopiSusuKurma, size: "cup" },
  cappuccino: { Art: Cappuccino, size: "cup" },
};
