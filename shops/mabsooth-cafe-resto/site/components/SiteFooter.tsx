import Container from "@/components/Container";
import Lockup from "@/components/Lockup";
import { contact, shop } from "@/content";
import { mockItem } from "@/lib/mockup";

// The terrace floor: grey-cream cement tile, square, a central eight-point star from two
// rotated squares, quarter discs and rings in the corners that join across tiles.
function TileShapes() {
  const line = "#A8977F";
  const ground = "#E6D8BD";
  const corners: [number, number][] = [
    [0, 0], [60, 0], [0, 60], [60, 60],
  ];
  return (
    <>
      <rect width="60" height="60" fill={ground} />
      {corners.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="17.5" fill="none" stroke={line} strokeWidth="1.5" />
          <circle cx={x} cy={y} r="10" fill={line} />
        </g>
      ))}
      <rect x="20" y="20" width="20" height="20" fill={line} />
      <rect x="20" y="20" width="20" height="20" fill={line} transform="rotate(45 30 30)" />
      <circle cx="30" cy="30" r="4.5" fill={ground} />
      <rect x="0.5" y="0.5" width="59" height="59" fill="none" stroke={line} strokeOpacity="0.45" />
    </>
  );
}

function TileFloor() {
  return (
    <svg className="tile-floor" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="tile-lg" width="60" height="60" patternUnits="userSpaceOnUse">
          <TileShapes />
        </pattern>
        <pattern id="tile-sm" width="36" height="36" patternUnits="userSpaceOnUse">
          <g transform="scale(0.6)">
            <TileShapes />
          </g>
        </pattern>
      </defs>
      <rect className="tile-sm" width="100%" height="100%" fill="url(#tile-sm)" />
      <rect className="tile-lg" width="100%" height="100%" fill="url(#tile-lg)" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="ground-rattan bg-rattan text-walnut">
      <Container>
        <div className="grid-12 gap-y-8 border-t border-walnut/15 pt-10 pb-12 md:pt-14 md:pb-16">
          <p {...mockItem(contact.closing, "font-display t-lead max-w-[26ch] lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-center")}>
            {contact.closing.text}
          </p>
          <div className="lg:col-span-5 lg:row-start-1">
            <Lockup size="small" />
            <p className="mt-4 text-walnut-soft">
              {shop.addressLines[0]} {shop.addressLines[1]}
            </p>
            <p className="t-small mt-1 text-walnut-soft">{contact.draftNote}</p>
          </div>
        </div>
      </Container>
      <TileFloor />
    </footer>
  );
}
