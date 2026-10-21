import DrinkGlass from "@/components/DrinkGlass";
import { drinks } from "@/content";
import { ill } from "@/lib/palette";

const N = ill.navy;

// The white arch onto the bar: pendant lamps, the hero Axelle glass on the pine counter
// (diagonal planks), and two jars of beans. Positioned by .arch-* classes in globals.css.
export default function Arch() {
  const axelle = drinks.find((d) => d.id === "axelle")!;
  return (
    <div className="arch">
      <Lamps />
      <div className="arch-counter" aria-hidden="true" />
      <BeanJar className="arch-jar arch-jar-l" />
      <BeanJar className="arch-jar arch-jar-r" />
      <DrinkGlass id="hero-axelle" spec={axelle.glass} className="arch-glass" />
    </div>
  );
}

function Lamp({ x, drop, fill }: { x: number; drop: number; fill: string }) {
  const y = drop;
  return (
    <g>
      <path d={`M ${x} -10 V ${y}`} stroke={N} strokeWidth="2.5" />
      <rect x={x - 5} y={y - 2} width="10" height="9" rx="2" fill={fill} stroke={N} strokeWidth="2.5" />
      <path
        d={`M ${x - 30} ${y + 30} C ${x - 27} ${y + 12}, ${x - 14} ${y + 6}, ${x} ${y + 6} C ${x + 14} ${y + 6}, ${x + 27} ${y + 12}, ${x + 30} ${y + 30} Z`}
        fill={fill}
        stroke={N}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d={`M ${x - 9} ${y + 31} A 9 7 0 0 0 ${x + 9} ${y + 31}`} fill={ill.lemon} stroke={N} strokeWidth="2" />
    </g>
  );
}

function Lamps() {
  return (
    <svg className="arch-lamps ill" viewBox="0 0 400 160" aria-hidden="true" focusable="false">
      <Lamp x={92} drop={78} fill={ill.pineDeep} />
      <Lamp x={200} drop={30} fill={ill.steel} />
      <Lamp x={308} drop={78} fill={ill.steel} />
    </svg>
  );
}

function BeanJar({ className = "" }: { className?: string }) {
  const beans: [number, number, number][] = [
    [18, 66, 20], [30, 70, -25], [42, 65, 35], [22, 76, -10], [36, 78, 15], [46, 75, -30], [28, 58, 40], [40, 56, -15],
  ];
  return (
    <div className={`ill ${className}`} aria-hidden="true">
      <svg viewBox="0 0 60 88" className="block h-auto w-full" focusable="false">
        <defs>
          <clipPath id={`jar-${className.includes("-l") ? "l" : "r"}`}>
            <path d="M11 24 C5 32, 5 72, 11 80 Q13 84 19 84 L41 84 Q47 84 49 80 C55 72, 55 32, 49 24 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#jar-${className.includes("-l") ? "l" : "r"})`}>
          <rect x="0" y="48" width="60" height="40" fill={ill.coffee} />
          {beans.map(([x, y, r], i) => (
            <g key={i} transform={`rotate(${r} ${x} ${y})`}>
              <ellipse cx={x} cy={y} rx="4.6" ry="3.2" fill="#7E5233" />
              <path d={`M ${x - 3} ${y} Q ${x} ${y - 1.4} ${x + 3} ${y}`} stroke={ill.coffee} strokeWidth="1" fill="none" />
            </g>
          ))}
        </g>
        <path
          d="M11 24 C5 32, 5 72, 11 80 Q13 84 19 84 L41 84 Q47 84 49 80 C55 72, 55 32, 49 24 Z"
          fill="none"
          stroke={N}
          strokeWidth="2.5"
        />
        <rect x="19" y="56" width="22" height="13" rx="1.5" fill={ill.char} />
        <path d="M23 62.5 H37" stroke={ill.plaster} strokeWidth="1.5" />
        <rect x="12" y="16" width="36" height="9" rx="3" fill={ill.plaster} stroke={N} strokeWidth="2.5" />
        <circle cx="30" cy="10.5" r="5" fill={ill.plaster} stroke={N} strokeWidth="2.5" />
      </svg>
    </div>
  );
}
