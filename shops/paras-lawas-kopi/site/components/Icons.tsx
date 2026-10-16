// Drawn icons, one stroke weight (2px at 20px). Decorative: the link text names the action.
type IconProps = { className?: string };

export function ArrowDown({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3.5v13M4.5 11l5.5 5.5 5.5-5.5" />
    </svg>
  );
}

export function ArrowRight({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 10h13M11 4.5l5.5 5.5-5.5 5.5" />
    </svg>
  );
}

