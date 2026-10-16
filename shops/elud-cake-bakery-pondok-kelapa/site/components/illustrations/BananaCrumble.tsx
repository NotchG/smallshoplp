import Bag from "./Bag";
import { C, type ArtProps } from "./Art";

export default function BananaCrumble(props: ArtProps) {
  const dots = [[78, 82], [92, 72], [112, 70], [146, 74], [162, 86], [86, 98], [150, 100], [170, 104], [70, 104], [134, 108], [114, 112], [96, 114]];
  return (
    <Bag label="Ilustrasi Roti Banana Crumble dalam kantong" {...props}>
      <ellipse cx="118" cy="98" rx="76" ry="44" fill={C.crust} />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 4} fill={C.crumb} />
      ))}
      <circle cx="106" cy="90" r="13" fill={C.lemon} />
      <circle cx="134" cy="92" r="13" fill={C.lemon} />
      <circle cx="106" cy="90" r="4" fill={C.crumb} />
      <circle cx="134" cy="92" r="4" fill={C.crumb} />
    </Bag>
  );
}
