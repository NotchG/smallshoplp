// Line drawings for the breeze-block wall: ink 1.5px strokes plus one fill colour each.
// Decorative (aria-hidden); the wall's text cells and the photo placeholder carry the meaning.

const INK = "#1C1F1B";
const stroke = {
  stroke: INK,
  strokeWidth: 1.5,
  vectorEffect: "non-scaling-stroke" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

// Hanging vines from the dining-room ceiling (photo-1). Fill: leaf.
const STRANDS: [number, number][] = [
  [22, 70], [32, 82], [42, 62], [53, 86], [63, 72], [73, 80], [82, 60],
];
export function Vines() {
  return (
    <Frame>
      <path d="M14 16L86 16" {...stroke} fill="none" />
      {STRANDS.map(([x, len], i) => {
        const leaves = [];
        for (let y = 24, k = 0; y < 16 + len; y += 9, k++) {
          const dir = k % 2 ? 1 : -1;
          leaves.push(
            <ellipse
              key={y}
              cx={x + dir * 3.2}
              cy={y}
              rx="2.6"
              ry="4.4"
              transform={`rotate(${dir * 38} ${x + dir * 3.2} ${y})`}
              fill="#2E6A3A"
              {...stroke}
            />,
          );
        }
        return (
          <g key={i}>
            <path d={`M${x} 16L${x} ${16 + len}`} {...stroke} fill="none" />
            {leaves}
          </g>
        );
      })}
    </Frame>
  );
}

// The red metal bistro chair (photo-1). Fill: tomato.
export function RedChair() {
  return (
    <Frame>
      <path d="M33 54L27 90M67 54L73 90M38 58L36 84M62 58L64 84M30 76L70 76" {...stroke} fill="none" />
      <path d="M34 16C34 13 36 12 39 12L61 12C64 12 66 13 66 16L64 48L36 48Z" fill="#C7372A" {...stroke} />
      <path d="M41 22L59 22M41 29L59 29M41 36L59 36" {...stroke} stroke="#F8F9F5" fill="none" />
      <path d="M28 50L72 50L68 58L32 58Z" fill="#C7372A" {...stroke} />
    </Frame>
  );
}

// Festoon string-light bulbs (facade, photo-3). Fill: warm bulb yellow.
const BULBS: [number, number][] = [
  [23.6, 31.6], [50, 37], [76.4, 31.6],
];
export function Bulbs() {
  return (
    <Frame>
      <path d="M4 22Q50 52 96 22" {...stroke} fill="none" />
      {BULBS.map(([x, y], i) => (
        <g key={i} transform={`translate(${x - 7} ${y - 1})`}>
          <rect x="4.5" y="0" width="5" height="8" rx="1" fill={INK} />
          <path d="M5 8L9 8C9 10 14 13.5 14 20A7 7 0 0 1 0 20C0 13.5 5 10 5 8Z" fill="#F5C842" {...stroke} />
        </g>
      ))}
    </Frame>
  );
}

// Wooden cube shelves with small plants (photo-1). Fill: leaf.
export function CubeShelf() {
  const plant = (x: number, y: number) => (
    <g>
      <path d={`M${x - 5} ${y}L${x + 5} ${y}L${x + 4} ${y + 7}L${x - 4} ${y + 7}Z`} fill="none" {...stroke} />
      <path
        d={`M${x} ${y}C${x - 6} ${y - 4} ${x - 8} ${y - 9} ${x - 6} ${y - 12}C${x - 2} ${y - 9} ${x} ${y - 5} ${x} ${y}ZM${x} ${y}C${x + 6} ${y - 4} ${x + 8} ${y - 10} ${x + 5} ${y - 13}C${x + 2} ${y - 9} ${x} ${y - 5} ${x} ${y}Z`}
        fill="#2E6A3A"
        {...stroke}
      />
    </g>
  );
  return (
    <Frame>
      <rect x="12" y="16" width="34" height="26" fill="none" {...stroke} />
      <rect x="54" y="30" width="34" height="24" fill="none" {...stroke} />
      <rect x="24" y="60" width="40" height="26" fill="none" {...stroke} />
      {plant(29, 35)}
      {plant(71, 47)}
      {plant(36, 79)}
      {plant(52, 79)}
    </Frame>
  );
}

// One breeze block of the screen by the door (photo-3): the opening and its angled leaf face.
// Fill: ink at 7% on the shaded inner sides.
export function RosterBlock() {
  return (
    <Frame>
      <rect x="12" y="12" width="76" height="76" fill="none" {...stroke} />
      <path d="M12 12L26 26L74 26L88 12Z" fill={INK} fillOpacity="0.07" {...stroke} />
      <path d="M12 12L26 26L26 74L12 88Z" fill={INK} fillOpacity="0.07" {...stroke} />
      <path d="M88 88L74 74M74 26L74 74L26 74" {...stroke} fill="none" />
      <path d="M31 69C31 46 46 31 69 31C69 54 54 69 31 69Z" fill="none" {...stroke} />
      <path d="M31 69L69 31M40 60L40 50M49 51L49 41M58 42L58 34M44 56L54 56M53 47L62 47" {...stroke} fill="none" />
    </Frame>
  );
}

// Small camera mark for the photo placeholder.
export function CameraMark() {
  return (
    <svg viewBox="0 0 44 44" aria-hidden="true" focusable="false">
      <path d="M8 15L15 15L18 10L26 10L29 15L36 15L36 33L8 33Z" fill="none" {...stroke} />
      <circle cx="22" cy="23.5" r="6" fill="none" {...stroke} />
    </svg>
  );
}
