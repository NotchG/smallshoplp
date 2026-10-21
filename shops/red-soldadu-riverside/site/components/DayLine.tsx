import type { DayStop } from "@/content";
import { mock } from "@/lib/mockup";

// A day from opening to closing. Vertical on phones; on wider screens each stop sits at
// its time on one line (08.00 = 0%, 23.00 = 100%), label directly under its own dot.
export default function DayLine({ stops }: { stops: DayStop[] }) {
  return (
    <ol className="dayline">
      {stops.map((s, i) => {
        const next = stops[i + 1]?.at ?? 1;
        const last = i === stops.length - 1;
        return (
          <li
            key={s.time}
            className="dayline-stop"
            style={{ "--at": s.at, "--next": next } as React.CSSProperties}
            {...(last ? { "data-last": "" } : {})}
            {...(i === stops.length - 2 ? { "data-before-last": "" } : {})}
            {...mock(s.mockup)}
          >
            <span className="dayline-time nums">{s.time}</span>
            <span className="dayline-dot" aria-hidden="true" />
            <span className="dayline-label">{s.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
