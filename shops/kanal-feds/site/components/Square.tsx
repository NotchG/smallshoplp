// The jade square: the day-line marker, reused as the page's bullet.
export default function Square({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`square ${className}`} />;
}
