// Shared geometry for the cake illustrations, so every cheesecake is drawn in the same
// 3/4 view: a cylinder whose top is an ellipse (rx, ry) and whose sides drop by `h`.
// Angles are in degrees on the top ellipse: 0 = right, 90 = front (towards the viewer).

export type Pt = readonly [number, number];
export type Disc = { cx: number; cy: number; rx: number; ry: number };

const r2 = (n: number) => Math.round(n * 100) / 100;

export function at(d: Disc, deg: number, dy = 0): Pt {
  const t = (deg * Math.PI) / 180;
  return [r2(d.cx + d.rx * Math.cos(t)), r2(d.cy + d.ry * Math.sin(t) + dy)];
}

const p = (pt: Pt) => `${pt[0]},${pt[1]}`;

/** Top face of a sector from angle a to b (b > a), apex at the centre. */
export function sectorTop(d: Disc, a: number, b: number, dy = 0): string {
  const large = b - a > 180 ? 1 : 0;
  return `M${d.cx},${r2(d.cy + dy)} L${p(at(d, a, dy))} A${d.rx},${d.ry} 0 ${large} 1 ${p(at(d, b, dy))} Z`;
}

/** Curved outer side between angles a..b (front-facing part), from depth y0 to y1. */
export function sideBand(d: Disc, a: number, b: number, y0: number, y1: number): string {
  const large = b - a > 180 ? 1 : 0;
  return (
    `M${p(at(d, a, y0))} A${d.rx},${d.ry} 0 ${large} 1 ${p(at(d, b, y0))} ` +
    `L${p(at(d, b, y1))} A${d.rx},${d.ry} 0 ${large} 0 ${p(at(d, a, y1))} Z`
  );
}

/** Flat cut face from the centre out to angle `deg`, as a band from depth y0 to y1. */
export function cutBand(d: Disc, deg: number, y0: number, y1: number): string {
  const o = at(d, deg);
  return (
    `M${d.cx},${r2(d.cy + y0)} L${o[0]},${r2(o[1] + y0)} ` +
    `L${o[0]},${r2(o[1] + y1)} L${d.cx},${r2(d.cy + y1)} Z`
  );
}

/** Same disc shifted by (dx, dy). */
export function shift(d: Disc, dx: number, dy: number): Disc {
  return { ...d, cx: d.cx + dx, cy: d.cy + dy };
}
