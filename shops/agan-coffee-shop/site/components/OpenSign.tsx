"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, prefersReducedMotion, swing } from "@/lib/motion";
import { statusAt, type Status } from "@/lib/status";
import type { HoursRow } from "@/content";

// The shop's red-and-yellow BUKA sign, hanging from the awning on a string triangle.
// Server/no-JS: "JAM BUKA" + the week's hours. After mount: today's real status, then one damped swing.
export default function OpenSign({ rows, fallback }: { rows: HoursRow[]; fallback: string }) {
  const scope = useRef<HTMLDivElement>(null);
  const sign = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(statusAt(new Date(), rows));
  }, [rows]);

  useGSAP(
    () => {
      if (!status || !sign.current) return;
      if (prefersReducedMotion() || window.scrollY >= 200) return;
      // A damped pendulum about the hook: 0 → 7 → -4.5 → 2.5 → -1 → 0 deg, about 1.5s, once.
      gsap.set(sign.current, { transformOrigin: "50% 0%" });
      const tl = gsap.timeline({ delay: swing.delay });
      swing.angles.forEach((angle, i) => {
        tl.to(sign.current, { rotation: angle, duration: swing.durations[i], ease: ease.swing });
      });
    },
    { scope, dependencies: [status] },
  );

  return (
    <div ref={scope} className="sign-scope">
      <div ref={sign} className="sign">
        <div className="sign-hanger" aria-hidden="true">
          <span className="sign-wire" />
          <span className="sign-hook" />
          <svg className="sign-strings" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
            <path
              d="M50 0 L9 100 M50 0 L91 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        <p className="sign-plate">
          <span className="sign-title" data-check="">
            {status ? status.title : "JAM BUKA"}
          </span>
          <span className="sign-sub">{status ? status.sub : fallback}</span>
        </p>
      </div>
    </div>
  );
}
