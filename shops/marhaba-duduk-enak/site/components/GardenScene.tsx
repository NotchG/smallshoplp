// The garden by day, drawn flat as an elevation: shade trees, the olive glass pavilion with
// white trim, an unlit festoon, the black bowl fountain in its square pond (centred at x=600),
// stepping stones, black bistro tables and the closed taupe umbrella. viewBox 1200×500.

const canopy = (cx: number, cy: number, rs: [number, number, number][]) =>
  rs.map(([dx, dy, r], i) => <circle key={i} cx={cx + dx} cy={cy + dy} r={r} />);

function Bulbs({ d, pts }: { d: string; pts: [number, number][] }) {
  return (
    <g>
      <path d={d} fill="none" stroke="#141612" strokeWidth="1.8" />
      {pts.map(([x, y]) => (
        <g key={x}>
          <path d={`M${x} ${y}v6`} stroke="#141612" strokeWidth="1.6" />
          <rect x={x - 2.5} y={y + 5} width="5" height="5" fill="#141612" />
          <path
            d={`M${x - 3} ${y + 10}h6q4 6 3 11q-1 5-6 5q-5 0-6-5q-1-5 3-11z`}
            fill="#E8E2CC"
            stroke="#A9A38C"
            strokeWidth="1"
          />
        </g>
      ))}
    </g>
  );
}

