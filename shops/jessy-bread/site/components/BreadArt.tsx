import type { BreadKind } from "@/content";

// Flat front-view bread drawings for the honey-wood rack. Everything stands on y = 150.
const C = {
  bun: "#D9A35F",
  bunLight: "#E7B978",
  bunDark: "#B97D3F",
  crust: "#9A6438",
  crumb: "#F6E7C8",
  seed: "#F3E3C3",
  seedDark: "#5B3A22",
  yolk: "#EFCB6E",
  yolkLight: "#F5DB8E",
  choc: "#5A3424",
  jam: "#B3122A",
  arang: "#1F1D1B",
  oranye: "#E46219",
};

function Bun() {
  // A golden bun in the shop's clear bag printed with "Jessy" / "Bread".
  return (
    <>
      <path d="M28 146c0-44 32-70 72-70s72 26 72 70Z" fill={C.bun} />
      <path d="M44 112c10-20 32-30 56-30s46 10 56 30c-18-10-36-14-56-14s-38 4-56 14Z" fill={C.bunLight} />
      <path d="M28 146h144" stroke={C.bunDark} strokeWidth="6" strokeLinecap="round" />
      <path
        d="M10 148V70c0-12 8-20 20-20h140c12 0 20 8 20 20v78Z"
        fill="#FFFFFF"
        fillOpacity="0.16"
        stroke="#ADA9A1"
        strokeWidth="2"
      />
      <path d="M10 70l-6 6 6 6-6 6 6 6M190 70l6 6-6 6 6 6-6 6" stroke="#ADA9A1" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <text x="30" y="104" fontSize="22" fill={C.arang} fontFamily="var(--font-display)">Jessy</text>
      <text x="100" y="134" fontSize="26" fill={C.oranye} fontFamily="var(--font-display)">Bread</text>
      <path d="M160 62l12 22" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
    </>
  );
}

function Multigrain() {
  const seeds: [number, number, number, boolean][] = [
    [52, 98, -30, true], [66, 88, 20, false], [80, 82, -10, true], [96, 78, 40, true], [110, 80, -20, false],
    [126, 84, 10, true], [140, 92, -40, true], [150, 104, 30, false], [60, 110, 50, false], [86, 96, -50, true],
    [118, 98, 25, true], [136, 110, -15, false], [46, 120, 10, true], [102, 92, 0, false], [158, 120, -30, true],
  ];
  return (
    <>
      <path d="M18 146c0-46 38-74 82-74s82 28 82 74Z" fill={C.crust} />
      <path d="M36 128c4-32 32-50 64-50s60 18 64 50c-14-18-38-28-64-28s-50 10-64 28Z" fill="#B47B45" />
      <path d="M60 104c10-10 20-14 30-14M92 96c12-10 22-14 34-14M124 102c10-8 20-10 28-8" stroke={C.bun} strokeWidth="5" strokeLinecap="round" fill="none" />
      {seeds.map(([x, y, rot, light]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="4.2" ry="2" fill={light ? C.seed : C.seedDark} transform={`rotate(${rot} ${x} ${y})`} />
      ))}
      <path d="M18 146h164" stroke="#7E4F2B" strokeWidth="5" strokeLinecap="round" />
    </>
  );
}

function Tawar() {
  return (
    <>
      <path d="M60 148V80c0-20 14-30 28-25 7-12 40-12 46 0 14-5 28 5 28 25v68Z" fill={C.bun} />
      <path d="M60 82c0-20 14-30 28-25 7-12 40-12 46 0 14-5 28 5 28 25" stroke={C.crust} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M150 96v46" stroke={C.bunDark} strokeWidth="4" strokeLinecap="round" />
      {/* a slice leaning in front, showing the crumb */}
      <g transform="rotate(-8 60 148)">
        <path d="M22 148V96c0-16 12-22 22-18 6-8 28-8 34 0 10-4 22 2 22 18v52Z" fill={C.crust} />
        <path d="M28 148V98c0-11 9-15 16-12 6-7 24-7 30 0 7-3 16 1 16 12v50Z" fill={C.crumb} />
      </g>
    </>
  );
}

function Lapis() {
  // A slice of lapis surabaya: yolk sponge, jam, chocolate, jam, yolk.
  const x0 = 46, x1 = 154, top = 72, d = 14, t = 14;
  const layers: [number, string][] = [
    [26, C.yolk], [4, C.jam], [20, C.choc], [4, C.jam], [24, C.yolk],
  ];
  let y = top;
  return (
    <>
      <polygon points={`${x0},${top} ${x1},${top} ${x1 - d},${top - t} ${x0 + d},${top - t}`} fill={C.yolkLight} />
      {layers.map(([h, fill], i) => {
        const el = <rect key={i} x={x0} y={y} width={x1 - x0} height={h} fill={fill} />;
        y += h;
        return el;
      })}
      <rect x={x0} y={y} width={x1 - x0} height={150 - y} fill={C.yolk} />
      <path d={`M${x0} 150h${x1 - x0}`} stroke="#D9A94A" strokeWidth="4" />
    </>
  );
}

export default function BreadArt({ kind, label }: { kind: BreadKind; label: string }) {
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label={label} className="mx-auto block h-auto w-full max-w-[260px]">
      {kind === "bun" ? <Bun /> : kind === "multigrain" ? <Multigrain /> : kind === "tawar" ? <Tawar /> : <Lapis />}
    </svg>
  );
}
