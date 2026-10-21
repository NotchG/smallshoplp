import { ink } from "./illos/inks";

// The crate's front wall: moulded rim and two rows of rounded slots. Full bleed, decorative.
// Two drawings so the slots keep their real size on phone and desktop.
export default function CrateWall() {
  return (
    <div className="crate-wall" aria-hidden="true">
      <svg className="md:hidden" focusable="false">
        <defs>
          <pattern id="crate-slots-sm" width="22" height="34" patternUnits="userSpaceOnUse" x="4" y="24">
            <rect x="6" y="4" width="10" height="26" rx="5" fill={ink.slot} />
          </pattern>
        </defs>
        <rect width="100%" height="4" y="4" fill={ink.white} fillOpacity="0.16" />
        <rect width="100%" height="5" y="15" fill={ink.slot} />
        <rect width="100%" height="68" y="24" fill="url(#crate-slots-sm)" />
      </svg>
      <svg className="hidden md:block" focusable="false">
        <defs>
          <pattern id="crate-slots-lg" width="30" height="52" patternUnits="userSpaceOnUse" x="8" y="38">
            <rect x="8" y="6" width="14" height="40" rx="7" fill={ink.slot} />
          </pattern>
        </defs>
        <rect width="100%" height="5" y="6" fill={ink.white} fillOpacity="0.16" />
        <rect width="100%" height="7" y="23" fill={ink.slot} />
        <rect width="100%" height="104" y="38" fill="url(#crate-slots-lg)" />
      </svg>
    </div>
  );
}
