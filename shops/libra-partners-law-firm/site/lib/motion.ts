// Motion tokens for LIBRA & Partners (design brief §8). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback (CSS mirrors this: 150ms colour, 100ms press)
  ui: 0.25,      // small UI changes (unused on this page)
  reveal: 0.6,   // section content entering the viewport
  hero: 1.25,    // reference only: the decode line is a CSS keyframe sequence in globals.css
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
