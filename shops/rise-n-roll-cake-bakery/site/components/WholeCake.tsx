import { sideBand, type Disc } from "@/lib/cake";

// A whole Original cheesecake on a round cake board. Same 3/4 view and palette as the hero
// and the slices. (The 16/20 cm size rings were cut in the remove-one-thing pass: their
// labels were unreadable on tablets and repeated the copy beside the drawing.)

const D: Disc = { cx: 200, cy: 112, rx: 110, ry: 37 };
const H = 66;

export default function WholeCake({ label }: { label: string }) {
  return (
    <svg viewBox="0 60 400 210" role="img" aria-label={label}>
      <ellipse cx="200" cy="260" rx="170" ry="7" fill="#3b271d" opacity="0.22" />

      {/* cake board */}
      <ellipse cx="200" cy="190" rx="186" ry="62" fill="#e6e1d6" />
      <ellipse cx="200" cy="182" rx="186" ry="62" fill="#ffffff" />

      {/* the cake */}
      <path d={sideBand(D, 0, 180, 0, H - 12)} fill="#f0dcae" />
      <path d={sideBand(D, 0, 180, H - 12, H)} fill="#b98149" />
      <ellipse cx={D.cx} cy={D.cy} rx={D.rx} ry={D.ry} fill="#cf8f3e" />
      <ellipse cx={D.cx} cy={D.cy + 1} rx={D.rx * 0.86} ry={D.ry * 0.86} fill="#e8ba66" />
      <ellipse cx="176" cy="104" rx="40" ry="8" fill="#f0cb82" />
    </svg>
  );
}
