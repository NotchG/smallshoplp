import { Art, C, Shadow, type ArtProps } from "./Art";

export default function SoftSourdough(props: ArtProps) {
  const flour = [[86, 74], [104, 66], [128, 64], [150, 70], [168, 82], [76, 96], [178, 104], [96, 112], [146, 116], [120, 104], [62, 116], [186, 124]];
  return (
    <Art label="Ilustrasi Soft Sourdough" {...props}>
      <Shadow cy={148} rx={90} />
      <path d="M40 138C34 92 70 56 120 56s86 36 80 82c-30 10-130 10-160 0z" fill={C.crust} />
      <ellipse cx="82" cy="80" rx="20" ry="9" transform="rotate(-28 82 80)" fill={C.white} fillOpacity={0.22} />
      <path d="M66 100c22-30 74-38 108-14-34-8-74-6-108 14z" fill={C.crumb} />
      {flour.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 ? 2 : 2.6} fill={C.white} />
      ))}
    </Art>
  );
}
