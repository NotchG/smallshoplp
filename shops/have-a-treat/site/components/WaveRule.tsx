// Three parallel sine stripes, from the shop's black-and-white wave cushions.
// Wavelength 32, 28px tall, currentColor. A long path clipped to the container width.
const WAVELENGTH = 32;
const AMP = 4; // px either side of the centre line
const STROKE = 4;
const SPACING = 8; // centre to centre
const LENGTH = 1700; // longer than the widest container

function wave(y: number) {
  let d = `M0 ${y} Q${WAVELENGTH / 4} ${y - AMP * 2} ${WAVELENGTH / 2} ${y}`;
  for (let x = WAVELENGTH; x <= LENGTH; x += WAVELENGTH / 2) d += ` T${x} ${y}`;
  return d;
}

const top = AMP + STROKE / 2;
const paths = [0, 1, 2].map((i) => wave(top + i * SPACING));

export default function WaveRule({ className = "" }: { className?: string }) {
  return (
    <svg className={`wave-rule ${className}`} aria-hidden="true" focusable="false" height="28">
      {paths.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth={STROKE} />
      ))}
    </svg>
  );
}

// Small single wave used as a list bullet.
export function WaveBullet({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="10"
      viewBox="0 0 22 10"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 5 Q3.75 0 6.5 5 T12 5 T17.5 5 T21 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
