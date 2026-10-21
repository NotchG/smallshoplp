// Small UI icons, one stroke weight. Decorative: the button text names the action.
export type IconName = "route" | "chat" | "phone";

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === "route" && (
        <>
          <path d="M6 21v-6.5a4.5 4.5 0 0 1 4.5-4.5H19" />
          <path d="M15 6l4 4-4 4" />
        </>
      )}
      {name === "chat" && (
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.6L3.5 20.5l1.4-4.3a8.5 8.5 0 1 1 15.6-4.7z" />
      )}
      {name === "phone" && (
        <path d="M5.5 3.5h3.3l1.9 4.8-2.4 1.6a11.5 11.5 0 0 0 5.8 5.8l1.6-2.4 4.8 1.9v3.3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2z" />
      )}
    </svg>
  );
}
