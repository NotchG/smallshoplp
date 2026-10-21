"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion, rotate } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import BrewSet from "@/components/illustrations/BrewSet";
import { kopi } from "@/content";

// Signature moment: as "Kopi kami" scrolls in, the Arabica Pangalengan bean card is set
// down in front of the manual-brew tray. It slides up and settles from -10° to its CSS
// resting tilt of -4° while its shadow tightens underneath. One timeline, one trigger, once.
// The tray and caption stay still: they are the table the card is placed on.
// Triggered on the card itself (centre at 85% of the viewport) so the moment plays in view;
// on desktop the composition's top reaches 70% while the card is still below the fold.
// gsap.from only, so the CSS state is the final state (no JS, reduced motion: card at rest).
// Opacity, not autoAlpha: the card text never becomes visibility:hidden for screen readers.
export default function BeanCardScene() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!scope.current || prefersReducedMotion()) return;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: "[data-card-wrap]", start: "center 85%", once: true },
      });
      tl.from("[data-card]", {
          opacity: 0,
          y: distance.card,
          rotation: rotate.from,
          duration: duration.card,
          ease: ease.outStrong,
        }, 0.1)
        .from("[data-shadow]", {
          opacity: 0,
          scale: 1.04,
          duration: duration.card,
          ease: ease.outStrong,
        }, 0.1);
    },
    { scope },
  );

  const { bean, caption } = kopi;

  return (
    <figure ref={scope} className="bean-scene">
      <BrewSet className="block h-auto w-full" />
      <div className="bean-card-wrap" data-card-wrap>
        <span className="bean-card-shadow" data-shadow aria-hidden="true" />
        <div className="bean-card" data-card>
          <h3 className="t-lead font-display">{bean.title}</h3>
          <dl className="mt-3">
            {bean.fields.map((f) => (
              <div key={f.label} className="bean-row">
                <dt className="label-caps">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <figcaption className="bean-caption t-small text-muted" {...mock(caption.mockup)}>
        {caption.text}
      </figcaption>
    </figure>
  );
}
