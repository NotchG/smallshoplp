import { hero } from "@/content";

// Hero drawing: the 2nd-floor wall (the page ground) with the oval opening and its orange-red
// rim, looking into the yellow beanbag room. Flat and frontal. [MOCKUP] stand-in for a photo.
export default function OvalRoom({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 470 610"
      className={className}
      role="img"
      aria-label={hero.ovalLabel}
      data-mockup=""
    >
      <defs>
        <clipPath id="oval-clip">
          <ellipse cx="235" cy="305" rx="228" ry="298" />
        </clipPath>
        <pattern id="oval-deck" width="30" height="70" patternUnits="userSpaceOnUse">
          <rect width="30" height="70" className="fill-beton" />
          <rect x="4" width="11" height="70" className="fill-paper" opacity="0.45" />
        </pattern>
      </defs>

      <g clipPath="url(#oval-clip)">
        {/* back wall */}
        <rect width="470" height="610" className="fill-kuning" />
        {/* exposed steel-deck ceiling and its beam */}
        <rect width="470" height="70" fill="url(#oval-deck)" />
        <rect y="62" width="470" height="16" className="fill-paper stroke-ink" strokeWidth="3" />

        {/* paper globe lamp */}
        <line x1="208" y1="78" x2="208" y2="170" className="stroke-ink" strokeWidth="3" />
        <rect x="200" y="166" width="16" height="10" className="fill-ink" />
        <circle cx="208" cy="214" r="42" className="fill-paper stroke-ink" strokeWidth="3" />

        {/* artificial turf */}
        <rect y="520" width="470" height="90" className="fill-hijau" />

        {/* beanbags */}
        <path d="M60 548C56 500 84 462 130 460C178 458 204 500 200 548Z" className="fill-bata stroke-ink" strokeWidth="3" />
        <path d="M196 552C194 512 218 484 252 484C288 484 306 514 304 552Z" className="fill-ink" />
        <path d="M296 550C292 506 318 476 356 474C396 472 420 508 416 550Z" className="fill-paper stroke-ink" strokeWidth="3" />

        {/* black railing shelf with wooden boards and three small cacti */}
        <g className="fill-ink">
          <rect y="414" width="470" height="8" />
          <rect y="590" width="470" height="8" />
          <rect x="44" y="414" width="7" height="184" />
          <rect x="164" y="414" width="7" height="184" />
          <rect x="290" y="414" width="7" height="184" />
          <rect x="410" y="414" width="7" height="184" />
          <rect x="104" y="470" width="5" height="70" />
          <rect x="228" y="500" width="5" height="90" />
          <rect x="350" y="456" width="5" height="70" />
        </g>
        <g className="fill-kayu">
          <rect x="51" y="470" width="113" height="9" />
          <rect x="171" y="500" width="119" height="9" />
          <rect x="297" y="456" width="113" height="9" />
          <rect x="51" y="540" width="113" height="9" />
          <rect x="297" y="526" width="113" height="9" />
        </g>
        {/* cacti: pot + body */}
        <g>
          <rect x="70" y="452" width="20" height="18" className="fill-ink" />
          <rect x="74" y="428" width="12" height="26" rx="6" className="fill-hijau stroke-ink" strokeWidth="3" />
          <rect x="218" y="482" width="20" height="18" className="fill-ink" />
          <rect x="222" y="462" width="12" height="22" rx="6" className="fill-hijau stroke-ink" strokeWidth="3" />
          <rect x="370" y="438" width="20" height="18" className="fill-ink" />
          <rect x="374" y="414" width="12" height="26" rx="6" className="fill-hijau stroke-ink" strokeWidth="3" />
        </g>
      </g>

      {/* the orange-red rim of the opening */}
      <ellipse cx="235" cy="305" rx="228" ry="298" fill="none" className="stroke-bata" strokeWidth="14" />
    </svg>
  );
}
