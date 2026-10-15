import { C, IllFrame, Shadow, type IllProps } from "./palette";

type P = IllProps;

// Pastry with chocolate drizzle and banana slices.
export function ChocoBanana({ label, className, viewBox }: P) {
  return (
    <IllFrame label={label} className={className} viewBox={viewBox}>
      <Shadow rx={70} />
      <path d="M36 184 Q28 148 54 138 H146 Q172 148 164 184 Z" fill={C.crust} />
      <path d="M40 168 Q100 160 160 168" stroke={C.aren} strokeWidth={2} />
      <path d="M38 154 Q100 146 162 154" stroke={C.aren} strokeWidth={2} />
      <g fill={C.pale}>
        <ellipse cx="66" cy="134" rx="13" ry="6" />
        <ellipse cx="92" cy="132" rx="13" ry="6" />
        <ellipse cx="118" cy="132" rx="13" ry="6" />
        <ellipse cx="142" cy="134" rx="12" ry="6" />
      </g>
      <path
        d="M48 130 L62 146 L76 128 L90 146 L104 128 L118 146 L132 128 L146 144 L154 134"
        stroke={C.cocoa}
        strokeWidth={5}
      />
    </IllFrame>
  );
}

// Square slice: cocoa top, cream, coffee sponge, cream, sponge.
export function Tiramisu({ label, className, viewBox }: P) {
  return (
    <IllFrame label={label} className={className} viewBox={viewBox}>
      <Shadow rx={62} />
      <g stroke="none">
        <rect x="50" y="92" width="100" height="13" fill={C.cocoa} />
        <rect x="50" y="105" width="100" height="22" fill={C.milk} />
        <rect x="50" y="127" width="100" height="17" fill={C.aren} />
        <rect x="50" y="144" width="100" height="21" fill={C.milk} />
        <rect x="50" y="165" width="100" height="19" fill={C.aren} />
      </g>
      <g fill={C.cocoa} stroke="none" opacity={0.85}>
        <circle cx="62" cy="109" r="1.4" />
        <circle cx="84" cy="110" r="1.2" />
        <circle cx="120" cy="109" r="1.4" />
        <circle cx="140" cy="111" r="1.2" />
      </g>
      <rect x="50" y="92" width="100" height="92" rx="2" />
    </IllFrame>
  );
}

// Two golden crumbed rolls.
export function Risoles({ label, className, viewBox }: P) {
  return (
    <IllFrame label={label} className={className} viewBox={viewBox}>
      <Shadow rx={78} />
      <rect x="58" y="118" width="120" height="42" rx="21" transform="rotate(-6 118 139)" fill={C.crust} />
      <rect x="22" y="142" width="128" height="42" rx="21" fill={C.crust} />
      <g fill={C.aren} stroke="none">
        <circle cx="76" cy="128" r="2" />
        <circle cx="96" cy="124" r="1.6" />
        <circle cx="116" cy="130" r="2" />
        <circle cx="140" cy="122" r="1.7" />
        <circle cx="158" cy="132" r="2" />
        <circle cx="40" cy="160" r="2" />
        <circle cx="56" cy="152" r="1.6" />
        <circle cx="72" cy="166" r="2" />
        <circle cx="88" cy="154" r="1.7" />
        <circle cx="106" cy="170" r="2" />
        <circle cx="120" cy="156" r="1.6" />
        <circle cx="134" cy="168" r="2" />
        <circle cx="50" cy="174" r="1.5" />
        <circle cx="96" cy="176" r="1.5" />
      </g>
      <g fill={C.milk} stroke="none" opacity={0.75}>
        <circle cx="64" cy="160" r="1.4" />
        <circle cx="112" cy="162" r="1.4" />
        <circle cx="104" cy="134" r="1.4" />
      </g>
    </IllFrame>
  );
}

// Two pale-yellow rolled crepes, seam visible.
export function SosisSolo({ label, className, viewBox }: P) {
  return (
    <IllFrame label={label} className={className} viewBox={viewBox}>
      <Shadow rx={78} />
      <rect x="58" y="122" width="118" height="36" rx="18" transform="rotate(-5 117 140)" fill={C.pale} />
      <path d="M118 120 Q124 140 120 158" transform="rotate(-5 117 140)" />
      <rect x="24" y="148" width="124" height="36" rx="18" fill={C.pale} />
      <path d="M84 148 Q92 166 86 184" />
      <g fill={C.crust} stroke="none" opacity={0.75}>
        <ellipse cx="50" cy="160" rx="5" ry="2" />
        <ellipse cx="118" cy="170" rx="6" ry="2" />
        <ellipse cx="150" cy="136" rx="5" ry="2" />
      </g>
    </IllFrame>
  );
}
