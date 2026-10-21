// One authored icon set: 20px grid, 1.75 stroke, round joins, currentColor.
export type IconName = "pin" | "chat" | "phone" | "external" | "leaf" | "smoke" | "laptop";

const paths: Record<IconName, React.ReactNode> = {
  pin: (
    <>
      <path d="M10 18s5.75-5.1 5.75-9.6a5.75 5.75 0 1 0-11.5 0C4.25 12.9 10 18 10 18Z" />
      <circle cx="10" cy="8.4" r="2.1" />
    </>
  ),
  chat: (
    <>
      <path d="M10 2.9a7.1 7.1 0 0 0-6.2 10.6L2.9 17l3.6-.9A7.1 7.1 0 1 0 10 2.9Z" />
      <path d="M7.2 8.6c.4 1.7 1.9 3.3 3.9 3.9" />
    </>
  ),
  phone: (
    <path d="M6.6 3H4.7A1.6 1.6 0 0 0 3.1 4.7c.3 6.7 5.5 11.9 12.2 12.2a1.6 1.6 0 0 0 1.7-1.6v-1.9l-3.4-1.4-1.7 1.7a8.7 8.7 0 0 1-4.6-4.6l1.7-1.7L6.6 3Z" />
  ),
  external: (
    <>
      <path d="M7.5 12.5 14 6" />
      <path d="M8.5 5.5H14.5V11.5" />
    </>
  ),
  // Facts strip: plant milk, outdoor smoking, good for work.
  leaf: (
    <>
      <path d="M4.5 15.5c0-7 4.5-11 11-11 0 6.5-4 11-11 11Z" />
      <path d="M4.5 15.5 10.5 9.5" />
    </>
  ),
  smoke: (
    <>
      <path d="M2.5 14.5h11.5v2.5H2.5z" />
      <path d="M16.5 14.5V17" />
      <path d="M15.5 11.5c0-1.6 1.6-1.9 1.6-3.5S15.5 6.2 15.5 4.5" />
    </>
  ),
  laptop: (
    <>
      <path d="M4.5 5.5h11v7.5h-11z" />
      <path d="M2.5 15.5h15" />
    </>
  ),
};

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
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
