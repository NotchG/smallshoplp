// Illustration colours: the six palette colours (design brief §3) and mixes of them only.
// Computed once at build time, so the SVGs carry plain hex fills.
export const base = {
  kapur: "#F2F1EC",
  besi: "#1A1A17",
  hijau: "#23392E",
  lampu: "#E9A94B",
  delft: "#1F3F8F",
  tulp: "#B3262E",
} as const;

type Name = keyof typeof base;

function rgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// mix({ lampu: 55, besi: 45 }): weights are percentages of palette colours.
export function mix(parts: Partial<Record<Name, number>>) {
  let total = 0;
  const acc = [0, 0, 0];
  for (const [k, w] of Object.entries(parts) as [Name, number][]) {
    const c = rgb(base[k]);
    acc[0] += c[0] * w;
    acc[1] += c[1] * w;
    acc[2] += c[2] * w;
    total += w;
  }
  return (
    "#" +
    acc
      .map((v) => Math.round(v / total).toString(16).padStart(2, "0"))
      .join("")
  );
}

export const paint = {
  ...base,
  // house
  teak: mix({ lampu: 55, besi: 45 }),
  teakDark: mix({ lampu: 35, besi: 65 }),
  brass: mix({ lampu: 78, besi: 22 }),
  cane: mix({ lampu: 45, kapur: 45, besi: 10 }),
  hijauDeep: mix({ hijau: 74, besi: 26 }),
  hijauPanel: mix({ hijau: 88, kapur: 12 }),
  leaf: mix({ hijau: 55, lampu: 20, kapur: 25 }),
  leafDark: mix({ hijau: 80, lampu: 12, kapur: 8 }),
  leaf2: mix({ hijau: 62, lampu: 30, kapur: 8 }),
  glassUnlit: mix({ kapur: 72, lampu: 18, hijau: 10 }),
  glassLit: mix({ kapur: 45, lampu: 55 }),
  bulb: mix({ kapur: 70, lampu: 30 }),
  night: mix({ besi: 84, delft: 16 }),
  delftLight: mix({ delft: 30, kapur: 70 }),
  leather: mix({ tulp: 30, besi: 45, lampu: 25 }),
  leatherDark: mix({ tulp: 22, besi: 62, lampu: 16 }),
  rug: mix({ tulp: 70, besi: 30 }),
  // food
  rim: mix({ besi: 14, kapur: 86 }),
  rib: mix({ besi: 10, kapur: 90 }),
  rice: mix({ kapur: 96, lampu: 4 }),
  beef: mix({ besi: 70, tulp: 14, lampu: 16 }),
  sauce: mix({ besi: 55, lampu: 30, tulp: 15 }),
  gloss: mix({ lampu: 45, besi: 40, kapur: 15 }),
  cabbage: mix({ tulp: 48, delft: 36, kapur: 16 }),
  pickle: mix({ lampu: 85, kapur: 15 }),
  carrot: mix({ lampu: 60, tulp: 40 }),
  sambal: mix({ tulp: 82, lampu: 18 }),
  bread: mix({ lampu: 70, kapur: 22, besi: 8 }),
  crust: mix({ lampu: 60, besi: 40 }),
  smoked: mix({ tulp: 55, kapur: 45 }),
  smokedDark: mix({ tulp: 70, kapur: 22, besi: 8 }),
  mushroom: mix({ lampu: 28, kapur: 56, besi: 16 }),
  gill: mix({ lampu: 30, besi: 45, kapur: 25 }),
  broth: mix({ lampu: 72, kapur: 18, tulp: 10 }),
  brothDeep: mix({ lampu: 70, tulp: 18, besi: 12 }),
  bananaLeaf: mix({ hijau: 58, lampu: 18, kapur: 24 }),
  bananaLeafVein: mix({ hijau: 40, lampu: 20, kapur: 40 }),
  chicken: mix({ lampu: 58, besi: 28, kapur: 14 }),
  chili: mix({ hijau: 62, lampu: 30, kapur: 8 }),
  fried: mix({ lampu: 80, besi: 20 }),
  friedDark: mix({ lampu: 58, besi: 42 }),
  friedLight: mix({ lampu: 70, kapur: 30 }),
  bowl: mix({ kapur: 80, besi: 6, lampu: 14 }),
};
