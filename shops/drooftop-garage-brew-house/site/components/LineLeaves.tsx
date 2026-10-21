import { daisy, fern, splitLeaf } from "./art/geom";

// White single-line botanicals, like the drawings on the garage's orange wall.
// Decorative only. Never placed behind text.
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Paths({ d }: { d: string[] }) {
  return (
    <>
      {d.map((p, i) => (
        <path key={i} d={p} {...stroke} />
      ))}
    </>
  );
}

export function LeavesLeft({ className = "" }: { className?: string }) {
  const leaf = splitLeaf([96, 360], [92, 300], [112, 236], [150, 62], [28, 214], [34, 92], [236, 96], [214, 224]);
  const f = fern([200, 360], [236, 230], [204, 104], 11, 46);
  const small = fern([40, 360], [22, 320], [34, 268], 5, 26);
  return (
    <svg viewBox="0 0 260 360" width="260" height="360" className={className} aria-hidden="true" focusable="false">
      <Paths d={leaf} />
      <Paths d={f} />
      <Paths d={small} />
    </svg>
  );
}

export function LeavesRight({ className = "" }: { className?: string }) {
  const big = daisy([86, 360], [70, 250], [96, 132], 24);
  const f = fern([184, 360], [150, 220], [182, 70], 12, 44);
  const small = daisy([232, 360], [240, 300], [224, 236], 15, 10);
  return (
    <svg viewBox="0 0 260 360" width="260" height="360" className={className} aria-hidden="true" focusable="false">
      <Paths d={big.paths} />
      <circle cx={big.centre[0]} cy={big.centre[1]} r={big.r} {...stroke} />
      <Paths d={f} />
      <Paths d={small.paths} />
      <circle cx={small.centre[0]} cy={small.centre[1]} r={small.r} {...stroke} />
    </svg>
  );
}

export function Sprig({ className = "" }: { className?: string }) {
  const f = fern([60, 112], [74, 64], [56, 14], 6, 30);
  return (
    <svg viewBox="0 0 120 112" width="120" height="112" className={className} aria-hidden="true" focusable="false">
      <Paths d={f} />
    </svg>
  );
}
