"use client";
import { useRef } from "react";
import Container from "@/components/Container";
import SunsetWindow from "@/components/SunsetWindow";
import { ArrowRightIcon, LiftArrow } from "@/components/Icons";
import { floors } from "@/content";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";

// The lift display. Static "2 · 3 · 4" by default (reduced motion, JS off, screenshots);
// the rolling digit strip is swapped in by CSS once FloorGuide sets [data-lift-ready].
function LiftDisplay({ variant }: { variant: "box" | "pill" }) {
  return (
    <div className={`lift lift-${variant}`} aria-hidden="true">
      <span className="lift-label">
        <LiftArrow className="lift-arrow" />
        <span className="kicker">{floors.liftLabel}</span>
      </span>
      <span className="lift-digit">
        <span className="lift-static">
          2<span className="dot" />3<span className="dot" />4
        </span>
        <span className="lift-strip lift-window">
          <span className="lift-strip-inner">
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </span>
        </span>
      </span>
    </div>
  );
}

function Facilities({ className }: { className: string }) {
  return (
    <p className={`t-body font-semibold ${className}`}>
      {floors.facilities.map((f, i) => (
        <span key={f}>
          {i > 0 && <span aria-hidden="true"> · </span>}
          {f}
          {i === floors.facilities.length - 1 ? "." : ""}
        </span>
      ))}
    </p>
  );
}

export default function FloorGuide() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root || prefersReducedMotion()) return;
      root.setAttribute("data-lift-ready", "");

      const strips = gsap.utils.toArray<HTMLElement>(".lift-strip-inner", root);
      const arrows = gsap.utils.toArray<SVGElement>(".lift-arrow", root);
      let current = 2;

      // Signature: the digit rolls to the floor whose row is crossing 55% of the viewport.
      const goTo = (n: number) => {
        if (n === current) return;
        const up = n > current;
        current = n;
        gsap.to(strips, {
          yPercent: -(100 / 3) * (n - 2),
          duration: duration.lift,
          ease: ease.outStrong,
          overwrite: true,
        });
        gsap.set(arrows, { rotation: up ? 0 : 180 });
        gsap.fromTo(
          arrows,
          { y: up ? -distance.arrow : distance.arrow },
          { y: 0, duration: duration.arrow, ease: ease.out, overwrite: true },
        );
      };

      gsap.utils.toArray<HTMLElement>("[data-floor]", root).forEach((row) => {
        const n = Number(row.dataset.floor);
        ScrollTrigger.create({
          trigger: row,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => goTo(n),
          onEnterBack: () => goTo(n),
        });
      });

      // At floor 4 the sun sinks toward the skyline (scrubbed, so it follows the scroll).
      const row4 = root.querySelector<HTMLElement>('[data-floor="4"]');
      const sun = root.querySelector(".sun");
      if (row4 && sun) {
        gsap.fromTo(
          sun,
          { y: -distance.sun },
          {
            y: 0,
            ease: "none",
            scrollTrigger: { trigger: row4, start: "top 80%", end: "bottom 40%", scrub: 0.6 },
          },
        );
      }

      return () => root.removeAttribute("data-lift-ready");
    },
    { scope },
  );

  return (
    <section id="lantai" ref={scope} className="floors section" aria-labelledby="lantai-judul">
      <Container>
        <div className="floors-layout">
          <div className="floors-aside">
            <div className="floors-aside-inner">
              <h2 id="lantai-judul" className="h-wide t-head">
                {floors.heading}
              </h2>
              <p className="t-lead mt-5 measure">{floors.intro}</p>
              <LiftDisplay variant="box" />
              <Facilities className="hidden lg:block mt-10 max-w-sm" />
            </div>
          </div>

          <div className="floors-rows">
            <LiftDisplay variant="pill" />
            <ul role="list">
              {floors.rows.map((f) => (
                <li key={f.n} className={`floor-row ${f.n === 4 ? "floor-4" : ""}`} data-floor={f.n}>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="h-wide t-lead">{f.name}</h3>
                      <span className="floor-tags">
                        {f.tags.map((t) => (
                          <span key={t} className="tag tag-plaster">
                            {t}
                          </span>
                        ))}
                      </span>
                    </div>
                    <p className="t-body mt-3 measure">{f.text}</p>
                    {f.link && (
                      <a href={f.link.href} className="text-link t-body mt-2">
                        {f.link.label}
                        <ArrowRightIcon />
                      </a>
                    )}
                  </div>
                  {f.illustration && (
                    <figure className="sunset">
                      <SunsetWindow />
                      <figcaption className="t-small mt-2" {...mock(f.illustration.mockup)}>
                        {f.illustration.caption}
                      </figcaption>
                    </figure>
                  )}
                </li>
              ))}
            </ul>
            <Facilities className="lg:hidden mt-2 pt-6 border-t border-walnut/25" />
          </div>
        </div>
      </Container>
    </section>
  );
}
