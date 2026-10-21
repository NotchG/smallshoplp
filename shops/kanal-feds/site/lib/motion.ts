// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  hover: 0.18, // hover / press feedback (CSS mirrors this as --dur-hover)
  reveal: 0.6, // section entering the viewport
  signature: 0.9, // the day-line marker travelling to "now"
  markerFade: 0.15, // marker fades in over the first 150ms of the travel
  edgeFade: 0.3, // before opening / after closing: marker fades in at an end, no travel
  statusFade: 0.2, // status text swap from the no-JS fallback
} as const;

export const ease = {
  signature: "expo.out", // = cubic-bezier(0.16, 1, 0.3, 1)
  reveal: "power2.out",
} as const;

export const delay = { signature: 0.2 } as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
