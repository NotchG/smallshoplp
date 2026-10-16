// Kopi latte from above, as it's served (photo-3, reference only): a clear glass with a heart
// in the foam on a white saucer with a jago rim and two painted roosters (dongker tail, jago
// body and comb), the classic "ayam jago" tableware. Flat fills, palette + drawing tones.
const KOPI = "#8a5a3c";
const SUSU = "#e8d6bc";

// A brush-painted rooster facing right, about 88 x 74 units around its body.
function Rooster({ x, y, s = 1, flip = false }: { x: number; y: number; s?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      {/* tail: sweeping brush strokes */}
      <g fill="none" stroke="#1e3050" strokeWidth="7" strokeLinecap="round">
        <path d="M-2 4 C-14 -2 -30 -2 -42 6" />
        <path d="M-2 0 C-8 -18 -24 -28 -40 -24" />
        <path d="M0 -2 C-2 -24 -14 -38 -30 -42" />
        <path d="M2 -4 C6 -26 -2 -44 -14 -50" />
      </g>
      {/* body */}
      <path d="M-6 -2 C2 -12 22 -16 32 -6 C38 4 28 20 10 20 C-4 20 -10 8 -6 -2 Z" fill="#bf3328" />
      <path d="M6 6 C12 12 20 12 25 6" fill="none" stroke="#1e3050" strokeWidth="3" strokeLinecap="round" />
      {/* head, comb, beak, wattle, eye */}
      <circle cx="30" cy="-16" r="8.5" fill="#bf3328" />
      <g fill="#bf3328">
        <circle cx="25" cy="-26" r="4.2" />
        <circle cx="30.5" cy="-28" r="4.2" />
        <circle cx="36" cy="-25" r="3.6" />
        <circle cx="36" cy="-8" r="3.4" />
      </g>
      <polygon points="37.5,-19 46,-15.5 37.5,-12.5" fill="#e9b44c" />
      <circle cx="32" cy="-17.5" r="1.8" fill="#fdfdfb" />
    </g>
  );
}

export default function LatteRooster({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      role="img"
      aria-label="Ilustrasi kopi latte dari atas: gelas bening dengan gambar hati di busanya, di atas lepek putih bermotif ayam jago."
    >
      {/* saucer */}
      <circle cx="200" cy="200" r="178" fill="#fdfdfb" />
      <circle cx="200" cy="200" r="173" fill="none" stroke="#bf3328" strokeWidth="9" />
      <circle cx="200" cy="200" r="114" fill="none" stroke="#eeece6" strokeWidth="4" />
      <Rooster x={65} y={214} s={0.68} />
      <Rooster x={336} y={192} s={0.68} flip />

      {/* glass rim seen from above */}
      <circle cx="200" cy="200" r="106" fill="#1e3050" opacity="0.08" />
      <circle cx="200" cy="200" r="97" fill={KOPI} />
      <circle cx="200" cy="200" r="88" fill={SUSU} opacity="0.55" />
      {/* the heart in the foam */}
      <g transform="translate(203 194) rotate(-8) scale(0.86)" fill="#fdfdfb">
        <path d="M0 40 C-14 30 -60 4 -60 -22 C-60 -44 -40 -54 -24 -52 C-12 -50 -4 -42 0 -32 C4 -42 12 -50 24 -52 C40 -54 60 -44 60 -22 C60 4 14 30 0 40 Z" />
        <polygon points="-2.4,36 2.4,36 0.6,60 -0.6,60" />
      </g>
    </svg>
  );
}
