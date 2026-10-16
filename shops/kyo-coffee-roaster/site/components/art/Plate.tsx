import { c, dots, ridges, speckles } from "@/components/art/palette";

// The ridged, speckled stoneware plate from photo 3, seen from slightly above.
// Shared by the pecan tart and the apple tart.
export default function Plate({
  cx,
  cy,
  rx,
  ry,
  seed = 7,
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  seed?: number;
}) {
  const depth = Math.round(ry * 0.08);
  const wellX = rx * 0.8;
  const wellY = ry * 0.8;
  return (
    <g>
      <ellipse cx={cx} cy={cy + depth + 3} rx={rx * 0.98} ry={ry * 0.98} fill={c.ink} opacity="0.12" />
      <ellipse cx={cx} cy={cy + depth} rx={rx} ry={ry} fill={c.concrete} />
      <ellipse cx={cx} cy={cy + depth} rx={rx} ry={ry} fill={c.ink} opacity="0.22" />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={c.concrete} />
      <ellipse cx={cx} cy={cy + 2} rx={wellX} ry={wellY} fill={c.ink} opacity="0.07" />
      <path
        d={ridges(cx, cy, [wellX + rx * 0.04, wellY + ry * 0.04], [rx * 0.96, ry * 0.95], 44)}
        stroke={c.ink}
        strokeOpacity="0.2"
        strokeWidth={Math.max(2, rx * 0.022)}
        strokeLinecap="round"
      />
      <path
        d={dots(speckles(Math.round(rx * 0.32), cx, cy, rx * 0.94, ry * 0.92, seed))}
        stroke={c.ink}
        strokeOpacity="0.25"
        strokeWidth={Math.max(1.8, rx * 0.016)}
        strokeLinecap="round"
      />
    </g>
  );
}
