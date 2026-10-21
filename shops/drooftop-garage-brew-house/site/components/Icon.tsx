// Authored arrow icons, one stroke weight. Decorative: the link text carries the meaning.
const paths = {
  right: "M5 12h14M13 6l6 6-6 6",
  upRight: "M7 17 17 7M8.5 7H17v8.5",
  up: "M12 19V5M6 11l6-6 6 6",
  down: "M12 5v14M6 13l6 6 6-6",
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, strokeWidth = 2.25 }: { name: IconName; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}
