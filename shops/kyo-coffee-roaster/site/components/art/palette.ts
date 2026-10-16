// Palette for the inline SVG drawings (design brief §3). Same values as globals.css @theme.
// brew and crust are illustration-only tints.
export const c = {
  wall: "#F5F3EE",
  ink: "#221A14",
  ply: "#CD9A5B",
  oak: "#E6C48E",
  concrete: "#CBC7BF",
  leaf: "#3E5A3B",
  brew: "#5A3826",
  crust: "#B9773A",
} as const;

// Clear plastic / glass outline: ink 1.5px at 45% (design brief §6).
export const glass = { stroke: c.ink, strokeOpacity: 0.45, strokeWidth: 1.5 } as const;

// Deterministic pseudo-random points, so speckles are identical on server and client.
export function speckles(
  n: number,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  seed = 7,
): [number, number][] {
  const pts: [number, number][] = [];
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  while (pts.length < n) {
    const x = rnd() * 2 - 1;
    const y = rnd() * 2 - 1;
    if (x * x + y * y > 1) continue;
    pts.push([+(cx + x * rx).toFixed(1), +(cy + y * ry).toFixed(1)]);
  }
  return pts;
}

// Short radial strokes around an elliptical rim: the ridged stoneware plate.
export function ridges(
  cx: number,
  cy: number,
  inner: [number, number],
  outer: [number, number],
  count: number,
) {
  let d = "";
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    d += `M${(cx + inner[0] * cos).toFixed(1)} ${(cy + inner[1] * sin).toFixed(1)}L${(cx + outer[0] * cos).toFixed(1)} ${(cy + outer[1] * sin).toFixed(1)}`;
  }
  return d;
}

// Dots as one path: zero-length segments with round caps.
export function dots(pts: [number, number][]) {
  return pts.map(([x, y]) => `M${x} ${y}h0.01`).join("");
}
