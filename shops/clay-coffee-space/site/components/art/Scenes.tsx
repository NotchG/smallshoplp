// Scene drawings for the photo slots and the stage section: bingkai line art (1.5px, never
// scaled) on dark grounds, palette fills only. Decorative: aria-hidden, the section text says it.

const r = (n: number) => Math.round(n * 10) / 10;

function Glow({ id }: { id: string }) {
  return (
    <radialGradient id={id}>
      <stop offset="0" style={{ stopColor: "var(--color-lampu)", stopOpacity: 0.55 }} />
      <stop offset="0.45" style={{ stopColor: "var(--color-lampu)", stopOpacity: 0.2 }} />
      <stop offset="1" style={{ stopColor: "var(--color-lampu)", stopOpacity: 0 }} />
    </radialGradient>
  );
}

// A quadratic swag from (x0,y) to (x1,y) sagging by `sag`, with n bulbs evenly along it.
function SmallWire({
  x0,
  x1,
  y,
  sag,
  n,
  glowId,
  glowR,
}: {
  x0: number;
  x1: number;
  y: number;
  sag: number;
  n: number;
  glowId: string;
  glowR: number;
}) {
  const bulbs = Array.from({ length: n }, (_, k) => {
    const t = (k + 0.5) / n;
    return { x: x0 + (x1 - x0) * t, y: y + 4 * sag * t * (1 - t) };
  });
  return (
    <g>
      <path d={`M${x0} ${y}Q${(x0 + x1) / 2} ${y + 2 * sag} ${x1} ${y}`} className="s-wire" />
      {bulbs.map((b, i) => (
        <g key={i}>
          <path d={`M${r(b.x)} ${r(b.y)}V${r(b.y + 4)}`} className="s-wire" />
          <circle cx={r(b.x)} cy={r(b.y + 7)} r={glowR} fill={`url(#${glowId})`} />
          <ellipse cx={r(b.x)} cy={r(b.y + 7)} rx={2.2} ry={3} className="f-lampu" />
        </g>
      ))}
    </g>
  );
}

// Deterministic gravel dots (same on server and client)
function gravel(count: number, x0: number, x1: number, y0: number, y1: number, seed: number) {
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    x: r(x0 + rnd() * (x1 - x0)),
    y: r(y0 + rnd() * (y1 - y0)),
    rr: r(1 + rnd() * 0.8),
  }));
}

function Umbrella({ cx, apex, base, half, ground, table }: { cx: number; apex: number; base: number; half: number; ground: number; table: number }) {
  const l = cx - half;
  const q = half / 2;
  const scallops = [0, 1, 2, 3]
    .map((i) => {
      const xa = cx + half - i * q;
      const xb = xa - q;
      return `Q${r((xa + xb) / 2)} ${base + 6} ${r(xb)} ${base}`;
    })
    .join("");
  return (
    <g>
      <path d={`M${cx} ${base}V${ground}`} className="ln" />
      <ellipse cx={cx} cy={table} rx={half * 0.5} ry={4.5} className="f-window ln-fill" />
      <path d={`M${cx - 10} ${ground}H${cx + 10}`} className="ln" />
      <path d={`M${l} ${base}L${cx} ${apex}L${cx + half} ${base}${scallops}Z`} className="f-kanvas ln-fill" />
      <circle cx={cx} cy={apex - 3} r={2.5} className="f-bingkai" />
    </g>
  );
}

function Stool({ cx, y }: { cx: number; y: number }) {
  return (
    <g className="ln">
      <ellipse cx={cx} cy={y} rx={8} ry={2.5} />
      <path d={`M${cx - 6} ${y + 1}L${cx - 8} ${y + 12}M${cx + 6} ${y + 1}L${cx + 8} ${y + 12}`} />
    </g>
  );
}

/* Suasana: the courtyard at night. Pavilion gable, umbrellas, wire, LED path, gravel. 300x400 */
export function CourtyardScene() {
  const dots = gravel(46, 6, 294, 362, 396, 7);
  return (
    <svg viewBox="0 0 300 400" aria-hidden="true" focusable="false" className="ink-light">
      <defs>
        <Glow id="court-glow" />
      </defs>
      {/* glass pavilion with gabled white frame */}
      <path d="M84 344V246L150 200L216 246V344Z" className="f-glass" />
      <rect x="117" y="246" width="33" height="42" className="f-pane" />
      <rect x="183" y="288" width="33" height="56" className="f-pane" />
      <path d="M117 223L150 200V246H117Z" className="f-pane" />
      <g className="ln">
        <path d="M84 344V246L150 200L216 246V344" />
        <path d="M84 246H216M84 288H216" />
        <path d="M117 223V344M150 200V344M183 223V344" />
      </g>
      <SmallWire x0={-6} x1={306} y={120} sag={36} n={6} glowId="court-glow" glowR={12} />
      <Umbrella cx={58} apex={234} base={262} half={50} ground={344} table={318} />
      <Umbrella cx={246} apex={226} base={256} half={54} ground={344} table={322} />
      <Stool cx={22} y={330} />
      <Stool cx={96} y={332} />
      <Stool cx={204} y={333} />
      <Stool cx={286} y={333} />
      {/* ground, LED strip along the path, gravel */}
      <path d="M0 344H300" className="ln" />
      <path d="M-4 356Q150 348 304 356" className="s-led" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.rr} className="f-gravel" />
      ))}
    </svg>
  );
}

