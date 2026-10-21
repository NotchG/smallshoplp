import { daisy, fern, lens, quad, type P } from "./geom";

// Flat scene strips for the two floor cards. Same style as the menu tiles: palette fills,
// white 2px line details. Decorative (aria-hidden): the card text carries the facts.
const C = {
  terakota: "#b5522e",
  malam: "#18213d",
  tembok: "#faf8f3",
  rumput: "#1e7a43",
  kuning: "#f2b630",
  aren: "#4a2a18",
  susu: "#ead7b5",
  rotan: "#c9955a",
};
const line = { fill: "none", stroke: C.tembok, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function GarageScene() {
  const cx = 214, cy = 100, R = 76;
  const hub: P = [cx, 170];
  const spokes = Array.from({ length: 11 }, (_, i) => {
    const a = Math.PI + 0.14 + (i / 10) * (Math.PI - 0.28);
    return [cx + Math.cos(a) * (R - 3), cy + Math.sin(a) * (R - 3)];
  });
  const wallFern = fern([520, 198], [548, 120], [512, 36], 9, 34);
  const wallDaisy = daisy([458, 198], [440, 140], [462, 92], 16, 11);
  const wallFern2 = fern([40, 198], [20, 140], [52, 70], 7, 30);
  const leafAngles: [number, number][] = [[-1.75, 74], [-1.2, 62], [-2.25, 60], [-0.75, 46], [-2.7, 44]];
  return (
    <svg viewBox="0 0 560 220" className="scene" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="polka" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="12" height="12" fill={C.malam} />
          <circle cx="6" cy="6" r="2.4" fill={C.tembok} />
        </pattern>
      </defs>
      {/* line drawings on the wall */}
      {[...wallFern, ...wallFern2, ...wallDaisy.paths].map((d, i) => (
        <path key={i} d={d} {...line} opacity="0.9" />
      ))}
      <circle cx={wallDaisy.centre[0]} cy={wallDaisy.centre[1]} r={wallDaisy.r} {...line} opacity="0.9" />
      {/* floor */}
      <rect x="0" y="198" width="560" height="22" fill={C.malam} />
      {/* round rattan chair */}
      <circle cx={cx} cy={cy} r={R} fill={C.rotan} />
      {spokes.map(([x, y], i) => (
        <path key={i} d={`M${hub[0]} ${hub[1]}L${x.toFixed(1)} ${y.toFixed(1)}`} stroke={C.aren} strokeWidth="2" />
      ))}
      <circle cx={cx} cy={cy} r={R - 22} fill="none" stroke={C.aren} strokeWidth="2" />
      <circle cx={cx} cy={cy} r={R - 2} fill="none" stroke={C.aren} strokeWidth="4" />
      {[[164, 176, 148], [264, 176, 280], [198, 182, 192], [230, 182, 236]].map(([x1, y1, x2], i) => (
        <path key={i} d={`M${x1} ${y1}L${x2} 198`} stroke={C.rotan} strokeWidth="6" strokeLinecap="round" />
      ))}
      <ellipse cx={cx} cy="166" rx="76" ry="19" fill={C.rotan} stroke={C.aren} strokeWidth="2" />
      <rect x="160" y="118" width="108" height="48" rx="18" fill="url(#polka)" />
      {/* potted plant */}
      {leafAngles.map(([a, len], i) => (
        <g key={i}>
          <path d={lens([372, 152], a, len, len * 0.3)} fill={C.rumput} />
          <path d={`M372 152L${(372 + Math.cos(a) * len * 0.85).toFixed(1)} ${(152 + Math.sin(a) * len * 0.85).toFixed(1)}`} {...line} />
        </g>
      ))}
      <path d="M348 158H396L390 198H354Z" fill={C.tembok} />
      <rect x="344" y="150" width="56" height="10" rx="2" fill={C.tembok} />
    </svg>
  );
}

export function RooftopScene() {
  const a: [P, P, P] = [[-10, 24], [140, 82], [290, 38]];
  const b: [P, P, P] = [[290, 38], [430, -6], [570, 46]];
  const bulbs = [...[0.14, 0.38, 0.62, 0.86].map((t) => quad(...a, t)), ...[0.14, 0.38, 0.62, 0.86].map((t) => quad(...b, t))];
  return (
    <svg viewBox="0 0 560 220" className="scene" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="gingham" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill={C.tembok} />
          <rect width="8" height="16" fill={C.terakota} fillOpacity="0.55" />
          <rect width="16" height="8" fill={C.terakota} fillOpacity="0.55" />
        </pattern>
      </defs>
      {/* string lights */}
      <path d={`M${a[0].join(" ")}Q${a[1].join(" ")} ${a[2].join(" ")}Q${b[1].join(" ")} ${b[2].join(" ")}`} {...line} />
      {bulbs.map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x.toFixed(1)} ${y.toFixed(1)}v9`} {...line} />
          <rect x={(x - 3.5).toFixed(1)} y={(y + 8).toFixed(1)} width="7" height="5" rx="1" fill={C.tembok} />
          <circle cx={x.toFixed(1)} cy={(y + 19).toFixed(1)} r="7" fill={C.kuning} />
        </g>
      ))}
      {/* white balustrade */}
      <path d="M0 94H560M0 104H560M0 148H560" {...line} />
      {Array.from({ length: 14 }, (_, i) => (
        <rect key={i} x={10 + i * 40} y="108" width="16" height="36" rx="2" {...line} />
      ))}
      {/* turf, mat, low table */}
      <rect x="0" y="150" width="560" height="70" fill={C.rumput} />
      <path d="M124 172H394L424 214H94Z" fill="url(#gingham)" />
      <rect x="200" y="150" width="164" height="12" rx="2" fill={C.rotan} />
      <rect x="212" y="162" width="11" height="32" fill={C.rotan} />
      <rect x="341" y="162" width="11" height="32" fill={C.rotan} />
      <rect x="223" y="162" width="118" height="5" fill={C.aren} />
      <rect x="244" y="138" width="12" height="12" rx="1.5" fill={C.tembok} />
      <path d="M256 141h3v6h-3" {...line} />
      <rect x="300" y="140" width="14" height="10" rx="1.5" fill={C.susu} />
      {/* potted tree */}
      <path d="M492 150V112" {...line} />
      <circle cx="492" cy="96" r="22" fill={C.rumput} />
      <circle cx="474" cy="110" r="15" fill={C.rumput} />
      <circle cx="511" cy="108" r="15" fill={C.rumput} />
      <path d="M474 152H510L505 190H479Z" fill={C.terakota} />
    </svg>
  );
}
