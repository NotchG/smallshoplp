// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.12, // press scale (CSS mirrors this: 120ms)
  hover: 0.18, // hover overlay (CSS mirrors this: 180ms)
  reveal: 0.6, // section entering the viewport
  signature: 0.9, // each table sliding into the long table
  signatureDelay: 0.15, // after first paint
  glow: 0.5, // copper light pools fading in
  glowAt: 0.9, // position of the glow fade in the signature timeline
} as const;

export const ease = {
  out: "power2.out", // starter Reveal reads this
  reveal: "power2.out",
  signature: "expo.out",
  fade: "power1.out",
} as const;

export const stagger = { tables: 0.07 } as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
