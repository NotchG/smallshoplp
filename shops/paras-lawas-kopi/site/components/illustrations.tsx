// "Enamel print" product illustrations (design brief §6): flat palette fills, one navy outline
// (3 units at 240 wide, set once on the <svg> and inherited), round joins, no gradients,
// shadows or texture. Placeholders until the owner sends product photos (owner-checklist.md).

/** Es teh glass, drawn once and reused on every bundle plate. Glass is 52 × 104, straw above. */
function EsTeh({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="30" y="-30" width="7" height="72" rx="2.5" transform="rotate(10 33.5 6)" className="fill-cobalt" />
      <path d="M0 0H52L46 100Q45.6 104 42 104H10Q6.4 104 6 100Z" className="fill-cream" />
      <path d="M1.4 24H50.6L46 100Q45.6 104 42 104H10Q6.4 104 6 100Z" className="fill-terracotta" />
      <rect x="9" y="30" width="15" height="15" rx="3" transform="rotate(-12 16.5 37.5)" className="fill-cream" strokeWidth={2.5} />
      <rect x="27" y="37" width="14" height="14" rx="3" transform="rotate(14 34 44)" className="fill-cream" strokeWidth={2.5} />
      <rect x="39" y="62" width="4.5" height="28" rx="2.25" className="fill-cream" stroke="none" />
    </g>
  );
}

/** Sosis Solo: three golden rolls in a paper bowl, with a saus sachet. */
function SosisSolo() {
  return (
    <g>
      {/* saus sachet, tucked behind the rolls */}
      <g transform="rotate(24 128 52)">
        <rect x="114" y="28" width="28" height="44" rx="3" className="fill-terracotta" />
        <rect x="119" y="38" width="18" height="9" rx="2" className="fill-cream" stroke="none" />
      </g>
      {/* rolls with grill marks */}
      <g transform="rotate(-17 46 84)">
        <rect x="33" y="26" width="26" height="76" rx="13" className="fill-amber" />
        <path d="M39 44l14-5M39 58l14-5" className="stroke-terracotta" strokeWidth={4} strokeLinecap="round" />
      </g>
      <g transform="rotate(4 77 84)">
        <rect x="64" y="16" width="26" height="86" rx="13" className="fill-amber" />
        <path d="M70 34l14-5M70 48l14-5" className="stroke-terracotta" strokeWidth={4} strokeLinecap="round" />
      </g>
      <g transform="rotate(15 108 84)">
        <rect x="95" y="30" width="26" height="72" rx="13" className="fill-amber" />
        <path d="M101 48l14-5M101 62l14-5" className="stroke-terracotta" strokeWidth={4} strokeLinecap="round" />
      </g>
      {/* paper bowl */}
      <path d="M10 72H140L128 146Q127.4 150 123 150H27Q22.6 150 22 146Z" className="fill-cream" />
      <path d="M14.2 98H135.8L133.2 114H16.8Z" className="fill-cobalt" />
      <rect x="6" y="66" width="138" height="12" rx="6" className="fill-cream" />
    </g>
  );
}

/** Mi: a bowl of noodles with chopsticks. */
function Mi() {
  return (
    <g>
      {/* noodles */}
      <path d="M20 86C24 54 52 40 80 40C108 40 136 54 140 86Z" className="fill-amber" />
      <g strokeWidth={2.5} fill="none" strokeLinecap="round">
        <path d="M32 76q6-7 12 0t12 0 12 0 12 0 12 0 12 0 12 0 12 0" />
        <path d="M40 64q6-7 12 0t12 0 12 0 12 0 12 0 12 0 12 0" />
        <path d="M52 52q6-6 12 0t12 0 12 0 12 0 12 0" />
      </g>
      <circle cx="58" cy="60" r="7" className="fill-terracotta" />
      <circle cx="104" cy="66" r="7" className="fill-terracotta" />
      {/* chopsticks: a navy line under a terracotta one reads as an outlined stick */}
      <g strokeLinecap="round">
        <path d="M96 74L150 10" strokeWidth={8} />
        <path d="M96 74L150 10" className="stroke-terracotta" />
        <path d="M108 78L160 22" strokeWidth={8} />
        <path d="M108 78L160 22" className="stroke-terracotta" />
      </g>
      {/* bowl */}
      <rect x="56" y="136" width="48" height="14" rx="3" className="fill-cobalt" />
      <path d="M6 84H154C152 122 126 144 80 144C34 144 8 122 6 84Z" className="fill-cobalt" />
      <path d="M6 84H154L152.6 96H7.4Z" className="fill-cream" />
    </g>
  );
}

