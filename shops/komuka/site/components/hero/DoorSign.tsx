"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, prefersReducedMotion, swing } from "@/lib/motion";
import { statusNow, type Status } from "@/lib/hours";
import { hero } from "@/content";

// The signature moment: the wooden sign hanging in KOMUKA's doorway settles into today's
// status with one damped swing, pivoting at the hook. Visible at 0° from first paint; with
// JS off it reads "Buka / Rabu–Minggu". Reduced motion: text updates, no rotation.
export default function DoorSign() {
  const scope = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(statusNow());
  }, []);

  useGSAP(
    () => {
      if (!status || prefersReducedMotion()) return;
      const sign = scope.current?.querySelector<HTMLElement>("[data-swing]");
      if (!sign) return;
      gsap.set(sign, { transformOrigin: "50% 0%" });
      const tl = gsap.timeline({ delay: swing.delay });
      swing.angles.forEach((angle, i) => {
        tl.to(sign, {
          rotation: angle,
          duration: swing.durations[i],
          ease: i === 0 ? ease.swingFirst : ease.swingRest,
        });
      });
    },
    { scope, dependencies: [status] },
  );

  const word = status?.word ?? hero.signFallback.word;
  const line = status?.line ?? hero.signFallback.line;

  return (
    <div ref={scope} className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
      <div data-swing className="flex flex-col items-center">
        {/* hook and cords */}
        <svg viewBox="0 0 100 26" className="sign-cords block h-auto" aria-hidden="true" focusable="false">
          <path d="M50 7 L18 26 M50 7 L82 26" stroke="var(--color-kanopi)" strokeWidth="1.6" fill="none" />
          <circle cx="50" cy="6" r="4.5" fill="var(--color-kanopi)" />
        </svg>
        <p className="sign-board">
          <span data-check className="sign-word">
            {word}
          </span>
          <span className="sign-line">{line}</span>
        </p>
      </div>
    </div>
  );
}
