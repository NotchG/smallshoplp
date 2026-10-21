// Authored icons, one family: 24px grid, 1.75 stroke, round caps. Decorative (aria-hidden).
type P = { size?: number; className?: string };

function Svg({ size = 20, className, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

export function PinIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </Svg>
  );
}

export function ChatIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M20 11.6a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z" />
    </Svg>
  );
}

export function PhoneIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M6.6 3.8h2.6l1.4 4-2 1.3a11 11 0 0 0 6.3 6.3l1.3-2 4 1.4v2.6a1.8 1.8 0 0 1-2 1.8A16.4 16.4 0 0 1 4.8 5.8a1.8 1.8 0 0 1 1.8-2Z" />
    </Svg>
  );
}

export function ArrowIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}
