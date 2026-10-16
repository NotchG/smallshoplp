import Hanger from "@/components/Hanger";

// Pojok favorit drawings on kapur 4:3 tiles (photos 1 and 2, reference only).
// Flat, palette only.

// Teras depan: a pallet table on dongker steel X legs between two pine stools, a latte on top.
export function Teras({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      role="img"
      aria-label="Ilustrasi teras depan: meja kayu palet berkaki besi silang di antara dua bangku kayu pinus."
    >
      <rect x="0" y="204" width="320" height="36" fill="#1e3050" opacity="0.07" />
      {/* table legs: steel X */}
      <g stroke="#1e3050" strokeWidth="5" strokeLinecap="square">
        <line x1="104" y1="124" x2="150" y2="204" />
        <line x1="150" y1="124" x2="104" y2="204" />
        <line x1="170" y1="124" x2="216" y2="204" />
        <line x1="216" y1="124" x2="170" y2="204" />
      </g>
      <rect x="98" y="120" width="124" height="6" fill="#1e3050" />
      {/* pallet top: planks */}
      <rect x="84" y="104" width="152" height="18" fill="#e9b44c" />
      <g fill="#1e3050" opacity="0.22">
        <rect x="121" y="104" width="2" height="18" />
        <rect x="159" y="104" width="2" height="18" />
        <rect x="197" y="104" width="2" height="18" />
      </g>
      {/* latte glass */}
      <path d="M150 80 h20 l-2 24 h-16 z" fill="#e8d6bc" />
      <path d="M151 92 h18 l-1 12 h-16 z" fill="#8a5a3c" opacity="0.5" />
      {/* stools */}
      {[26, 246].map((x) => (
        <g key={x}>
          <rect x={x} y="144" width="48" height="10" fill="#e9b44c" />
          <polygon points={`${x + 6},154 ${x + 13},154 ${x + 8},204 ${x + 1},204`} fill="#e9b44c" />
          <polygon points={`${x + 35},154 ${x + 42},154 ${x + 47},204 ${x + 40},204`} fill="#e9b44c" />
          <rect x={x + 6} y="180" width="36" height="6" fill="#e9b44c" />
          <rect x={x} y="154" width="48" height="3" fill="#1e3050" opacity="0.18" />
        </g>
      ))}
    </svg>
  );
}

// Ruang kaca: a 3x2 steel-frame glass wall, an orange cushion and a warm lamp behind it.
export function GlassRoom({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      role="img"
      aria-label="Ilustrasi ruang kaca: dinding kaca dengan rangka besi hitam, bantal duduk oranye dan lampu gantung di dalamnya."
    >
      <rect x="0" y="204" width="320" height="36" fill="#1e3050" opacity="0.07" />
      {/* inside the room */}
      <rect x="44" y="28" width="232" height="176" fill="#fdfdfb" />
      <rect x="150" y="140" width="100" height="10" fill="#1e3050" opacity="0.75" />
      <rect x="160" y="150" width="6" height="54" fill="#1e3050" opacity="0.75" />
      <rect x="234" y="150" width="6" height="54" fill="#1e3050" opacity="0.75" />
      <rect x="64" y="166" width="88" height="30" fill="#bf3328" />
      <rect x="64" y="196" width="88" height="8" fill="#1e3050" opacity="0.5" />
      {/* glass tint */}
      <rect x="44" y="28" width="232" height="176" fill="#8ec6ea" opacity="0.28" />
      {/* the warm pendant lamp inside */}
      <line x1="160" y1="31" x2="160" y2="66" stroke="#1e3050" strokeWidth="2" />
      <path d="M148 78 a12 12 0 0 1 24 0 z" fill="#1e3050" />
      <circle cx="160" cy="82" r="5" fill="#e9b44c" />
      {/* steel mullions: 3 x 2 grid */}
      <g fill="none" stroke="#1e3050" strokeWidth="6">
        <rect x="44" y="28" width="232" height="176" />
        <line x1="121.3" y1="28" x2="121.3" y2="204" />
        <line x1="198.6" y1="28" x2="198.6" y2="204" />
        <line x1="44" y1="116" x2="276" y2="116" />
      </g>
      {/* glare */}
      <g fill="#fdfdfb" opacity="0.7">
        <polygon points="58,100 92,40 102,40 68,100" />
        <polygon points="214,190 248,130 254,130 220,190" />
      </g>
    </svg>
  );
}

// Area merokok: the real "SMOKING AREA" sign, set as text on a hanging plank, over a pine stool
// and a standing ashtray.
export function SmokingSign({ text }: { text: string }) {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 240" focusable="false">
        <rect x="0" y="204" width="320" height="36" fill="#1e3050" opacity="0.07" />
        {/* standing ashtray */}
        <rect x="196" y="150" width="6" height="52" fill="#1e3050" />
        <rect x="182" y="200" width="34" height="5" fill="#1e3050" />
        <path d="M180 140 h38 l-5 12 h-28 z" fill="#1e3050" />
        <rect x="186" y="136" width="26" height="4" fill="#fdfdfb" />
        {/* pine stool */}
        <g fill="#e9b44c">
          <rect x="96" y="150" width="48" height="10" />
          <polygon points="102,160 109,160 104,204 97,204" />
          <polygon points="131,160 138,160 143,204 136,204" />
          <rect x="102" y="182" width="36" height="6" />
        </g>
        <rect x="96" y="160" width="48" height="3" fill="#1e3050" opacity="0.18" />
      </svg>
      <div className="absolute left-1/2 top-[8%] -translate-x-1/2 -rotate-2">
        <Hanger height={26} spread={14} />
        <div className="plank plank-tile bg-awan">{text}</div>
      </div>
    </div>
  );
}
