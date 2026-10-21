import { c } from "@/lib/palette";

// Platter from above: dark round plate, fries with herbs, fried wontons, sliced fish cake
// and a small cup of sweet chilli dip.
export default function PlatterWalties() {
  const fries = [
    [82, 98, -24, 48],
    [92, 120, -10, 52],
    [104, 88, 18, 44],
    [110, 134, -38, 48],
    [122, 106, 8, 50],
    [86, 142, 28, 40],
    [102, 160, -14, 44],
    [124, 76, -30, 40],
    [132, 146, 40, 38],
    [76, 120, 4, 38],
    [116, 174, 62, 34],
  ];
  const herbs = [
    [90, 106],
    [110, 120],
    [102, 148],
    [120, 92],
    [82, 132],
  ];
  const wontons = [
    [194, 74],
    [224, 96],
    [190, 106],
    [218, 128],
  ];
  const fish = [
    [152, 190, 70],
    [176, 186, 58],
    [198, 176, 46],
    [218, 160, 34],
    [232, 141, 22],
  ];
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Ilustrasi platter kentang goreng, pangsit goreng, fish cake dan saus sambal di piring hitam">
      <circle cx="160" cy="120" r="98" fill={c.malam} />
      {fries.map(([x, y, r, l], i) => (
        <rect key={`f${i}`} x={x - 3.5} y={y - l / 2} width="7" height={l} rx="3" fill={c.lampu} transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {herbs.map(([x, y], i) => (
        <circle key={`h${i}`} cx={x} cy={y} r="2" fill={c.daun} />
      ))}
      {wontons.map(([x, y], i) => {
        // Fried wonton from above: a golden, crinkled skirt around a pale filled centre.
        const pts = Array.from({ length: 14 }, (_, k) => {
          const a = (Math.PI * 2 * k) / 14 + i * 0.7;
          const r = k % 2 ? 11 : 16.5;
          return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`;
        }).join(" ");
        return (
          <g key={`w${i}`}>
            <polygon points={pts} fill={c.lampu} fillOpacity="0.82" stroke={c.lampu} strokeOpacity="0.82" strokeWidth="4" strokeLinejoin="round" />
            <circle cx={x + 1} cy={y - 1} r="7" fill={c.krem} fillOpacity="0.7" />
          </g>
        );
      })}
      {fish.map(([x, y, r], i) => (
        <ellipse key={`k${i}`} cx={x} cy={y} rx="11" ry="20" fill={c.krem} stroke={c.lampu} strokeWidth="4" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      <circle cx="160" cy="128" r="23" fill={c.malam} stroke={c.krem} strokeOpacity="0.3" strokeWidth="2" />
      <circle cx="160" cy="128" r="17" fill={c.bata} />
      {[
        [154, 122],
        [166, 126],
        [158, 135],
      ].map(([x, y], i) => (
        <circle key={`d${i}`} cx={x} cy={y} r="1.8" fill={c.lampu} />
      ))}
    </svg>
  );
}
