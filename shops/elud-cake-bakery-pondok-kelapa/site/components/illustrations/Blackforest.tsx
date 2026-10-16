import { Art, C, Shadow, type ArtProps } from "./Art";

const r1 = (n: number) => Math.round(n * 10) / 10;
const rim = (t: number) => [r1(120 + 76 * Math.cos(t)), r1(100 + 20 * Math.sin(t))];

export default function Blackforest(props: ArtProps) {
  const front = Array.from({ length: 12 }, (_, i) => rim(0.04 * Math.PI + (i * 0.92 * Math.PI) / 11));
  const back = Array.from({ length: 10 }, (_, i) => rim(Math.PI + 0.1 * Math.PI + (i * 0.8 * Math.PI) / 9));
  const shavings = [[84, 98, 20], [100, 104, -30], [140, 104, 40], [156, 98, -15], [112, 100, 60], [128, 108, -50], [92, 108, 10], [150, 110, 25]];
  return (
    <Art label="Ilustrasi kue Blackforest dengan krim dan ceri" viewBox="0 66 240 132" {...props}>
      <Shadow cx={124} cy={182} rx={98} ry={9} />
      <ellipse cx="120" cy="170" rx="98" ry="18" fill={C.tray} />
      <path d="M44 100V156A76 20 0 0 0 196 156V100Z" fill={C.cocoa} />
      <rect x="54" y="112" width="8" height="42" rx="4" fill={C.white} fillOpacity={0.18} />
      <ellipse cx="120" cy="100" rx="76" ry="20" fill={C.white} />
      {back.map(([x, y], i) => (
        <circle key={`b${i}`} cx={x} cy={y} r="5" fill={C.tray} />
      ))}
      {shavings.map(([x, y, a], i) => (
        <rect key={i} x={x - 5} y={y - 1.5} width="10" height="3" rx="1.5" fill={C.cocoa} transform={`rotate(${a} ${x} ${y})`} />
      ))}
      {front.map(([x, y], i) => (
        <circle key={`f${i}`} cx={x} cy={y} r="6.5" fill={C.white} />
      ))}
      {[[96, 92], [120, 86], [144, 92]].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y + 4} r="9" fill={C.tray} />
          <circle cx={x} cy={y + 2} r="9" fill={C.white} />
          <circle cx={x} cy={y - 5} r="6.5" fill={C.brick} />
        </g>
      ))}
    </Art>
  );
}
