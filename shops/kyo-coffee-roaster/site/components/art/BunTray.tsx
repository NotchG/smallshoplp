import { c } from "@/components/art/palette";

// From the pastry case (photo 1): a wooden tray on checkered paper with glazed soft buns
// at the back and two golden loaves in front.
function Dome({ x, y, w, h, body, top }: { x: number; y: number; w: number; h: number; body: string; top?: string }) {
  const half = w / 2;
  return (
    <g>
      <path d={`M${x - half} ${y}Q${x - half} ${y - h} ${x} ${y - h}Q${x + half} ${y - h} ${x + half} ${y}Z`} fill={body} />
      {top && (
        <path
          d={`M${x - half + 2} ${y - h * 0.35}Q${x - half + 2} ${y - h + 1} ${x} ${y - h + 1}Q${x + half - 2} ${y - h + 1} ${x + half - 2} ${y - h * 0.35}Q${x + half * 0.5} ${y - h * 0.22} ${x} ${y - h * 0.32}Q${x - half * 0.5} ${y - h * 0.22} ${x - half + 2} ${y - h * 0.35}Z`}
          fill={top}
        />
      )}
    </g>
  );
}

export default function BunTray({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 52 220 112" role="img" aria-label={label} className={className}>
      <defs>
        <pattern id="kyo-check" width="12" height="8" patternUnits="userSpaceOnUse">
          <rect width="12" height="8" fill={c.wall} />
          <rect width="6" height="4" fill={c.brew} opacity="0.35" />
          <rect x="6" y="4" width="6" height="4" fill={c.brew} opacity="0.35" />
        </pattern>
      </defs>

      <ellipse cx="110" cy="152" rx="100" ry="8" fill={c.ink} opacity="0.12" />

      {/* tray: rim, paper, front face */}
      <path d="M36 76H184L204 128H16Z" fill={c.crust} />
      <path d="M44 82H176L192 124H28Z" fill="url(#kyo-check)" />
      <rect x="16" y="128" width="188" height="20" fill={c.crust} />
      <rect x="16" y="128" width="188" height="20" fill={c.ink} opacity="0.22" />
      <rect x="16" y="128" width="188" height="3" fill={c.ink} opacity="0.12" />

      {/* glazed soft buns, back row */}
      <Dome x={66} y={102} w={50} h={40} body={c.oak} top={c.wall} />
      <Dome x={110} y={100} w={50} h={42} body={c.oak} top={c.wall} />
      <Dome x={154} y={102} w={50} h={40} body={c.oak} top={c.wall} />

      {/* golden loaves, front row */}
      <Dome x={78} y={127} w={64} h={28} body={c.crust} top={c.ply} />
      <Dome x={142} y={127} w={64} h={28} body={c.crust} top={c.ply} />
      <path d="M62 112Q78 107 94 112M126 112Q142 107 158 112" stroke={c.crust} strokeOpacity="0.6" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
