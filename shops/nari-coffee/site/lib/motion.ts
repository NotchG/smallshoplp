// Motion tokens for Nari Coffee (docs/trd.md "Motion spec"). Components read from here.
export const duration = {
  press: 0.12,   // press feedback
  ui: 0.18,      // hover / small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 1.0,     // the one signature moment: the N badge rolling into place
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "power3.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
