import type { ReactNode } from "react";

// Food tones (illustration only) plus the palette. Flat shapes, light from top-left:
// one highlight shape and one ground shadow per item. No outlines, gradients or faces.
export const C = {
  crust: "#C9772F",
  crumb: "#F7DCA8",
  cocoa: "#4A2416",
  fan: "#EE9B32",
  lemon: "#F2E94E",
  brick: "#A3201C",
  ink: "#1A1712",
  white: "#FFFFFF",
  tray: "#ECE7DF",
} as const;

export type ArtProps = { className?: string; decorative?: boolean };

export function Art({
  label,
  decorative,
  className,
  viewBox = "0 28 240 142",
  children,
}: ArtProps & { label: string; viewBox?: string; children: ReactNode }) {
  const a11y = decorative
    ? { "aria-hidden": true as const, focusable: "false" as const }
    : { role: "img", "aria-label": label };
  return (
    <svg viewBox={viewBox} className={className} {...a11y}>
      {children}
    </svg>
  );
}

// Ground shadow (ink 10%).
export function Shadow({ cx = 122, cy = 156, rx = 92, ry = 9 }: { cx?: number; cy?: number; rx?: number; ry?: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={C.ink} fillOpacity={0.1} />;
}
