// Motion tokens for Sedap Wangi (design brief §8, TRD motion spec). Components read from here.
export const duration = {
  press: 0.15, // hover / press feedback
  ui: 0.2, // small UI changes (menu chevrons, tent-card lift)
  reveal: 0.6, // section block entering the viewport
  hero: 1.1, // the one signature moment: the cake-box lid (CSS keyframe in globals.css)
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  lid: "cubic-bezier(0.16, 1, 0.3, 1)", // reference only; the lid itself is CSS
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
