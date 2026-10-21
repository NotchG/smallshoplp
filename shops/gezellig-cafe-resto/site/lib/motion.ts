// Motion tokens from docs/design-brief.md §8 and the TRD motion spec. Components read from here.
export const duration = {
  press: 0.18,   // hover / press feedback (CSS uses 180ms)
  ui: 0.25,      // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // night glass clearing: the one signature moment
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// "Lampu menyala": the hero window's lights-on timeline (seconds).
export const lights = {
  delay: 0.2,          // glass starts clearing
  haloStart: 0.35,     // first shade lights
  halo: 0.6,           // each shade's halo
  stagger: 0.08,       // from the centre shade outward
  glassFrom: 0.86,     // night glass opacity at first paint
  haloScaleFrom: 0.92, // halos start near their final size
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
