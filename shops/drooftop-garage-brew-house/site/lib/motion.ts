// Motion tokens from docs/design-brief.md §8 and the TRD motion spec. Components read from here.
export const duration = {
  press: 0.18,   // hover / press feedback (CSS mirrors this as 180ms)
  ui: 0.25,      // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 1.1,     // the shutter rolling up: the one signature moment
  dip: 0.12,     // the shutter's small push down before it rolls up
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  shutter: "power2.inOut",
  dip: "power1.out",
} as const;

export const delay = { shutter: 0.25 } as const; // s

export const distance = { reveal: 20, shutterDip: 4 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
