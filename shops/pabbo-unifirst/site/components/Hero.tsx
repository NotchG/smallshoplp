"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, frameOn, prefersReducedMotion } from "@/lib/motion";
import CeilingFrames from "@/components/CeilingFrames";
import HoursBadge from "@/components/HoursBadge";
import ActionButton from "@/components/ActionButton";
import { labels, links, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Hero: Pabbo's ceiling. The text is static and visible at first paint; only the line
// frames switch on, outermost first, then the red "on" dot (the signature moment).
export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root || prefersReducedMotion()) return;

      const frames = Array.from(root.querySelectorAll<HTMLElement>(".frame"))
        .filter((el) => el.offsetParent !== null) // the 4th frame is hidden on phones
        .sort((a, b) => Number(a.dataset.frame) - Number(b.dataset.frame));
      const diagonals = root.querySelectorAll(".frame-diag");

      const tl = gsap.timeline({ delay: frameOn.delay, defaults: { ease: ease.out } });
      frames.forEach((frame, i) => {
        const targets = i === 0 ? [frame, ...diagonals] : [frame];
        tl.to(targets, { opacity: 1, duration: frameOn.duration }, i * frameOn.stagger);
      });
      tl.to(root.querySelectorAll(".hero-dot"), { opacity: 1, duration: duration.dot });
    },
    { scope },
  );

  return (
    <section ref={scope} className="hero on-plafon" aria-labelledby="hero-title">
      <CeilingFrames className="hero-frames" count={4} />

      <div className="hero-content relative">
        <div className="grid gap-y-5 min-[1200px]:grid-cols-12 min-[1200px]:gap-x-8 min-[1200px]:items-end">
          <div className="min-[1200px]:col-span-12">
            <HoursBadge />
          </div>

          <h1 id="hero-title" className="t-display min-[1200px]:col-span-8" data-check="">
            {shop.nameLines[0]} <br />
            {shop.nameLines[1]}
          </h1>

          <div className="min-[1200px]:col-span-4 min-[1200px]:pb-3">
            <p className="t-lead">{shop.descriptor}</p>
            <p className="tagline mt-2" {...mock(shop.tagline.mockup)}>
              {shop.tagline.text}
            </p>
            <p className="t-small mt-3 text-garis/75">{shop.area}</p>
            <div className="hero-actions mt-6 flex flex-wrap gap-3">
              <ActionButton href={links.directions} icon="pin" external>
                {labels.directions}
              </ActionButton>
              <ActionButton href={links.tel} variant="outline" icon="phone">
                {labels.call}
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
