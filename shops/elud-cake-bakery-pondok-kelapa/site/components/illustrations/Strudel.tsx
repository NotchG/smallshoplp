import { Art, C, Shadow, type ArtProps } from "./Art";

export default function Strudel(props: ArtProps) {
  const lattice = [0, 1, 2, 3, 4].flatMap((i) => [
    [50 + 26 * i, 78, 78 + 26 * i, 112],
    [78 + 26 * i, 78, 50 + 26 * i, 112],
  ]);
  return (
    <Art label="Ilustrasi Strudel" {...props}>
      <Shadow cy={148} rx={94} />
      <rect x="30" y="94" width="180" height="46" rx="14" fill={C.crust} />
      <rect x="30" y="94" width="180" height="46" rx="14" fill={C.ink} fillOpacity={0.16} />
      <rect x="30" y="64" width="180" height="62" rx="14" fill={C.crust} />
      <rect x="44" y="74" width="152" height="42" rx="8" fill={C.brick} />
      {lattice.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.crumb} strokeWidth="7" strokeLinecap="round" />
      ))}
      <rect x="40" y="68" width="60" height="4" rx="2" fill={C.white} fillOpacity={0.35} />
    </Art>
  );
}
