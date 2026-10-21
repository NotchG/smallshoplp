// Authored icons, one hand: 24px grid, 2px stroke, round caps and joins. Always decorative.
export type IconName = "chat" | "pin" | "phone";

const paths: Record<IconName, React.ReactNode> = {
  // Speech bubble with a tail: "send a message" (no WhatsApp logo, no WhatsApp green).
  chat: <path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.4l1.4-4.3a8.4 8.4 0 1 1 15.6-4.5Z M8.6 11.8h.01 M12.1 11.8h.01 M15.6 11.8h.01" />,
  pin: (
    <>
      <path d="M12 21.2s-6.8-5.9-6.8-11.6a6.8 6.8 0 0 1 13.6 0c0 5.7-6.8 11.6-6.8 11.6Z" />
      <circle cx="12" cy="9.6" r="2.4" />
    </>
  ),
  phone: (
    <path d="M6.2 3.6h2.9l1.6 4.3-2.1 1.4a11.6 11.6 0 0 0 6.1 6.1l1.4-2.1 4.3 1.6v2.9a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.2 5.8a2 2 0 0 1 2-2.2Z" />
  ),
};

export default function Icon({ name }: { name: IconName }) {
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
    >
      {paths[name]}
    </svg>
  );
}
