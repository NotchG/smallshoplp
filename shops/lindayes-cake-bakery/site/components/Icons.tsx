// Authored line icons: 24px grid, 1.75 stroke, round caps. Decorative next to a text label.
type P = { className?: string };

function Svg({ className, children }: P & { children: React.ReactNode }) {
  return (
    <svg
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

export function IconPin(p: P) {
  return (
    <Svg {...p}>
      <path d="M12 21s-6.5-5.7-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 15.3 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </Svg>
  );
}

export function IconChat(p: P) {
  return (
    <Svg {...p}>
      <path d="M20 11.6a8 8 0 0 1-11.7 7.1L4 20l1.3-4.1A8 8 0 1 1 20 11.6z" />
      <path d="M9 10.5h6M9 13.5h4" />
    </Svg>
  );
}

export function IconPhone(p: P) {
  return (
    <Svg {...p}>
      <path d="M20.5 16.4v2.7a1.8 1.8 0 0 1-2 1.8 17.8 17.8 0 0 1-7.8-2.8 17.5 17.5 0 0 1-5.4-5.4 17.8 17.8 0 0 1-2.8-7.8 1.8 1.8 0 0 1 1.8-2h2.7a1.8 1.8 0 0 1 1.8 1.6c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9L7.9 10a14.4 14.4 0 0 0 5.4 5.4l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6a1.8 1.8 0 0 1 1.7 1.9z" />
    </Svg>
  );
}

export function IconBag(p: P) {
  return (
    <Svg {...p}>
      <path d="M5.5 8h13l-1 12.5h-11z" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" />
    </Svg>
  );
}

export function IconArrow(p: P) {
  return (
    <Svg {...p}>
      <path d="M7 17 17 7M9 7h8v8" />
    </Svg>
  );
}
