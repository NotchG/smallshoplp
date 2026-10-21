"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";
import { markerPercent } from "@/lib/hours";
import { late, week } from "@/content";

// Two lamplight bars on a 10.00 → 02.00 axis. Weekday bar ends at 01.00 (93.75% of the axis),
// weekend bar at 02.00 (100%). The day labels are real text; bars, ticks and marker are decoration.
const BARS = [
  { ...week[0], width: "93.75%" },
  { ...week[1], width: "100%" },
];
// 10.00, 14.00, 18.00, 22.00, 00.00, 02.00 on a 16-hour axis.
const TICK_AT = [0, 25, 50, 75, 87.5, 100];
const TICKS = late.ticks.map((t, i) => ({ full: t, short: t.slice(0, 2), at: TICK_AT[i] }));

type Marker = { percent: number; label: string } | null;

function tickStyle(at: number): React.CSSProperties {
  if (at === 0) return { left: 0 };
  if (at === 100) return { right: 0 };
  return { left: `${at}%`, transform: "translateX(-50%)" };
}

function markerLabelStyle(p: number): React.CSSProperties {
  if (p < 12) return { left: `${p}%` };
  if (p > 88) return { left: `${p}%`, transform: "translateX(-100%)" };
  return { left: `${p}%`, transform: "translateX(-50%)" };
}

export default function HoursChart() {
  const scope = useRef<HTMLDivElement>(null);
  const [marker, setMarker] = useState<Marker>(null);

  useEffect(() => {
    const update = () => setMarker(markerPercent());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  // The marker fades in once after hydration (0.2s). Reduced motion: it simply appears.
  const shown = marker !== null;
  useGSAP(
    () => {
      if (!shown || prefersReducedMotion()) return;
      gsap.from("[data-marker]", { opacity: 0, duration: duration.fade, ease: ease.out });
    },
    { scope, dependencies: [shown] },
  );

  return (
    <div ref={scope} className="relative">
      {BARS.map((bar, i) => (
        <div key={bar.days} className={i ? "mt-6" : ""}>
          <p className="t-label">
            {bar.days} · <span className="tnum">{bar.time}</span>
          </p>
          <div className="relative mt-2 h-5 md:h-6 bg-putih/10" aria-hidden="true">
            <div className="h-full bg-lampu" style={{ width: bar.width }} />
            {marker && (
              <span
                data-marker
                className="absolute -top-1.5 -bottom-1.5 w-0.5 -ml-px bg-putih"
                style={{ left: `${marker.percent}%` }}
              />
            )}
          </div>
        </div>
      ))}

      <div className="relative mt-3 h-5 t-small tnum text-muted-dark" aria-hidden="true">
        {TICKS.map((t) => (
          <span key={t.full} className="absolute top-0" style={tickStyle(t.at)}>
            <span className="md:hidden">{t.short}</span>
            <span className="max-md:hidden">{t.full}</span>
          </span>
        ))}
      </div>

      <div className="relative h-6 mt-2" aria-hidden="true">
        {marker && (
          <span
            data-marker
            className="absolute top-0 t-small tnum font-semibold text-putih whitespace-nowrap"
            style={markerLabelStyle(marker.percent)}
          >
            {late.now} {marker.label}
          </span>
        )}
      </div>
    </div>
  );
}
