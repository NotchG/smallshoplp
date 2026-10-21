// "Liner print" illustrations, like the logo printed on P8's tray paper:
// flat palette fills, one 3px ink outline (at a 240px artboard), round caps and joins,
// one paper highlight sliver, no gradients, shading or shadows.
// The bear is a simple round-eared placeholder until the owner sends their own drawing.

const INK = "#24211F";
const PAPER = "#F5F4F0";
const ROSTER = "#CB8D5E";
const DEEP = "#874B2C";
const SAGE = "#B9BCAD";
const BUTTER = "#E2B66E";
const VELVET = "#9A3B36";

const stroke = {
  stroke: INK,
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type IllusProps = { className?: string; label?: string };

// ------------------------------------------------------------ bear cookie
export function KueBeruang({
  variant = "mentega",
  className,
  label,
  decorative = false,
}: IllusProps & { variant?: "mentega" | "kacang"; decorative?: boolean }) {
  const fill = variant === "mentega" ? BUTTER : ROSTER;
  const detail = variant === "mentega" ? ROSTER : DEEP;
  const a11y = decorative
    ? { "aria-hidden": true as const }
    : {
        role: "img",
        "aria-label":
          label ??
          (variant === "mentega"
            ? "Ilustrasi kue mentega berbentuk beruang"
            : "Ilustrasi kue kacang berbentuk beruang"),
      };
  return (
    <svg viewBox="0 0 240 240" className={className} data-mockup="" {...a11y}>
      <g {...stroke}>
        <circle cx="62" cy="72" r="34" fill={fill} />
        <circle cx="178" cy="72" r="34" fill={fill} />
        <circle cx="120" cy="138" r="86" fill={fill} />
      </g>
      <circle cx="62" cy="72" r="15" fill={detail} />
      <circle cx="178" cy="72" r="15" fill={detail} />
      {variant === "kacang" && (
        <g fill={DEEP}>
          <ellipse cx="78" cy="118" rx="6" ry="4" transform="rotate(-20 78 118)" />
          <ellipse cx="164" cy="104" rx="5" ry="3.5" transform="rotate(30 164 104)" />
          <ellipse cx="70" cy="178" rx="5" ry="3.5" transform="rotate(15 70 178)" />
          <ellipse cx="172" cy="182" rx="6" ry="4" transform="rotate(-35 172 182)" />
          <ellipse cx="122" cy="96" rx="4" ry="3" />
          <ellipse cx="150" cy="208" rx="4.5" ry="3" transform="rotate(10 150 208)" />
          <ellipse cx="96" cy="206" rx="4" ry="3" transform="rotate(-10 96 206)" />
        </g>
      )}
      <ellipse cx="120" cy="168" rx="34" ry="25" fill="none" {...stroke} />
      <ellipse cx="120" cy="156" rx="10" ry="7" fill={INK} />
      <circle cx="90" cy="130" r="7" fill={INK} />
      <circle cx="150" cy="130" r="7" fill={INK} />
      <path d="M58 118 A66 66 0 0 1 86 76" fill="none" stroke={PAPER} strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

// ------------------------------------------------------------ iced coffee with coffee ice balls
export function EsKopiBolaEs({ className, label }: IllusProps) {
  return (
    <svg
      viewBox="0 0 260 300"
      className={className}
      role="img"
      aria-label={
        label ??
        "Ilustrasi es kopi bola es: gelas tinggi berisi empat bola es kopi, dengan kendi kecil susu bergagang kayu"
      }
    >
      {/* tray */}
      <ellipse cx="130" cy="280" rx="118" ry="16" fill={SAGE} {...stroke} />
      {/* glass */}
      <path d="M58 40 H142 V262 a12 12 0 0 1 -12 12 H70 a12 12 0 0 1 -12 -12 Z" fill={PAPER} {...stroke} />
      {/* coffee settling at the bottom */}
      <path d="M61 214 H139 V260 a10 10 0 0 1 -10 10 H71 a10 10 0 0 1 -10 -10 Z" fill={ROSTER} />
      {/* four coffee ice balls */}
      <g fill={DEEP} {...stroke}>
        <circle cx="100" cy="236" r="33" />
        <circle cx="98" cy="174" r="33" />
        <circle cx="102" cy="112" r="33" />
        <circle cx="100" cy="46" r="33" />
      </g>
      {/* glass rim, in front of the top ball */}
      <path d="M58 40 H142" fill="none" {...stroke} />
      {/* P8 mark on the glass */}
      <text
        x="100"
        y="186"
        textAnchor="middle"
        fill={PAPER}
        style={{ fontFamily: "var(--font-display)", fontSize: "38px" }}
      >
        P8
      </text>
      {/* highlight sliver */}
      <path d="M68 92 V196" stroke={PAPER} strokeWidth="6" strokeLinecap="round" />
      {/* milk jug */}
      <path d="M160 206 H210 V262 a8 8 0 0 1 -8 8 H168 a8 8 0 0 1 -8 -8 Z" fill={PAPER} {...stroke} />
      <path d="M163 222 H207" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M160 206 l-10 -6" fill="none" {...stroke} />
      <rect x="210" y="226" width="40" height="15" rx="7" fill={DEEP} {...stroke} />
    </svg>
  );
}

// ------------------------------------------------------------ red velvet cupcake
export function CupcakeRedVelvet({ className, label }: IllusProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label={label ?? "Ilustrasi red velvet cupcake dengan krim keju putih di atasnya"}
    >
      {/* sponge dome */}
      <path d="M48 140 C48 112 80 100 120 100 C160 100 192 112 192 140 Z" fill={VELVET} {...stroke} />
      {/* cream-cheese swirl, three tiers */}
      <path d="M62 128 C58 108 80 96 120 96 C160 96 182 108 178 128 C170 136 70 136 62 128 Z" fill={PAPER} {...stroke} />
      <path d="M78 102 C76 86 94 76 120 76 C146 76 164 86 162 102 C154 110 86 110 78 102 Z" fill={PAPER} {...stroke} />
      <path d="M96 78 C96 64 108 54 122 52 C130 51 134 44 132 38 C146 46 148 60 144 72 C138 82 102 84 96 78 Z" fill={PAPER} {...stroke} />
      {/* crumbs */}
      <g fill={VELVET}>
        <circle cx="104" cy="62" r="4" />
        <circle cx="134" cy="88" r="4" />
        <circle cx="96" cy="114" r="3.5" />
        <circle cx="150" cy="116" r="3.5" />
      </g>
      {/* paper case with pleats */}
      <path d="M54 140 H186 L172 212 a8 8 0 0 1 -8 6 H76 a8 8 0 0 1 -8 -6 Z" fill={PAPER} {...stroke} />
      <g stroke={INK} strokeWidth="2.5" strokeLinecap="round">
        <path d="M76 146 L84 212" />
        <path d="M98 146 L102 214" />
        <path d="M120 146 V214" />
        <path d="M142 146 L138 214" />
        <path d="M164 146 L156 212" />
      </g>
      {/* highlight sliver on the sponge */}
      <path d="M62 132 C66 124 74 120 82 118" fill="none" stroke={PAPER} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

// ------------------------------------------------------------ jar of P8 Butter Cookies
export function ToplesP8({ className, label }: IllusProps) {
  const rows = [112, 136, 160, 184, 208, 232, 256, 280];
  return (
    <svg
      viewBox="0 0 240 320"
      className={className}
      role="img"
      aria-label={label ?? "Ilustrasi toples kaca P8 Butter Cookies berisi kue mentega bertumpuk, dengan tutup hitam"}
    >
      {/* lid */}
      <rect x="52" y="28" width="136" height="40" rx="9" fill={INK} {...stroke} />
      <path d="M66 40 H174" stroke={PAPER} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      {/* jar */}
      <path d="M44 92 C44 78 56 68 72 68 H168 C184 68 196 78 196 92 V284 C196 300 184 308 168 308 H72 C56 308 44 300 44 284 Z" fill={PAPER} {...stroke} />
      {/* stacked butter cookies, seen edge-on */}
      <g fill={BUTTER} {...stroke}>
        {rows.map((y, i) => (
          <rect key={y} x={i % 2 ? 60 : 54} y={y - 10} width="126" height="20" rx="10" />
        ))}
      </g>
      {/* round label */}
      <circle cx="120" cy="196" r="62" fill={PAPER} {...stroke} />
      <circle cx="120" cy="196" r="54" fill="none" stroke={INK} strokeWidth="1.5" />
      <text x="120" y="200" textAnchor="middle" fill={INK} style={{ fontFamily: "var(--font-display)", fontSize: "40px" }}>
        P8
      </text>
      <text x="120" y="224" textAnchor="middle" fill={INK} style={{ fontFamily: "var(--font-display)", fontSize: "11px" }}>
        Butter Cookies
      </text>
    </svg>
  );
}

// ------------------------------------------------------------ black pendant lamp
export function PendantLamp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 96" className={className} aria-hidden="true">
      <path d="M32 0 V36" stroke={INK} strokeWidth="2" />
      <rect x="26" y="34" width="12" height="9" rx="2" fill={INK} />
      <path d="M8 74 C8 52 18 42 32 42 C46 42 56 52 56 74 Z" fill={INK} />
      <path d="M21 74 A11 11 0 0 0 43 74 Z" fill={BUTTER} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M17 66 C18 58 22 52 27 49" fill="none" stroke={PAPER} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
