import { copy } from "@/content";
import { HalfLemon } from "./illustrations/LemonCake";

// Signature moment (design brief §8): an open maroon Sedap Wangi cake box, top-down, with a
// whole lemon cake on a doily. The lid is its own SVG; its base style is the open pose and a
// CSS keyframe slides it up and off once on load (globals.css). Illustration = [MOCKUP].

const ring = (n: number, radius: number, cx: number, cy: number) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [cx + Math.cos(a) * radius, cy + Math.sin(a) * radius] as const;
  });

function Box() {
  const cx = 200;
  const cy = 206;
  return (
    <svg className="cakebox-box" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <rect width="400" height="400" fill="#5C1620" />
      {/* inside walls, four flat tones */}
      <polygon points="12,12 388,12 360,40 40,40" fill="#3E0D15" />
      <polygon points="12,12 40,40 40,360 12,388" fill="#4A111A" />
      <polygon points="388,12 388,388 360,360 360,40" fill="#6C1B27" />
      <polygon points="12,388 40,360 360,360 388,388" fill="#7A2230" />
      <rect x="40" y="40" width="320" height="320" fill="#F3E6E3" />
      {/* paper doily */}
      {ring(34, 140, cx, cy).map(([x, y], i) => (
        <circle key={`s${i}`} cx={x} cy={y} r="12.5" fill="#FFFFFF" />
      ))}
      <circle cx={cx} cy={cy} r="140" fill="#FFFFFF" />
      {ring(34, 129, cx, cy).map(([x, y], i) => (
        <circle key={`h${i}`} cx={x} cy={y} r="3" fill="#F3E6E3" />
      ))}
      {/* whole lemon cake, top-down */}
      <circle cx={cx} cy={cy + 6} r="122" fill="#D9A21B" />
      <circle cx={cx} cy={cy} r="122" fill="#F2C94C" />
      {ring(22, 111, cx, cy).map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r="10.5" fill="#FFF4D6" />
      ))}
      {ring(6, 70, cx, cy).map(([x, y], i) => {
        const deg = (i / 6) * 360 + 90;
        return (
          <g key={`l${i}`} transform={`rotate(${deg} ${x} ${y})`}>
            <HalfLemon x={x} y={y} r={22} />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="19" fill="#FFF4D6" />
      <circle cx={cx} cy={cy} r="9" fill="#F8E7B4" />
      <ellipse cx={cx - 14} cy={cy - 20} rx="11" ry="5" fill="#8CC37A" transform={`rotate(-38 ${cx - 14} ${cy - 20})`} />
      <ellipse cx={cx + 3} cy={cy - 25} rx="10" ry="4.5" fill="#4E8A3E" transform={`rotate(-82 ${cx + 3} ${cy - 25})`} />
    </svg>
  );
}

function Lid() {
  const band = (
    <path d="M0 21H24 M3.5 21V3.5H20.5V17H8V8H16V13H12" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" />
  );
  return (
    <svg className="cakebox-lid" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="lid-key" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          {band}
        </pattern>
      </defs>
      <rect width="400" height="400" fill="#5C1620" />
      <rect x="3" y="3" width="394" height="394" fill="none" stroke="#4A111A" strokeWidth="6" />
      {/* key band round all four edges, as on the shop's boxes */}
      <g transform="translate(32 26)"><rect width="336" height="24" fill="url(#lid-key)" /></g>
      <g transform="rotate(180 200 200) translate(32 26)"><rect width="336" height="24" fill="url(#lid-key)" /></g>
      <g transform="rotate(90 200 200) translate(80 26)"><rect width="240" height="24" fill="url(#lid-key)" /></g>
      <g transform="rotate(-90 200 200) translate(80 26)"><rect width="240" height="24" fill="url(#lid-key)" /></g>
      {/* the logo, printed small and white */}
      <rect x="98" y="140" width="204" height="114" fill="none" stroke="#FFFFFF" strokeWidth="3" />
      <rect x="150" y="128" width="100" height="24" fill="#5C1620" />
      <text x="200" y="144" textAnchor="middle" fontSize="14" letterSpacing="2.4" fill="#FFFFFF" className="lid-type">
        ROTI &amp; KUE
      </text>
      <text x="200" y="215" textAnchor="middle" fontSize="44" fill="#FFFFFF" className="lid-type" textLength="168" lengthAdjust="spacingAndGlyphs">
        SEDAP WANGI
      </text>
      <rect x="152" y="244" width="96" height="22" fill="#5C1620" />
      <text x="200" y="260" textAnchor="middle" fontSize="14" letterSpacing="2.4" fill="#FFFFFF" className="lid-type">
        SEJAK 1979
      </text>
    </svg>
  );
}

export default function CakeBox() {
  return (
    <figure className="cakebox" role="img" aria-label={copy.hero.boxLabel} data-mockup="">
      <div className="cakebox-stage">
        <Box />
        <Lid />
        <div className="cakebox-tag tent tent--mini" aria-hidden="true">
          <div className="tent-text">
            <span className="tent-name">{copy.hero.boxTag.name}</span>
            <span className="tent-price">{copy.hero.boxTag.note}</span>
          </div>
          <div className="tent-strip">
            <span>Kue</span>
            <span>Sedap Wangi</span>
          </div>
        </div>
      </div>
    </figure>
  );
}
