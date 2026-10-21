import { mock } from "@/lib/mockup";

// Stand-in for OSMO's round coffee-bean logo ([MOCKUP] until the owner sends the real file):
// a filled circle with an S-shaped crease. Fill is currentColor, crease is --bean-crease.
export const BEAN_CREASE = "M12 3.2C6.6 8 17.4 15.6 12 20.8";

export default function BeanMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...mock(true)}
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d={BEAN_CREASE}
        fill="none"
        stroke="var(--bean-crease, #1d2836)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
