// Flat, top-down drawings of what is on Mabsooth's tables (design brief §6): viewBox 240,
// flat fills from the real objects' colours, no outlines, no shading, no perspective.
type P = { label: string; className?: string };

function Frame({ label, className = "", children }: P & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 240 240" role="img" aria-label={label} className={`dish-illus block ${className}`}>
      {children}
    </svg>
  );
}

// A ring of diamond facets (one path), for the cut-glass rim.
function facetRing(cx: number, cy: number, r: number, n: number, h: number, w: number) {
  let d = "";
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const ux = Math.cos(a), uy = Math.sin(a); // radial
    const vx = -uy, vy = ux; // tangential
    const p = (dr: number, dt: number) =>
      `${(cx + ux * (r + dr) + vx * dt).toFixed(1)} ${(cy + uy * (r + dr) + vy * dt).toFixed(1)}`;
    d += `M${p(-h, 0)}L${p(0, w)}L${p(h, 0)}L${p(0, -w)}Z`;
  }
  return d;
}

export function RiceBowl({ label, className }: P) {
  const beef: [number, number, number][] = [
    [70, 120, 20], [92, 140, -30], [64, 156, 60], [110, 170, 10], [90, 184, -50],
    [134, 168, 35], [60, 134, -20], [118, 150, 70], [78, 194, 15], [140, 186, -40],
  ];
  const pepper: [number, number, number][] = [
    [84, 130, -40], [104, 160, 30], [72, 172, 80], [128, 180, -15], [56, 146, 10], [100, 196, 55],
  ];
  const sesame: [number, number, number][] = [
    [78, 112, 30], [100, 146, -20], [66, 164, 70], [116, 176, 0], [94, 176, 45], [136, 160, -30], [84, 152, 10], [124, 194, -60],
  ];
  return (
    <Frame label={label} className={className}>
      <circle cx="120" cy="120" r="112" fill="#33393F" />
      <circle cx="120" cy="120" r="97" fill="#2A2F34" />
      <circle cx="120" cy="120" r="88" fill="#F2EEE6" />
      <path
        d="M44 108C52 84 88 78 104 96C118 112 132 128 158 140C178 150 176 182 156 196C132 206 96 206 70 190C46 176 36 132 44 108Z"
        fill="#3F1F15"
      />
      {beef.map(([x, y, a], i) => (
        <ellipse key={`b${i}`} cx={x} cy={y} rx="16" ry="7.5" transform={`rotate(${a} ${x} ${y})`} fill="#6A3622" />
      ))}
      {pepper.map(([x, y, a], i) => (
        <rect key={`p${i}`} x={x - 13} y={y - 3} width="26" height="6" rx="3" transform={`rotate(${a} ${x} ${y})`} fill="#C8321F" />
      ))}
      {sesame.map(([x, y, a], i) => (
        <ellipse key={`s${i}`} cx={x} cy={y} rx="2.6" ry="1.4" transform={`rotate(${a} ${x} ${y})`} fill="#F3E7CC" />
      ))}
      <path d="M150 196c4-16 18-26 34-24-4 16-18 26-34 24Z" fill="#3E6A2E" />
      <path
        d="M152 46c27 0 50 20 49 46-1 19-13 28-19 41-8 17-29 22-47 15-21-8-35-25-33-48 2-31 24-54 50-54Z"
        fill="#FBF6EC"
      />
      <circle cx="148" cy="94" r="18" fill="#F0A830" />
    </Frame>
  );
}

export function LycheeTea({ label, className }: P) {
  const ice: [number, number, number][] = [
    [96, 136, 18], [140, 148, -12], [118, 98, 40],
  ];
  return (
    <Frame label={label} className={className}>
      <circle cx="120" cy="120" r="112" fill="#8A5A35" />
      <circle cx="120" cy="120" r="101" fill="#7A4D2D" />
      <circle cx="120" cy="120" r="86" fill="#E7E1D4" />
      <path d={facetRing(120, 120, 77, 20, 7, 9)} fill="#FBF8F1" />
      <circle cx="120" cy="120" r="66" fill="#C98A3A" />
      {ice.map(([x, y, a], i) => (
        <rect key={i} x={x - 14} y={y - 14} width="28" height="28" rx="7" transform={`rotate(${a} ${x} ${y})`} fill="#DBA659" />
      ))}
      <rect x="52" y="117" width="150" height="5" rx="2.5" transform="rotate(-32 127 119.5)" fill="#D9B98A" />
      <circle cx="140" cy="111" r="20" fill="#F3EADF" />
      <circle cx="140" cy="111" r="7" fill="#E4D6C2" />
      <circle cx="94" cy="96" r="8" fill="#1C1A1A" />
      <circle cx="94" cy="96" r="4" fill="#3A3533" />
    </Frame>
  );
}

export function TeaPot({ label, className }: P) {
  const glasses: [number, number][] = [
    [193, 147], [153, 191], [93, 193], [49, 153],
  ];
  return (
    <Frame label={label} className={className}>
      <circle cx="120" cy="120" r="114" fill="#B88A3E" />
      <circle cx="120" cy="120" r="103" fill="#C49547" />
      {glasses.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="19" fill="#EFE9DC" />
          <circle cx={x} cy={y} r="14.5" fill="#A9521F" />
        </g>
      ))}
      <rect x="44" y="70" width="22" height="46" rx="10" fill="#9EA4AB" />
      <path d="M138 70 L190 40 Q199 42 196 51 L150 96 Z" fill="#C9CDD2" />
      <circle cx="104" cy="94" r="47" fill="#C9CDD2" />
      <circle cx="104" cy="94" r="29" fill="#9EA4AB" />
      <circle cx="104" cy="94" r="23" fill="#D5D8DC" />
      <circle cx="104" cy="94" r="8" fill="#9EA4AB" />
    </Frame>
  );
}
