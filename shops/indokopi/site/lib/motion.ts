// Motion tokens from docs/design-brief.md §8 and the TRD motion spec; components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // the one signature moment (starter token; the hero uses beam/undim below)
  beam: 1.1,     // headlight beam crossing the hero sign
  undim: 0.5,    // sign brightening from dusk-dim to full yellow
} as const;

export const delay = {
  beam: 0.15,
  undim: 0.45,
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  beam: "power1.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
