import { Art, C, Shadow, type ArtProps } from "./Art";

const HEART = "M120 150C86 130 36 104 36 70c0-24 20-36 40-36s36 12 44 26c8-14 24-26 44-26s40 12 40 36c0 34-50 60-84 80z";

export default function PizzaCinta(props: ArtProps) {
  const cheese = [[84, 70, 11], [112, 82, 9], [148, 66, 10], [160, 92, 9], [96, 102, 10], [130, 108, 9], [74, 90, 7]];
  const dots = [[100, 70], [132, 76], [166, 76], [84, 108], [116, 98], [146, 98], [122, 124]];
  return (
    <Art label="Ilustrasi Pizza Cinta berbentuk hati" {...props}>
      <Shadow cy={156} rx={84} />
      <path d={HEART} fill={C.crust} />
      <path d={HEART} transform="translate(24 18) scale(0.8)" fill={C.brick} />
      {cheese.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={C.lemon} />
      ))}
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill={C.cocoa} />
      ))}
      <ellipse cx="66" cy="50" rx="14" ry="5" transform="rotate(-24 66 50)" fill={C.white} fillOpacity={0.3} />
    </Art>
  );
}
