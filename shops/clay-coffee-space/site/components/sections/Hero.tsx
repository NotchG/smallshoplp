"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion, stagger } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { hero, shop } from "@/content";
import Container from "@/components/Container";
import ActionButton from "@/components/ui/ActionButton";
import { Chat, NavArrow } from "@/components/ui/Icons";
import FestoonWire from "@/components/art/FestoonWire";
import ArchWindow from "@/components/art/ArchWindow";

// Hero: the festoon wire lights bulb by bulb, left to right, then the arch panes warm.
// Text is never hidden; with reduced motion (or no JS) everything is lit from first paint.
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline();
      // Both wire drawings run; only the one shown at this width is visible.
      gsap.utils.toArray<SVGSVGElement>('[data-festoon="hero"] svg').forEach((svg) => {
        tl.fromTo(
          svg.querySelectorAll(".bulb-glow"),
          { opacity: 0, scale: 0.85, transformOrigin: "50% 50%" },
          { opacity: 1, scale: 1, duration: duration.bulb, ease: ease.out, stagger: stagger.bulb },
          0,
        );
      });
      tl.fromTo(".arch-panes", { opacity: 0 }, { opacity: 1, duration: duration.panes, ease: ease.out }, 0.8);
    },
    { scope: ref },
  );

  return (
    <header ref={ref} className="hero relative overflow-hidden">
      <FestoonWire animated idPrefix="hero" className="hero-wire" />
      <Container className="hero-grid">
        <div className="hero-copy">
          <h1 className="t-display hero-title">
            <span className="block">{hero.wordmark}</span>{" "}
            <span className="t-lockup hero-lockup block">{hero.lockup}</span>
          </h1>
          <p className="t-lead hero-lead" {...mock(hero.lead.mockup)} data-check>
            {hero.lead.text}
          </p>
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            {shop.hours.today}
          </p>
          <div className="hero-actions">
            <ActionButton href={shop.directionsUrl} external icon={<NavArrow />}>
              {hero.directions}
            </ActionButton>
            <ActionButton
              href={shop.whatsapp.url}
              external
              variant="secondary"
              icon={<Chat />}
              mockup={hero.whatsapp.mockup}
            >
              {hero.whatsapp.text}
            </ActionButton>
          </div>
        </div>
        <div className="hero-arch">
          <ArchWindow className="block h-auto w-full" />
        </div>
      </Container>
    </header>
  );
}