export default function GardenScene({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
      <defs>
        <g id="gs-table">
          <rect x="-30" y="-44" width="60" height="5" rx="2" fill="#141612" />
          <rect x="-1.6" y="-40" width="3.2" height="34" fill="#141612" />
          <path d="M0-8L-16 0M0-8L16 0" stroke="#141612" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g id="gs-chair">
          <path
            d="M0 0L12-30M12-30L14-58M2-30H22M22-30L30 0M14-58H24"
            stroke="#141612"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="12" y="-58" width="12" height="14" rx="2" fill="#141612" />
        </g>
      </defs>

      {/* sky and neighbour wall */}
      <rect width="1200" height="500" fill="#DDE3D3" />
      <rect x="980" y="236" width="220" height="170" fill="#CFCDC2" />
      <rect x="980" y="230" width="220" height="8" fill="#BDBAAE" />

      {/* shade trees */}
      <g fill="#3F5A2E">
        {canopy(250, 150, [
          [-150, 60, 70],
          [-90, 0, 80],
          [0, -40, 95],
          [90, 10, 85],
          [160, 70, 60],
          [-20, 60, 90],
        ])}
      </g>
      <g fill="#4E6B38">
        {canopy(830, 160, [
          [-150, 40, 70],
          [-80, -30, 85],
          [10, -60, 90],
          [100, -20, 85],
          [170, 40, 65],
          [20, 30, 95],
        ])}
      </g>

      {/* hedge on the right */}
      <path
        d="M790 410V352Q820 330 850 346Q880 326 914 344Q950 324 986 342Q1022 322 1060 340Q1100 322 1140 340Q1172 328 1200 340V410Z"
        fill="#4E6B38"
      />

      {/* right tree trunk, in front of the hedge */}
      <rect x="806" y="250" width="14" height="164" fill="#4A3F30" />

      {/* pergola on the left */}
      <g>
        <rect x="40" y="236" width="214" height="7" fill="#F5F5EF" />
        <g stroke="#141612" strokeWidth="3">
          {Array.from({ length: 16 }, (_, i) => (
            <path key={i} d={`M${48 + i * 13} 243v8`} />
          ))}
        </g>
        <rect x="58" y="243" width="6" height="165" fill="#F5F5EF" />
      </g>

      {/* the pavilion */}
      <g>
        <polygon points="250,266 520,224 790,266" fill="#565C3E" />
        <rect x="250" y="264" width="540" height="146" fill="#565C3E" />
        <polyline points="236,270 520,220 804,270" fill="none" stroke="#F5F5EF" strokeWidth="10" />
        <rect x="250" y="270" width="7" height="140" fill="#F5F5EF" />
        <rect x="783" y="270" width="7" height="140" fill="#F5F5EF" />
        {/* glass bays: left, door, right */}
        {[
          [272, 176, 3],
          [466, 68, 2],
          [550, 216, 3],
        ].map(([x, w, n]) => (
          <g key={x}>
            <rect x={x} y="300" width={w} height="110" fill="#1B2219" stroke="#141612" strokeWidth="5" />
            {Array.from({ length: n - 1 }, (_, i) => (
              <rect key={i} x={x + ((i + 1) * w) / n - 2} y="300" width="4" height="110" fill="#141612" />
            ))}
          </g>
        ))}
        {/* paper lanterns inside the glass */}
        <g>
          {[318, 410, 600, 700].map((x) => (
            <g key={x}>
              <path d={`M${x} 302v14`} stroke="#3A4236" strokeWidth="1.5" />
              <circle cx={x} cy="322" r="7" fill="#E9E1C6" />
            </g>
          ))}
        </g>
        <path d="M494 330v40M506 330v40" stroke="#8C8A7A" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* planting along the pavilion */}
      <g>
        <path d="M262 410Q256 360 282 342Q290 380 300 410Z" fill="#2B3A26" />
        <path d="M290 410Q300 352 336 346Q320 386 318 410Z" fill="#4E6B38" />
        <path d="M640 410Q630 370 650 350Q666 380 664 410Z" fill="#4E6B38" />
        <path d="M700 410Q690 340 730 318Q740 370 726 410Z" fill="#2B3A26" />
        <path d="M730 410Q742 350 780 336Q770 380 760 410Z" fill="#4E6B38" />
      </g>

      {/* festoon (unlit by day) */}
      <rect x="118" y="150" width="5" height="262" fill="#141612" />
      <rect x="1078" y="150" width="5" height="262" fill="#141612" />
      <Bulbs
        d="M120 152Q360 236 600 214Q840 192 1080 152"
        pts={[
          [216, 186],
          [330, 206],
          [450, 216],
          [870, 196],
          [980, 176],
        ]}
      />
      <path d="M1080 152Q1150 180 1200 176" fill="none" stroke="#141612" strokeWidth="1.8" />
      <path d="M0 176Q60 178 120 152" fill="none" stroke="#141612" strokeWidth="1.8" />

      {/* lawn */}
      <rect x="0" y="406" width="1200" height="94" fill="#6E8A45" />
      <rect x="0" y="406" width="1200" height="8" fill="#5E7A3A" />
      <rect x="0" y="478" width="1200" height="22" fill="#5E7A3A" />

      {/* stepping stones from the door */}
      <g fill="#D8D4C6">
        <rect x="484" y="414" width="34" height="5" rx="1" />
        <rect x="462" y="425" width="40" height="6" rx="1" />
        <rect x="436" y="438" width="46" height="7" rx="1" />
        <rect x="404" y="453" width="54" height="8" rx="1.5" />
        <rect x="366" y="471" width="62" height="9" rx="1.5" />
      </g>

      {/* the closed taupe umbrella */}
      <g>
        <rect x="408" y="262" width="3" height="186" fill="#141612" />
        <path d="M409.5 262Q394 300 398 352L409.5 372L421 352Q425 300 409.5 262Z" fill="#8A8072" />
        <path d="M409.5 262Q404 310 409.5 372L421 352Q425 300 409.5 262Z" fill="#7A7064" />
      </g>

      {/* fountain: black bowl in a square pond, centred */}
      <g>
        <rect x="528" y="420" width="144" height="28" fill="#4E5148" />
        <rect x="528" y="410" width="144" height="10" fill="#6B6E64" />
        <rect x="536" y="412" width="128" height="6" fill="#3E5A5E" />
        <rect x="592" y="394" width="16" height="20" fill="#141612" />
        <path d="M556 380H644Q640 402 600 404Q560 402 556 380Z" fill="#141612" />
        <ellipse cx="600" cy="380" rx="44" ry="5" fill="#2A2D27" />
        <ellipse cx="600" cy="380" rx="38" ry="3.4" fill="#3E5A5E" />
        <g fill="none" stroke="#B9CFCE" strokeWidth="2" strokeLinecap="round">
          <path d="M600 378V350" />
          <path d="M600 351Q586 350 582 376" />
          <path d="M600 351Q614 350 618 376" />
          <path d="M600 354Q592 356 590 377" />
          <path d="M600 354Q608 356 610 377" />
        </g>
      </g>

      {/* bistro tables and folding chairs */}
      <g>
        <use href="#gs-table" transform="translate(180 412) scale(0.8)" />
        <use href="#gs-chair" transform="translate(132 412) scale(0.8)" />
        <use href="#gs-table" transform="translate(890 414) scale(0.8)" />
        <use href="#gs-chair" transform="translate(918 414) scale(-0.8 0.8)" />
        <use href="#gs-table" transform="translate(990 416) scale(0.82)" />
        <use href="#gs-chair" transform="translate(1036 416) scale(0.82)" />
        <use href="#gs-table" transform="translate(300 476) scale(1.2)" />
        <use href="#gs-chair" transform="translate(236 476) scale(1.2)" />
        <use href="#gs-chair" transform="translate(366 476) scale(-1.2 1.2)" />
        <use href="#gs-table" transform="translate(744 478) scale(1.25)" />
        <use href="#gs-chair" transform="translate(806 478) scale(-1.25 1.25)" />
        <use href="#gs-chair" transform="translate(676 478) scale(1.25)" />
      </g>
    </svg>
  );
}
