// The checkerboard table top, as a 16px edge (8px squares). Decorative.
export default function CheckerEdge({ className = "" }: { className?: string }) {
  return <div className={`checker ${className}`} aria-hidden="true" />;
}
