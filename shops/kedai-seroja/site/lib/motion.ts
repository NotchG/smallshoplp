// Motion tokens for Kedai Seroja (design brief §8). Components read from here.
export const duration = {
  press: 0.15,   // press feedback (CSS uses the same value)
  hover: 0.18,   // hover overlay (CSS)
  reveal: 0.6,   // section entering the viewport
  piece: 0.5,    // each lauk landing on the hero plate
  caption: 0.3,  // plate caption fade
} as const;

export const ease = {
  out: "power2.out",     // section reveals
  place: "power3.out",   // lauk landing on the plate
  caption: "power1.out", // plate caption
} as const;

export const distance = {
  reveal: 20, // px
  piece: 28,  // px, pieces drop in from above
} as const;

export const stagger = { piece: 0.14 } as const;  // s between pieces
export const delay = { signature: 0.25 } as const; // s after mount, hero text already painted
export const scale = { piece: 0.96 } as const;     // start near final size, never from 0

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
