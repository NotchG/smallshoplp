// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 1.2,     // "Lampu menyala": whole festoon sequence on desktop
  bulb: 0.35,    // one bulb glow
  panes: 0.6,    // hero arch panes warming
} as const;

export const stagger = { bulb: 0.06 } as const; // left to right, per bulb

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
