import { hero, pieceById } from "@/content";
import { heroCardDelays } from "@/lib/motion";
import { mock } from "@/lib/mockup";

// The owner's gold platter, labelled like a pastry counter. Signature moment (CSS only):
// the room-colour veil lifts, the photo settles, then three name cards drop onto their pieces.
// Cards are ≥1024px only and aria-hidden; the figcaption carries the names.

const tags = [
  { name: pieceById("havuc").nameTr, tr: true, x: 20, y: 24, mockup: true },
  { name: "Kunafe", tr: false, x: 49, y: 60, mockup: false },
  { name: pieceById("cikolata").nameTr, tr: true, x: 77, y: 26, mockup: true },
];

export default function HeroCounter({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <div className="hero-frame relative overflow-hidden">
        <img
          src="/photos/platter-1600.jpg"
          srcSet="/photos/platter-800.jpg 800w, /photos/platter-1600.jpg 1600w"
          sizes="(min-width: 1280px) 1200px, calc(100vw - 40px)"
          width={1600}
          height={757}
          alt={hero.photoAlt}
          fetchPriority="high"
          decoding="async"
          className="hero-photo absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-veil absolute inset-0 bg-room" aria-hidden="true" />
        <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
          {tags.map((t, i) => (
            <div
              key={t.name}
              className="hero-tag absolute"
              style={{ left: `${t.x}%`, top: `${t.y}%` }}
              {...mock(t.mockup)}
            >
              <div className="hero-card" style={{ animationDelay: `${heroCardDelays[i]}s` }}>
                <span className="hero-chip t-label" lang={t.tr ? "tr" : undefined}>
                  {t.name}
                </span>
                <span className="hero-stem" />
                <span className="hero-dot" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="t-small mt-3 text-kraft lg:sr-only">
        {hero.captionLead}{" "}
        <span lang="tr" {...mock(true)}>
          {pieceById("havuc").nameTr}
        </span>
        , Kunafe dan{" "}
        <span lang="tr" {...mock(true)}>
          {pieceById("cikolata").nameTr}
        </span>
        .
      </figcaption>
    </figure>
  );
}
