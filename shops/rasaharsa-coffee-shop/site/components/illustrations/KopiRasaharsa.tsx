import Drink from "./Drink";

// Clear cup, iced: milk coffee (pinus over jati), ice, straw, round dinding sticker with the beans.
export default function KopiRasaharsa({ label }: { label: string }) {
  const cup = "M26 50L35 159Q35.6 164 40.5 164H79.5Q84.4 164 85 159L94 50Z";
  return (
    <Drink label={label}>
      <defs>
        <clipPath id="kr-cup"><path d={cup} /></clipPath>
      </defs>
      <rect className="i-baja" x="64" y="10" width="5.5" height="112" rx="2" transform="rotate(7 66.7 66)" />
      <g clipPath="url(#kr-cup)">
        <rect className="i-pinus" x="0" y="70" width="120" height="100" />
        <path className="i-jati" d="M0 118C18 111 38 124 60 117S100 111 120 118V170H0Z" />
        <ellipse className="i-latte" cx="60" cy="70" rx="33" ry="5" />
        <rect className="i-ice" x="35" y="55" width="19" height="19" rx="4" transform="rotate(-12 44.5 64.5)" />
        <rect className="i-ice" x="60" y="59" width="18" height="18" rx="4" transform="rotate(11 69 68)" />
        <rect className="i-ice" x="47" y="74" width="16" height="16" rx="4" transform="rotate(24 55 82)" />
      </g>
      <circle className="i-dinding" cx="60" cy="130" r="14" />
      <g transform="translate(55.6 131.4) rotate(-28)">
        <ellipse className="i-kapur" rx="3.4" ry="5.1" />
        <path d="M0.3 -4.1C-1.6 -1.9 1.7 1.5 -0.3 4.1" fill="none" stroke="var(--color-dinding)" strokeWidth="1" />
      </g>
      <g transform="translate(64.4 128.6) rotate(-28)">
        <ellipse className="i-kapur" rx="3.4" ry="5.1" />
        <path d="M0.3 -4.1C-1.6 -1.9 1.7 1.5 -0.3 4.1" fill="none" stroke="var(--color-dinding)" strokeWidth="1" />
      </g>
      <path className="i-glass" d={cup} />
      <ellipse className="i-glass" cx="60" cy="50" rx="34" ry="6" />
    </Drink>
  );
}
