import type { TreatArt as ArtName } from "@/content";

// One flat geometric set drawn on a 240×200 board with a shared baseline at y=176, one flat shadow
// ellipse, 6-unit corner radius, no gradients, no strokes except the glass dome.
// Stand-ins for real photos until the owner sends some (listed in owner-checklist.md).

const c = {
  cocoa: "#5A3A26",
  sponge: "#B98252",
  cream: "#F7E6C4",
  toast: "#D9963F",
  matcha: "#8DA65A",
  peach: "#F2A07B",
  cup: "#FBF7F0",
  teak: "#8A4F26",
  felt: "#211C18",
  amber: "#F2AE4B",
  lilac: "#BBA5DA",
};

function Shadow({ rx }: { rx: number }) {
  return <ellipse cx="120" cy="177" rx={rx} ry="4" fill={c.felt} opacity="0.16" />;
}

function Tiramisu() {
  return (
    <>
      <Shadow rx={80} />
      <rect x="44" y="166" width="152" height="10" rx="5" fill={c.cup} />
      <clipPath id="tira-clip">
        <rect x="64" y="84" width="112" height="82" rx="6" />
      </clipPath>
      <g clipPath="url(#tira-clip)">
        <rect x="64" y="146" width="112" height="20" fill={c.sponge} />
        <rect x="64" y="131" width="112" height="15" fill={c.cream} />
        <rect x="64" y="113" width="112" height="18" fill={c.sponge} />
        <rect x="64" y="98" width="112" height="15" fill={c.cream} />
        <rect x="64" y="84" width="112" height="14" fill={c.cocoa} />
      </g>
      <g fill={c.felt} opacity="0.35">
        <circle cx="74" cy="90" r="1.8" />
        <circle cx="86" cy="94" r="1.6" />
        <circle cx="97" cy="89" r="1.8" />
        <circle cx="146" cy="92" r="1.6" />
        <circle cx="157" cy="88" r="1.8" />
        <circle cx="167" cy="94" r="1.6" />
      </g>
      <g fill={c.cup}>
        <rect x="96" y="78" width="48" height="10" rx="5" />
        <circle cx="106" cy="80" r="9" />
        <circle cx="134" cy="80" r="9" />
        <circle cx="120" cy="74" r="13" />
        <circle cx="122" cy="61" r="6" />
      </g>
    </>
  );
}

function Cheesecake() {
  return (
    <>
      <Shadow rx={74} />
      <rect x="50" y="166" width="140" height="10" rx="5" fill={c.cup} />
      <clipPath id="cheese-clip">
        <rect x="68" y="96" width="104" height="70" rx="6" />
      </clipPath>
      <g clipPath="url(#cheese-clip)">
        <rect x="68" y="96" width="104" height="70" fill={c.cream} />
        <rect x="68" y="96" width="104" height="9" fill={c.toast} opacity="0.5" />
        <rect x="68" y="150" width="104" height="16" fill={c.sponge} />
      </g>
      <path d="M100 96 a20 20 0 0 1 40 0 Z" fill={c.amber} />
      <path d="M105 96 a15 15 0 0 1 30 0 Z" fill={c.cream} />
      <path d="M108 96 a12 12 0 0 1 24 0 Z" fill={c.amber} opacity="0.55" />
      <ellipse cx="148" cy="88" rx="10" ry="4.5" transform="rotate(-28 148 88)" fill={c.matcha} />
    </>
  );
}

