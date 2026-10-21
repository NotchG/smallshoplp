// One black cage pendant from the room: cord, socket, Edison bulb, wire cage, warm glow.
// Drawn with a long cord (420 units) so CSS can choose how much hangs into view.
// Decorative: aria-hidden. The server HTML is the lit state (TRD).
export default function Pendant({ i }: { i: number }) {
  const glow = `pendant-glow-${i}`;
  return (
    <div className={`pendant pendant-${i}`} aria-hidden="true">
      <svg viewBox="0 0 160 560" overflow="visible" focusable="false">
        <defs>
          <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="var(--color-pinus)" stopOpacity="0.62" />
            <stop offset="0.38" stopColor="var(--color-pinus)" stopOpacity="0.22" />
            <stop offset="1" stopColor="var(--color-pinus)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle className="pendant-glow" cx="80" cy="478" r="92" fill={`url(#${glow})`} />

        {/* cord */}
        <line x1="80" y1="0" x2="80" y2="420" stroke="var(--color-baja)" strokeWidth="2.5" />
        <line x1="78.8" y1="0" x2="78.8" y2="420" className="pendant-hl" strokeWidth="1" />

        {/* socket */}
        <rect x="72" y="414" width="16" height="22" rx="2.5" fill="var(--color-baja)" />
        <line x1="73.5" y1="416" x2="73.5" y2="434" className="pendant-hl" strokeWidth="1" />

        {/* bulb glass and filament */}
        <path
          d="M74 436C74 448 61 457 61 478C61 499 70 513 80 513C90 513 99 499 99 478C99 457 86 448 86 436Z"
          className="pendant-glass"
        />
        <path d="M76 437V458M84 437V458" className="pendant-support" />
        <path
          className="pendant-filament"
          d="M70.5 458C70.5 497 76.5 497 76.5 458M77 458C77 497 83 497 83 458M83.5 458C83.5 497 89.5 497 89.5 458"
        />

        {/* wire cage */}
        <g fill="none" stroke="var(--color-baja)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
          <path d="M71 433L55 472L80 534L105 472L89 433Z" />
          <path d="M71 433L67 476.5L80 534M89 433L93 476.5L80 534" />
          <ellipse cx="80" cy="472" rx="25" ry="4.6" />
          <path d="M68 433H92" strokeWidth="3.2" />
        </g>
        <g fill="none" className="pendant-hl" strokeWidth="1" strokeLinejoin="round" transform="translate(-1.3 0)">
          <path d="M71 433L55 472L80 534" />
          <path d="M71 433L67 476.5L80 534" />
        </g>
      </svg>
    </div>
  );
}
