import { C, IllFrame, Shadow, type IllProps } from "./palette";

type P = IllProps;

// Brown bowl on a white plate with a brown rim, two slices of garlic bread with green flecks.
export function Soup({ label, className, viewBox }: P) {
  return (
    <IllFrame label={label} className={className} viewBox={viewBox}>
      <Shadow rx={80} />
      {/* plate */}
      <path d="M44 178 L54 184 H146 L156 178" fill={C.white} />
      <ellipse cx="100" cy="174" rx="86" ry="10" fill={C.white} />
      <ellipse cx="100" cy="174" rx="77" ry="7" stroke={C.espresso} strokeWidth={2} />
      {/* garlic bread, leaning against the bowl */}
      <g transform="rotate(-24 52 150)">
        <rect x="18" y="136" width="70" height="24" rx="11" fill={C.crust} />
        <path d="M24 142 H82" stroke={C.milk} strokeWidth={3} opacity={0.8} />
      </g>
      <g transform="rotate(-8 50 162)">
        <rect x="14" y="152" width="72" height="22" rx="10" fill={C.crust} />
        <path d="M20 157.5 H80" stroke={C.milk} strokeWidth={3} opacity={0.8} />
      </g>
      <g fill={C.taman} stroke="none">
        <circle cx="34" cy="160" r="1.8" />
        <circle cx="48" cy="163" r="1.6" />
        <circle cx="62" cy="160" r="1.8" />
        <circle cx="72" cy="165" r="1.5" />
        <circle cx="38" cy="136" r="1.6" />
        <circle cx="52" cy="130" r="1.8" />
        <circle cx="64" cy="124" r="1.5" />
      </g>
      {/* bowl */}
      <path d="M70 114 Q70 166 108 170 H128 Q166 166 166 114 Z" fill={C.espresso} />
      <ellipse cx="118" cy="114" rx="48" ry="9" fill={C.white} />
      <ellipse cx="118" cy="115.5" rx="41" ry="6" fill={C.milk} stroke="none" />
      <g fill={C.cocoa} stroke="none">
        <circle cx="104" cy="115" r="1.4" />
        <circle cx="116" cy="117" r="1.6" />
        <circle cx="128" cy="114" r="1.3" />
        <circle cx="138" cy="116.5" r="1.5" />
        <circle cx="96" cy="117" r="1.2" />
      </g>
    </IllFrame>
  );
}

// Black plate, golden rice dome, fried egg, kerupuk, a tomato slice and lettuce.
export function NasiGoreng({ label, className, viewBox }: P) {
  return (
    <IllFrame label={label} className={className} viewBox={viewBox}>
      <Shadow rx={84} />
      <path d="M40 178 L52 184 H148 L160 178" fill={C.bilah} />
      <ellipse cx="100" cy="174" rx="90" ry="11" fill={C.bilah} />
      {/* lettuce and tomato, back left */}
      <path
        d="M18 168 Q14 150 26 146 Q24 132 38 132 Q44 120 56 128 Q66 124 68 138 Q76 146 70 168 Z"
        fill={C.leaf}
      />
      <circle cx="46" cy="146" r="17" fill={C.tomato} />
      <circle cx="46" cy="146" r="10" fill="#E07A5F" stroke="none" />
      <path d="M46 136 V156 M37 146 H55" stroke={C.tomato} strokeWidth={2} />
      {/* kerupuk, back right */}
      <path
        d="M98 120 Q100 96 118 92 Q128 80 142 90 Q158 86 162 104 Q172 114 164 128 Q132 136 98 120 Z"
        fill={C.milk}
      />
      <g fill={C.crust} stroke="none" opacity={0.7}>
        <circle cx="122" cy="104" r="2" />
        <circle cx="138" cy="98" r="1.6" />
        <circle cx="148" cy="112" r="2" />
        <circle cx="130" cy="118" r="1.5" />
      </g>
      {/* rice dome */}
      <path d="M44 172 Q42 112 92 108 Q142 112 140 172 Z" fill={C.crust} />
      <g fill={C.aren} stroke="none">
        <circle cx="70" cy="132" r="1.8" />
        <circle cx="86" cy="122" r="1.6" />
        <circle cx="104" cy="128" r="1.8" />
        <circle cx="118" cy="140" r="1.6" />
        <circle cx="62" cy="152" r="1.8" />
        <circle cx="80" cy="146" r="1.6" />
        <circle cx="98" cy="154" r="1.8" />
        <circle cx="124" cy="160" r="1.6" />
        <circle cx="56" cy="164" r="1.5" />
        <circle cx="110" cy="166" r="1.7" />
      </g>
      <g fill={C.taman} stroke="none">
        <circle cx="94" cy="138" r="1.6" />
        <circle cx="72" cy="160" r="1.5" />
        <circle cx="112" cy="150" r="1.6" />
      </g>
      {/* fried egg */}
      <path d="M128 172 Q124 156 142 152 Q152 142 168 150 Q186 156 182 172 Z" fill={C.white} />
      <path d="M146 158 A12 12 0 0 1 170 158 Z" fill={C.yolk} />
    </IllFrame>
  );
}
