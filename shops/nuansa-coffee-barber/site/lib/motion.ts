// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.12,   // press feedback (CSS mirrors this in --press)
  hover: 0.18,   // hover feedback (CSS mirrors this in --hover)
  reveal: 0.6,   // section entering the viewport
  hero: 1.1,     // the one signature moment, total
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// Signature moment: the fascia sign switches on (one hesitation, then the halo, then the shop lights).
export const sign = {
  unlit: 0.18,              // lit layer start opacity
  delay: 0.15,              // first step starts here
  steps: [0.06, 0.07, 0.12] as const, // → 0.85, → dip, → 1
  peak: 0.85,
  dip: 0.35,
  glowAt: 0.4,
  glow: 0.5,
  photoFrom: 0.55,
  photoAt: 0.5,
  photo: 0.6,
  ease: "power2.out",
  // If the page took longer than this (ms since navigation) to hydrate, the CSS safety
  // has already lit the sign: skip the sequence rather than replay it.
  lateAfter: 1400,
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
