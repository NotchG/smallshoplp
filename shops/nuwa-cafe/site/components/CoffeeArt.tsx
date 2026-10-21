// The two drinks from the customer photo (reference only): a cappuccino in a red cup on a
// red saucer, seen from above, and an iced milk coffee in a tall glass, from the side.
// Flat fills, no outlines, one ink-6% shadow under each object.

export function CappuccinoArt({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 290 260" role="img" aria-label={label} focusable="false">
      <ellipse cx="146" cy="140" rx="114" ry="113" fill="#1C1F1B" fillOpacity="0.06" />
      {/* saucer and its well */}
      <circle cx="138" cy="130" r="112" fill="#C7372A" />
      <circle cx="138" cy="130" r="88" fill="#1C1F1B" fillOpacity="0.1" />
      <circle cx="138" cy="130" r="84" fill="#C7372A" />
      {/* cup shadow on the saucer, handle, cup */}
      <circle cx="145" cy="138" r="73" fill="#1C1F1B" fillOpacity="0.2" />
      <rect x="198" y="117" width="58" height="26" rx="13" fill="#1C1F1B" fillOpacity="0.2" transform="translate(5 7)" />
      <rect x="198" y="117" width="58" height="26" rx="13" fill="#C7372A" />
      <rect x="222" y="125.5" width="24" height="9" rx="4.5" fill="#1C1F1B" fillOpacity="0.22" />
      <circle cx="138" cy="130" r="72" fill="#C7372A" />
      <circle cx="138" cy="130" r="64" fill="#F3E9DA" />
      <circle cx="138" cy="130" r="60" fill="#C49467" />
      {/* latte-art heart */}
      <path
        d="M138 168C112 152 99 136 104 121C109 106 128 104 138 119C148 104 167 106 172 121C177 136 164 152 138 168Z"
        fill="#F3E9DA"
      />
      <path d="M138 119L138 176" stroke="#F3E9DA" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function IcedCoffeeArt({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 320" role="img" aria-label={label} focusable="false">
      <ellipse cx="104" cy="306" rx="66" ry="9" fill="#1C1F1B" fillOpacity="0.06" />
      {/* glass */}
      <path d="M36 20L164 20L151 292C150 300 144 304 136 304L64 304C56 304 50 300 49 292Z" fill="#FFFFFF" fillOpacity="0.7" />
      {/* milk coffee, ice, foam */}
      <path d="M43 74L157 74L146 288C145 294 141 297 135 297L65 297C59 297 55 294 54 288Z" fill="#B6875E" />
      <g fill="#E6EEF0" fillOpacity="0.55">
        <rect x="62" y="104" width="30" height="28" rx="5" transform="rotate(-12 77 118)" />
        <rect x="102" y="128" width="32" height="30" rx="5" transform="rotate(14 118 143)" />
        <rect x="66" y="168" width="30" height="28" rx="5" transform="rotate(8 81 182)" />
        <rect x="104" y="206" width="28" height="27" rx="5" transform="rotate(-16 118 219)" />
        <rect x="70" y="244" width="27" height="25" rx="5" transform="rotate(18 83 256)" />
      </g>
      <path d="M40 42L160 42L157 78C140 84 122 74 101 80C80 86 61 76 43 80Z" fill="#F3E9DA" />
      <g fill="#B6875E" fillOpacity="0.35">
        <circle cx="62" cy="56" r="3" />
        <circle cx="84" cy="64" r="2.2" />
        <circle cx="112" cy="54" r="2.6" />
        <circle cx="138" cy="63" r="3.2" />
        <circle cx="96" cy="50" r="1.8" />
        <circle cx="148" cy="50" r="2" />
      </g>
      {/* glass edge (ink 15%) and a rim-blue glint */}
      <path
        d="M36 20L164 20L151 292C150 300 144 304 136 304L64 304C56 304 50 300 49 292Z"
        fill="none"
        stroke="#1C1F1B"
        strokeOpacity="0.15"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M50 34L60 272" stroke="#7DBEDD" strokeWidth="4" strokeLinecap="round" />
      <path d="M146 40L143 96" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.8" />
    </svg>
  );
}
