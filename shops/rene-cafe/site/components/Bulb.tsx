import { C } from "@/lib/palette";

// A small lit Edison bulb: the bullet for opening hours. Decorative.
export default function Bulb({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="5" y="0" width="4" height="4" fill="currentColor" />
      <circle cx="7" cy="8.6" r="5.2" fill={C.lampu} />
    </svg>
  );
}
