import { useId } from "react";
import { c } from "@/lib/palette";

const hex = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i + Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

export { hex };

// Cookies & cream ice blend from above, on a hexagonal wooden coaster: grey blend,
// a scoop of ice cream, cookie chunks and a striped wafer stick leaning out.
export default function CookiesCream() {
  const id = useId().replace(/:/g, "");
  const chunks = [
    "M178 132l14-6 9 9-4 13-15 2-7-9z",
    "M196 108l12 1 5 10-8 9-11-4z",
    "M160 156l11-3 7 8-5 10-12-1z",
    "M206 146l9 2 3 9-8 6-8-6z",
    "M182 170l8-2 5 7-4 7-9-2z",
    "M214 124l7-1 4 7-5 6-7-3z",
  ];
  const specks = [
    [126, 150],
    [140, 168],
    [118, 128],
    [208, 90],
    [150, 184],
    [222, 112],
    [134, 82],
    [190, 86],
  ];
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Ilustrasi gelas Cookies & Cream Blend dengan es krim, remahan cookies dan wafer stick, dilihat dari atas">
      <defs>
        <pattern id={`wafer-${id}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(50)">
          <rect width="14" height="14" fill={c.krem} />
          <rect width="7" height="14" fill={c.kayu} />
        </pattern>
      </defs>
      <polygon points={hex(170, 122, 100)} fill={c.kayu} />
      <circle cx="170" cy="122" r="80" fill={c.krem} fillOpacity="0.9" />
      <circle cx="170" cy="122" r="73" fill={c.krem} />
      <circle cx="170" cy="122" r="73" fill={c.malam} fillOpacity="0.24" />
      {specks.map(([x, y], i) => (
        <circle key={`s${i}`} cx={x} cy={y} r="2.4" fill={c.malam} fillOpacity="0.8" />
      ))}
      {chunks.map((d, i) => (
        <path key={`c${i}`} d={d} fill={c.malam} />
      ))}
      <rect x="0" y="-11" width="140" height="22" rx="11" fill={`url(#wafer-${id})`} transform="translate(150 116) rotate(214)" />
      <circle cx="146" cy="108" r="31" fill={c.krem} />
      <circle cx="146" cy="108" r="31" fill={c.lampu} fillOpacity="0.16" />
      {[
        [136, 98],
        [152, 96],
        [146, 114],
        [160, 108],
      ].map(([x, y], i) => (
        <circle key={`k${i}`} cx={x} cy={y} r="2.2" fill={c.malam} fillOpacity="0.85" />
      ))}
    </svg>
  );
}