function FrenchToast() {
  return (
    <>
      <Shadow rx={84} />
      <rect x="38" y="166" width="164" height="10" rx="5" fill={c.cup} />
      <rect x="50" y="136" width="116" height="30" rx="8" fill={c.sponge} />
      <rect x="55" y="141" width="106" height="20" rx="5" fill={c.toast} />
      <rect x="78" y="106" width="116" height="30" rx="8" fill={c.sponge} />
      <rect x="83" y="111" width="106" height="20" rx="5" fill={c.toast} />
      <rect x="150" y="112" width="7" height="22" rx="3.5" fill={c.amber} />
      <rect x="164" y="112" width="6" height="14" rx="3" fill={c.amber} />
      <rect x="120" y="94" width="26" height="13" rx="4" fill={c.cream} />
      <g fill={c.cup}>
        <circle cx="88" cy="104" r="2.2" />
        <circle cx="100" cy="101" r="2" />
        <circle cx="112" cy="104" r="2.2" />
        <circle cx="156" cy="101" r="2" />
        <circle cx="168" cy="104" r="2.2" />
        <circle cx="182" cy="102" r="2" />
        <circle cx="58" cy="133" r="2" />
        <circle cx="68" cy="131" r="2.2" />
      </g>
    </>
  );
}

function CakeOfDay() {
  return (
    <>
      <Shadow rx={46} />
      <rect x="90" y="170" width="60" height="6" rx="3" fill={c.teak} />
      <rect x="113" y="150" width="14" height="22" fill={c.teak} />
      <rect x="56" y="144" width="128" height="9" rx="4.5" fill={c.teak} />
      <rect x="78" y="104" width="84" height="40" rx="6" fill={c.cocoa} />
      <rect x="78" y="123" width="84" height="6" fill={c.cream} />
      <rect x="76" y="100" width="88" height="10" rx="5" fill={c.cream} />
      <g fill={c.cream}>
        <circle cx="88" cy="111" r="4" />
        <circle cx="104" cy="112" r="5" />
        <circle cx="124" cy="111" r="4" />
        <circle cx="142" cy="113" r="5" />
        <circle cx="156" cy="110" r="4" />
      </g>
      <circle cx="120" cy="94" r="7" fill={c.peach} />
      {/* glass dome: the only stroked shape in the set */}
      <path
        d="M62 144 V100 A58 58 0 0 1 178 100 V144"
        fill={c.cup}
        fillOpacity="0.18"
        stroke={c.cup}
        strokeWidth="3"
      />
      <path
        d="M74 112 V100 A46 46 0 0 1 96 62"
        fill="none"
        stroke={c.cup}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="120" cy="38" r="6" fill={c.cup} />
    </>
  );
}

function Cappuccino() {
  return (
    <>
      <Shadow rx={68} />
      <rect x="54" y="166" width="132" height="10" rx="5" fill={c.cup} />
      <path
        fillRule="evenodd"
        fill={c.cup}
        d="M156 120 a17 17 0 1 1 0 34 a17 17 0 1 1 0 -34 Z M156 128 a9 9 0 1 0 0 18 a9 9 0 1 0 0 -18 Z"
      />
      <rect x="78" y="106" width="76" height="12" rx="6" fill={c.cream} />
      <path d="M76 114 H156 V128 C156 150 144 164 126 164 H106 C88 164 76 150 76 128 Z" fill={c.cup} />
      <rect x="76" y="132" width="80" height="6" fill={c.sponge} opacity="0.35" />
      <g fill={c.cocoa} opacity="0.55">
        <circle cx="98" cy="109" r="1.8" />
        <circle cx="114" cy="108" r="1.6" />
        <circle cx="130" cy="110" r="1.8" />
      </g>
    </>
  );
}

function Matcha() {
  return (
    <>
      <Shadow rx={46} />
      <rect x="128" y="58" width="7" height="56" rx="3.5" transform="rotate(10 131 86)" fill={c.cream} />
      <rect x="84" y="82" width="72" height="94" rx="8" fill={c.cup} opacity="0.4" />
      <rect x="90" y="122" width="60" height="44" fill={c.cup} />
      <path d="M90 96 H150 V122 C140 129 130 118 120 124 C110 130 100 119 90 126 Z" fill={c.matcha} />
      <rect x="122" y="100" width="16" height="16" rx="3" transform="rotate(12 130 108)" fill={c.cup} opacity="0.45" />
      <rect x="84" y="166" width="72" height="10" rx="5" fill={c.cup} opacity="0.7" />
    </>
  );
}

