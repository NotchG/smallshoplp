import { hero } from "@/content";

// The signature moment: a round bear-cookie stamp pressed onto the photo's corner.
// The press runs in CSS keyframes on .stamp-inner (globals.css), so it needs no JS.
// The bear in the centre is a placeholder until the owner sends their own drawing.
export default function Stamp() {
  const r = 73;
  const ring = `M100,100 m-${r},0 a${r},${r} 0 1,1 ${r * 2},0 a${r},${r} 0 1,1 -${r * 2},0`;
  return (
    <a href="#kopi-kue" className="stamp" aria-label={hero.stampLabel}>
      <span className="stamp-inner">
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <path id="stamp-ring" d={ring} />
          </defs>
          <circle cx="100" cy="100" r="97" fill="#874B2C" />
          <circle cx="100" cy="100" r="92" fill="none" stroke="#F5F4F0" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="63" fill="none" stroke="#F5F4F0" strokeWidth="2" />
          <text
            fill="#F5F4F0"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "21px",
              letterSpacing: "0.1em",
            }}
          >
            <textPath href="#stamp-ring" textLength={2 * Math.PI * r - 8} lengthAdjust="spacing">
              {hero.stampText}
            </textPath>
          </text>
          {/* placeholder bear */}
          <g data-mockup="">
            <circle cx="78" cy="82" r="12" fill="#F5F4F0" />
            <circle cx="122" cy="82" r="12" fill="#F5F4F0" />
            <circle cx="100" cy="107" r="33" fill="#F5F4F0" />
            <circle cx="78" cy="82" r="5.5" fill="#874B2C" />
            <circle cx="122" cy="82" r="5.5" fill="#874B2C" />
            <circle cx="88" cy="101" r="3.8" fill="#874B2C" />
            <circle cx="112" cy="101" r="3.8" fill="#874B2C" />
            <ellipse cx="100" cy="118" rx="14" ry="10" fill="none" stroke="#874B2C" strokeWidth="2.5" />
            <ellipse cx="100" cy="113.5" rx="5" ry="3.5" fill="#874B2C" />
          </g>
        </svg>
      </span>
    </a>
  );
}
