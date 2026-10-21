// Menu drawings in the same ink hand as the shop's wall: tinta stroke 3, round caps and
// joins, one or two flat palette fills, no gradients or shadows. viewBox 240×200.
// Placeholders until the owner sends photos (see owner-checklist.md).

const T = "#161616"; // tinta
const K = "#F4F5F1"; // kapur
const J = "#F39C1E"; // jeruk
const M = "#A6DBC6"; // mint

export type Drawing = "latte" | "pisang" | "roti" | "tahu";

function Latte() {
  return (
    <>
      <ellipse cx="120" cy="154" rx="94" ry="26" fill={K} />
      <path d="M40 150c16 10 46 15 80 15s64-5 80-15" strokeWidth="2.5" />
      <path d="M181 97c27-7 35 32 1 39l-2-10c18-4 15-22-1-19Z" fill={K} />
      <path d="M58 90c2 34 18 57 42 62h41c24-5 39-28 41-62Z" fill={K} />
      <ellipse cx="120" cy="90" rx="62" ry="16" fill={K} />
      <ellipse cx="120" cy="91.5" rx="53" ry="11" fill={T} />
      <path d="M120 99.5c-13-5-17-11-11-14 4-2 8 0 11 3 3-3 7-5 11-3 6 3 2 9-11 14Z" fill={K} stroke="none" />
      <path d="M101 67c-9-9 6-14-1-25M133 65c-9-9 6-14-1-25" strokeWidth="2.5" />
    </>
  );
}

// A battered banana piece, bumpy like fried batter, centred on 0,0.
const PIECE =
  "M-48 2C-50-10-38-17-26-15c6-4 14-3 20-1 8-4 18-3 24 0 10-2 22 0 28 7 6 6 4 13-2 16-8 4-16 2-24 4-8 3-16 2-24 1-8 3-17 2-24 0-10 2-20 0-20-10Z";

function Pisang() {
  const pieces: [number, number][] = [
    [104, 102],
    [119, 130],
    [134, 158],
  ];
  return (
    <>
      <ellipse cx="120" cy="140" rx="106" ry="42" fill={K} />
      <ellipse cx="120" cy="137" rx="78" ry="28" strokeWidth="2" />
      {pieces.map(([x, y]) => (
        <g key={x} transform={`translate(${x} ${y}) rotate(-15)`}>
          <path d={PIECE} fill={J} />
          <path d="M-32-3c6 3 12 3 17 0M6-6c6 3 12 3 17 0" strokeWidth="2" />
        </g>
      ))}
      {/* shredded cheese: pale rods outlined in ink */}
      <g>
        <path
          d="M72 94l10-4M95 90l8 4M118 97l10-3M84 120l9 3M108 116l10-4M133 124l9 3M152 110l8-4M98 147l10-2M123 151l9 3M148 144l10-4M167 134l8 3"
          strokeWidth="6.5"
        />
        <path
          d="M72 94l10-4M95 90l8 4M118 97l10-3M84 120l9 3M108 116l10-4M133 124l9 3M152 110l8-4M98 147l10-2M123 151l9 3M148 144l10-4M167 134l8 3"
          stroke={K}
          strokeWidth="2.5"
        />
      </g>
      {/* condensed-milk drizzle */}
      <path d="M58 122c14-26 24 10 38-12s22 18 36-8 22 16 36-10 18 14 30-6" strokeWidth="8" />
      <path d="M58 122c14-26 24 10 38-12s22 18 36-8 22 16 36-10 18 14 30-6" stroke={K} strokeWidth="3.5" />
    </>
  );
}

function Roti() {
  return (
    <>
      <ellipse cx="120" cy="162" rx="106" ry="27" fill={K} />
      {/* back half */}
      <path d="M206 92l22-52v50l-22 52Z" fill={J} />
      <path d="M206 112l22-52v8l-22 52Z" fill={T} />
      <path d="M66 78l140 14v50L66 128Z" fill={K} />
      <path d="M66 98l140 14v8L66 106Z" fill={T} />
      <path d="M66 78l140 14 22-52Z" fill={J} />
      {/* front half: two thick slices with one filling band, cut on the diagonal */}
      <path d="M176 118l22-52v50l-22 52Z" fill={J} />
      <path d="M176 138l22-52v8l-22 52Z" fill={T} />
      <path d="M36 104l140 14v50L36 154Z" fill={K} />
      <path d="M36 124l140 14v8L36 132Z" fill={T} />
      <path d="M36 104l140 14 22-52Z" fill={J} />
      {/* grill marks and crumb */}
      <path d="M96 106l10-14M126 110l14-24M156 113l16-30" />
      <path d="M68 115h.1M132 122h.1M60 146h.1M110 152h.1M150 156h.1M98 118h.1" strokeWidth="4" />
    </>
  );
}

// Isometric fried-tofu cube with its bottom corner at x,y.
function cube(x: number, y: number, s: number, h: number) {
  const outline = `M${x} ${y}L${x - s} ${y - s / 2}V${y - s / 2 - h}L${x} ${y - s - h}L${x + s} ${y - s / 2 - h}V${y - s / 2}Z`;
  const edges = `M${x - s} ${y - s / 2 - h}L${x} ${y - h}L${x + s} ${y - s / 2 - h}M${x} ${y - h}V${y}`;
  return { outline, edges };
}

function Tahu() {
  const cubes = [
    cube(98, 131, 21, 19),
    cube(143, 127, 20, 18),
    cube(74, 153, 21, 18),
    cube(119, 158, 22, 19),
    cube(164, 150, 20, 19),
  ];
  return (
    <>
      <ellipse cx="120" cy="146" rx="106" ry="40" fill={K} />
      {/* paper liner */}
      <path d="M38 142l80-30 84 26-80 33Z" fill={K} strokeWidth="2" />
      {cubes.map((c, i) => (
        <g key={i}>
          <path d={c.outline} fill={J} />
          <path d={c.edges} strokeWidth="2.5" />
        </g>
      ))}
      <path d="M92 102h.1M100 98h.1M138 96h.1M70 124h.1M117 128h.1M126 124h.1M160 120h.1" strokeWidth="3.5" />
      {/* two green bird's-eye chillies */}
      <g transform="translate(150 176) rotate(-8)">
        <path d="M0 0c8-8 27-10 41-4C31-2 14 5 0 0Z" fill={M} />
        <path d="M41-4c4-1 7-4 8-9" />
      </g>
      <g transform="translate(176 164) rotate(-28)">
        <path d="M0 0c8-8 25-9 37-4C28-2 13 5 0 0Z" fill={M} />
        <path d="M37-4c4-1 7-4 8-9" />
      </g>
    </>
  );
}

const drawings: Record<Drawing, () => React.ReactNode> = {
  latte: Latte,
  pisang: Pisang,
  roti: Roti,
  tahu: Tahu,
};

export default function ProductIllustration({
  kind,
  label,
  className = "",
}: {
  kind: Drawing;
  label: string;
  className?: string;
}) {
  const Drawing = drawings[kind];
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label={label} className={className}>
      <g fill="none" stroke={T} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <Drawing />
      </g>
    </svg>
  );
}
