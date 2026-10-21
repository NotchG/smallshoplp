"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, lightsAt, prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { actions, maps, nav, phone, shop, whatsapp } from "@/content";
import Container from "@/components/Container";
import Step from "@/components/Step";
import Button from "@/components/Button";
import NightScene from "@/components/NightScene";
import HeroHours from "@/components/HeroHours";
import { IconChat, IconDirections, IconPhone } from "@/components/Icons";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Signature moment, "lampu menyala": the garden lights switch on from the ground up.
  // Only the aria-hidden light elements move; text is readable from the first paint.
  useGSAP(
    () => {
      const root = document.documentElement;
      if (prefersReducedMotion()) {
        root.removeAttribute("data-lights");
        return;
      }
      const q = gsap.utils.selector(ref);
      const tl = gsap.timeline({ defaults: { ease: ease.out } });
      tl.fromTo(q('[data-light="strip-lower"]'), { opacity: 0.15 }, { opacity: 1, duration: duration.strip }, lightsAt.lowerStep)
        .fromTo(q('[data-light="wash-lower"]'), { opacity: 0 }, { opacity: 1, duration: duration.wash }, lightsAt.lowerStep)
        .fromTo(q('[data-light="strip-upper"]'), { opacity: 0.15 }, { opacity: 1, duration: duration.strip }, lightsAt.upperStep)
        .fromTo(q('[data-light="wash-upper"]'), { opacity: 0 }, { opacity: 1, duration: duration.wash }, lightsAt.upperStep)
        .fromTo(
          q('[data-light="cone"]'),
          { opacity: 0, scaleY: 0.9, transformOrigin: "50% 100%" },
          { opacity: 1, scaleY: 1, duration: duration.cone, ease: ease.light, stagger: lightsAt.coneStagger },
          lightsAt.cones,
        )
        .fromTo(q('[data-light="name-wash"]'), { opacity: 0 }, { opacity: 1, duration: duration.nameWash }, lightsAt.nameWash);
      // Initial states are now inline, so the CSS "pending" state can go.
      root.removeAttribute("data-lights");
    },
    { scope: ref },
  );

  return (
    <section ref={ref} aria-labelledby="hero-name" className="hero relative flex flex-col overflow-hidden bg-malam">
      <div className="relative flex flex-1 flex-col">
        <NightScene />

        <Container className="relative hidden justify-end pt-3 md:flex">
          <nav aria-label="Navigasi utama">
            <ul className="flex gap-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="t-body inline-flex min-h-11 items-center px-3 text-beton underline-offset-4 transition-colors duration-150 hover:text-lampu hover:underline"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>

        <Container className="relative mt-auto pb-10 pt-28 md:pb-14">
          <p className="t-small text-pakis">{shop.eyebrow}</p>
          <div className="hero-name-wrap relative">
            <div className="name-wash" data-light="name-wash" aria-hidden="true" />
            <h1 id="hero-name" className="t-display hero-name relative">
              {shop.name}
            </h1>
          </div>
          <p className="t-lead hero-tagline relative" {...mock(shop.tagline.mockup)}>
            {shop.tagline.text}
          </p>
        </Container>
      </div>

      <div className="hero-upper">
        <Step light="upper" faceClassName="pl-6 pr-[var(--gutter)] md:pl-8">
          <HeroHours />
        </Step>
      </div>

      <Step light="lower">
        <Container className="flex flex-wrap items-center gap-3 md:gap-4">
          <Button href={maps.directions} external icon={<IconDirections />} className="flex-auto md:flex-none">
            {actions.directions}
          </Button>
          <Button
            href={whatsapp.href}
            external
            variant="outline"
            mockup={whatsapp.mockup}
            icon={<IconChat />}
            className="flex-auto md:flex-none"
          >
            {actions.whatsapp}
          </Button>
          <a href={phone.tel} className="text-link nums hidden md:ml-4 md:inline-flex" aria-label={`${actions.call} ${phone.display}`}>
            <IconPhone />
            {phone.display}
          </a>
        </Container>
      </Step>
    </section>
  );
}
