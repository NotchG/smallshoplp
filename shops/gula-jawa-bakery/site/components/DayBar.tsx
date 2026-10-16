import type { CSSProperties } from "react";
import { dayBar } from "@/content";
import { mock } from "@/lib/mockup";

// The honest timing: a static day line from opening to closing, with the morning stretch
// marked in palm-sugar amber. Everything it says is also in visible text.
export default function DayBar({ className = "" }: { className?: string }) {
  const share = `${(dayBar.best.share * 100).toFixed(1)}%`;
  return (
    <figure className={className} style={{ "--best-share": share } as CSSProperties}>
      <div className="daybar-grid">
        <span aria-hidden="true" />
        <p className="t-small pb-2 font-bold text-gula" {...mock(dayBar.best.mockup)}>
          {dayBar.best.label}{" "}
          <span className="tnum font-normal">
            {dayBar.best.from}–{dayBar.best.until}
          </span>
        </p>
        <span aria-hidden="true" />

        <span className="t-body tnum font-bold">{dayBar.open}</span>
        <div className="daybar-track" aria-hidden="true">
          <span className="daybar-best" />
        </div>
        <span className="t-body tnum font-bold">{dayBar.close}</span>

        <span aria-hidden="true" />
        <p className="t-small daybar-late pt-2 text-neon/80">{dayBar.late}</p>
        <span aria-hidden="true" />
      </div>
      <figcaption className="t-lead heading mt-10 max-w-[24ch] text-gula sm:max-w-none">
        {dayBar.closing}
      </figcaption>
    </figure>
  );
}
