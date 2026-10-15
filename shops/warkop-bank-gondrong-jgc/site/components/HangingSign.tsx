"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, prefersReducedMotion, sign as signMotion } from "@/lib/motion";
import { hero } from "@/content";

// Closed between 00.00 and 05.30, Jakarta time (hours: 05.30–24.00 every day).
function closedInJakarta(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 12);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return hour * 60 + minute < 5 * 60 + 30;
}

// The signature moment: the yellow BUKA sign hangs from the hero rail on two strings and,
// 250ms after mount, gets a nudge and sways to rest. It starts from rest, so hydration
// never jumps. Reduced motion: it simply hangs.
export default function HangingSign() {
  const ref = useRef<HTMLDivElement>(null);
  const [closed, setClosed] = useState(false); // SSR and first paint show BUKA

  useEffect(() => {
    const check = () => setClosed(closedInJakarta());
    check();
    const id = window.setInterval(check, 60_000);
    return () => window.clearInterval(id);
  }, []);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const tl = gsap.timeline({ delay: signMotion.delay });
      signMotion.angles.forEach((rotation, i) => {
        tl.to(ref.current, {
          rotation,
          duration: signMotion.durations[i],
          ease: i === 0 ? ease.signOut : ease.signInOut,
          transformOrigin: "50% 0%",
        });
      });
    },
    { scope: ref },
  );

  const s = closed ? hero.sign.closed : hero.sign.open;

  return (
    <div ref={ref} className="sign">
      <span className="sign-hook" aria-hidden="true" />
      <svg className="sign-strings" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <line x1="50" y1="0" x2="14" y2="100" vectorEffect="non-scaling-stroke" />
        <line x1="50" y1="0" x2="86" y2="100" vectorEffect="non-scaling-stroke" />
      </svg>
      <p className="sign-plate">
        <span className="sign-word">{s.word}</span>
        {closed ? (
          <>
            <span className="sign-days">{s.days}</span>
            <span className="sign-time">{s.time}</span>
          </>
        ) : (
          <>
            <span className="sign-time">{s.time}</span>
            <span className="sign-days">{s.days}</span>
          </>
        )}
      </p>
    </div>
  );
}