/** Mentaiki: a rice bowl under orange mentai sauce with torched spots and a mayo zigzag. */
function Mentaiki() {
  return (
    <g>
      <path d="M12 92C16 62 46 48 80 48C114 48 144 62 148 92Z" className="fill-cream" />
      <path d="M22 92C27 70 50 58 80 58C110 58 133 70 138 92Z" className="fill-amber" />
      <g className="fill-terracotta" stroke="none">
        <ellipse cx="54" cy="76" rx="7" ry="4" />
        <ellipse cx="80" cy="68" rx="8" ry="4.5" />
        <ellipse cx="107" cy="75" rx="7" ry="4" />
        <ellipse cx="68" cy="86" rx="5.5" ry="3" />
        <ellipse cx="95" cy="86" rx="5.5" ry="3" />
      </g>
      <path d="M36 84l8-9 8 9 8-9 8 9 8-9 8 9 8-9 8 9 8-9 8 9 8-9" className="stroke-cream" fill="none" strokeLinecap="round" />
      {/* donburi bowl */}
      <rect x="54" y="138" width="52" height="12" rx="3" className="fill-chalk" />
      <path d="M4 90H156C154 124 130 144 80 144C30 144 6 124 4 90Z" className="fill-chalk" />
      <path d="M4 90H156L154.8 101H5.2Z" className="fill-terracotta" />
    </g>
  );
}

const FOOD = { sosis: SosisSolo, mi: Mi, mentaiki: Mentaiki } as const;

/** One bundle plate's picture: the food on the left, the es teh glass on the right. */
export function BundleArt({ kind, label }: { kind: keyof typeof FOOD; label: string }) {
  const Food = FOOD[kind];
  return (
    <svg viewBox="0 0 240 160" className="plate-art stroke-navy" strokeWidth={3} strokeLinejoin="round" role="img" aria-label={label}>
      <Food />
      <EsTeh x={178} y={46} />
    </svg>
  );
}

/** Kopi Toean Njonja: glass bottle, cobalt cap, kopi-susu fill, cream oval label. */
const BOTTLE = "M58 30H102V50C102 68 128 78 128 104V234Q128 250 112 250H48Q32 250 32 234V104C32 78 58 68 58 50Z";

export function ToeanNjonjaBottle({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 160 260" className={`${className} stroke-navy`} strokeWidth={3} strokeLinejoin="round" role="img" aria-label={label}>
      <defs>
        <clipPath id="tn-bottle-clip">
          <path d={BOTTLE} />
        </clipPath>
      </defs>
      <path d={BOTTLE} className="fill-cream" stroke="none" />
      <g clipPath="url(#tn-bottle-clip)">
        <rect x="-4" y="98" width="168" height="170" className="fill-amber" />
        <rect x="41" y="112" width="9" height="112" rx="4.5" className="fill-cream" stroke="none" />
      </g>
      <path d={BOTTLE} fill="none" />
      {/* neck ring and cap */}
      <rect x="54" y="26" width="52" height="9" rx="3" className="fill-cream" />
      <rect x="54" y="6" width="52" height="22" rx="4" className="fill-cobalt" />
      {/* label */}
      <ellipse cx="80" cy="176" rx="35" ry="43" className="fill-cream" />
      <ellipse cx="80" cy="176" rx="29" ry="37" fill="none" strokeWidth={1.5} />
      <g className="fill-navy font-display" stroke="none" fontSize="14" textAnchor="middle">
        <text x="80" y="173">PARAS</text>
        <text x="80" y="191">LAWAS</text>
      </g>
    </svg>
  );
}
