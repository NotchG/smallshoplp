// Motion tokens for Woven Coffee (docs/design-brief.md §8). Components read from here.
export const duration = {
  press: 0.12,    // press feedback (CSS)
  response: 0.18, // hover / focus overlay (CSS --response)
  reveal: 0.6,    // section entering the viewport
  hero: 0.9,      // the signature: threads + band settling
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out", // ≈ cubic-bezier(0.16, 1, 0.3, 1)
  inOut: "power2.inOut",
} as const;

export const distance = {
  reveal: 20,         // px, section reveal
  threadPercent: 6,   // xPercent the threads travel
  band: 24,           // px, wordmark row settle (desktop)
  bandPhone: 12,      // px, wordmark row settle below 768px
} as const;

export const delay = {
  band: 0.1,
} as const;

// Grouped tokens as named in the design brief.
export const signature = { dur: duration.hero, ease: ease.outStrong } as const;
export const reveal = { dur: duration.reveal, y: distance.reveal, ease: ease.out } as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
