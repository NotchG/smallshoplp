import Plate from "./Plate";

export default function LapisKopi() {
  const top = 60;
  const h = 72;
  const n = 12;
  const step = h / n;
  return (
    <svg viewBox="24 22 192 128" aria-hidden="true" focusable="false">
      <Plate />
      {Array.from({ length: n }, (_, i) => (
        <rect
          key={i}
          x="56"
          y={top + i * step}
          width="128"
          height={step + 0.4}
          fill={i % 2 === 0 ? "#7A4A2E" : "#D8B48A"}
        />
      ))}
      <rect x="56" y={top - 4} width="128" height="6" rx="2" fill="#5E3820" />
    </svg>
  );
}
