import { c } from "@/lib/palette";

// Soto Betawi from above: dark bowl, creamy amber broth, beef, tomato, scallion; lime wedge beside.
export default function SotoBetawi() {
  const beef = [
    [128, 92, -18],
    [170, 84, 22],
    [112, 136, 34],
    [186, 132, -12],
    [150, 154, 8],
  ];
  const tomato = [
    [148, 114],
    [196, 104],
    [124, 168],
  ];
  const scallion = [
    [104, 108],
    [140, 76],
    [176, 158],
    [206, 140],
    [160, 128],
    [118, 154],
  ];
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Ilustrasi semangkuk Soto Betawi dilihat dari atas">
      <circle cx="152" cy="120" r="94" fill={c.malam} />
      <circle cx="152" cy="120" r="80" fill={c.krem} />
      <circle cx="152" cy="120" r="80" fill={c.lampu} fillOpacity="0.62" />
      {[
        [110, 88, 9, 4],
        [196, 82, 7, 3.4],
        [178, 176, 10, 4.4],
        [96, 150, 6, 3],
      ].map(([x, y, rx, ry], i) => (
        <ellipse key={`o${i}`} cx={x} cy={y} rx={rx} ry={ry} fill={c.lampu} />
      ))}
      {beef.map(([x, y, r], i) => (
        <rect key={`b${i}`} x={x - 12} y={y - 8} width="24" height="16" rx="5" fill={c.kayu} transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {tomato.map(([x, y], i) => (
        <g key={`t${i}`}>
          <circle cx={x} cy={y} r="13" fill={c.bata} />
          <circle cx={x} cy={y} r="8" fill={c.krem} fillOpacity="0.32" />
        </g>
      ))}
      {scallion.map(([x, y], i) => (
        <circle key={`s${i}`} cx={x} cy={y} r="4" fill="none" stroke={c.daun} strokeWidth="2.6" />
      ))}
      <path d="M268 206A26 26 0 0 1 268 154Z" fill={c.daun} transform="rotate(-30 268 180)" />
      <path d="M266 202A22 22 0 0 1 266 158Z" fill={c.krem} fillOpacity="0.55" transform="rotate(-30 268 180)" />
    </svg>
  );
}
