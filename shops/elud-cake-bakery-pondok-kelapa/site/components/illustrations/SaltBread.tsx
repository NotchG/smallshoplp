import { Art, C, Shadow, type ArtProps } from "./Art";

export default function SaltBread(props: ArtProps) {
  const salt = [[82, 78, 20], [100, 70, -15], [122, 68, 35], [144, 72, -30], [164, 80, 10], [92, 92, -40], [134, 86, 25], [114, 84, 0], [156, 94, 45]];
  return (
    <Art label="Ilustrasi Salt Bread Original" {...props}>
      <Shadow cy={148} rx={90} />
      <ellipse cx="120" cy="104" rx="88" ry="40" fill={C.crust} />
      <path d="M80 68q-14 36 0 72M116 64q-12 40 0 80M152 66q-12 38 0 76" stroke={C.cocoa} strokeOpacity={0.22} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M58 92q40-26 104-22" stroke={C.white} strokeOpacity={0.5} strokeWidth="7" strokeLinecap="round" fill="none" />
      {salt.map(([x, y, a], i) => (
        <rect key={i} x={x - 3} y={y - 2} width="6" height="4" rx="1" fill={C.white} transform={`rotate(${a} ${x} ${y})`} />
      ))}
    </Art>
  );
}
