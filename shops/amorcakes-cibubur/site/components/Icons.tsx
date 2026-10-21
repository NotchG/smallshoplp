// One authored icon set: 24px grid, 2px round strokes, currentColor.
type P = { className?: string; size?: number };

function Svg({ size = 22, className, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
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

export function IconChat(p: P) {
  return (
    <Svg {...p}>
      <path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.6 19z" />
      <path d="M9.2 8.6c.2 2.6 2 4.6 4.6 5.4l1.2-1.3 2 1.1c-.3 1.2-1.3 1.8-2.4 1.6-3.4-.6-6.1-3.4-6.6-6.8-.1-1 .5-2 1.6-2.2l1 2z" />
    </Svg>
  );
}

export function IconPin(p: P) {
  return (
    <Svg {...p}>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </Svg>
  );
}

export function IconPhone(p: P) {
  return (
    <Svg {...p}>
      <path d="M5 4h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 4.9 4.9l1.3-2 4 1.6V17a2 2 0 0 1-2.2 2A15 15 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </Svg>
  );
}

export function IconInstagram(p: P) {
  return (
    <Svg {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M17 7h.01" />
    </Svg>
  );
}

export function IconFacebook(p: P) {
  return (
    <Svg {...p}>
      <path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.5V4.3a19 19 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 3.9v2.4H9v3h2.5V21" />
    </Svg>
  );
}

export function IconTiktok(p: P) {
  return (
    <Svg {...p}>
      <path d="M14 3.5v11.2a3.8 3.8 0 1 1-3.8-3.8" />
      <path d="M14 3.5c.4 2.6 2.2 4.4 4.8 4.6" />
    </Svg>
  );
}

export function IconArrow(p: P) {
  return (
    <Svg {...p}>
      <path d="M7 17L17 7" />
      <path d="M8.5 7H17v8.5" />
    </Svg>
  );
}

export function IconArrowRight(p: P) {
  return (
    <Svg {...p}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </Svg>
  );
}

export function IconCheck(p: P) {
  return (
    <Svg {...p}>
      <path d="M5 12.5l4.2 4.2L19 7" />
    </Svg>
  );
}
