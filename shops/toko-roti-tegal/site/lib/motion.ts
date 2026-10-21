// Motion tokens from docs/design-brief.md §8 and the TRD motion spec.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 0.5,     // the one signature moment: today's-hours sticker pressed on
} as const;

export const delay = { hero: 0.15 } as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
