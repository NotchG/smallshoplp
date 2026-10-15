// The cart's rail: a 6px tyre-black bar the sign and menu strips hang from. Decorative.
export default function Rail({ className = "" }: { className?: string }) {
  return <div className={`rail ${className}`} aria-hidden="true" />;
}
