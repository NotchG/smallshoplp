// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.18, // hover / press feedback (CSS uses --hover-ms: 180ms)
  ui: 0.25,
  reveal: 0.6, // section entering the viewport
  hero: 1.7, // the signature moment, total
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px

export const reveal = { y: 20, duration: 0.6, ease: "power2.out", start: "top 85%" } as const;

// Lampu menyala: bulbs switch on left to right, then the panorama warms up.
export const lampu = {
  delay: 0.2, // first bulb starts
  bulb: 0.18, // each bulb's fade
  spread: 0.9, // starts spread across this many seconds, whatever the bulb count
  warmAt: 0.9, // scrim starts lifting (timeline time, from 0)
  warm: 0.8, // scrim fade duration
  scrimFrom: 0.45,
  ease: "power2.out",
} as const;

export const hoverMs = 180;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
