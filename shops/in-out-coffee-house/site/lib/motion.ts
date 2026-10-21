// Motion tokens. Set per shop from docs/design-brief.md; components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  hero: 0.7,     // the signature: each wordmark arrowhead
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = {
  reveal: 20, // px. Keep small.
  arrow: 28,  // px the wordmark arrowheads travel along their own direction
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
