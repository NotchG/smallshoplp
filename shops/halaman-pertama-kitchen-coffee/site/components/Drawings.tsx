// Flat drawings of the three corners, the garden and the night lamps.
// Palette fills only, 2px strokes that stay 2px at any size, 14 elements or fewer each.
import type { SVGAttributes } from "react";

const C = {
  kapur: "#f5f5f1",
  arang: "#1e1f1c",
  daun: "#2e5b39",
  muda: "#bcd5aa",
  kursi: "#e0682e",
  rotan: "#c9a26b",
};

const stroke = (color: string): SVGAttributes<SVGElement> => ({
  stroke: color,
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "non-scaling-stroke",
});

function Svg({ children, viewBox = "0 0 240 320" }: { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

// Ruang ber-AC: the arched window onto the garden, a marble table, a director's chair.
function Ruang() {
  const s = stroke(C.arang);
  return (
    <Svg>
      <path d="M68 236V112a52 52 0 0 1 104 0v124Z" fill={C.muda} {...s} />
      <path d="M92 234c-4-44 22-76 62-88-2 46-26 78-62 88Z" fill={C.daun} />
      <line x1="68" y1="112" x2="172" y2="112" {...s} />
      <line x1="120" y1="112" x2="120" y2="236" {...s} />
      <line x1="0" y1="282" x2="240" y2="282" {...s} />
      <rect x="128" y="216" width="88" height="8" fill={C.kapur} {...s} />
      <line x1="172" y1="224" x2="172" y2="282" {...s} />
      <rect x="34" y="192" width="52" height="20" fill={C.rotan} {...s} />
      <line x1="38" y1="192" x2="38" y2="244" {...s} />
      <line x1="82" y1="192" x2="82" y2="244" {...s} />
      <line x1="30" y1="244" x2="90" y2="244" {...s} />
      <line x1="38" y1="244" x2="82" y2="282" {...s} />
      <line x1="82" y1="244" x2="38" y2="282" {...s} />
    </Svg>
  );
}

// Area terbuka: the branch pergola, its thatch fringe, a rattan bell lamp and a potted plant.
function Halaman() {
  const s = stroke(C.arang);
  const fringe =
    "M0 150 " +
    Array.from({ length: 12 }, (_, i) => `L${i * 20 + 10} 174 L${i * 20 + 20} 150`).join(" ") +
    " Z";
  return (
    <Svg>
      <path d="M34 150 22 64M86 150 80 50M150 150 158 50M204 150 220 64" fill="none" {...s} />
      <path d={fringe} fill={C.rotan} {...s} />
      <line x1="0" y1="150" x2="240" y2="150" {...s} />
      <line x1="16" y1="174" x2="16" y2="292" {...s} />
      <line x1="224" y1="174" x2="224" y2="292" {...s} />
      <line x1="120" y1="174" x2="120" y2="196" {...s} />
      <path d="M98 228c0-20 9-32 22-32s22 12 22 32Z" fill={C.rotan} {...s} />
      <path d="M104 212h32" fill="none" {...s} />
      <path d="M168 292 174 262h34l6 30Z" fill={C.kursi} {...s} />
      <path d="M190 262c-14-22-12-46 8-62 10 24 6 46-8 62Z" fill={C.daun} {...s} />
      <line x1="0" y1="292" x2="240" y2="292" {...s} />
    </Svg>
  );
}

// Teras beratap: a roof that keeps the sun off, and the orange woven chair.
function Teras() {
  const k = stroke(C.kapur);
  const a = stroke(C.arang);
  return (
    <Svg>
      <path d="M-4 150 244 112v14L-4 164Z" fill={C.kapur} {...k} />
      <line x1="28" y1="160" x2="28" y2="288" {...k} />
      <line x1="212" y1="124" x2="212" y2="288" {...k} />
      <path d="M66 190h28l6 60H72Z" fill={C.kursi} {...a} />
      <line x1="69" y1="210" x2="96" y2="210" {...a} />
      <line x1="70" y1="230" x2="98" y2="230" {...a} />
      <rect x="72" y="246" width="62" height="10" fill={C.kursi} {...a} />
      <line x1="80" y1="256" x2="74" y2="288" {...k} />
      <line x1="128" y1="256" x2="134" y2="288" {...k} />
      <path d="M98 222h34v24" fill="none" {...k} />
      <rect x="150" y="234" width="56" height="6" fill={C.kapur} {...k} />
      <line x1="178" y1="240" x2="178" y2="288" {...k} />
      <line x1="0" y1="288" x2="240" y2="288" {...k} />
    </Svg>
  );
}

export function CornerDrawing({ drawing }: { drawing: "ruang" | "halaman" | "teras" }) {
  if (drawing === "ruang") return <Ruang />;
  if (drawing === "halaman") return <Halaman />;
  return <Teras />;
}

// The hero's second window: three big leaves pressed against the glass.
export function GardenLeaves() {
  const s = stroke(C.daun);
  return (
    <Svg viewBox="0 0 200 400">
      <path d="M8 410C-8 290 54 150 176 84c-8 132-64 252-168 326Z" fill={C.muda} {...s} />
      <path d="M8 410C70 300 124 190 176 84" fill="none" {...s} />
      <path d="M204 410c18-104-40-196-168-236 30 118 90 196 168 236Z" fill={C.muda} {...s} />
      <path d="M204 410C150 330 96 250 36 174" fill="none" {...s} />
      <path d="M96 410c-26-62-10-126 46-168 14 66-6 128-46 168Z" fill={C.muda} {...s} />
      <path d="M96 410c10-58 26-114 46-168" fill="none" {...s} />
    </Svg>
  );
}

// Night: rattan bell lamps on cords, static.
export function RattanLamps({ count = 3, className = "" }: { count?: number; className?: string }) {
  const s = stroke(C.rotan);
  const drops = [28, 60, 44].slice(0, count);
  const width = count * 64;
  const height = Math.max(...drops) + 48;
  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
    >
      {drops.map((cord, i) => {
        const x = i * 64 + 32;
        return (
          <g key={i} fill="none" {...s}>
            <line x1={x} y1={0} x2={x} y2={cord} />
            <path d={`M${x - 26} ${cord + 44}c0-28 12-44 26-44s26 16 26 44Z`} />
            <path d={`M${x - 20} ${cord + 24}q20-7 40 0`} />
          </g>
        );
      })}
    </svg>
  );
}
