// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15, // press feedback (CSS mirrors this: 150ms)
  ui: 0.18, // hover overlay (CSS mirrors this: 180ms)
  fade: 0.2, // live chart marker appearing after hydration
  reveal: 0.6, // section entering the viewport
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// Signature, "Mendekati pintu": the facade eases toward the glass door as the hero scrolls away.
export const door = { scale: 1.1, scalePhone: 1.06, origin: "81% 55%", scrub: 0.6 } as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
