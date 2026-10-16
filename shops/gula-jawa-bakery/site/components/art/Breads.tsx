import Art from "./Art";
import { C, rng, stroke } from "./geometry";

// Cheese bread and chocolate sourdough (review 4), top-down, 140×140.
const CX = 70;
const CY = 70;

const cheese = (() => {
  const rand = rng(18);
  return Array.from({ length: 18 }, () => {
    const t = rand() * Math.PI * 2;
    const rr = Math.sqrt(rand()) * 30;
    return stroke(CX + Math.cos(t) * rr, CY + Math.sin(t) * rr, rand() * Math.PI, 12 + rand() * 6);
  });
})();

export function CheeseBread({ className = "" }: { className?: string }) {
  return (
    <Art id="cheese-bread" viewBox="0 0 140 140" className={className}>
      <circle cx={CX} cy={CY} r={62} fill={C.bun} />
      <path d={cheese.join("")} stroke={C.cheese} strokeWidth="4.5" strokeLinecap="round" />
    </Art>
  );
}

export function ChocolateSourdough({ className = "" }: { className?: string }) {
  return (
    <Art id="chocolate-sourdough" viewBox="0 0 140 140" className={className}>
      <circle cx={CX} cy={CY} r={62} fill={C.sourdough} />
      <g fill="none" stroke={C.sourdoughScore} strokeWidth="5" strokeLinecap="round">
        <path d="M44 34 Q60 70 44 106" />
        <path d="M70 26 Q86 70 70 114" />
        <path d="M96 34 Q112 70 96 106" />
      </g>
    </Art>
  );
}
