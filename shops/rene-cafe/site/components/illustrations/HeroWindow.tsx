import { C, scallop } from "@/lib/palette";

// Rene's gabled black-steel glass wall, seen from inside the brick hall, looking out at the garden.
// Signature moment (CSS keyframes in globals.css, first paint, once): the glare on the glass clears
// while the three garden layers settle 6 / 10 / 16 px into place. Base styles are the final state.
//
// Geometry, in a 588 × 800 viewBox (uniform scaling keeps frame and mullions in proportion):
// gable apex at the top centre, eaves at y = 300 (37.5%), 12-unit outer frame, 20-unit sill,
// 6-unit mullions. Each garden layer is 588 × 830: 30 units of overscan below the sill.

const W = 588;
const LAYER_H = 830;

// Inner edge of the frame: the outer gable line moved 12 units inwards.
const INNER = "M12 304.9 L294 17.14 L576 304.9 V780 H12 Z";
const OUTER = "M0 300 L294 0 L588 300 V800 H0 Z";

function Layer({ kind, children }: { kind: "back" | "mid" | "front"; children: React.ReactNode }) {
  return (
    <div className={`hero-layer hero-layer--${kind}`}>
      <svg viewBox={`0 0 ${W} ${LAYER_H}`} preserveAspectRatio="xMidYMin meet" aria-hidden="true" focusable="false">
        {children}
      </svg>
    </div>
  );
}

export default function HeroWindow({ label }: { label: string }) {
  return (
    <div className="hero-window" role="img" aria-label={label}>
      <div className="hero-glass">
        {/* Back: far canopy against a bright sky in the gable */}
        <Layer kind="back">
          <g fill={C.canopy}>
            <rect x="-20" y="320" width="628" height="530" />
            <circle cx="40" cy="380" r="120" />
            <circle cx="175" cy="300" r="122" />
            <circle cx="318" cy="352" r="112" />
            <circle cx="448" cy="276" r="124" />
            <circle cx="586" cy="350" r="118" />
          </g>
        </Layer>

        {/* Mid: trunks and the near canopy, darker and closer */}
        <Layer kind="mid">
          <g fill={C.daun}>
            <polygon points="110,720 128,720 162,330 148,330" />
            <rect x="424" y="300" width="18" height="420" />
            <circle cx="36" cy="262" r="108" />
            <circle cx="150" cy="214" r="74" />
            <circle cx="528" cy="216" r="98" />
            <circle cx="600" cy="340" r="92" />
          </g>
        </Layer>

        {/* Front: the red-tipped hedge, the lawn, a plank table and a steel chair */}
        <Layer kind="front">
          <rect x="-20" y="566" width="628" height="140" fill={C.daun} />
          <path d={scallop(-20, 610, 572, 12, 14)} fill={C.pucuk} />
          <rect x="-20" y="690" width="628" height="160" fill={C.lawn} />
          <rect x="252" y="660" width="30" height="52" rx="3" fill={C.besi} />
          <rect x="242" y="710" width="52" height="8" fill={C.wood} />
          <rect x="246" y="718" width="4" height="48" fill={C.besi} />
          <rect x="286" y="718" width="4" height="48" fill={C.besi} />
          <ellipse cx="370" cy="712" rx="76" ry="12" fill={C.wood} />
          <rect x="365" y="712" width="10" height="54" fill={C.besi} />
          <ellipse cx="370" cy="766" rx="26" ry="5" fill={C.besi} />
        </Layer>

        {/* Glare from the bright garden, as eyes adjust from the dim hall */}
        <div className="hero-glare" />
      </div>

      {/* Steel frame and mullions on top */}
      <svg className="hero-frame" viewBox="0 0 588 800" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="hero-inner">
            <path d={INNER} />
          </clipPath>
        </defs>
        <path d={`${OUTER} ${INNER}`} fillRule="evenodd" fill={C.besi} />
        <g clipPath="url(#hero-inner)" fill={C.besi}>
          <rect x="197" y="0" width="6" height="780" />
          <rect x="385" y="0" width="6" height="780" />
          <rect x="0" y="157" width="588" height="6" />
          <rect x="0" y="299" width="588" height="6" />
          <rect x="0" y="418" width="588" height="6" />
          <rect x="0" y="537" width="588" height="6" />
          <rect x="0" y="656" width="588" height="6" />
        </g>
      </svg>
    </div>
  );
}
