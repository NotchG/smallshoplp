// Section drawing of the pavilion over the Ciliwung, 4:3, on the batu ground.
// Flat elevation in the six tokens: corrugated roof and green steel beam, the slatted
// timber ceiling, a slat screen, the single rust column, the turf deck on stilts,
// the rail-side counter, the river and the far bank's trees. No labels inside.

const roofTop = (x: number) => 96 + 0.1 * (x - 20);
const ceilTop = (x: number) => 108 + 0.1 * (x - 36);
const beamBottom = (x: number) => 134 + 0.1 * (x - 36);

const ceilingGaps = Array.from({ length: 41 }, (_, i) => 46 + i * 14).filter((x) => x < 606);
const screenSlats = Array.from({ length: 12 }, (_, i) => 112 + i * 15.5);

export default function PavilionDrawing({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 800 600" role="img" aria-label={label} className="block h-auto w-full">
      {/* River */}
      <rect x="0" y="440" width="800" height="160" fill="var(--color-kali)" />

      {/* Far bank and its trees */}
      <circle cx="742" cy="330" r="62" fill="var(--color-baja)" />
      <circle cx="642" cy="378" r="40" fill="var(--color-baja)" />
      <circle cx="694" cy="372" r="50" fill="var(--color-daun)" />
      <circle cx="782" cy="366" r="56" fill="var(--color-daun)" />
      <path d="M636 600 L682 452 Q714 432 800 426 V600 Z" fill="var(--color-baja)" />

      {/* Glints */}
      <g stroke="var(--color-batu)" strokeWidth="4" strokeLinecap="round" opacity="0.85">
        <path d="M354 478 h40" />
        <path d="M452 470 h64" />
        <path d="M532 470 h14" />
        <path d="M480 516 h90" />
        <path d="M380 560 h56" />
      </g>

      {/* Posts down to the bank, then the grassy near bank */}
      <g fill="var(--color-baja)">
        <rect x="74" y="396" width="10" height="64" />
        <rect x="196" y="396" width="10" height="64" />
        <rect x="318" y="396" width="10" height="84" />
      </g>
      <path d="M0 446 H236 C262 446 276 462 286 486 L332 600 H0 Z" fill="var(--color-daun)" />

      {/* Stilts and brace into the water */}
      <g fill="var(--color-baja)">
        <rect x="430" y="396" width="10" height="204" />
        <rect x="530" y="396" width="10" height="204" />
      </g>
      <path d="M440 470 L530 404" stroke="var(--color-baja)" strokeWidth="6" />

      {/* Columns: green steel, and the one rust column */}
      <rect x="74" y={beamBottom(74) - 1} width="12" height={372 - beamBottom(74) + 1} fill="var(--color-baja)" />
      <rect x="322" y={beamBottom(322) - 1} width="12" height={372 - beamBottom(322) + 1} fill="var(--color-karat)" />
      <rect x="548" y={beamBottom(548) - 1} width="12" height={372 - beamBottom(548) + 1} fill="var(--color-baja)" />

      {/* Slat screen */}
      <g fill="var(--color-merbau)">
        {screenSlats.map((x) => (
          <rect key={x} x={x} y="214" width="8" height="158" />
        ))}
      </g>

      {/* Snake plant in a terracotta pot */}
      <path d="M150 372 L146 336 H186 L182 372 Z" fill="var(--color-karat)" />
      <g fill="var(--color-daun)">
        <path d="M156 338 C152 312 154 288 160 266 C166 290 168 314 166 338 Z" />
        <path d="M166 338 C166 304 170 274 178 250 C182 280 180 312 176 338 Z" />
        <path d="M172 338 C176 318 184 300 194 286 C192 306 186 324 182 338 Z" />
      </g>

      {/* Rail and the rail-side counter over the water */}
      <g fill="var(--color-baja)">
        <rect x="346" y="310" width="198" height="6" />
        <rect x="350" y="316" width="5" height="56" />
        <rect x="446" y="316" width="5" height="56" />
        <rect x="350" y="334" width="194" height="5" />
      </g>
      {/* Stools */}
      <g fill="var(--color-baja)">
        <rect x="372" y="346" width="28" height="5" rx="2" />
        <rect x="378" y="351" width="3" height="21" />
        <rect x="391" y="351" width="3" height="21" />
        <rect x="474" y="346" width="28" height="5" rx="2" />
        <rect x="480" y="351" width="3" height="21" />
        <rect x="493" y="351" width="3" height="21" />
      </g>

      {/* Turf on the timber deck */}
      <rect x="44" y="372" width="520" height="8" fill="var(--color-daun)" />
      <rect x="44" y="380" width="520" height="16" fill="var(--color-merbau)" />

      {/* Roof: corrugated sheet, slatted timber ceiling, green steel beam */}
      <path
        d={`M20 ${roofTop(20)} L640 ${roofTop(640)} L640 ${roofTop(640) + 10} L20 ${roofTop(20) + 10} Z`}
        fill="var(--color-baja)"
      />
      <path
        d={`M36 ${ceilTop(36)} L612 ${ceilTop(612)} L612 ${ceilTop(612) + 18} L36 ${ceilTop(36) + 18} Z`}
        fill="var(--color-merbau)"
      />
      <g stroke="var(--color-batu)" strokeWidth="3">
        {ceilingGaps.map((x) => (
          <path key={x} d={`M${x} ${ceilTop(x) + 3} V${ceilTop(x) + 15}`} />
        ))}
      </g>
      <path
        d={`M36 ${ceilTop(36) + 18} L612 ${ceilTop(612) + 18} L612 ${beamBottom(612)} L36 ${beamBottom(36)} Z`}
        fill="var(--color-baja)"
      />
    </svg>
  );
}
