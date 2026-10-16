import { c } from "@/components/art/palette";
import GardenLamp from "@/components/art/GardenLamp";

// Full-bleed strip above the footer: the garden after dark, six lamps lit (reviews 1, 2).
// Sliced from the centre on narrow screens.
const LAMPS = [120, 360, 600, 840, 1080, 1320];
const SHRUBS: [number, number, number][] = [
  [30, 150, 40], [74, 140, 34], [250, 148, 30], [286, 138, 38], [470, 146, 32],
  [700, 140, 40], [744, 150, 30], [960, 146, 36], [1200, 140, 38], [1236, 152, 28],
  [1420, 144, 40],
];
const STONES: [number, number, number, number][] = [
  [196, 162, 40, 14], [430, 166, 30, 10], [520, 160, 46, 16], [760, 168, 34, 10],
  [930, 162, 44, 15], [1010, 170, 26, 8], [1180, 166, 36, 12], [1400, 168, 30, 10],
];

export default function GardenStrip({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 66 1440 114"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label={label}
      className="garden-strip"
    >
      <rect y="152" width="1440" height="28" fill={c.wall} opacity="0.05" />
      <g fill={c.leaf}>
        {SHRUBS.map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} />
        ))}
      </g>
      {LAMPS.map((x, i) => (
        <GardenLamp key={x} x={x} y={i % 2 ? 158 : 166} s={i % 2 ? 0.85 : 1} />
      ))}
      <g fill={c.concrete} opacity="0.85">
        {STONES.map(([x, y, rx, ry]) => (
          <ellipse key={`${x}-${y}`} cx={x} cy={y} rx={rx} ry={ry} />
        ))}
      </g>
    </svg>
  );
}
