// Illustration-only fills (design brief §3). Outlines are steel, 2px, non-scaling (globals.css).
export const ink = {
  steel: "#1D1C1A",
  light: "#FBFAF6",
  tea: "#D2A957",
  coffee: "#6F4A35",
  milk: "#E8D9C4",
  cookie: "#C99A5B",
  chocolate: "#3E2419",
  cheese: "#F4E3A8",
  crust: "#E3B866",
  sage: "#A9B9A2",
} as const;

// Common outline props. The CSS rule `.illus [stroke="#1D1C1A"]` keeps these at 2px at any size.
export const line = {
  stroke: ink.steel,
  strokeWidth: 2,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

// Deterministic scatter so server and client markup always match.
export function seeded(seed: number) {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// The plain arch printed on Dalle's cups (a simple arch, not the logo).
export function ArchMark({ x, y, w = 20, h = 28 }: { x: number; y: number; w?: number; h?: number }) {
  const r = w / 2;
  return (
    <path
      d={`M${x} ${y + h} V${y + r} A${r} ${r} 0 0 1 ${x + w} ${y + r} V${y + h} Z`}
      fill="none"
      {...line}
    />
  );
}
