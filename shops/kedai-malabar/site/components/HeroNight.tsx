"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { garland, prefersReducedMotion } from "@/lib/motion";
import { getStatus, jakartaNow } from "@/lib/hours";
import Garland from "@/components/Garland";
import Awning from "@/components/Awning";
import OpenStatus from "@/components/OpenStatus";
import ArchWindow from "@/components/ArchWindow";
import ActionButton from "@/components/ActionButton";
import { IconChat, IconDirections } from "@/components/Icons";
import { actions, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The shop front at dusk, top to bottom: string lights, awning, the sign on brick, an arched window.
export default function HeroNight() {
  const scope = useRef<HTMLDivElement>(null);

  // Signature moment "Lampu menyala": the string lights switch on one by one, left to right,
  // then the status bulb beside "Buka sekarang" lights last, only if the kedai is open now.
  // Reduced motion: no timeline; CSS shows every bulb lit and the status bulb by state.
  useGSAP(
    () => {
      const root = scope.current;
      if (!root || prefersReducedMotion()) return;
      const svg = root.querySelector<SVGSVGElement>("[data-garland]");
      if (!svg) return;

      // Only the bulbs on screen take part, so a phone sees the full sweep too.
      const vw = window.innerWidth;
      const bulbs = gsap.utils.toArray<SVGGElement>(".bulb-on", svg).filter((b) => {
        const r = b.getBoundingClientRect();
        return r.right > 0 && r.left < vw;
      });
      const cores = bulbs.map((b) => b.querySelector(".bulb-core")).filter(Boolean);
      svg.setAttribute("data-ready", ""); // hand control from the CSS fallback to GSAP

      const tl = gsap.timeline({ delay: garland.delay });
      const stagger = { amount: garland.staggerAmount };
      tl.fromTo(bulbs, { opacity: 0 }, { opacity: 1, duration: garland.bulb, ease: garland.ease, stagger }, 0);
      tl.fromTo(
        cores,
        { scale: garland.coreFrom },
        { scale: 1, transformOrigin: "50% 50%", duration: garland.bulb, ease: garland.ease, stagger },
        0,
      );

      if (getStatus(jakartaNow()).kind === "open") {
        const statusBulb = root.querySelector(".status-bulb .bulb-on");
        if (statusBulb) {
          tl.fromTo(
            statusBulb,
            { opacity: 0, scale: garland.coreFrom },
            {
              opacity: 1,
              scale: 1,
              transformOrigin: "50% 50%",
              duration: garland.bulb,
              ease: garland.ease,
              clearProps: "opacity,transform",
            },
            "-=0.1",
          );
        }
      }
    },
    { scope },
  );

  return (
    <div ref={scope}>
      <div className="night-band">
        <Garland id="garland-hero" animated />
      </div>
      <Awning className="awning--lit" />
      <section className="ground-bata" aria-labelledby="hero-title">
        <div className="container-page grid gap-12 pt-9 md:grid-cols-12 md:gap-6 lg:pt-16">
          <div className="md:col-span-8 md:self-center md:pb-16">
            <div className="sign">
              <h1 id="hero-title">
                <span className="sign-kedai">Kedai</span>{" "}
                <span className="sign-malabar" data-check="">
                  Malabar
                </span>
              </h1>
              <p className="sign-sub">{shop.subline}</p>
            </div>
            <p className="t-lead text-pretty mt-9 max-w-[30ch] lg:mt-16" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <OpenStatus className="mt-6" />
            <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
              <ActionButton
                href={shop.directionsUrl}
                external
                icon={<IconDirections />}
                className="px-4 sm:px-6"
              >
                {actions.directions}
              </ActionButton>
              <ActionButton
                href={shop.whatsapp.url}
                external
                variant="outline"
                mockup={shop.whatsapp.mockup}
                icon={<IconChat />}
                className="px-4 sm:px-6"
              >
                {actions.whatsapp}
              </ActionButton>
              <a href="#menu" className="link col-span-2 inline-flex min-h-11 items-center justify-self-start font-medium">
                {actions.menu}
              </a>
            </div>
          </div>
          <ArchWindow className="arch--grounded w-full max-w-md self-end md:col-span-4 md:max-w-none" />
        </div>
      </section>
    </div>
  );
}
