// Geometry for the flat top-down dish illustrations. Deterministic (seeded), so the
// server render and any client render produce identical paths.

export const C = {
  nasi: "#FFFDF7",
  rendang: "#4E2817",
  sambal: "#C2321C",
  kuning: "#F2B33D",
  goreng: "#C08A4A",
  pink: "#D9577A",
  mi: "#E9C25A",
  latte: "#C99A6B",
  crema: "#EAD5B6",
  daun: "#2E6B3B",
  jati: "#7E4226",
  besi: "#1E1C1A",
  rim: "#D3CBBF",   // plate rim (2 px grey)
  well: "#F3EEE6",  // plate well
  shade: "#ECE4D6", // rice mound shade
} as const;

export const r1 = (n: number) => Math.round(n * 10) / 10;

export function rng(seed: number) {
  let s = (Math.imul(seed + 1, 2654435761) >>> 0) || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

type P = [number, number];

// Closed Catmull-Rom curve through points, as cubic Béziers.
export function smooth(pts: P[]): string {
  const n = pts.length;
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    d += `C${r1(p1[0] + (p2[0] - p0[0]) / 6)} ${r1(p1[1] + (p2[1] - p0[1]) / 6)} ` +
      `${r1(p2[0] - (p3[0] - p1[0]) / 6)} ${r1(p2[1] - (p3[1] - p1[1]) / 6)} ${r1(p2[0])} ${r1(p2[1])}`;
  }
  return d + "Z";
}

// Irregular rounded blob around an ellipse. rot in degrees.
export function blob(cx: number, cy: number, rx: number, ry: number, n = 9, amp = 0.12, seed = 1, rot = 0): string {
  const r = rng(seed);
  const t = (rot * Math.PI) / 180;
  const pts: P[] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const k = 1 + (r() * 2 - 1) * amp;
    const x = Math.cos(a) * rx * k, y = Math.sin(a) * ry * k;
    pts.push([cx + x * Math.cos(t) - y * Math.sin(t), cy + x * Math.sin(t) + y * Math.cos(t)]);
  }
  return smooth(pts);
}

// Scalloped mound (rice): alternating radius with a little jitter.
export function bumpy(cx: number, cy: number, rx: number, ry: number, n = 24, depth = 0.06, seed = 1): string {
  const r = rng(seed);
  const pts: P[] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const k = (i % 2 ? 1 - depth : 1) + (r() - 0.5) * depth;
    pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
  }
  return smooth(pts);
}

// Evenly spread points in a disc or annulus (sunflower spiral + jitter); a = rotation in degrees.
export function spread(count: number, cx: number, cy: number, rMax: number, rMin = 0, seed = 1) {
  const r = rng(seed);
  const out: { x: number; y: number; a: number }[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  const off = r() * Math.PI * 2;
  for (let i = 0; i < count; i++) {
    const f = (i + 0.5) / count;
    const d = Math.sqrt(rMin * rMin + f * (rMax * rMax - rMin * rMin)) * (0.94 + r() * 0.06);
    const t = off + i * golden + (r() - 0.5) * 0.5;
    out.push({ x: cx + Math.cos(t) * d, y: cy + Math.sin(t) * d, a: r() * 180 });
  }
  return out;
}

// Random points inside a rectangle centred on 0,0.
export function inRect(count: number, w: number, h: number, seed = 1) {
  const r = rng(seed);
  return Array.from({ length: count }, () => ({ x: (r() - 0.5) * w, y: (r() - 0.5) * h, a: r() * 180 }));
}

// Circle as a path (for even-odd rings).
export function circ(cx: number, cy: number, rad: number): string {
  return `M${cx - rad} ${cy}a${rad} ${rad} 0 1 0 ${rad * 2} 0a${rad} ${rad} 0 1 0 ${-rad * 2} 0Z`;
}

export const tf = (x: number, y: number, a = 0) => `translate(${r1(x)} ${r1(y)}) rotate(${r1(a)})`;

type Pt = { x: number; y: number; a: number };

// Many short bars as one path (drawn with a round-capped stroke): grains, sprinkles, sticks.
// len is the straight part; the stroke width adds the rounded ends.
export function segs(pts: Pt[], len: number): string {
  return pts
    .map((p) => {
      const t = (p.a * Math.PI) / 180;
      const dx = (Math.cos(t) * len) / 2, dy = (Math.sin(t) * len) / 2;
      return `M${r1(p.x - dx)} ${r1(p.y - dy)}l${r1(dx * 2)} ${r1(dy * 2)}`;
    })
    .join("");
}

// Many round dots as one path (zero-length subpaths with round caps).
export function dots(pts: { x: number; y: number }[]): string {
  return pts.map((p) => `M${r1(p.x)} ${r1(p.y)}h.01`).join("");
}

// Rotated squares/rects as one filled path (cubes of liver, potato, chicken).
export function boxes(pts: Pt[], w: number, h: number): string {
  return pts
    .map((p) => {
      const t = (p.a * Math.PI) / 180, c = Math.cos(t), s = Math.sin(t);
      const corner = (x: number, y: number) => `${r1(p.x + x * c - y * s)} ${r1(p.y + x * s + y * c)}`;
      return `M${corner(-w / 2, -h / 2)}L${corner(w / 2, -h / 2)}L${corner(w / 2, h / 2)}L${corner(-w / 2, h / 2)}Z`;
    })
    .join("");
}
