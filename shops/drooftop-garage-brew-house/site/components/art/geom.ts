// Small geometry helpers so the botanical line drawings are computed, not hand-traced.
export type P = [number, number];

const r = (n: number) => Math.round(n * 10) / 10;

export function quad(p0: P, c: P, p1: P, t: number): P {
  const u = 1 - t;
  return [u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0], u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1]];
}

export function quadAngle(p0: P, c: P, p1: P, t: number): number {
  const dx = 2 * (1 - t) * (c[0] - p0[0]) + 2 * t * (p1[0] - c[0]);
  const dy = 2 * (1 - t) * (c[1] - p0[1]) + 2 * t * (p1[1] - c[1]);
  return Math.atan2(dy, dx);
}

export function cubic(p0: P, c1: P, c2: P, p1: P, t: number): P {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [a * p0[0] + b * c1[0] + c * c2[0] + d * p1[0], a * p0[1] + b * c1[1] + c * c2[1] + d * p1[1]];
}

/** A closed lens-shaped leaf from p, pointing at angle a (radians), length len, max width w. */
export function lens(p: P, a: number, len: number, w: number): string {
  const dx = Math.cos(a), dy = Math.sin(a);
  const nx = -dy, ny = dx;
  const m: P = [p[0] + (dx * len) / 2, p[1] + (dy * len) / 2];
  const e: P = [p[0] + dx * len, p[1] + dy * len];
  return `M${r(p[0])} ${r(p[1])}Q${r(m[0] + nx * w)} ${r(m[1] + ny * w)} ${r(e[0])} ${r(e[1])}Q${r(m[0] - nx * w)} ${r(m[1] - ny * w)} ${r(p[0])} ${r(p[1])}Z`;
}

export function quadPath(p0: P, c: P, p1: P): string {
  return `M${p0[0]} ${p0[1]}Q${c[0]} ${c[1]} ${p1[0]} ${p1[1]}`;
}

/** Fern: a curved stem with paired leaflets that shrink toward the tip. */
export function fern(base: P, ctrl: P, tip: P, pairs: number, maxLen: number, spread = 0.95): string[] {
  const out = [quadPath(base, ctrl, tip)];
  for (let i = 0; i < pairs; i++) {
    const t = 0.16 + (i / pairs) * 0.8;
    const p = quad(base, ctrl, tip, t);
    const a = quadAngle(base, ctrl, tip, t);
    const len = maxLen * (1 - t * 0.7);
    out.push(lens(p, a - spread, len, len * 0.22), lens(p, a + spread, len, len * 0.22));
  }
  return out;
}

/** Split leaf (monstera-like): outline, midrib and veins running to the edge. */
export function splitLeaf(stemBase: P, stemCtrl: P, s: P, t: P, l1: P, l2: P, r1: P, r2: P): string[] {
  const out = [quadPath(stemBase, stemCtrl, s)];
  out.push(`M${s[0]} ${s[1]}C${l1[0]} ${l1[1]} ${l2[0]} ${l2[1]} ${t[0]} ${t[1]}C${r1[0]} ${r1[1]} ${r2[0]} ${r2[1]} ${s[0]} ${s[1]}Z`);
  out.push(`M${s[0]} ${s[1]}L${t[0]} ${t[1]}`);
  for (const k of [0.22, 0.38, 0.54, 0.7]) {
    const m: P = [s[0] + (t[0] - s[0]) * k, s[1] + (t[1] - s[1]) * k];
    const le = cubic(s, l1, l2, t, k + 0.08);
    const re = cubic(t, r1, r2, s, 1 - k - 0.08);
    out.push(`M${r(m[0])} ${r(m[1])}L${r(le[0])} ${r(le[1])}`, `M${r(m[0])} ${r(m[1])}L${r(re[0])} ${r(re[1])}`);
  }
  return out;
}

/** Daisy: stem, two leaves, a ring of petals around a centre. */
export function daisy(base: P, ctrl: P, head: P, petalLen: number, petals = 12): { paths: string[]; centre: P; r: number } {
  const out = [quadPath(base, ctrl, head)];
  for (const t of [0.35, 0.58]) {
    const p = quad(base, ctrl, head, t);
    const a = quadAngle(base, ctrl, head, t);
    out.push(lens(p, a + (t < 0.5 ? -0.8 : 0.85), petalLen * 2.2, petalLen * 0.5));
  }
  const cr = petalLen * 0.45;
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2;
    const p: P = [head[0] + Math.cos(a) * (cr + 2), head[1] + Math.sin(a) * (cr + 2)];
    out.push(lens(p, a, petalLen, petalLen * 0.32));
  }
  return { paths: out, centre: head, r: cr };
}