function HpPotion() {
  return (
    <>
      <Shadow rx={40} />
      <rect x="126" y="26" width="7" height="64" rx="3.5" transform="rotate(12 129 58)" fill={c.lilac} />
      <rect x="92" y="50" width="56" height="126" rx="8" fill={c.cup} opacity="0.4" />
      <rect x="98" y="72" width="44" height="46" fill={c.peach} opacity="0.6" />
      <rect x="98" y="118" width="44" height="48" fill={c.peach} />
      <g fill={c.cup}>
        <circle cx="108" cy="86" r="3" />
        <circle cx="128" cy="96" r="2.4" />
        <circle cx="114" cy="108" r="3.4" />
        <circle cx="132" cy="128" r="3" />
        <circle cx="106" cy="140" r="2.4" />
        <circle cx="124" cy="152" r="3.4" />
      </g>
      <path d="M78 60 a16 16 0 0 1 32 0 Z" fill={c.peach} />
      <path d="M83 60 a11 11 0 0 1 22 0 Z" fill={c.amber} opacity="0.8" />
      <rect x="92" y="166" width="56" height="10" rx="5" fill={c.cup} opacity="0.7" />
    </>
  );
}

function Drumette({ transform }: { transform: string }) {
  // teardrop: meaty round end tapering to the bone, seen from above
  return (
    <g transform={transform}>
      <rect x="22" y="-3.5" width="12" height="7" rx="3.5" fill={c.cream} />
      <circle cx="35" cy="0" r="4.5" fill={c.cream} />
      <path d="M0 -15 C10 -15 22 -7 25 -4 L25 4 C22 7 10 15 0 15 A15 15 0 0 1 0 -15 Z" fill={c.toast} />
      <ellipse cx="-2" cy="-4" rx="9" ry="5" fill={c.sponge} />
    </g>
  );
}

function Wings() {
  return (
    <>
      <Shadow rx={56} />
      <circle cx="120" cy="114" r="62" fill={c.cup} />
      <circle cx="120" cy="114" r="50" fill={c.cream} />
      <Drumette transform="translate(130 92) rotate(32)" />
      <Drumette transform="translate(94 116) rotate(-28)" />
      <Drumette transform="translate(112 138) rotate(-28)" />
      <g fill={c.cup}>
        <circle cx="102" cy="108" r="1.6" />
        <circle cx="124" cy="132" r="1.6" />
        <circle cx="140" cy="100" r="1.6" />
        <circle cx="110" cy="122" r="1.4" />
      </g>
      <g fill={c.matcha}>
        <circle cx="118" cy="112" r="2.6" />
        <circle cx="96" cy="130" r="2.4" />
        <circle cx="148" cy="122" r="2.4" />
        <circle cx="132" cy="146" r="2.2" />
      </g>
    </>
  );
}

const drawings: Record<ArtName, () => React.JSX.Element> = {
  tiramisu: Tiramisu,
  cheesecake: Cheesecake,
  frenchToast: FrenchToast,
  cakeOfDay: CakeOfDay,
  cappuccino: Cappuccino,
  matcha: Matcha,
  hpPotion: HpPotion,
  wings: Wings,
};

// Every drawing is shown through the same crop of the 240×200 board (x 36–204, y 20–200),
// so the set keeps one scale and one baseline (176 = 86.7% down), with less empty margin.
export const ART_VIEWBOX = "36 20 168 180";

export default function TreatArt({
  art,
  label,
  className = "",
}: {
  art: ArtName;
  label: string;
  className?: string;
}) {
  const Drawing = drawings[art];
  return (
    <svg viewBox={ART_VIEWBOX} role="img" aria-label={label} className={`block ${className}`}>
      <Drawing />
    </svg>
  );
}
