import type { Illustration } from "@/content";

// Flat geometric illustrations of four products (design brief §6). Palette colours plus the
// illustration-only colours; no outlines, one flat shadow shape each, no logo on any cup.
// All drawn on a 400×300 board; subjects sit inside x 50–350 so a square crop also works.
// [MOCKUP] the look of each product is a guess from customer photos, until the owner's photos arrive.

const C = {
  chalk: "#F7F6F2",
  limewash: "#E4E3DE",
  kopi: "#221B17",
  walnut: "#6B4427",
  concrete: "#9A9993",
  ube: "#9A7FC0",
  cream: "#EFE6D6",
  espresso: "#3A2216",
  cocoa: "#5B3A29",
  steel: "#C8CACA",
  milk: "#FFFFFF",
};

type Props = { label: string };

// "slice": a 4:3 frame shows the whole board, a square frame crops the sides.
function Board({ label, children }: Props & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
      {children}
    </svg>
  );
}

// Wall above, table below: the side-view scenes.
function Room({ horizon }: { horizon: number }) {
  return (
    <>
      <rect width="400" height="300" fill={C.chalk} />
      <rect y={horizon} width="400" height={300 - horizon} fill={C.limewash} />
    </>
  );
}

export function SaborAMi(props: Props) {
  return (
    <Board {...props}>
      <Room horizon={200} />
      {/* long morning shadow */}
      <polygon points="158,264 242,264 342,234 258,234" fill={C.concrete} opacity="0.35" />
      <clipPath id="sam-glass">
        <rect x="158" y="34" width="84" height="230" />
      </clipPath>
      <g clipPath="url(#sam-glass)">
        <rect x="158" y="34" width="84" height="230" fill={C.steel} opacity="0.3" />
        <rect x="158" y="148" width="84" height="106" fill={C.espresso} />
        {/* ube cream, dripping into the coffee */}
        <path
          d="M158 74H242V156C241 164 233 164 231 156L219 156C217 171 207 171 205 156L192 156C190 164 183 164 181 156L170 156C168 167 161 167 158 158Z"
          fill={C.ube}
        />
        <rect x="158" y="74" width="84" height="9" fill={C.cream} opacity="0.4" />
        <rect x="168" y="92" width="24" height="24" transform="rotate(-8 180 104)" fill={C.cream} opacity="0.4" />
        <rect x="203" y="100" width="24" height="24" transform="rotate(9 215 112)" fill={C.cream} opacity="0.4" />
        <rect x="181" y="124" width="22" height="22" transform="rotate(4 192 135)" fill={C.cream} opacity="0.4" />
        <rect x="158" y="252" width="84" height="12" fill={C.steel} opacity="0.6" />
        <rect x="166" y="44" width="6" height="200" fill={C.chalk} opacity="0.5" />
      </g>
      <rect x="158" y="34" width="84" height="3" fill={C.steel} />
    </Board>
  );
}

export function Cappuccino(props: Props) {
  // ellipse as a path, so both shadows can be one shape
  const e = (cx: number, cy: number, rx: number, ry: number) =>
    `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${rx * 2} 0a${rx} ${ry} 0 1 0 ${-rx * 2} 0Z`;
  return (
    <Board {...props}>
      <rect width="400" height="300" fill={C.limewash} />
      <g transform="translate(-20 0)">
        <path d={`${e(206, 214, 122, 44)}${e(326, 250, 44, 17)}`} fill={C.concrete} opacity="0.35" />
        {/* saucer */}
        <ellipse cx="190" cy="208" rx="118" ry="44" fill={C.steel} opacity="0.6" />
        <ellipse cx="190" cy="202" rx="118" ry="44" fill={C.chalk} />
        <ellipse cx="190" cy="202" rx="78" ry="27" fill={C.limewash} opacity="0.6" />
        {/* almond biscuit */}
        <g transform="rotate(-12 118 207)">
          <rect x="92" y="196" width="52" height="22" fill={C.walnut} opacity="0.55" />
          <rect x="100" y="201" width="8" height="4" fill={C.cream} />
          <rect x="114" y="207" width="9" height="4" fill={C.cream} />
          <rect x="128" y="200" width="7" height="4" fill={C.cream} />
        </g>
        {/* cup */}
        <path d="M250 148C286 144 290 186 246 188" fill="none" stroke={C.chalk} strokeWidth="12" />
        <ellipse cx="190" cy="196" rx="42" ry="8" fill={C.steel} opacity="0.7" />
        <path d="M118 130C120 172 146 196 190 198C234 196 260 172 262 130Z" fill={C.chalk} />
        <path d="M226 130H262C260 172 234 196 190 198C226 186 232 160 226 130Z" fill={C.steel} opacity="0.45" />
        <ellipse cx="190" cy="130" rx="72" ry="30" fill={C.chalk} />
        <ellipse cx="190" cy="131" rx="63" ry="24" fill={C.walnut} />
        {/* a heart of milk foam, seen from above */}
        <path d="M190 148C166 136 166 116 182 117C186 117 189 120 190 123C191 120 194 117 198 117C214 116 214 136 190 148Z" fill={C.cream} />
        {/* side cup of milk */}
        <path d="M352 222C372 220 374 244 350 246" fill="none" stroke={C.chalk} strokeWidth="8" />
        <path d="M290 222C291 246 305 258 326 259C347 258 361 246 362 222Z" fill={C.chalk} />
        <path d="M342 222H362C361 246 347 258 326 259C344 250 346 236 342 222Z" fill={C.steel} opacity="0.45" />
        <ellipse cx="326" cy="222" rx="36" ry="15" fill={C.chalk} />
        <ellipse cx="326" cy="222" rx="31" ry="12.5" fill={C.steel} opacity="0.6" />
        <ellipse cx="326" cy="224" rx="29" ry="10.5" fill={C.milk} />
      </g>
    </Board>
  );
}

