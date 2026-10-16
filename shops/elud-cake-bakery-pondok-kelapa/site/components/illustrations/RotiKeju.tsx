import Bag from "./Bag";
import { C, type ArtProps } from "./Art";

export default function RotiKeju(props: ArtProps) {
  // short cheese shreds at varied angles: x1 y1 x2 y2
  const shreds = [
    [70, 92, 84, 84], [88, 76, 100, 86], [104, 70, 120, 74], [126, 78, 138, 70], [144, 80, 160, 84],
    [160, 96, 172, 90], [78, 106, 94, 102], [100, 94, 112, 102], [118, 88, 132, 94], [138, 104, 152, 98],
    [112, 110, 126, 114], [92, 116, 104, 112],
  ];
  return (
    <Bag label="Ilustrasi roti keju dalam kantong" {...props}>
      <ellipse cx="118" cy="98" rx="76" ry="44" fill={C.crust} />
      {shreds.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.lemon} strokeWidth={5} strokeLinecap="round" />
      ))}
    </Bag>
  );
}
