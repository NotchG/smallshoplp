// The pavilion's tall arched window: a solid white frame, a fine grid of mullions like the
// pavilion's glass wall, and a few panes lit amber from inside. `.arch-panes` is the layer
// "Lampu menyala" warms on load. Geometry: 300x400, outer arch r=149 around (150,150).

const C = 150;
const RO = 149; // outer frame
const RI = 143; // inner edge of the frame (6px white band)
const inner = (x: number) => C - Math.sqrt(RI * RI - (x - C) * (x - C)); // glass top at x
const half = (y: number) => Math.sqrt(RI * RI - (C - y) * (C - y));     // glass half width at y

const L = C - RI; // 7
const R = C + RI; // 293
const COLS = [L, 78.5, 150, 221.5, R];
const ROWS = [0, 80, 150, 212, 274, 336, 393];

// Lit panes: [col, row]. Three bright panes read as lit rooms behind dark glass;
// half-lit panes read as brown paint, so there are none.
const LIT: [number, number][] = [
  [3, 1],
  [1, 2],
  [2, 4],
];

const r = (n: number) => Math.round(n * 10) / 10;

export default function ArchWindow({ className = "" }: { className?: string }) {
  const outer = `M1 399V${C}A${RO} ${RO} 0 0 1 299 ${C}V399Z`;
  const glass = `M${L} 393V${C}A${RI} ${RI} 0 0 1 ${R} ${C}V393Z`;
  return (
    <svg viewBox="0 0 300 400" className={`ink-light ${className}`} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="hero-glass-clip">
          <path d={glass} />
        </clipPath>
      </defs>
      {/* white frame band, then the glass inside it */}
      <path d={outer} className="f-bingkai" />
      <path d={glass} className="f-window" />
      <g className="arch-panes" clipPath="url(#hero-glass-clip)">
        {LIT.map(([c, row]) => (
          <rect
            key={`${c}-${row}`}
            x={COLS[c]}
            y={ROWS[row]}
            width={COLS[c + 1] - COLS[c]}
            height={ROWS[row + 1] - ROWS[row]}
            className="f-pane-hi"
          />
        ))}
      </g>
      <g className="ln o-mullion">
        <path d={`M78.5 ${r(inner(78.5))}V393M150 ${C - RI}V393M221.5 ${r(inner(221.5))}V393`} />
        <path d={`M${r(C - half(80))} 80H${r(C + half(80))}`} />
        <path d={`M${L} 150H${R}M${L} 212H${R}M${L} 274H${R}M${L} 336H${R}`} />
      </g>
    </svg>
  );
}
