// Nasi goreng spesial mantan and carbonara from above, on the same awan plate with a dongker rim.
// Flat fills, palette + drawing tones (kopi, susu, nasi). The fried egg is a guess [MOCKUP].
const KOPI = "#8a5a3c";
const SUSU = "#e8d6bc";
const NASI = "#c98a4b";

function Plate() {
  return (
    <>
      <circle cx="120" cy="90" r="80" fill="#fdfdfb" stroke="#1e3050" strokeWidth="3" />
      <circle cx="120" cy="90" r="63" fill="none" stroke="#eeece6" strokeWidth="2.5" />
    </>
  );
}

// Deterministic scatter so the static HTML and the client render match.
function scatter(n: number, cx: number, cy: number, rx: number, ry: number, seed: number) {
  const pts: [number, number][] = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < n; i++) {
    const a = rand() * Math.PI * 2;
    const r = Math.sqrt(rand());
    pts.push([+(cx + Math.cos(a) * rx * r).toFixed(1), +(cy + Math.sin(a) * ry * r).toFixed(1)]);
  }
  return pts;
}

const riceFlecks = scatter(26, 118, 96, 40, 34, 7);
const chili = scatter(5, 118, 98, 36, 30, 31);

export function NasiGoreng({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 180"
      role="img"
      aria-label="Ilustrasi nasi goreng spesial mantan dari atas, dengan telur ceplok dan kerupuk di piring putih."
    >
      <Plate />
      {/* kerupuk on the side */}
      <path
        d="M54 112 c-4 -8 2 -16 8 -16 c2 -6 12 -8 16 -2 c6 -2 12 4 10 10 c6 4 4 14 -2 16 c-2 6 -12 8 -16 2 c-6 2 -14 -2 -12 -8 c-4 -1 -5 -1 -4 -2z"
        fill={SUSU}
      />
      {/* rice mound */}
      <path
        d="M76 98 C70 72 92 50 120 50 C148 48 170 66 168 94 C166 122 146 140 118 140 C92 140 80 122 76 98 Z"
        fill={NASI}
      />
      <g fill={KOPI}>
        {riceFlecks.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.6 : 1.9} />
        ))}
      </g>
      <g fill="#bf3328">
        {chili.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.2" />
        ))}
      </g>
      {/* fried egg */}
      <path
        d="M108 70 C112 54 140 50 154 60 C166 70 160 92 142 96 C124 100 104 90 108 70 Z"
        fill="#fdfdfb"
      />
      <circle cx="135" cy="75" r="11" fill="#e9b44c" />
    </svg>
  );
}

function spiral(cx: number, cy: number, turns: number, r0: number, r1: number) {
  const steps = 160;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = t * turns * Math.PI * 2;
    const r = r0 + (r1 - r0) * t;
    const x = (cx + Math.cos(a) * r).toFixed(1);
    const y = (cy + Math.sin(a) * r * 0.92).toFixed(1);
    d += `${i === 0 ? "M" : "L"}${x} ${y} `;
  }
  return d.trim();
}

const pepper = scatter(18, 120, 90, 46, 40, 101);
const beef: [number, number, number][] = [
  [96, 74, -20],
  [146, 82, 30],
  [112, 116, 10],
  [138, 108, -40],
];

export function Carbonara({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 180"
      role="img"
      aria-label="Ilustrasi carbonara dari atas: pasta krem bergulung dengan taburan lada di piring putih."
    >
      <Plate />
      {/* pasta nest */}
      <ellipse cx="120" cy="90" rx="54" ry="50" fill={SUSU} />
      <path
        d={spiral(120, 90, 4.2, 4, 50)}
        fill="none"
        stroke={NASI}
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g fill={KOPI}>
        {beef.map(([x, y, r], i) => (
          <rect key={i} x={x - 7} y={y - 3.5} width="14" height="7" rx="2" transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </g>
      <g fill="#1e3050">
        {pepper.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.6" />
        ))}
      </g>
    </svg>
  );
}
