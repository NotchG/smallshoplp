"use client";
import { useRef } from "react";
import Container from "@/components/Container";
import AwningEdge from "@/components/AwningEdge";
import Button from "@/components/Button";
import { IceChocoMint, KopiCup, MarshmallowBrownie, SmokedBeefSandwich } from "@/components/art/ProductArt";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, flicker, prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { useToday } from "@/lib/useToday";
import { buttons, hero, shop } from "@/content";

function Wordmark({ lit = false }: { lit?: boolean }) {
  // Two lines (Volks / Kaffee) below 1024px, one line from 1024px.
  if (lit)
    return (
      <div className="wordmark t-display">
        <span className="lit-word block lg:inline" data-text="Volks" /> <span className="lit-word" data-text="Kaffee" />
      </div>
    );
  return (
    <h1 className="wordmark t-display">
      Volks
      <br className="lg:hidden" /> Kaffee
    </h1>
  );
}

export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  const today = useToday();
  const closed = today === 0;

  const status = today === null ? hero.status.generic : closed ? hero.status.closed : hero.status.open;

  // Signature moment: the awning's tube light flickers on and the wordmark brightens.
  // Skipped on Sunday (sign stays off) and for reduced motion (final state, no flicker).
  useGSAP(
    () => {
      if (today === null || closed || prefersReducedMotion()) return;
      const lit = scope.current?.querySelector(".lit-layer");
      const glow = scope.current?.querySelector(".glow-pool");
      if (!lit || !glow) return;
      const [a, b, c, d, e] = flicker.steps;
      const [da, db, dc, dd, de] = flicker.durations;
      const tl = gsap.timeline({ delay: flicker.delay });
      tl.fromTo(lit, { opacity: 0 }, { opacity: a, duration: da, ease: "none" })
        .to(lit, { opacity: b, duration: db, ease: "none" })
        .to(lit, { opacity: c, duration: dc, ease: "none" })
        .to(lit, { opacity: d, duration: dd, ease: "none" })
        .to(lit, { opacity: e, duration: de, ease: ease.out })
        .fromTo(glow, { opacity: 0 }, { opacity: 1, duration: flicker.glow, ease: ease.out }, "<");
    },
    { scope, dependencies: [today] },
  );

  return (
    <header ref={scope} className="hero ground-dark overflow-x-clip" data-closed={closed ? "" : undefined}>
      {/* The awning: base sign (readable on its own) with the lit layer stacked on top */}
      <div className="awning relative z-10 bg-awning">
        <div className="stack">
          <Container className="awning-inner">
            <span className="tube tube-off" aria-hidden="true" />
            <Wordmark />
          </Container>
          <div className="lit-layer" aria-hidden="true">
            <Container className="awning-inner">
              <span className="tube tube-on" />
              <Wordmark lit />
            </Container>
          </div>
        </div>
        <AwningEdge id="edge-hero" className="absolute left-0 top-full" />
      </div>

      {/* The terrace in front of the bar */}
      <div className="bg-kayu text-piring">
        <Container className="pt-10 md:pt-14 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:pt-16">
          <div className="lg:col-span-6 lg:pb-12">
            <p className="t-lead measure font-medium" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <p className="t-lead mt-4 flex items-baseline gap-2 font-bold" data-check="">
              <span
                aria-hidden="true"
                className={`inline-block h-3 w-3 flex-none translate-y-[-0.1em] rounded-full ${closed ? "border-2 border-[var(--sign-off)]" : "bg-sign"}`}
              />
              <span>{status}</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={shop.mapsUrl} variant="primary-dark" icon="pin" external className="grow sm:grow-0">
                {buttons.directions}
              </Button>
              <Button
                href={shop.wa.href}
                variant="secondary-dark"
                icon="chat"
                external
                className="grow sm:grow-0"
                {...mock(shop.wa.mockup)}
              >
                {buttons.whatsapp}
              </Button>
            </div>
          </div>

          {/* The signature items standing on the counter top */}
          <div className="counter-items relative mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <div className="glow-pool" aria-hidden="true" />
            <div className="relative flex items-end justify-between gap-1 lg:justify-end lg:gap-3" aria-hidden="true">
              <IceChocoMint decorative />
              <KopiCup decorative />
              <MarshmallowBrownie decorative />
              <SmokedBeefSandwich decorative uid="hero" />
            </div>
          </div>
        </Container>
        <div aria-hidden="true">
          <div className="counter-top" />
          <div className="counter-front">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}
