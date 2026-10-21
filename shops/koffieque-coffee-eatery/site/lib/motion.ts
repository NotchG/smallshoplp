// Motion tokens for KoffieQue, from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,     // hover / press feedback (CSS mirrors this: 150ms)
  ui: 0.25,        // small UI changes
  reveal: 0.6,     // section entering the viewport
  hero: 1.1,       // the whole lights-on sequence
  lampWarm: 0.45,  // one lamp warming up
  dot: 0.3,        // open dot beside "Buka hari ini"
} as const;

export const delay = {
  lamp: 0.2,          // first lamp after hydration
  lampStagger: 0.15,  // between lamps
} as const;

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
