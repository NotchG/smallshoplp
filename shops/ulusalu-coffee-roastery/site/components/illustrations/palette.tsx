import type { ReactNode } from "react";

// One illustration set: front elevation as seen through the pastry-case glass,
// viewBox 0 0 200 200, baseline y=184, 2.5px bilah stroke, flat fills only.
export const C = {
  bilah: "#161514",
  bata: "#F4F4F1",
  white: "#FFFFFF",
  beton: "#DCDBD7",
  taman: "#3D5E3A",
  roaster: "#6B1A1C",
  // illustration-only tints (design brief §6)
  espresso: "#4A2C1D",
  aren: "#A86A2C",
  milk: "#F1EBDF",
  crust: "#D9A55B",
  cocoa: "#3B2418",
  kraft: "#B88E5E",
  // added for dishes the brief names: pale-yellow crepe and banana, yolk, tomato, leaf
  pale: "#EDD9A3",
  yolk: "#E8A33A",
  tomato: "#C4452F",
  leaf: "#5E8A4E",
} as const;

// viewBox lets a shelf of short items crop the empty space above them at the same scale.
export type IllProps = { label: string; className?: string; viewBox?: string };

export function Shadow({ rx = 62, fill = C.beton }: { rx?: number; fill?: string }) {
  return <ellipse cx="100" cy="185" rx={rx} ry="5" fill={fill} stroke="none" />;
}

export function IllFrame({
  label,
  className = "",
  children,
  viewBox = "0 0 200 200",
  stroke = C.bilah,
}: {
  label: string;
  className?: string;
  children: ReactNode;
  viewBox?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={label}
      className={`ill ${className}`}
      fill="none"
      stroke={stroke}
      strokeWidth={2.5}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {children}
    </svg>
  );
}
