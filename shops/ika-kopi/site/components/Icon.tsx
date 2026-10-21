// Line icons: 24px viewBox, 1.75 stroke, currentColor, decorative (aria-hidden).
// One set, one weight, drawn for this site.
export type IconKey =
  | "snow"
  | "plug"
  | "table"
  | "chair"
  | "sparkle"
  | "clock"
  | "pin"
  | "chat"
  | "phone";

const paths: Record<IconKey, React.ReactNode> = {
  snow: (
    <>
      <path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25 3.8 16.75" />
      <path d="m9.5 4 2.5 1.6L14.5 4M9.5 20l2.5-1.6 2.5 1.6M4.6 10.4l2.6-1.3-.1-2.9M19.4 13.6l-2.6 1.3.1 2.9M19.5 10.4l-2.6-1.3.1-2.9M4.5 13.6l2.6 1.3-.1 2.9" />
    </>
  ),
  plug: (
    <>
      <path d="M9 2.5v4.5M15 2.5v4.5" />
      <path d="M6 7h12v3.5a6 6 0 0 1-12 0V7Z" />
      <path d="M12 16.5v5" />
    </>
  ),
  table: <path d="M2.5 8h19M5 8v12.5M19 8v12.5M5 12.5h14" />,
  chair: (
    <>
      <path d="M7 2.5v19M17 14v7.5" />
      <rect x="7" y="11" width="11" height="3" rx="1.5" />
      <path d="M7 6.5h3" />
    </>
  ),
  sparkle: (
    <>
      <path d="M11 3.5c.5 3.7 2.4 5.7 6.5 6.5-4.1.8-6 2.8-6.5 6.5-.5-3.7-2.4-5.7-6.5-6.5 4.1-.8 6-2.8 6.5-6.5Z" />
      <path d="M18.5 15.5v5M16 18h5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2.1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0c0 5-6.5 11.2-6.5 11.2Z" />
      <circle cx="12" cy="10.3" r="2.3" />
    </>
  ),
  chat: <path d="M4 19.5 5.3 15.6A8 8 0 1 1 8.6 18.6L4 19.5Z" />,
  phone: (
    <path d="M6.6 3.5h2.6l1.4 4-2 1.4a11 11 0 0 0 6.5 6.5l1.4-2 4 1.4v2.6a2 2 0 0 1-2.1 2A16.6 16.6 0 0 1 4.6 5.6a2 2 0 0 1 2-2.1Z" />
  ),
};

export default function Icon({ name, className = "" }: { name: IconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
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
