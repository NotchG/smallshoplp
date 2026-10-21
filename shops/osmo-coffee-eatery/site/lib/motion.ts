// Motion tokens for OSMO, from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback (CSS uses 180ms)
  ui: 0.25,      // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // the one signature moment: the bean finds "now"
  label: 0.3,    // "Sekarang…" label after the bean lands
} as const;

export const delay = {
  hero: 0.25,    // after document.fonts.ready
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20, label: 6 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
