// Flat elevation of the two-storey concrete house and its carport (design brief §7, Tempat).
// Kapur box, arang balcony rail, lampu-lit windows, kayu doors, the small static sign disc,
// and a batu car under the carport. Layout follows the real facade: carport on the left.

const c = (name: "arang" | "batu" | "beton" | "kapur" | "lampu", opacity?: number) => ({
  fill: `var(--color-${name})`,
  ...(opacity !== undefined ? { fillOpacity: opacity } : {}),
});
const ink = (name: "kayu" | "krim", opacity?: number) => ({
  fill: `var(--ink-${name})`,
  ...(opacity !== undefined ? { fillOpacity: opacity } : {}),
});

// Window: steel frame with lit glass and mullions.
function Window({ x, y, w, h, cols = 3 }: { x: number; y: number; w: number; h: number; cols?: number }) {
  const inset = 5;
  const bars = Array.from({ length: cols - 1 }, (_, i) => x + inset + ((w - 2 * inset) * (i + 1)) / cols - 1.5);
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} style={c("arang")} />
      <rect x={x + inset} y={y + inset} width={w - 2 * inset} height={h - 2 * inset} style={c("lampu")} />
      {bars.map((bx) => (
        <rect key={bx} x={bx} y={y + inset} width="3" height={h - 2 * inset} style={c("arang")} />
      ))}
      <rect x={x + inset} y={y + h * 0.62} width={w - 2 * inset} height="3" style={c("arang")} />
    </g>
  );
}

export default function HouseElevation({ label }: { label: string }) {
  // Balcony rail balusters
  const balusters = Array.from({ length: 33 }, (_, i) => 240 + i * 11.75);

  return (
    <svg viewBox="0 0 640 400" role="img" aria-label={label} focusable="false" className="block h-auto w-full">
      {/* Carport: roof slab, post, downlight */}
      <rect x="20" y="194" width="224" height="10" style={c("arang")} />
      <rect x="26" y="204" width="8" height="168" style={c("arang")} />
      <rect x="118" y="204" width="20" height="4" style={c("lampu")} />

      {/* Car, side view */}
      <path
        d="M50 354V332Q52 318 68 315L94 311L118 289Q124 283 136 283H188Q200 283 207 293L219 312Q232 316 232 332V354Z"
        style={c("batu")}
      />
      <path d="M102 312L121 293H150V312Z" style={c("beton", 0.55)} />
      <path d="M156 293H186Q193 293 197 300L203 312H156Z" style={c("beton", 0.55)} />
      <circle cx="86" cy="354" r="18" style={c("arang")} />
      <circle cx="196" cy="354" r="18" style={c("arang")} />
      <circle cx="86" cy="354" r="7" style={c("kapur")} />
      <circle cx="196" cy="354" r="7" style={c("kapur")} />

      {/* House: parapet, concrete facade */}
      <rect x="244" y="50" width="380" height="322" style={c("kapur")} />
      <rect x="236" y="38" width="396" height="14" style={c("batu")} />

      {/* Lantai 2: lit window and balcony door */}
      <Window x={272} y={76} w={156} h={108} cols={3} />
      <rect x="494" y="80" width="62" height="118" style={ink("kayu")} />
      <rect x="500" y="86" width="50" height="40" style={c("lampu", 0.85)} />

      {/* Balcony rail across the full front, then the floor slab with warm soffit light */}
      <rect x="238" y="134" width="392" height="4" style={c("arang")} />
      {balusters.map((bx) => (
        <rect key={bx} x={bx} y="138" width="2.5" height="56" style={c("arang")} />
      ))}
      <rect x="238" y="190" width="392" height="3" style={c("arang")} />
      <rect x="236" y="194" width="396" height="14" style={c("batu")} />
      <rect x="272" y="208" width="320" height="4" style={c("lampu")} />

      {/* Lantai 1: big window, wooden door, sign lettering and the lit disc, second window */}
      <Window x={266} y={236} w={136} h={100} cols={3} />
      <rect x="418" y="234" width="54" height="138" style={ink("kayu")} />
      <rect x="462" y="300" width="4" height="10" style={ink("krim", 0.7)} />
      <rect x="494" y="262" width="44" height="7" style={c("arang")} />
      <rect x="498" y="274" width="36" height="3" style={c("arang")} />
      <circle cx="516" cy="300" r="13" style={c("batu")} />
      <circle cx="516" cy="300" r="11" style={c("lampu")} />
      <Window x={556} y={236} w={56} h={100} cols={2} />

      {/* Ground */}
      <rect x="0" y="372" width="640" height="5" style={c("arang")} />
    </svg>
  );
}
