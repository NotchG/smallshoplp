// Motion tokens from docs/design-brief.md §8; components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback (CSS mirrors these: 180 ms hover, 120 ms press)
  ui: 0.25,      // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // the one signature moment, total
  paint: 0.55,   // one brushed line of the name
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  paint: "power2.inOut",
} as const;

// The painted name: start time and length of each brush stroke, in seconds (~1.1 s total).
export const paintSequence = [
  { stroke: "arc", at: 0, duration: 0.4 },
  { stroke: "teman", at: 0.1, duration: duration.paint },
  { stroke: "kita", at: 0.45, duration: 0.5 },
  { stroke: "underline", at: 0.75, duration: 0.35 },
] as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