/* Sabtu malam: the garden stage. Wire, guitar on a stand, stool, mic, amp, platform. 480x340 */
export function StageScene() {
  // acoustic guitar body: two circles (r20 at y196, r28 at y232) joined at their intersection
  const body = "M134.5 208.7A20 20 0 1 1 165.5 208.7A28 28 0 1 1 134.5 208.7Z";
  return (
    <svg viewBox="0 0 480 340" aria-hidden="true" focusable="false" className="ink-light">
      <defs>
        <Glow id="stage-glow" />
      </defs>
      <SmallWire x0={-6} x1={486} y={28} sag={34} n={7} glowId="stage-glow" glowR={15} />
      {/* guitar on its stand */}
      <g transform="rotate(-6 150 262)">
        <rect x="146" y="112" width="8" height="80" className="f-kanvas ln-fill" />
        <rect x="143" y="94" width="14" height="20" rx="2" className="f-kanvas ln-fill" />
        <path d={body} className="f-kanvas ln-fill" />
        <circle cx="150" cy="215" r="7" className="f-rimbun ln-fill" />
        <path d="M140 242H160" className="ln" />
        <path d="M134 262L144 250M166 262L156 250" className="ln" />
      </g>
      {/* stool */}
      <g className="ln">
        <ellipse cx="206" cy="206" rx="18" ry="4.5" className="f-rimbun" />
        <path d="M194 209L188 262M218 209L224 262M192 238H220" />
      </g>
      {/* mic on its stand, cable to the amp */}
      <g className="ln">
        <path d="M262 262Q300 272 322 252" />
        <path d="M256 236V130M256 236L238 262M256 236L274 262M256 236V262" />
      </g>
      <g transform="rotate(-14 256 130)">
        <rect x="249" y="96" width="14" height="34" rx="7" className="f-rimbun ln-fill" />
        <path d="M251 106H261M251 113H261" className="ln" />
      </g>
      {/* amp */}
      <path d="M352 186V178H384V186" className="ln" />
      <rect x="322" y="186" width="92" height="76" rx="4" className="f-malam ln-fill" />
      <path d="M322 204H414" className="ln" />
      <circle cx="338" cy="195" r="3.2" className="f-lampu" />
      <circle cx="352" cy="195" r="3.2" className="f-kanvas" />
      <circle cx="366" cy="195" r="3.2" className="f-kanvas" />
      <circle cx="368" cy="234" r="21" className="ln" />
      <circle cx="368" cy="234" r="7" className="ln" />
      {/* platform: top, front planks, LED strip, ground */}
      <path d="M36 262H444L452 274H28Z" className="f-kanvas-in ln-fill" />
      <rect x="28" y="274" width="424" height="32" className="f-kanvas ln-fill" />
      <path d="M81 274V306M134 274V306M187 274V306M240 274V306M293 274V306M346 274V306M399 274V306" className="ln s-gula" />
      <path d="M28 314H452" className="s-led" />
      <path d="M0 322H480" className="ln" />
    </svg>
  );
}

/* Podcast Box: inside the glass pavilion. Mullions behind, mic on a desk stand, headphones. 240x320 */
export function PodcastScene() {
  return (
    <svg viewBox="0 0 240 320" aria-hidden="true" focusable="false" className="ink-light">
      <path d="M60 30V262M120 0V262M180 30V262M0 150H240" className="ln o-faint" />
      <rect x="120" y="150" width="60" height="112" className="f-glass" />
      {/* mic */}
      <ellipse cx="104" cy="258" rx="24" ry="5" className="f-window ln-fill" />
      <path d="M104 253V206" className="ln" />
      <path d="M90 186V200Q90 208 98 208H110Q118 208 118 200V186" className="ln" />
      <rect x="92" y="122" width="24" height="70" rx="12" className="f-window ln-fill" />
      <path d="M94 142H114M94 152H114M94 162H114" className="ln" />
      {/* headphones */}
      <path d="M150 250A26 26 0 0 1 202 250" className="ln" />
      <rect x="143" y="240" width="13" height="22" rx="5" className="f-kanvas ln-fill" />
      <rect x="196" y="240" width="13" height="22" rx="5" className="f-kanvas ln-fill" />
      {/* desk */}
      <path d="M16 262H224" className="ln" />
    </svg>
  );
}
