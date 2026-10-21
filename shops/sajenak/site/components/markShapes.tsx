// Geometry of Sajenak's clinking-cups mark, redrawn from the logo on owner-2 (placeholder
// until the owner sends the original file). viewBox 0 0 160 160, stroke = currentColor.

// One lidded takeaway cup, drawn upright with its base centre at (0, 0).
export function Cup({ dashes = 3 }: { dashes?: 2 | 3 }) {
  return (
    <>
      <path d="M-17 -27 L-14.5 0 H14.5 L17 -27" />
      <rect x={-27} y={-37} width={54} height={10} rx={2.5} />
      <path d="M-21.5 -37 L-17 -49.5 H17 L21.5 -37" />
      {dashes === 3 ? <path d="M-9 -20.5 h3.5 M-1.75 -20.5 h3.5 M5.5 -20.5 h3.5" /> : <path d="M-6 -20.5 h3.5 M2.5 -20.5 h3.5" />}
    </>
  );
}

// Final pose of each cup (the logo as printed).
export const CUP_L = "translate(53 77) rotate(-27)";
export const CUP_R = "translate(100 79) rotate(2)";

// The arms / hills that hold the cups.
export const HILLS = [
  "M5 113 C 11 100, 17 88, 26 78 L 40 83.6",
  "M66 70.4 C 75 69, 82.5 76, 80.5 87.5 C 78.5 101, 60 114, 34 132",
  "M85 79 L 80.8 88",
  "M80.8 88 C 84 104, 98 116.5, 118 117.5 C 130 118, 138 116.5, 146 120",
  "M115.5 70 C 127 69.5, 139 81, 153 88",
];

// Six spark strokes, as on the logo: three above the right cup, three below the hills.
export const SPARKS = [
  "M97.5 5 V 17.5",
  "M124.5 8 L 120.5 19.5",
  "M145.5 21 L 137.5 31.5",
  "M62.5 125.5 L 54.5 134.5",
  "M83.5 136.5 L 80 148",
  "M103 138.5 V 151",
];

// Static copy of the whole mark (used as the small glyph printed on each drawn cup).
export function MarkStatic({ sparks = true }: { sparks?: boolean }) {
  return (
    <>
      <g transform={CUP_L}>
        <Cup dashes={2} />
      </g>
      <g transform={CUP_R}>
        <Cup dashes={3} />
      </g>
      {HILLS.map((d) => (
        <path key={d} d={d} />
      ))}
      {sparks && SPARKS.map((d) => <path key={d} d={d} />)}
    </>
  );
}
