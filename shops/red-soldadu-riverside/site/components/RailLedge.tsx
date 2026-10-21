// The river rail the menu drawings stand on: 10px merbau with a 3px karat top edge.
export default function RailLedge({ className = "" }: { className?: string }) {
  return <div className={`rail-ledge ${className}`} aria-hidden="true" />;
}
