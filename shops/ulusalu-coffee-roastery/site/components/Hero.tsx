"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { lamps, prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import SlatWall from "@/components/SlatWall";
import TodayHours from "@/components/TodayHours";
import ButtonLink from "@/components/ButtonLink";
import { DirectionsIcon, PhoneIcon } from "@/components/Icons";
import { actions, hero, shop } from "@/content";

// Signature moment, "lampu menyala": after hydration the lamps under the slats switch on
// one after another, left to right, like the bar lights at 07.00. Slats never move; hero
// text and photo are never hidden.
function useLampSweep(scope: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const all = gsap.utils.toArray<HTMLElement>(".lamp", scope.current);
      const vw = window.innerWidth;
      const rect = new Map(all.map((el) => [el, el.getBoundingClientRect()]));
      const onScreen = all
        .filter((el) => {
          const r = rect.get(el)!;
          return r.width > 0 && r.right > 0 && r.left < vw;
        })
        .sort((a, b) => rect.get(a)!.left - rect.get(b)!.left);
      gsap.set(
        all.filter((el) => !onScreen.includes(el)),
        { opacity: 1 },
      );
      gsap.fromTo(
        onScreen,
        { opacity: 0, scaleY: lamps.fromScaleY },
        {
          opacity: 1,
          scaleY: 1,
          duration: lamps.duration,
          ease: lamps.ease,
          stagger: lamps.stagger,
          delay: lamps.delay,
        },
      );
    },
    { scope },
  );
}

export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  useLampSweep(scope);

  return (
    <section ref={scope} className="hero hero-lamps relative" aria-labelledby="hero-title">
      <SlatWall />
      <Container>
        <div className="grid grid-cols-12 gap-x-6">
          <div className="hero-text col-span-12 flex flex-col md:col-span-7 md:row-start-1">
            <h1 id="hero-title" className="hero-display t-display order-1">
              {shop.wordmark}
              <span className="hero-sub t-lead block">{shop.sub}</span>
            </h1>
            <p className="hero-line t-body order-5 lg:order-2" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <TodayHours variant="hero" className="hero-hours order-3" />
            <div className="hero-actions order-4 flex flex-wrap gap-3">
              <ButtonLink href={shop.directionsUrl} variant="solid" icon={<DirectionsIcon />}>
                {actions.directions}
              </ButtonLink>
              <ButtonLink href={`tel:${shop.tel}`} variant="outline" icon={<PhoneIcon />}>
                {actions.call}
              </ButtonLink>
            </div>
          </div>

          <figure className="hero-photo relative z-10 col-span-12 md:col-span-5 md:col-start-8 md:row-start-1 lg:col-span-4 lg:col-start-9">
            <picture>
              <source
                type="image/webp"
                srcSet="/img/owner-1-800.webp 800w, /img/owner-1-1200.webp 1200w"
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 290px, 92vw"
              />
              <img
                src="/img/owner-1-800.jpg"
                width={1200}
                height={1600}
                alt={hero.photoAlt}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="hero-img block w-full"
              />
            </picture>
            <figcaption className="t-small mt-3 text-bilah-muted">
              <span className="md:hidden">{hero.captionShort}</span>
              <span className="hidden md:inline">{hero.caption}</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
