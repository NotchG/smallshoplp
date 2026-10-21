// The six colours from design brief §3, for SVG fills and strokes.
// Keep in sync with @theme in app/globals.css.
export const c = {
  room: "#22150f",
  filo: "#f5e9d3",
  kraft: "#cfab7c",
  syrup: "#e3a83e",
  pistachio: "#a8c46a",
  kunafe: "#d66a2c",
} as const;

// Layer lines: 1.5px at any rendered size.
export const line = {
  stroke: c.room,
  strokeWidth: 1.5,
  vectorEffect: "non-scaling-stroke" as const,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

// Small deterministic PRNG so illustrations render identically on server and client.
export function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
