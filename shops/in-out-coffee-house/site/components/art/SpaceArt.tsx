// The three spaces as flat, frontal drawings for the building cross-section.
// Each is drawn standing on the bottom edge of its viewBox, so it sits on the slab below.
// All [MOCKUP] stand-ins for photos the owner can send.

type ArtProps = { label: string };

// Exposed white pipe along the top of the room; the lamps hang from it. The steel-deck
// ceiling itself runs above both rooms as one strip (see Spaces.tsx).
function Pipe({ width }: { width: number }) {
  return <rect x="-4" y="6" width={width + 8} height="9" rx="4.5" className="fill-paper stroke-ink" strokeWidth="3" />;
}

// Outlined stool: white with an ink outline, frontal.
function Stool({ x }: { x: number }) {
  return (
    <g className="stroke-ink" strokeWidth="3" strokeLinecap="round">
      <path d={`M${x + 8} 306L${x + 2} 338M${x + 38} 306L${x + 44} 338M${x + 5} 326H${x + 41}`} fill="none" />
      <rect x={x} y="298" width="46" height="9" rx="4" className="fill-paper" />
    </g>
  );
}

// Black slatted table, frontal: top, legs, stretcher.
function Table({ x, w }: { x: number; w: number }) {
  return (
    <g className="fill-ink">
      <rect x={x} y="268" width={w} height="13" />
      <rect x={x + 8} y="281" width="11" height="57" />
      <rect x={x + w - 19} y="281" width="11" height="57" />
      <rect x={x + 8} y="314" width={w - 16} height="7" />
    </g>
  );
}

// Shepherd's-crook lamp post: white pole outlined in ink, green enamel shade.
function CrookLamp({ x, top, reach }: { x: number; top: number; reach: number }) {
  const r = reach / 2;
  const d = `M${x} 338V${top + r}A${r} ${r} 0 0 0 ${x - reach} ${top + r}V${top + r + 26}`;
  return (
    <g fill="none" strokeLinecap="butt">
      <path d={d} className="stroke-ink" strokeWidth="11" />
      <path d={d} className="stroke-paper" strokeWidth="5" />
      <path
        d={`M${x - reach - 9} ${top + r + 26}H${x - reach + 9}L${x - reach + 24} ${top + r + 44}H${x - reach - 24}Z`}
        className="fill-hijau stroke-ink"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </g>
  );
}

export function RooftopArt({ label }: ArtProps) {
  return (
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMax meet" role="img" aria-label={label}>
      <defs>
        <pattern id="roof-mesh" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M0 0L16 16M16 0L0 16" className="stroke-ink" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="640" height="360" className="fill-kuning" />
      {/* late-afternoon sun going down behind the treetops */}
      <path d="M392 240A88 88 0 0 1 568 240Z" className="fill-bata" />
      {/* columnar trees */}
      <g className="fill-hijau">
        <rect x="30" y="168" width="34" height="90" rx="17" />
        <rect x="70" y="128" width="42" height="130" rx="21" />
        <rect x="118" y="176" width="30" height="80" rx="15" />
        <rect x="300" y="182" width="30" height="76" rx="15" />
        <rect x="338" y="134" width="44" height="124" rx="22" />
        <rect x="430" y="150" width="38" height="108" rx="19" />
        <rect x="474" y="176" width="30" height="80" rx="15" />
        <rect x="560" y="140" width="40" height="118" rx="20" />
        <rect x="604" y="172" width="32" height="86" rx="16" />
      </g>
      {/* parapet with the black mesh railing on top */}
      <rect x="-2" y="238" width="644" height="102" className="fill-paper stroke-ink" strokeWidth="3" />
      <rect x="388" y="196" width="252" height="42" fill="url(#roof-mesh)" />
      <path d="M388 238V196H644M388 196" fill="none" className="stroke-ink" strokeWidth="5" />
      <rect x="512" y="196" width="5" height="42" className="fill-ink" />
      {/* lamps, tables, stools */}
      <CrookLamp x={596} top={52} reach={56} />
      <CrookLamp x={292} top={96} reach={46} />
      <Table x={84} w={150} />
      <Stool x={30} />
      <Stool x={246} />
      <Table x={362} w={120} />
      <Stool x={312} />
      <Stool x={494} />
      {/* concrete paving */}
      <rect y="340" width="640" height="20" className="fill-beton" />
      <path d="M128 340V360M272 340V360M416 340V360M560 340V360" className="stroke-paper" strokeWidth="3" />
    </svg>
  );
}

// Spindle-back chair, frontal: back with spindles, seat, legs, all walnut.
function Chair({ x }: { x: number }) {
  return (
    <g className="fill-kayu">
      <rect x={x} y="228" width="74" height="12" rx="6" />
      <rect x={x + 4} y="236" width="8" height="134" />
      <rect x={x + 62} y="236" width="8" height="134" />
      <rect x={x + 22} y="238" width="4" height="74" />
      <rect x={x + 35} y="238" width="4" height="74" />
      <rect x={x + 48} y="238" width="4" height="74" />
      <rect x={x - 2} y="310" width="78" height="11" rx="3" />
      <rect x={x + 6} y="346" width="62" height="5" />
    </g>
  );
}

