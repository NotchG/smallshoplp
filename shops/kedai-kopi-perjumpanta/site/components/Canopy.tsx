// The kedai's corrugated metal canopy: a tinta band with a ridged bottom edge. Decorative.
// (The bare bulbs from the design brief were cut in the remove-one-thing pass: at 12px they
// read as pins, and the ridged edge already says "canopy".)
export default function Canopy() {
  return (
    <div className="canopy-wrap" aria-hidden="true">
      <div className="canopy" />
    </div>
  );
}
