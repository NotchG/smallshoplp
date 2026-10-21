// Motion tokens for Madre Coffee Space (docs/trd.md motion spec). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // reserved; the hero signature is the tag sequence below
  tag: 0.45,     // each hero tag landing on its plate
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20, tag: 10 } as const; // px. Keep small.

export const stagger = { tag: 0.14 } as const; // s between hero tags
export const delay = { tags: 0.35 } as const;  // s before the first hero tag
// scale.heroFrom (1.04) was removed with the hero image settle in the remove-one-thing pass.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
