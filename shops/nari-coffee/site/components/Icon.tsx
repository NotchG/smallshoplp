// Authored line icons: 24px grid, one 2px stroke, round caps. Decorative next to a text label.
const paths = {
  pin: (
    <>
      <path d="M12 21.5s-6.5-5.7-6.5-11.2a6.5 6.5 0 0 1 13 0c0 5.5-6.5 11.2-6.5 11.2Z" />
      <circle cx="12" cy="10.2" r="2.4" />
    </>
  ),
  chat: (
    <>
      <path d="M4.2 20.2 5.4 16.4A8.2 8.2 0 1 1 8.1 19l-3.9 1.2Z" />
      <path d="M8.8 10.6h6.4M8.8 13.6h4" />
    </>
  ),
  phone: (
    <path d="M6.4 3.5h2.9l1.7 4.4-2.2 1.4a10.6 10.6 0 0 0 5.9 5.9l1.4-2.2 4.4 1.7v2.9a2 2 0 0 1-2.1 2A15.6 15.6 0 0 1 4.4 5.6a2 2 0 0 1 2-2.1Z" />
  ),
  external: <path d="M8 16 16 8M9.5 8H16v6.5" />,
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
