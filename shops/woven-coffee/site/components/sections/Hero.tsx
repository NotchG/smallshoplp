"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, delay, prefersReducedMotion, signature } from "@/lib/motion";
import { hero, hours, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import FrostBand from "@/components/FrostBand";
import TodayHours from "@/components/TodayHours";
import BoxButton from "@/components/BoxButton";

// Hero: a blurred view through their glass door, the frosted band as H1, today's hours and
// directions in the first phone screen. Owns the site's one signature moment.
export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const phone = !window.matchMedia("(min-width: 768px)").matches;
      // Built with from() so the server HTML is already the final state. H1 opacity never animates.
      const tl = gsap.timeline();
      tl.from(".band__thread--top", { xPercent: -distance.threadPercent, opacity: 0, duration: signature.dur, ease: signature.ease }, 0)
        .from(".band__thread--bottom", { xPercent: distance.threadPercent, opacity: 0, duration: signature.dur, ease: signature.ease }, 0)
        .from(".band__row", { x: -(phone ? distance.bandPhone : distance.band), duration: signature.dur, ease: signature.ease }, delay.band);
      // The hero copy fade was cut in the remove-one-thing pass: it hid Petunjuk Arah for ~0.5s.
    },
    { scope },
  );

  return (
    <section ref={scope} className="g-kaca relative isolate overflow-hidden" aria-labelledby="hero-title">
      {/* Decorative: the H1 says who this is. Blurred so no face is recognisable. */}
      <img
        src="/photos/owner-1.jpg"
        alt=""
        width={960}
        height={538}
        fetchPriority="high"
        decoding="async"
        className="hero-photo"
      />
      <div className="hero-veil" aria-hidden="true" />

      <div className="hero-inner relative">
        <FrostBand />

        <Container className="mt-7 md:mt-10">
          <div className="grid-page gap-y-7">
            <div className="lg:col-span-6">
              <p className="t-lead measure" data-check {...mock(hero.line.mockup)}>
                {hero.line.text}
              </p>
              <TodayHours className="t-body mt-3 font-bold" />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <BoxButton href={shop.directionsUrl} variant="solid-pinus" external>
                  {hero.directions}
                </BoxButton>
                <BoxButton href={shop.whatsapp.href} variant="outline-light" external mockup={shop.whatsapp.mockup}>
                  {hero.whatsapp}
                </BoxButton>
              </div>
            </div>

            <div className="hero-meta text-muted lg:col-start-8 lg:col-span-5 md:self-end">
              <p className="text-dinding">{shop.addressShort}</p>
              <p>{shop.near}</p>
              <dl className="mt-3 hidden md:grid hours-mini">
                {hours.rows.map((r) => (
                  <div key={r.days} className="contents">
                    <dt>{r.days}</dt>
                    <dd>
                      {r.open}–{r.close}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
