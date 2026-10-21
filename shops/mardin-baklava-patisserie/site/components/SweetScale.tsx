import { sweetness } from "@/content";
import { mock } from "@/lib/mockup";
import Piece from "./art/Piece";
import { KunafeMini } from "./art/Kunafe";

// An honest sweetness guide: three stops on a syrup scale. Vertical on phones and tablets,
// horizontal from 1024px with stops at 1/6, 1/2 and 5/6.
export default function SweetScale({ className = "" }: { className?: string }) {
  return (
    <div className={`sweet ${className}`}>
      <p className="sweet-end sweet-end-light t-label text-kraft">{sweetness.ends.light}</p>
      <ol className="sweet-stops">
        {sweetness.stops.map((s) => (
          <li key={s.name} className="sweet-stop" {...mock(s.mockup)}>
            <span className="sweet-dot" aria-hidden="true" />
            <span className="sweet-plate" aria-hidden="true">
              {s.kind === "kunafe" ? (
                <KunafeMini className="size-full" />
              ) : (
                <Piece kind={s.kind} className="size-full" />
              )}
            </span>
            <span className="sweet-text">
              <span className="t-name block text-filo" lang={s.tr ? "tr" : undefined}>
                {s.name}
              </span>
              <span className="t-body mt-1 block text-kraft">{s.text}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="sweet-end sweet-end-sweet t-label text-kraft">{sweetness.ends.sweet}</p>
    </div>
  );
}
