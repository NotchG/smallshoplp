// Motion tokens for Dalle (design brief §8). Components read from here.
export const duration = {
  press: 0.12, // press feedback (CSS mirrors this)
  fast: 0.18, // hover fill (CSS mirrors this)
  ui: 0.25,
  reveal: 0.6, // section entering the viewport
  hero: 0.7, // "Dalle" arriving in the signature moment
  heroGroup: 0.6, // rest of the hero copy, one group
  bar: 0.5, // each pendant bar switching on
  dim: 0.9, // dim layer lifting off the photo
  glow: 0.6, // arch outline glow
  photo: 1.2, // photo settling
} as const;

export const ease = {
  out: "power2.out",
  arrive: "expo.out",
  outStrong: "expo.out",
  dim: "power1.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20, heroLead: 20, heroGroup: 12 } as const; // px. Keep small.

export const stagger = { bars: 0.12 } as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
