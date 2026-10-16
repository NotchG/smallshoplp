// Family section spot icons, 64px: simple paper and amber shapes on the green ground.
// The green "cut-outs" (eyes, windows, hubs) use the ground colour.
const PAPER = "#FBFAF6";
const AMBER = "#F2B544";
const GREEN = "#2C5A35";

export default function SpotIcon({ name, className = "" }: { name: "rabbit" | "fish" | "car"; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true" focusable="false" className={className}>
      {name === "rabbit" && (
        <>
          <ellipse cx="39" cy="14" rx="4.5" ry="12" fill={PAPER} transform="rotate(-14 39 14)" />
          <ellipse cx="48" cy="15" rx="4.5" ry="12" fill={PAPER} transform="rotate(14 48 15)" />
          <ellipse cx="39" cy="15" rx="1.8" ry="7.5" fill={AMBER} transform="rotate(-14 39 15)" />
          <ellipse cx="48" cy="16" rx="1.8" ry="7.5" fill={AMBER} transform="rotate(14 48 16)" />
          <ellipse cx="28" cy="44" rx="19" ry="14" fill={PAPER} />
          <circle cx="44" cy="32" r="11" fill={PAPER} />
          <circle cx="10" cy="42" r="5" fill={AMBER} />
          <ellipse cx="40" cy="57" rx="8" ry="3.5" fill={PAPER} />
          <circle cx="47.5" cy="30" r="1.8" fill={GREEN} />
          <circle cx="54.5" cy="34" r="1.6" fill={AMBER} />
        </>
      )}
      {name === "fish" && (
        <>
          <path d="M8 30c8-14 32-16 42-2-10 14-34 14-42 2Z" fill={AMBER} />
          <path d="M48 28 60 18l-3 10 3 10Z" fill={AMBER} />
          <path d="M24 18c4-6 12-6 16 0Z" fill={AMBER} />
          <ellipse cx="30" cy="27" rx="7" ry="4.5" fill={PAPER} />
          <circle cx="16" cy="27" r="2" fill={GREEN} />
          <path d="M6 50c6-4 12-4 18 0s12 4 18 0 12-4 18 0v4c-6-4-12-4-18 0s-12 4-18 0-12-4-18 0Z" fill={PAPER} />
        </>
      )}
      {name === "car" && (
        <>
          <path d="M14 32 21 18h22l9 14Z" fill={PAPER} />
          <path d="M21.5 30 26 21h6v9Zm13.5 0v-9h6l5 9Z" fill={GREEN} />
          <rect x="4" y="30" width="56" height="16" rx="6" fill={PAPER} />
          <rect x="52" y="34" width="6" height="4" rx="1.5" fill={AMBER} />
          <circle cx="18" cy="46" r="7" fill={AMBER} />
          <circle cx="46" cy="46" r="7" fill={AMBER} />
          <circle cx="18" cy="46" r="2.6" fill={GREEN} />
          <circle cx="46" cy="46" r="2.6" fill={GREEN} />
        </>
      )}
    </svg>
  );
}
