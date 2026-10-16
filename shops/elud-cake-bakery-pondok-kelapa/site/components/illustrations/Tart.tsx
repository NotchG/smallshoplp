import { Art, C, Shadow, type ArtProps } from "./Art";

const r1 = (n: number) => Math.round(n * 10) / 10;
// point on the cake's top rim (cx 120, cy 96, rx 84, ry 22); t in radians, 0..PI = front
const rim = (t: number, dy = 0) => [r1(120 + 84 * Math.cos(t)), r1(96 + 22 * Math.sin(t) + dy)];

export default function Tart(props: ArtProps) {
  const back = Array.from({ length: 11 }, (_, i) => rim(Math.PI + 0.12 * Math.PI + (i * 0.76 * Math.PI) / 10));
  const drips = [44, 58, 72, 86, 100, 114, 128, 142, 156, 170, 184, 196].map((x, i) => {
    const y = 96 + 22 * Math.sqrt(1 - ((x - 120) / 84) ** 2) + 4;
    return { x, y: r1(y), h: [12, 20, 14, 24, 10, 18][i % 6] };
  });
  return (
    <Art label="Ilustrasi tart ulang tahun dengan lelehan cokelat, kipas cokelat dan ceri" viewBox="0 42 240 156" {...props}>
      <Shadow cx={124} cy={184} rx={104} ry={9} />
      <ellipse cx="120" cy="172" rx="106" ry="20" fill={C.tray} />
      <path d="M36 96V160A84 22 0 0 0 204 160V96Z" fill={C.tray} fillOpacity={0.7} />
      <rect x="46" y="112" width="9" height="44" rx="4.5" fill={C.white} fillOpacity={0.8} />
      <ellipse cx="120" cy="96" rx="84" ry="22" fill={C.white} />
      {back.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={C.tray} />
      ))}
      <path d="M36 96A84 22 0 0 0 204 96V103A84 22 0 0 1 36 103Z" fill={C.cocoa} />
      {drips.map(({ x, y, h }) => (
        <rect key={x} x={x - 4} y={y - 4} width="8" height={h} rx="4" fill={C.cocoa} />
      ))}
      <path d="M66 86A32 32 0 0 1 130 86Z" fill={C.fan} />
      <path d="M98 86 74 66M98 86 90 56M98 86 108 56M98 86 122 66" stroke={C.crumb} strokeWidth="3" strokeLinecap="round" />
      <line x1="138" y1="100" x2="184" y2="52" stroke={C.cocoa} strokeWidth="5" strokeLinecap="round" />
      <circle cx="104" cy="97" r="11" fill={C.tray} />
      <circle cx="104" cy="94" r="11" fill={C.white} />
      <circle cx="130" cy="99" r="11" fill={C.tray} />
      <circle cx="130" cy="96" r="11" fill={C.white} />
      <circle cx="104" cy="86" r="7" fill={C.brick} />
      <circle cx="130" cy="88" r="7" fill={C.brick} />
    </Art>
  );
}
