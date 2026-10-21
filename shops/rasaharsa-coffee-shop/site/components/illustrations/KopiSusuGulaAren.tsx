import Drink from "./Drink";

// Tall glass: jati gula aren at the bottom, milk, espresso floating on top, ice.
export default function KopiSusuGulaAren({ label }: { label: string }) {
  const glass = "M37 34L38.5 159Q39 164 43.5 164H76.5Q81 164 81.5 159L83 34Z";
  return (
    <Drink label={label} scale={1.08}>
      <defs>
        <clipPath id="ksga-glass"><path d={glass} /></clipPath>
      </defs>
      <g clipPath="url(#ksga-glass)">
        <rect className="i-milk" x="0" y="56" width="120" height="114" />
        <path className="i-baja" d="M0 56H120V80C104 86 92 78 76 84S50 90 36 83 10 82 0 86Z" />
        <ellipse className="i-espresso" cx="60" cy="56" rx="23" ry="4.2" />
        <path className="i-jati" d="M0 134C14 128 28 138 44 132S70 126 84 133 110 132 120 130V170H0Z" />
        <rect className="i-ice" x="42" y="44" width="15" height="15" rx="3.5" transform="rotate(-10 49.5 51.5)" />
        <rect className="i-ice" x="59" y="47" width="14" height="14" rx="3.5" transform="rotate(14 66 54)" />
        <rect className="i-ice" x="49" y="62" width="13" height="13" rx="3.5" transform="rotate(30 55.5 68.5)" />
      </g>
      <path d="M39.4 154H80.6" stroke="var(--color-baja)" strokeWidth="1.5" strokeOpacity="0.5" />
      <path className="i-glass" d={glass} />
      <ellipse className="i-glass" cx="60" cy="34" rx="23" ry="4.2" />
    </Drink>
  );
}
