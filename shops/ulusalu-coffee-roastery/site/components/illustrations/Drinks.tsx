import { C, IllFrame, Shadow, type IllProps } from "./palette";

type P = IllProps;

// Tall glass in three bands: aren at the bottom, milk, then espresso, with a straw.
export function ArenLatte({ label, className, viewBox }: P) {
  return (
    <IllFrame label={label} className={className} viewBox={viewBox}>
      <Shadow rx={40} />
      <path d="M70 56 L76 184 H124 L130 56 Z" fill={C.white} stroke="none" />
      <path d="M111 24 L118 25 L111 98 L104 97 Z" fill={C.bilah} />
      <path d="M70.9 76 H129.1 L127.8 104 H72.2 Z" fill={C.espresso} stroke="none" />
      <path d="M72.2 104 H127.8 L125.8 146 H74.2 Z" fill={C.milk} stroke="none" />
      <path d="M74.2 146 H125.8 L124.1 184 H75.9 Z" fill={C.aren} stroke="none" />
      <path d="M70 56 L76 184 H124 L130 56" />
      <path d="M67 56 H133" />
    </IllFrame>
  );
}

// Tall glass of dark coffee with square ice, on a round wooden coaster.
export function KopiHitam({ label, className, viewBox }: P) {
  return (
    <IllFrame label={label} className={className} viewBox={viewBox}>
      <Shadow rx={52} />
      <path d="M52 172 H148 V180 Q148 184 144 184 H56 Q52 184 52 180 Z" fill={C.aren} />
      <path d="M70 48 L74 172 H126 L130 48 Z" fill={C.white} stroke="none" />
      <path d="M109 20 L116 21 L109 92 L102 91 Z" fill={C.bilah} />
      <path d="M70.6 68 H129.4 L126 172 H74 Z" fill={C.espresso} stroke="none" />
      <rect x="80" y="66" width="21" height="21" rx="3" transform="rotate(-9 90 76)" fill={C.white} fillOpacity={0.32} />
      <rect x="104" y="72" width="19" height="19" rx="3" transform="rotate(11 113 81)" fill={C.white} fillOpacity={0.32} />
      <rect x="88" y="94" width="18" height="18" rx="3" transform="rotate(4 97 103)" fill={C.white} fillOpacity={0.22} />
      <path d="M70 48 L74 172 H126 L130 48" />
      <path d="M67 48 H133" />
    </IllFrame>
  );
}

// Kraft bag with a white label: ULUSALU House Blend · 200 g. Kraft appears only here.
export function BeanBag({ label, className, viewBox, shadow = "#4E1214" }: P & { shadow?: string }) {
  return (
    <IllFrame label={label} className={className} viewBox={viewBox}>
      <Shadow rx={56} fill={shadow} />
      <path d="M56 54 H144 L148 182 Q148 184 146 184 H54 Q52 184 52 182 Z" fill={C.kraft} />
      <path d="M56 36 H144 V54 H56 Z" fill={C.kraft} />
      <path d="M64 40 V50 M72 40 V50 M80 40 V50 M88 40 V50 M96 40 V50 M104 40 V50 M112 40 V50 M120 40 V50 M128 40 V50 M136 40 V50" strokeWidth={1.5} opacity={0.55} />
      <circle cx="100" cy="72" r="5" fill={C.kraft} />
      <rect x="68" y="92" width="64" height="62" rx="2" fill={C.bata} />
      <g stroke="none" fill={C.bilah} textAnchor="middle">
        <text x="100" y="114" fontSize="15" fontWeight="800" style={{ fontFamily: "var(--font-display)" }}>
          ULUSALU
        </text>
        <text x="100" y="129" fontSize="9" fontWeight="600" style={{ fontFamily: "var(--font-body)" }}>
          House Blend
        </text>
        <text x="100" y="143" fontSize="8.5" style={{ fontFamily: "var(--font-body)" }}>
          200 g
        </text>
      </g>
    </IllFrame>
  );
}