export function EsKopiKrim(props: Props) {
  return (
    <Board {...props}>
      <Room horizon={200} />
      <g transform="translate(200 262) scale(1.25) translate(-200 -262)">
      <polygon points="156,262 244,262 330,238 252,238" fill={C.concrete} opacity="0.35" />
      <clipPath id="ekk-glass">
        <polygon points="148,72 252,72 244,262 156,262" />
      </clipPath>
      <g clipPath="url(#ekk-glass)">
        <rect x="140" y="72" width="120" height="190" fill={C.steel} opacity="0.3" />
        <rect x="140" y="150" width="120" height="102" fill={C.espresso} />
        <rect x="140" y="150" width="120" height="44" fill={C.cocoa} />
        {/* thick cream layer, sinking into the coffee */}
        <path
          d="M140 86H260V156C258 163 250 163 248 156L236 156C234 170 224 170 222 156L206 156C204 162 198 162 196 156L182 156C180 168 170 168 168 156L140 156Z"
          fill={C.cream}
        />
        <rect x="140" y="86" width="120" height="8" fill={C.chalk} opacity="0.6" />
        <rect x="164" y="104" width="26" height="26" transform="rotate(-6 177 117)" fill={C.chalk} opacity="0.55" />
        <rect x="204" y="112" width="26" height="26" transform="rotate(8 217 125)" fill={C.chalk} opacity="0.55" />
        {[172, 186, 199, 213, 226, 238].map((x, i) => (
          <circle key={x} cx={x} cy={i % 2 ? 89 : 92} r="1.7" fill={C.walnut} />
        ))}
        <rect x="140" y="252" width="120" height="10" fill={C.steel} opacity="0.6" />
        <polygon points="157,80 163,80 167,248 161,248" fill={C.chalk} opacity="0.5" />
      </g>
      <polygon points="148,72 252,72 252,75 148,75" fill={C.steel} />
      </g>
    </Board>
  );
}

export function MousseCake(props: Props) {
  const cone = (x: number, base: number, h: number, key: string) => (
    <g key={key}>
      <polygon points={`${x - 11},${base} ${x},${base - h} ${x},${base}`} fill={C.walnut} />
      <polygon points={`${x},${base} ${x},${base - h} ${x + 11},${base}`} fill={C.espresso} />
    </g>
  );
  return (
    <Board {...props}>
      <Room horizon={170} />
      <g transform="translate(200 236) scale(1.22) translate(-200 -236)">
        <ellipse cx="222" cy="248" rx="132" ry="36" fill={C.concrete} opacity="0.35" />
        {/* steel plate */}
        <ellipse cx="200" cy="236" rx="132" ry="42" fill={C.steel} />
        <ellipse cx="200" cy="232" rx="100" ry="29" fill={C.concrete} opacity="0.3" />
        {/* the slice: right face, front face, top */}
        <polygon points="244,160 268,140 268,190 244,210" fill={C.cocoa} />
        <polygon points="244,210 268,190 268,212 244,232" fill={C.espresso} />
        <polygon points="244,160 268,140 268,212 244,232" fill={C.kopi} opacity="0.35" />
        <rect x="148" y="160" width="96" height="46" fill={C.cocoa} />
        <rect x="148" y="206" width="96" height="4" fill={C.walnut} />
        <rect x="148" y="210" width="96" height="22" fill={C.espresso} />
        <polygon points="148,160 244,160 268,140 172,140" fill={C.cocoa} />
        {/* cocoa-dusted peaks: back row, chocolate discs nestled between, front row */}
        {[194, 224, 254].map((x) => cone(x, 146, 26, `b${x}`))}
        <ellipse cx="183" cy="146" rx="6.5" ry="8" transform="rotate(-12 183 146)" fill={C.kopi} />
        <ellipse cx="213" cy="146" rx="6.5" ry="8" transform="rotate(10 213 146)" fill={C.kopi} />
        <ellipse cx="240" cy="142" rx="6.5" ry="8" transform="rotate(-8 240 142)" fill={C.kopi} />
        {[168, 198, 228].map((x) => cone(x, 158, 30, `f${x}`))}
        {/* clear acetate band */}
        <rect x="144" y="150" width="104" height="84" fill={C.steel} opacity="0.22" />
        <polygon points="248,150 270,132 270,214 248,234" fill={C.steel} opacity="0.22" />
        <rect x="144" y="150" width="104" height="2" fill={C.chalk} opacity="0.8" />
        <polygon points="248,150 270,132 270,134 248,152" fill={C.chalk} opacity="0.8" />
      </g>
    </Board>
  );
}

const MAP = { saborAMi: SaborAMi, cappuccino: Cappuccino, esKopiKrim: EsKopiKrim, mousseCake: MousseCake };

export default function ProductIllustration({ name, ...props }: Props & { name: Illustration }) {
  const Art = MAP[name];
  return <Art {...props} />;
}
