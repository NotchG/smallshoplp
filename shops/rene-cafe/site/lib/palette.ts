// Hex values for inline SVG fills (presentation attributes can't read CSS variables reliably).
// Mirrors the tokens in app/globals.css and design-brief §3.
export const C = {
  bata: "#7A3526",
  daun: "#1F3B2C",
  kaca: "#ECEFE6",
  besi: "#141815",
  lampu: "#EBA94C",
  pucuk: "#D9573D", // illustrations only
  // illustration-only tints
  lawn: "#6F9A48",
  canopy: "#3E6B3F",
  wood: "#9C6B3F",
  rattan: "#C99A57",
  joint: "#6E2F21",
  ceramic: "#F7F6F0",
} as const;

/** Hedge top: a row of half-round red tips from x0 to x1, sitting on baseline y. */
export function scallop(x0: number, x1: number, y: number, r: number, depth: number) {
  const n = Math.ceil((x1 - x0) / (2 * r));
  let d = `M${x0} ${y}`;
  for (let i = 0; i < n; i++) d += ` a${r} ${r} 0 0 1 ${2 * r} 0`;
  return `${d} V${y + depth} H${x0} Z`;
}
