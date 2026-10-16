// Deterministic helpers for the product illustrations: the same seed always draws the
// same floss strokes and dots, so server and client output never differ.
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const r1 = (n: number) => Math.round(n * 10) / 10;

// Short stroke centred on (x, y) at angle a (radians), length len, as a path "d".
export function stroke(x: number, y: number, a: number, len: number) {
  const dx = (Math.cos(a) * len) / 2;
  const dy = (Math.sin(a) * len) / 2;
  return `M${r1(x - dx)} ${r1(y - dy)}L${r1(x + dx)} ${r1(y + dy)}`;
}

// Illustration-only colours (design brief §3). Never used for UI.
export const C = {
  crumb: "#F3D9A4",
  bun: "#C98A3E",
  flossDark: "#8A5328",
  flossLight: "#E2B467",
  laminate: "#D99442",
  laminateLight: "#F0C27A",
  filling: "#4A2416",
  pastryBase: "#E9C98E",
  glazePink: "#EBA7B5",
  crumble: "#C2566E",
  glazeBlue: "#8CC6EC",
  pearl: "#D9DCF5",
  drizzle: "#FFF6EA",
  cocoa: "#7A4A33",
  cocoaDust: "#5A3424",
  cheesecake: "#F2DE9A",
  cheese: "#F6E08A",
  sourdough: "#4E2A1C",
  sourdoughScore: "#8A5A3E",
  tray: "#DADDE0",
  liner: "#E9EBED",
  perforation: "#C9CDD2",
} as const;

// A soft curved wisp (floss shred): like stroke(), but bowed sideways by `bend`.
export function wisp(x: number, y: number, a: number, len: number, bend: number) {
  const dx = (Math.cos(a) * len) / 2;
  const dy = (Math.sin(a) * len) / 2;
  const cx = x - Math.sin(a) * bend;
  const cy = y + Math.cos(a) * bend;
  return `M${r1(x - dx)} ${r1(y - dy)}Q${r1(cx)} ${r1(cy)} ${r1(x + dx)} ${r1(y + dy)}`;
}
