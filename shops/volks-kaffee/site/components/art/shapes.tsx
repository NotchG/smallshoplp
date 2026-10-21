import { C, STROKE } from "@/lib/palette";

type Pt = readonly [number, number];

// Closed path through the points with rounded corners (quadratic curve at each corner).
export function roundedPoly(points: readonly Pt[], r: number) {
  const n = points.length;
  const seg = (a: Pt, b: Pt, d: number): Pt => {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const len = Math.hypot(dx, dy) || 1;
    const t = Math.min(d / len, 0.5);
    return [a[0] + dx * t, a[1] + dy * t];
  };
  let d = "";
  for (let i = 0; i < n; i++) {
    const prev = points[(i - 1 + n) % n];
    const cur = points[i];
    const next = points[(i + 1) % n];
    const a = seg(cur, prev, r);
    const b = seg(cur, next, r);
    d += `${i === 0 ? "M" : "L"}${a[0].toFixed(1)} ${a[1].toFixed(1)}Q${cur[0]} ${cur[1]} ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
  }
  return d + "Z";
}

export const outline = {
  stroke: "currentColor",
  strokeWidth: STROKE,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

// The white vintage plate with a pale floral rim: pagar daisies and leaves.
// The plate's lowest point is cy + ry + 4.
export function FloralPlate({
  cx,
  cy,
  rx,
  ry,
  flowers = 10,
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  flowers?: number;
}) {
  const petal = Math.max(2.2, rx / 34);
  const items = Array.from({ length: flowers }, (_, i) => {
    const a = (i / flowers) * Math.PI * 2 + 0.3;
    const x = cx + Math.cos(a) * rx * 0.84;
    const y = cy + Math.sin(a) * ry * 0.78;
    const la = a + Math.PI / flowers;
    const lx = cx + Math.cos(la) * rx * 0.84;
    const ly = cy + Math.sin(la) * ry * 0.78;
    return { x, y, lx, ly, deg: (la * 180) / Math.PI + 90 };
  });
  return (
    <g>
      <ellipse cx={cx} cy={cy + 4} rx={rx} ry={ry} fill={C.piring} {...outline} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={C.piring} {...outline} />
      <ellipse
        cx={cx}
        cy={cy + 0.5}
        rx={rx * 0.66}
        ry={ry * 0.6}
        fill="none"
        stroke={C.pagarDark}
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
      {items.map((f, i) => (
        <g key={i}>
          <ellipse
            cx={f.lx}
            cy={f.ly}
            rx={petal * 1.9}
            ry={petal * 0.8}
            fill={C.pagarDark}
            fillOpacity="0.55"
            transform={`rotate(${f.deg.toFixed(0)} ${f.lx.toFixed(1)} ${f.ly.toFixed(1)})`}
          />
          {[0, 1, 2, 3, 4].map((p) => {
            const pa = (p / 5) * Math.PI * 2;
            return (
              <circle
                key={p}
                cx={(f.x + Math.cos(pa) * petal * 1.05).toFixed(1)}
                cy={(f.y + Math.sin(pa) * petal * 0.7).toFixed(1)}
                r={petal * 0.78}
                fill={C.pagar}
              />
            );
          })}
          <circle cx={f.x.toFixed(1)} cy={f.y.toFixed(1)} r={petal * 0.55} fill={C.sign} />
        </g>
      ))}
    </g>
  );
}

export type ArtProps = { label?: string; decorative?: boolean; className?: string };

export function artA11y({ label, decorative }: ArtProps) {
  return decorative || !label
    ? { "aria-hidden": true as const, focusable: "false" as const }
    : { role: "img" as const, "aria-label": label };
}
