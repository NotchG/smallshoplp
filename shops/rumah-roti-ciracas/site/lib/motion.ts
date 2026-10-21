// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15, // hover / press feedback
  ui: 0.2, // small UI changes, sticker hover
  reveal: 0.6, // section entering the viewport
  hero: 0.45, // the sticker press, the one signature moment
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// The sticker press: lifted (scale 1.12, -11deg, y -10px) to stuck (scale 1, -4deg, y 0).
// The lifted values are mirrored in globals.css under html.js so nothing jumps.
export const sticker = {
  fromScale: 1.12,
  fromRotate: -11,
  toRotate: -4,
  fromY: -10,
  delay: 0.15, // after hydration
  shadowAt: 0.15, // shadows cross-fade over the last 0.3s of the press
  shadowDuration: 0.3,
} as const;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
