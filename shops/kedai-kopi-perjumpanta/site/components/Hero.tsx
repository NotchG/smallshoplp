"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, served } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { hero, shop } from "@/content";
import Container from "@/components/Container";
import Canopy from "@/components/Canopy";
import UisBand from "@/components/UisBand";
import ActionButton from "@/components/ActionButton";
import HeroTable, { GLASS_SCALE } from "@/components/HeroTable";

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  // Signature moment "disajikan": the glass is set down on its saucer, the saucer clinks,
  // three wisps of steam rise once and stay. Text, table and saucer are visible from first paint.
  useGSAP(
    () => {
      if (!scope.current || prefersReducedMotion()) return;
      const q = gsap.utils.selector(scope);
      const svg = scope.current.querySelector<SVGSVGElement>(".hero-table svg");
      if (!svg) return;

      // Convert CSS px into the drawing's local units (viewBox scale × glass scale).
      const box = svg.getBoundingClientRect();
      const viewScale = Math.min(box.width / 520, box.height / 380) || 1;
      const k = 1 / (viewScale * GLASS_SCALE);

      const glass = q("[data-glass]");
      const saucer = q("[data-saucer]");
      const steamGroup = q("[data-steam]");
      const steam = q("[data-steam] path");

      const tl = gsap.timeline({ delay: served.delay });
      tl.set(steamGroup, { opacity: 1 }, 0)
        .fromTo(glass, { y: served.glassY * k }, { y: 0, duration: served.glassDur, ease: served.glassEase }, 0)
        .fromTo(glass, { opacity: 0 }, { opacity: 1, duration: served.glassFade, ease: "none" }, 0)
        .to(
          saucer,
          {
            y: served.clink * k,
            duration: served.clinkDur / 2,
            ease: served.clinkEase,
            yoyo: true,
            repeat: 1,
          },
          served.clinkAt - served.delay,
        )
        .fromTo(
          steam,
          { y: served.steamY * k, opacity: 0 },
          {
            y: 0,
            opacity: served.steamOpacity,
            duration: served.steamDur,
            stagger: served.steamStagger,
            ease: served.steamEase,
          },
          served.steamAt - served.delay,
        );
    },
    { scope },
  );

  const hasWhatsapp = Boolean(shop.whatsapp.number);

  return (
    <section ref={scope} className="hero ground-limau" aria-labelledby="judul">
      <Canopy />
      <Container className="grid-12 hero-inner">
        <div className="hero-text">
          {/* "Perjumpanta" is the h1's own text, one word on one line; "Kedai Kopi" sits above it. */}
          <h1 id="judul" className="hero-name t-display">
            <span className="hero-name-top">{shop.nameTop}</span>
            {shop.wordmark}
          </h1>
          <p className="hero-sub t-lead" {...mock(hero.sub.mockup)}>
            <span className="greet" {...mock(hero.greeting.mockup)}>
              {hero.greeting.text}
            </span>{" "}
            {hero.sub.text}
          </p>
          <p className="hours-plate num">
            <strong>{shop.hours.headline}</strong>
            <span>{shop.hours.days}</span>
          </p>
          <div className="hero-actions">
            <ActionButton href={shop.directionsHref} variant="ink" external>
              {hero.directionsLabel}
            </ActionButton>
            {hasWhatsapp ? (
              <ActionButton href={`https://wa.me/${shop.whatsapp.number}`} variant="line" external>
                {hero.whatsappLabel}
              </ActionButton>
            ) : (
              <ActionButton
                href="#hubungi"
                variant="line"
                placeholder
                ariaLabel={`${hero.whatsappLabel}, ${shop.whatsapp.display}`}
              >
                <span>{hero.whatsappLabel}</span>
                <span className="btn-note">{shop.whatsapp.display}</span>
              </ActionButton>
            )}
            <a href="#sedia" className="text-link">
              {hero.menuLabel}
            </a>
          </div>
        </div>
        <div className="hero-table">
          <HeroTable label={hero.tableLabel} />
        </div>
      </Container>
      <UisBand />
    </section>
  );
}
