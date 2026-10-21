import Drink from "./Drink";

// Steel phin on a short glass: condensed milk under black coffee, one drop falling.
export default function VietnamDrip({ label }: { label: string }) {
  const glass = "M34 104L35.5 159Q36 164 40.5 164H79.5Q84 164 84.5 159L86 104Z";
  return (
    <Drink label={label} scale={1.15}>
      <defs>
        <clipPath id="vd-glass"><path d={glass} /></clipPath>
      </defs>
      <g clipPath="url(#vd-glass)">
        <rect className="i-baja" x="0" y="118" width="120" height="52" />
        <ellipse className="i-espresso" cx="60" cy="118" rx="26" ry="4.2" />
        <path className="i-cream" d="M0 146C16 142 30 149 46 145S74 141 88 146 112 145 120 144V170H0Z" />
      </g>
      <path className="i-baja" d="M60 108.5C62.6 112.4 62.6 115 60 115S57.4 112.4 60 108.5Z" />
      <path className="i-glass" d={glass} />
      {/* phin: plate, chamber, lid */}
      <ellipse className="i-baja" cx="60" cy="105.4" rx="34" ry="5.6" />
      <ellipse className="i-dinding" cx="60" cy="103" rx="34" ry="5.6" />
      <path className="i-dinding" d="M41 64L43.5 101H76.5L79 64Z" />
      <rect className="i-steel" x="47" y="67" width="5" height="32" rx="2" />
      <path className="i-dinding" d="M40 64Q42 50 60 49Q78 50 80 64Z" />
      <ellipse className="i-dinding" cx="60" cy="64" rx="20.5" ry="3.8" />
      <path d="M47 59Q49 53 57 52" style={{ fill: "none", stroke: "color-mix(in srgb, var(--color-dinding) 68%, var(--color-kapur))" }} strokeWidth="2.4" strokeLinecap="round" />
      <rect className="i-baja" x="55.5" y="42" width="9" height="8" rx="2.5" />
    </Drink>
  );
}
