import Container from "@/components/Container";
import { space } from "@/content";

// OSMO's upstairs A-frame in one-point perspective: steel front gable, timber rafters
// receding to the glass back wall, a tie beam with three hanging pots. Decorative.
const VP = { x: 230, y: 300 };
const FRONT = { apex: [230, 14], left: [14, 406], right: [446, 406] } as const;
const BACK_S = 0.42;
const at = ([x, y]: readonly [number, number], s: number) =>
  [VP.x + (x - VP.x) * s, VP.y + (y - VP.y) * s].map((n) => Math.round(n * 10) / 10);
const gable = (s: number) =>
  [at(FRONT.left, s), at(FRONT.apex, s), at(FRONT.right, s)].map((p) => p.join(",")).join(" ");
// Evenly spaced in depth, so they bunch toward the back like real rafters.
const RAFTERS = Array.from({ length: 9 }, (_, k) => 1 / (1 + ((k + 1) / 10) * (1 / BACK_S - 1)));
const back = { apex: at(FRONT.apex, BACK_S), left: at(FRONT.left, BACK_S), right: at(FRONT.right, BACK_S) };
const POTS = [
  { x: 294, y: 282 },
  { x: 322, y: 296 },
  { x: 348, y: 278 },
];

function AFrame() {
  return (
    <svg
      className="aframe"
      viewBox="0 0 460 420"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* rafters */}
      <g strokeWidth="2" opacity="0.55">
        {RAFTERS.map((s) => (
          <polyline key={s} points={gable(s)} />
        ))}
      </g>
      {/* ridge and roof feet running back */}
      <g strokeWidth="2" opacity="0.8">
        <line x1={FRONT.apex[0]} y1={FRONT.apex[1]} x2={back.apex[0]} y2={back.apex[1]} />
        <line x1={FRONT.left[0]} y1={FRONT.left[1]} x2={back.left[0]} y2={back.left[1]} />
        <line x1={FRONT.right[0]} y1={FRONT.right[1]} x2={back.right[0]} y2={back.right[1]} />
      </g>
      {/* back wall with the 3×3 glass wall */}
      <g strokeWidth="2">
        <polyline points={gable(BACK_S)} />
        <line x1={back.left[0]} y1={back.left[1]} x2={back.right[0]} y2={back.right[1]} />
        <rect x="188" y="266" width="84" height="78" />
        <line x1="216" y1="266" x2="216" y2="344" />
        <line x1="244" y1="266" x2="244" y2="344" />
        <line x1="188" y1="292" x2="272" y2="292" />
        <line x1="188" y1="318" x2="272" y2="318" />
      </g>
      {/* tie beam, hanging pots, floor */}
      <g strokeWidth="2">
        <line x1="100" y1="250" x2="360" y2="250" />
        {POTS.map((p) => (
          <path
            key={p.x}
            d={`M${p.x} 250V${p.y}M${p.x - 10} ${p.y}h20l-3.5 13h-13zM${p.x - 6} ${p.y + 13}q-3 10 1 20M${p.x + 5} ${p.y + 13}q3 7 0 13`}
          />
        ))}
        <line x1="4" y1="406" x2="456" y2="406" />
      </g>
      {/* steel A-frame, front */}
      <polyline points={gable(1)} strokeWidth="4" />
    </svg>
  );
}

export default function Space() {
  return (
    <section className="section space on-dark" aria-labelledby="space-title">
      <Container>
        <div className="grid-12 space-grid">
          <div className="space-head">
            <h2 id="space-title" className="h2 t-head">
              {space.title}
            </h2>
            <p className="lead">{space.lead}</p>
          </div>
          <div className="space-art">
            <AFrame />
          </div>
          <div className="space-detail">
            <ul className="uses">
              {space.blocks.map((b) => (
                <li key={b.title} className="use">
                  <h3 className="h3">{b.title}</h3>
                  <p>{b.text}</p>
                </li>
              ))}
            </ul>
            <ul className="facilities" aria-label={space.facilitiesLabel}>
              {space.facilities.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