// Framed poster: black frame, plain colour field (no band art), black caption label below.
function Poster({ x, y, field }: { x: number; y: number; field: string }) {
  return (
    <g>
      <rect x={x} y={y} width="62" height="74" className="fill-ink" />
      <rect x={x + 7} y={y + 7} width="48" height="60" className={field} />
      <rect x={x + 20} y={y + 80} width="22" height="7" className="fill-ink" />
    </g>
  );
}

export function IndoorArt({ label }: ArtProps) {
  return (
    <svg viewBox="0 0 700 400" preserveAspectRatio="xMidYMax meet" role="img" aria-label={label}>
      <defs>
        <clipPath id="indoor-oval">
          <ellipse cx="500" cy="196" rx="88" ry="116" />
        </clipPath>
      </defs>
      <rect width="700" height="400" className="fill-paper" />
      <Pipe width={700} />
      {/* music posters, 2 x 2 */}
      <Poster x={52} y={104} field="fill-kuning" />
      <Poster x={136} y={104} field="fill-bata" />
      <Poster x={52} y={204} field="fill-hijau" />
      <Poster x={136} y={204} field="fill-beton" />
      {/* green enamel pendant */}
      <line x1="300" y1="15" x2="300" y2="104" className="stroke-ink" strokeWidth="3" />
      <path d="M288 104H312L334 132H266Z" className="fill-hijau stroke-ink" strokeWidth="3" strokeLinejoin="round" />
      <path d="M290 133A10 10 0 0 0 310 133Z" className="fill-kuning stroke-ink" strokeWidth="3" />
      {/* the oval opening into the yellow room */}
      <g clipPath="url(#indoor-oval)">
        <rect x="400" y="70" width="200" height="260" className="fill-kuning" />
        <line x1="492" y1="70" x2="492" y2="132" className="stroke-ink" strokeWidth="3" />
        <circle cx="492" cy="150" r="20" className="fill-paper stroke-ink" strokeWidth="3" />
        <rect x="400" y="268" width="200" height="6" className="fill-ink" />
        <rect x="400" y="290" width="200" height="40" className="fill-hijau" />
      </g>
      <ellipse cx="500" cy="196" rx="88" ry="116" fill="none" className="stroke-bata" strokeWidth="10" />
      {/* round walnut table and two spindle chairs */}
      <Chair x={196} />
      <g className="fill-kayu">
        <rect x="318" y="286" width="130" height="12" rx="6" />
        <path d="M346 298H360L348 370H334Z" />
        <path d="M406 298H420L432 370H418Z" />
      </g>
      <Chair x={470} />
      {/* walnut floor */}
      <rect y="370" width="700" height="30" className="fill-kayu" />
    </svg>
  );
}

export function BeanbagArt({ label }: ArtProps) {
  return (
    <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMax meet" role="img" aria-label={label}>
      <defs>
        <pattern id="bata" width="44" height="22" patternUnits="userSpaceOnUse">
          <rect width="44" height="22" className="fill-batatua" />
          <path d="M0 1H44M0 12H44M11 1V12M33 12V22" className="stroke-beton" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="500" height="400" className="fill-kuning" />
      {/* brick pier with the blank shoes sign */}
      <rect x="0" y="40" width="86" height="330" fill="url(#bata)" />
      <rect x="-4" y="30" width="94" height="12" className="fill-paper stroke-ink" strokeWidth="3" />
      <line x1="86" y1="42" x2="86" y2="370" className="stroke-ink" strokeWidth="3" />
      <Pipe width={500} />
      <rect x="18" y="196" width="50" height="34" className="fill-paper stroke-ink" strokeWidth="3" />
      {/* the yellow arch, springing from the pier */}
      <path
        d="M86 370V176A118 118 0 0 1 322 176V370H298V176A94 94 0 0 0 110 176V370Z"
        className="fill-kuning stroke-ink"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* paper globe lamps */}
      <line x1="204" y1="15" x2="204" y2="138" className="stroke-ink" strokeWidth="3" />
      <circle cx="204" cy="164" r="26" className="fill-paper stroke-ink" strokeWidth="3" />
      <line x1="414" y1="15" x2="414" y2="100" className="stroke-ink" strokeWidth="3" />
      <circle cx="414" cy="128" r="28" className="fill-paper stroke-ink" strokeWidth="3" />
      {/* turf and beanbags */}
      <rect y="352" width="500" height="48" className="fill-hijau" />
      <path d="M118 366C114 326 138 296 176 294C216 292 238 326 234 366Z" className="fill-bata stroke-ink" strokeWidth="3" />
      <path d="M232 368C230 336 250 314 280 314C312 314 330 338 328 368Z" className="fill-ink" />
      <path d="M346 366C342 322 368 290 408 288C450 286 476 322 472 366Z" className="fill-paper stroke-ink" strokeWidth="3" />
    </svg>
  );
}
