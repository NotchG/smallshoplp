// Motion tokens for Rene Cafe, from docs/design-brief.md §8. Components read from here.
// The hero moment runs as CSS keyframes; globals.css mirrors duration.hero as --dur-hero.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.2,       // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 1.2,     // the one signature moment (window glare clears, garden settles)
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
