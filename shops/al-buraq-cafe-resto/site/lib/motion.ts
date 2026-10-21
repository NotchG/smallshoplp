// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // press nudge
  ui: 0.18,      // hover / focus colour change
  reveal: 0.7,   // section block entering the viewport
  hero: 0.9,     // the lantern light layer
  pane: 0.35,    // one tier of lantern panes lighting up
} as const;

export const stagger = { paneTier: 0.15 } as const;

export const delay = { hero: 0.2, light: 0.45 } as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export const scale = { lightFrom: 0.94 } as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
