// Motion tokens from docs/design-brief.md §8. Components read from here; CSS mirrors the
// hover (180ms) and press (120ms) values.
export const duration = {
  press: 0.12, // press scale
  ui: 0.18, // hover overlay
  reveal: 0.6, // section entering the viewport
  hero: 0.9, // each table sliding into the long table (the signature)
  glow: 0.5, // copper light pools fading in
} as const;

export const ease = {
  out: "power2.out", // starter Reveal
  outStrong: "expo.out", // the tables
  fade: "power1.out", // the pools
  inOut: "power2.inOut",
} as const;

export const stagger = { tables: 0.07 } as const;

// When the pools start lighting, in seconds into the signature timeline.
export const at = { glow: 0.9 } as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
