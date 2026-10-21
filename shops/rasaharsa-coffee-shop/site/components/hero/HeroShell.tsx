"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, lampu, prefersReducedMotion } from "@/lib/motion";
import { getStatus, type Status } from "@/lib/hours";

const StatusContext = createContext<Status | null>(null);
export const useHeroStatus = () => useContext(StatusContext);

// The hero wall. Owns the open/closed status and the signature moment, "Lampu menyala":
// the three pendants settle, then (only if Rasaharsa is open now) their bulbs switch on
// one after another. (The warm wash behind the wordmark was cut in the remove-one-thing pass.)
// Server HTML is the final lit state; the wordmark, line, status and buttons never animate.
export default function HeroShell({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<Status | null>(null);

  useGSAP(
    () => {
      // Status first, synchronously, so the bulbs never flash on and then off.
      const st = getStatus();
      setStatus(st);
      const el = root.current;
      if (!el || prefersReducedMotion()) {
        document.documentElement.classList.remove("lampu-pending");
        return;
      }

      const pendants = gsap.utils.toArray<HTMLElement>(".pendant", el);
      const tl = gsap.timeline();
      tl.fromTo(
        pendants,
        { autoAlpha: 0, y: lampu.settleY, rotation: lampu.settleRotate, transformOrigin: "50% 0%" },
        {
          autoAlpha: 1, y: 0, rotation: 0,
          transformOrigin: "50% 0%",
          duration: lampu.settle, stagger: lampu.settleStagger, ease: ease.out,
          clearProps: "transform,opacity,visibility",
        },
        0,
      );
      if (st.open) {
        pendants.forEach((p, i) => {
          tl.from(
            p.querySelectorAll(".pendant-filament, .pendant-glow"),
            { opacity: 0, duration: lampu.bulb, ease: ease.soft, clearProps: "opacity" },
            lampu.bulbAt + i * lampu.bulbStagger,
          );
        });
      }
      // GSAP now holds the starting state inline, so the pre-hydration hide can go.
      document.documentElement.classList.remove("lampu-pending");
    },
    { scope: root },
  );

  // Keep the status true while the page stays open (the bulbs follow via CSS).
  useEffect(() => {
    const id = window.setInterval(() => setStatus(getStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header
      ref={root}
      className="hero slats ground-dinding"
      data-open={status ? String(status.open) : "unknown"}
    >
      <StatusContext.Provider value={status}>{children}</StatusContext.Provider>
    </header>
  );
}
