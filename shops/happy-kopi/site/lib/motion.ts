// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.18,   // hover / press feedback (CSS mirrors this: 180ms)
  hover: 0.18,
  reveal: 0.6,   // section entering the viewport
  photo: 0.7,    // hero arch photo fade-up
  sun: 1.1,      // hero sun rise (the signature)
} as const;

export const ease = {
  out: "power2.out",
  reveal: "power2.out",
  signature: "power3.out",
} as const;

export const distance = { reveal: 20, photo: 24 } as const; // px. Keep small.

// Signature "matahari pagi": photo at 0.1s, sun at 0.25s; ends by 1.35s.
export const hero = {
  photoDelay: 0.1,
  sunDelay: 0.25,
  sunFrom: { open: 45, closed: 100 }, // yPercent
  sunTo: { open: 0, closed: 45 }, // brief said 70; at 70 the sun hides behind the arch
  fallbackMs: 1400, // CSS shows the final state at 1.4s; later hydration skips the tween
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
