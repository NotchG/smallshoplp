// Motion tokens from docs/design-brief.md §8; components read from here.
export const duration = {
  press: 0.12,   // press feedback (CSS mirrors this: 120 ms)
  ui: 0.18,      // hover colour change (CSS mirrors this: 180 ms)
  reveal: 0.7,   // section entering the viewport
  card: 0.9,     // the signature moment: the bean card is set down
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20, card: 40 } as const; // px. Keep small.

export const rotate = { from: -10, rest: -4 } as const; // degrees; the card rests at CSS -4°

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
