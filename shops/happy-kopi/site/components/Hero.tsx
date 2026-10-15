"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, hero as heroMotion, prefersReducedMotion } from "@/lib/motion";
import { jakartaDay } from "@/lib/today";
import { mock } from "@/lib/mockup";
import { actions, hero, hours, shop } from "@/content";
import Container from "@/components/Container";
import ActionButton from "@/components/ActionButton";
import { HeroHoursChip } from "@/components/TodayHours";

// The cup's stamp as the name: a thin box, light uppercase HAPPY KOPI, the slogan in a casual hand.
function StampMark() {
  return (
    <div className="stamp">
      <h1 id="hero-title" className="t-display stamp-name">
        {shop.name}
      </h1>
      <p className="t-hand t-lead">{shop.slogan}</p>
    </div>
  );
}

// Signature "matahari pagi": the arch photo fades up, then the sun rises behind the doorway,
// but only on days the shop opens. On Sunday (Asia/Jakarta) it only peeks over the band.
export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      const arch = root?.querySelector<HTMLElement>(".hero-arch");
      const sun = root?.querySelector<HTMLElement>(".hero-sun");
      if (!arch || !sun) return;

      const animate =
        document.documentElement.dataset.motion === "on" &&
        !prefersReducedMotion() &&
        performance.now() < heroMotion.fallbackMs;

      // Hand the start states from CSS to GSAP (or simply release them).
      arch.setAttribute("data-ready", "");
      sun.setAttribute("data-ready", "");
      if (!animate) return; // CSS already holds today's final state

      const open = hours.openDays.includes(jakartaDay());
      gsap
        .timeline()
        .fromTo(
          arch,
          { autoAlpha: 0, y: distance.photo },
          { autoAlpha: 1, y: 0, duration: duration.photo, ease: ease.signature },
          heroMotion.photoDelay,
        )
        .fromTo(
          sun,
          { y: 0, yPercent: open ? heroMotion.sunFrom.open : heroMotion.sunFrom.closed },
          {
            yPercent: open ? heroMotion.sunTo.open : heroMotion.sunTo.closed,
            duration: duration.sun,
            ease: ease.signature,
          },
          heroMotion.sunDelay,
        );
    },
    { scope },
  );

  return (
    <section ref={scope} className="hero ground-krem" aria-labelledby="hero-title">
      <Container className="grid gap-x-5 pt-7 md:pt-12 lg:grid-cols-12 lg:gap-x-10 lg:pt-14">
        <div className="relative z-10 self-center pb-9 md:pb-12 lg:col-span-7 lg:pb-20">
          <StampMark />
          <p className="t-lead mt-6 max-w-md md:mt-8" {...mock(hero.intro.mockup)}>
            {hero.intro.text}
          </p>
          <HeroHoursChip className="mt-4" />
          <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
            <ActionButton {...actions.directions} icon="pin" variant="primary" />
            <ActionButton {...actions.call} icon="phone" variant="secondary" />
          </div>
        </div>

        <div className="self-end lg:col-span-5">
          <div className="arch-wrap">
            <div className="horizon" aria-hidden="true">
              <div className="sun-disc hero-sun" />
            </div>
            <div className="hero-arch frame-arch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.photo.src}
                width={hero.photo.width}
                height={hero.photo.height}
                alt={hero.photo.alt}
                fetchPriority="high"
                decoding="async"
                style={{ objectPosition: "45% 60%" }}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="band" aria-hidden="true" />
    </section>
  );
}
