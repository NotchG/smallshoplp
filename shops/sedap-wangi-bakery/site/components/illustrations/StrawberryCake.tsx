import Plate from "./Plate";

export default function StrawberryCake() {
  return (
    <svg viewBox="24 22 192 128" aria-hidden="true" focusable="false">
      <Plate />
      <rect x="62" y="72" width="116" height="61" fill="#F6E3A1" />
      <rect x="62" y="90" width="116" height="8" fill="#F2A7B5" />
      <rect x="62" y="112" width="116" height="8" fill="#F2A7B5" />
      <rect x="60" y="62" width="120" height="14" rx="4" fill="#F2A7B5" />
      <circle cx="74" cy="60" r="6.5" fill="#FFF4D6" />
      <circle cx="166" cy="60" r="6.5" fill="#FFF4D6" />
      <path d="M120 62C106 56 104 40 112 35C116 33 119 35 120 37C121 35 124 33 128 35C136 40 134 56 120 62Z" fill="#D9475B" />
      <path d="M120 37L112 28L119 32L120 25L121 32L128 28Z" fill="#4E8A3E" />
      {[[114, 44], [124, 44], [118, 52], [126, 52], [112, 51]].map(([x, y]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="1.2" ry="1.8" fill="#FFF4D6" />
      ))}
    </svg>
  );
}
