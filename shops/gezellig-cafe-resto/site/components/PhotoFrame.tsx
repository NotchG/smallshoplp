import { paint as p } from "@/lib/paint";

// A painting frame on the green wall, waiting for the owner's photo. Clearly labelled,
// with a faint line drawing of the chandelier so it reads as "a photo goes here", not broken.
export default function PhotoFrame({ label, className = "" }: { label: string; className?: string }) {
  const [kicker, rest] = label.split(": ");
  return (
    <figure
      role="img"
      aria-label={`Tempat foto dari pemilik: ${rest ?? label}`}
      data-mockup=""
      className={`border-2 border-lampu p-3 md:p-4 ${className}`}
      style={{ background: p.hijauPanel }}
    >
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-5 px-6"
        style={{ background: p.hijauDeep }}
      >
        <svg
          viewBox="0 0 240 120"
          className="w-[46%] max-w-[260px]"
          fill="none"
          stroke={p.kapur}
          strokeOpacity=".3"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
          focusable={false}
        >
          <path d="M120 0v26" />
          <circle cx="120" cy="34" r="8" />
          <path d="M120 42v44M120 42Q40 112 40 86M120 42Q80 112 80 86M120 42Q160 112 160 86M120 42Q200 112 200 86" />
          {[40, 80, 120, 160, 200].map((x) => (
            <path key={x} d={`M${x} 88c-8 0-13-7-13-19v-10l6.5 4 6.5-5 6.5 5 6.5-4v10c0 12-5 19-13 19Z`} />
          ))}
        </svg>
        <figcaption className="text-center">
          <span className="t-label block text-lampu">{kicker}</span>
          {rest && <span className="t-body mt-1 block text-kapur">{rest}</span>}
        </figcaption>
      </div>
    </figure>
  );
}
