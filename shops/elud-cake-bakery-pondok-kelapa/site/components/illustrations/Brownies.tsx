import { Art, C, Shadow, type ArtProps } from "./Art";

export default function Brownies(props: ArtProps) {
  return (
    <Art label="Ilustrasi kotak kuning Brownies Bakar Spesial" {...props}>
      <Shadow cx={126} cy={150} rx={98} ry={9} />
      <rect x="36" y="78" width="130" height="68" fill={C.lemon} />
      <rect x="36" y="108" width="130" height="18" fill={C.cocoa} />
      <rect x="50" y="88" width="62" height="12" rx="3" fill={C.white} />
      <polygon points="166,78 204,56 204,124 166,146" fill={C.lemon} />
      <polygon points="166,108 204,86 204,104 166,126" fill={C.cocoa} />
      <polygon points="166,78 204,56 204,124 166,146" fill={C.ink} fillOpacity={0.16} />
      <polygon points="36,78 74,56 204,56 166,78" fill={C.lemon} />
      <polygon points="36,78 74,56 204,56 166,78" fill={C.white} fillOpacity={0.45} />
    </Art>
  );
}
