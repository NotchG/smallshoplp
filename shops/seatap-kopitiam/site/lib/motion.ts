// Motion tokens for SEATAP Kopitiam (design brief §8). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.2,       // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 1.0,     // the one signature moment: tiles laid on the wall
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// Hero tiles are "laid onto the wall": a small drop and a near-final scale.
export const heroTile = {
  stagger: 0.08,
  y: -12,
  scale: 0.94,
  duration: 0.5,
} as const;

// Hero photo fades in while the tiles land. (Its 1.04 → 1 scale settle was cut in the
// remove-one-thing pass: the tiles are the moment, a second moving object competed with them.)
export const heroPhoto = {
  delay: 0.1,
  duration: 0.9,
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
