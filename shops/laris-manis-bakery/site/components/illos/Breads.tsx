import { ink } from "./inks";
import { r1, seeded } from "@/lib/rand";

// Bread art drawn inside BreadBag's 200×280 box, seen from above as it lies in the crate.

// ---------- Roti Meses Keju: slab, top split diagonally into sprinkles and grated cheese ----------
const CHOC_EDGE = "M38 52 H126 C118 92 112 118 102 150 S84 214 74 256 H38 Z";

const cheeseStrands = (() => {
  const rnd = seeded(11);
  const out: string[] = [];
  for (let i = 0; i < 34; i++) {
    const x = 78 + rnd() * 80;
    const y = 58 + rnd() * 190;
    const len = 12 + rnd() * 10;
    const a = rnd() * Math.PI;
    const dx = Math.cos(a) * len;
    const dy = Math.sin(a) * len;
    const bend = (rnd() - 0.5) * 8;
    out.push(`M${r1(x)} ${r1(y)}q${r1(dx / 2 + bend)} ${r1(dy / 2 - bend)} ${r1(dx)} ${r1(dy)}`);
  }
  return out.join("");
})();

const sprinkles = (() => {
  const rnd = seeded(23);
  const out: string[] = [];
  for (let i = 0; i < 64; i++) {
    const x = 42 + rnd() * 84;
    const y = 56 + rnd() * 196;
    const a = rnd() * Math.PI;
    out.push(`M${r1(x)} ${r1(y)}l${r1(Math.cos(a) * 5)} ${r1(Math.sin(a) * 5)}`);
  }
  return out.join("");
})();

export function MesesKeju({ uid }: { uid: string }) {
  const face = `${uid}-face`;
  const choc = `${uid}-choc`;
  return (
    <g>
      <defs>
        <clipPath id={face}>
          <rect x="43" y="58" width="114" height="189" rx="19" />
        </clipPath>
        <clipPath id={choc}>
          <path d={CHOC_EDGE} />
        </clipPath>
      </defs>
      <rect x="30" y="46" width="140" height="214" rx="30" fill={ink.crust} />
      <rect x="37" y="52" width="126" height="201" rx="24" fill={ink.crumb} />
      <g clipPath={`url(#${face})`}>
        <rect x="40" y="56" width="120" height="196" fill={ink.cookieShade} />
        <path d={cheeseStrands} fill="none" stroke={ink.cheese} strokeWidth="3.4" strokeLinecap="round" />
        <g clipPath={`url(#${choc})`}>
          <rect x="38" y="52" width="92" height="206" fill={ink.chocolate} />
          <path d={sprinkles} fill="none" stroke={ink.ornament} strokeWidth="2.4" strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
}

// ---------- Roti Cokelat: twisted bun, three lobes with chocolate streaks ----------
export function Cokelat() {
  return (
    <g>
      <ellipse cx="100" cy="212" rx="58" ry="44" transform="rotate(-8 100 212)" fill={ink.crust} />
      <ellipse cx="86" cy="196" rx="30" ry="13" transform="rotate(-8 86 196)" fill={ink.crumb} />
      <ellipse cx="100" cy="152" rx="64" ry="46" transform="rotate(9 100 152)" fill={ink.crust} />
      <ellipse cx="86" cy="134" rx="32" ry="13" transform="rotate(9 86 134)" fill={ink.crumb} />
      <ellipse cx="100" cy="90" rx="58" ry="44" transform="rotate(-9 100 90)" fill={ink.crust} />
      <ellipse cx="84" cy="74" rx="28" ry="12" transform="rotate(-9 84 74)" fill={ink.crumb} />
      <g fill="none" stroke={ink.chocolate} strokeLinecap="round">
        <path d="M44 124 C74 140 120 136 156 114" strokeWidth="10" />
        <path d="M44 184 C80 198 122 194 158 176" strokeWidth="10" />
        <path d="M62 236 C86 248 118 246 146 232" strokeWidth="8" />
        <path d="M118 66 C128 80 130 94 124 110" strokeWidth="6" />
        <path d="M70 146 C80 158 96 166 112 168" strokeWidth="6" />
        <path d="M124 196 C134 206 136 220 130 232" strokeWidth="6" />
      </g>
    </g>
  );
}

// ---------- Roti Sosis: golden oval bun with a whole sausage and cheese strands ----------
const sosisCheese = (() => {
  const rnd = seeded(5);
  const out: string[] = [];
  for (let i = 0; i < 11; i++) {
    const y = 74 + i * 16 + rnd() * 6;
    const x = 66 + rnd() * 18;
    const w = 40 + rnd() * 26;
    out.push(`M${r1(x)} ${r1(y)}q${r1(w / 2)} ${r1(-6 - rnd() * 6)} ${r1(w)} ${r1(4 + rnd() * 6)}`);
  }
  return out.join("");
})();

export function Sosis() {
  return (
    <g>
      <rect x="34" y="48" width="132" height="210" rx="62" fill={ink.crust} />
      <ellipse cx="54" cy="128" rx="7" ry="34" fill={ink.crumb} />
      <ellipse cx="146" cy="184" rx="6" ry="26" fill={ink.crumb} />
      <rect x="68" y="58" width="64" height="190" rx="32" fill={ink.crumb} />
      <rect x="78" y="62" width="44" height="182" rx="22" fill={ink.sausage} />
      <rect x="88" y="78" width="9" height="148" rx="4.5" fill={ink.slice} />
      <path d={sosisCheese} fill="none" stroke={ink.cheese} strokeWidth="3.4" strokeLinecap="round" />
    </g>
  );
}
