import { c } from "@/components/art/palette";

// A low garden post lamp, lit: oak head, flat oak halo and a pool of light on the ground.
// (x, y) is where the post meets the ground. Flat shapes only: no glows or gradients.
export default function GardenLamp({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="2" rx="46" ry="8" fill={c.oak} opacity="0.12" />
      <circle cx="0" cy="-58" r="30" fill={c.oak} opacity="0.14" />
      <rect x="-3" y="-50" width="6" height="52" fill={c.concrete} opacity="0.55" />
      <rect x="-9" y="-68" width="18" height="20" fill={c.oak} />
      <rect x="-12" y="-73" width="24" height="5" fill={c.concrete} opacity="0.75" />
    </g>
  );
}
