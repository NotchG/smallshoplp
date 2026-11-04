// A plain scales-of-justice mark: post, beam, two pans, a gold pivot.
// Deliberately not the firm's round emblem (no ring, laurel or ring text) until the owner sends the logo.
export default function ScalesMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 13V41M16 41H32" />
      <path d="M8 13H40" />
      <path d="M8 13L3.5 27M8 13L12.5 27M3 27H13A5 5 0 0 1 3 27Z" />
      <path d="M40 13L35.5 27M40 13L44.5 27M35 27H45A5 5 0 0 1 35 27Z" />
      <circle cx="24" cy="13" r="3.25" fill="var(--color-emas)" stroke="none" />
    </svg>
  );
}
