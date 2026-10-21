// Motion tokens. Set these per shop from docs/design-brief.md; components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // the one signature moment
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// The hero sign switching on (TRD motion spec). One dip only, total 0.9 s <= duration.hero.
export const sign = {
  from: 0.6,     // dim layer opacity before the tube catches
  dip: 0.07,     // 0.6 -> 0.15
  flick: 0.08,   // 0.15 -> 0.45
  settle: 0.4,   // 0.45 -> 0 (ease.out)
  haloAt: 0.3,   // halo starts here
  halo: 0.6,     // halo 0 -> 1 (ease.out)
  step: "none",  // ease for the two flicker steps
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
