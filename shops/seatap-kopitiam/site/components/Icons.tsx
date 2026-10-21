// One small icon set: 24px grid, 2px stroke, square caps and mitred joins (the wall's square tiles).
type P = { className?: string };

function Svg({ className = "", children }: P & { children: React.ReactNode }) {
  return (
    <svg
      className={`h-5 w-5 flex-none ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const IconDirections = (p: P) => (
  <Svg {...p}>
    <path d="M6 18 L17 7" />
    <path d="M9 6 H18 V15" />
  </Svg>
);

export const IconChat = (p: P) => (
  <Svg {...p}>
    <path d="M4 5 H20 V16 H11 L6.5 19.5 V16 H4 Z" />
  </Svg>
);

export const IconPhone = (p: P) => (
  <Svg {...p}>
    <path d="M7.5 3 H16.5 V21 H7.5 Z" />
    <path d="M11 17.5 H13" />
  </Svg>
);

export const IconArrow = (p: P) => (
  <Svg {...p}>
    <path d="M4 12 H18" />
    <path d="M13 7 L18 12 L13 17" />
  </Svg>
);
