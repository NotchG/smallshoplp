import { Fragment, type ReactNode } from "react";
import HeartMark from "@/components/HeartMark";
import { mock } from "@/lib/mockup";

// The chilled cake case: a kaca panel with an LED strip on top and a steel shelf edge.
export function CaseWindow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`case-window ${className}`}>
      <span className="case-led" aria-hidden="true" />
      {children}
    </div>
  );
}

export function Shelf({ className = "" }: { className?: string }) {
  return <div className={`shelf-edge ${className}`} aria-hidden="true" />;
}

// White price tag with the brown heart tile, like the tags in their case.
export function PriceTag({
  name,
  nameMockup,
  sizeLine,
  price,
  priceMockup,
  as: Heading = "h3",
  className = "",
}: {
  name: string;
  nameMockup?: boolean;
  sizeLine: string;
  price: string;
  priceMockup?: boolean;
  as?: "h3" | "p";
  className?: string;
}) {
  return (
    <div className={`price-tag ${className}`}>
      <span className="heart-tile" aria-hidden="true">
        <HeartMark size={17} strokeWidth={3} />
      </span>
      <div className="min-w-0">
        <Heading className="t-lead t-namefont leading-tight" {...mock(nameMockup)}>
          {name}
        </Heading>
        <p className="mt-1 t-small" {...mock(priceMockup)}>
          {sizeLine}
        </p>
        <p className="t-body t-namefont num" {...mock(priceMockup)}>
          {price}
        </p>
      </div>
    </div>
  );
}

// Round orange sticker.
export function Sticker({
  lines,
  className = "",
  mockup,
}: {
  lines: string[];
  className?: string;
  mockup?: boolean;
}) {
  return (
    <p className={`sticker ${className}`} {...mock(mockup)}>
      <span>
        {lines.map((l, i) => (
          <Fragment key={l}>
            {i > 0 ? <br /> : null}
            {l}
          </Fragment>
        ))}
      </span>
    </p>
  );
}

// A small piping bag nozzle that rides on the leading edge of the cover.
function PipingTip() {
  return (
    <svg className="plaque-tip" viewBox="0 0 14 18" aria-hidden="true" focusable="false">
      <path d="M3 0 H14 V7 L5 16 Z" fill="#EADBC6" />
      <path d="M9 0 H14 V7 L7 13.5 Z" fill="#D6C3A8" />
      <circle cx="4" cy="16" r="2" fill="#33190F" />
    </svg>
  );
}

// The plaque writing. With `piping`, each line carries a cover that GSAP slides away.
export function PlaqueText({
  lines,
  name,
  piping = false,
}: {
  lines: string[];
  name?: string;
  piping?: boolean;
}) {
  const len = name ? (name.length > 13 ? "lg" : name.length > 8 ? "md" : "sm") : undefined;
  return (
    <>
      {lines.map((l, i) => (
        <span key={l} className="plaque-line">
          {l}
          {piping ? (
            <span className="plaque-cover" data-line={i} aria-hidden="true">
              <PipingTip />
            </span>
          ) : null}
        </span>
      ))}
      {name ? (
        <span className="plaque-line plaque-name" data-len={len}>
          {name}
        </span>
      ) : null}
    </>
  );
}
