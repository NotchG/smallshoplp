// Motion tokens for Kana (design brief §8). Components read from here.
export const duration = {
  press: 0.18,   // hover / press feedback (CSS mirrors this: 180ms / 120ms)
  ui: 0.25,      // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 0.7,     // wordmark
  group: 0.6,    // hero text group
  photo: 0.9,    // hero photo
  write: 0.6,    // the pen-note wipe (signature)
} as const;

export const ease = {
  out: "expo.out",     // hero arrivals
  soft: "power2.out",  // reveals and the pen wipe
  inOut: "power2.inOut",
} as const;

// Start times of the hero sequence (s). Ends by ~1.35s.
export const heroAt = { wordmark: 0, group: 0.15, photo: 0.2, note: 0.75 } as const;

export const distance = { reveal: 20, wordmark: 16, group: 12, photo: 24 } as const; // px. Keep small.

export const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
export const motionOkQuery = "(prefers-reduced-motion: no-preference)";

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia(reducedMotionQuery).matches;
}
