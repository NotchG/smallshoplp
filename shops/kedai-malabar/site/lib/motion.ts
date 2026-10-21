// Motion tokens from docs/design-brief.md §8 and the TRD motion spec; components read from here.
export const duration = {
  press: 0.15,   // press feedback (CSS uses 150ms)
  hover: 0.18,   // hover feedback (CSS uses 180ms)
  reveal: 0.6,   // section entering the viewport
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// Signature moment "Lampu menyala": the string lights switch on left to right.
export const garland = {
  delay: 0.15,
  bulb: 0.4,
  staggerAmount: 0.9,
  ease: "power2.out",
  coreFrom: 0.85,
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
