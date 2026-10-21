// Authored action icons: one 24px grid, 2px round stroke, drawn for this site.
const paths = {
  pin: (
    <>
      <path d="M12 21s-6.5-5.7-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 15.3 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </>
  ),
  chat: <path d="M4.2 20l1.2-3.7a8 8 0 1 1 3 2.6L4.2 20z" />,
  phone: (
    <path d="M6.6 3.8h2.6l1.4 3.9-1.9 1.4a10.8 10.8 0 0 0 6.2 6.2l1.4-1.9 3.9 1.4v2.6a2 2 0 0 1-2.1 2A15.6 15.6 0 0 1 4.6 5.9a2 2 0 0 1 2-2.1z" />
  ),
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
