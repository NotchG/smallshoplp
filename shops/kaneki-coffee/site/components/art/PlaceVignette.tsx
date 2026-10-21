// Flat placeholders for the two places to sit, until the owner sends real photos.
// Twelve shapes or fewer each, 4:3.

function scallops(width: number, top: number, depth: number, count: number) {
  const w = width / count;
  let d = `M0 0 H${width} V${top}`;
  for (let i = count; i > 0; i--) {
    const x0 = i * w;
    d += ` Q${x0 - w / 2} ${top + depth * 2} ${x0 - w} ${top}`;
  }
  return `${d} Z`;
}

export default function PlaceVignette({
  variant,
  label,
}: {
  variant: "inside" | "outside";
  label: string;
}) {
  if (variant === "inside") {
    return (
      <svg viewBox="0 0 400 300" role="img" aria-label={label} focusable="false">
        <rect width="400" height="300" fill="#EFEFEA" />
        <rect y="244" width="400" height="56" fill="#DADBD7" />
        {/* window to the terrace */}
        <rect x="236" y="76" width="124" height="92" fill="#D3DCD8" />
        {/* track rail and spots */}
        <path d="M36 22h300v3H36z M96 25h9v16h-9z M186 25h9v16h-9z M276 25h9v16h-9z" fill="#1C2523" />
        {/* paper lantern */}
        <rect x="329" y="0" width="2" height="62" fill="#9AA19E" />
        <circle cx="330" cy="106" r="46" fill="#FFFFFF" />
        <path d="M288 92 Q330 82 372 92 M284 108 Q330 98 376 108 M288 124 Q330 114 372 124" fill="none" stroke="#E7E1D3" strokeWidth="2" />
        {/* oak bar over pale blue-grey cabinets */}
        <rect x="30" y="170" width="262" height="12" fill="#C29466" />
        <rect x="44" y="182" width="234" height="66" fill="#C4CDD2" />
        {/* slate-blue grinder and cups on the bar */}
        <path d="M68 116h22l-3 24h-16z M62 140h34v30h-34z" fill="#4E6472" />
        <path d="M112 154h13v16h-13z M131 154h13v16h-13z M150 154h13v16h-13z" fill="#FFFFFF" />
        {/* black rattan stool */}
        <path d="M188 204h52v8h-52z M195 212l-7 46h4l9-46z M233 212l7 46h-4l-9-46z" fill="#1C2523" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} focusable="false">
      <rect width="400" height="300" fill="#ECEDE9" />
      {/* weathered wall and concrete paving */}
      <rect y="118" width="400" height="86" fill="#C6C8C3" />
      <rect y="196" width="400" height="104" fill="#D3D4CF" />
      <path d="M0 236 H400 M0 274 H400 M110 196 L72 300 M206 196 V300 M302 196 L342 300" stroke="#BDBEB9" strokeWidth="2" />
      {/* two small trees */}
      <path d="M112 198 V96 M300 200 V92" stroke="#6B5B4A" strokeWidth="3" />
      <ellipse cx="112" cy="96" rx="66" ry="22" fill="#A9B98F" />
      <ellipse cx="300" cy="90" rx="60" ry="20" fill="#A9B98F" />
      {/* green awning with its scalloped edge */}
      <path d={scallops(400, 40, 7, 20)} fill="#2E4640" />
      {/* slatted bench, tray table, terrazzo stool */}
      <path d="M26 236h104v6H26z M26 245h104v6H26z M34 251h4v24h-4z M118 251h4v24h-4z" fill="#C29466" />
      <path d="M150 224 a34 7 0 1 0 68 0 a34 7 0 1 0 -68 0 Z M159 227 L153 274 h3 L163 228 Z M209 227 L215 274 h-3 L205 228 Z" fill="#1C2523" />
      <path d="M244 236 h36 l7 40 h-50 Z" fill="#9DB0C2" />
      <path d="M252 246h3v3h-3z M266 252h3v3h-3z M258 262h3v3h-3z M274 266h3v3h-3z M248 268h3v3h-3z M270 242h3v3h-3z" fill="#F7F7F4" />
    </svg>
  );
}
