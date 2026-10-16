// Motion tokens from docs/design-brief.md §8 and the TRD motion spec; components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // the one signature moment (this site finishes at 1.0 s)
  settle: 0.45,  // hero cake dropping onto its board
  card: 0.7,     // hero tent card swinging up on its hinge
  cardFade: 0.2, // the card's opacity, inside the first part of the swing
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  card: "expo.out",
} as const;

export const distance = { reveal: 20, settle: 14 } as const; // px. Keep small.

export const hinge = {
  from: -80,          // degrees, rotationX
  perspective: 700,
  cardStart: 0.3,     // seconds into the hero timeline
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
