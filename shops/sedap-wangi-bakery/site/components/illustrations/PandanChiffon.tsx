import Plate from "./Plate";

const holes: [number, number, number][] = [
  [96, 74, 2.6], [118, 66, 2], [140, 80, 3], [104, 98, 2.2], [130, 104, 2.8],
  [92, 120, 2], [150, 116, 2.4], [116, 86, 1.6], [146, 60, 1.8], [112, 116, 1.8],
];

export default function PandanChiffon() {
  return (
    <svg viewBox="24 22 192 128" aria-hidden="true" focusable="false">
      <Plate />
      <path d="M80 133V58Q80 46 92 44L156 37Q168 36 168 48V133Z" fill="#4E8A3E" />
      <path d="M80 133V63Q80 53 90 51L153 45Q160 44 160 52V133Z" fill="#8CC37A" />
      {holes.map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="#A9D697" />
      ))}
    </svg>
  );
}
