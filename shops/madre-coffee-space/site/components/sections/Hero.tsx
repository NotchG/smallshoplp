"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, distance, duration, ease, prefersReducedMotion, stagger } from "@/lib/motion";
import { actions, hero, shop } from "@/content";
import Container from "@/components/Container";
import TaggedPhoto from "@/components/TaggedPhoto";
import TodayHours from "@/components/TodayHours";
import ActionButton from "@/components/ActionButton";
import Icon from "@/components/Icon";
import { mock } from "@/lib/mockup";

// 1 Hero (mustard). Signature: tags land on the owner's spread one by one, top to bottom,
// like a host naming each dish as it reaches the table. (The image scale-settle was cut in the
// remove-one-thing pass: the tags carry the moment, and the LCP image now never transforms.)
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const chips = gsap.utils
        .toArray<HTMLElement>(".tag-chip", ref.current)
        .filter((el) => el.offsetParent !== null); // skip tags hidden at this width
      gsap.fromTo(
        chips,
        { autoAlpha: 0, y: distance.tag },
        { autoAlpha: 1, y: 0, duration: duration.tag, ease: ease.out, stagger: stagger.tag, delay: delay.tags },
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="hero ground-mustard" aria-labelledby="hero-h">
      <Container className="grid-12 hero-grid">
        <div className="hero-text">
          <h1 id="hero-h" className="f-display t-display">
            {hero.nameLines[0]}
            <br />
            {hero.nameLines[1]}
          </h1>
          <p className="t-lead measure mt-5 text-balance" {...mock(hero.lead.mockup)}>
            {hero.lead.text}
          </p>
          <TodayHours className="mt-6" />
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton href={shop.mapsUrl}>
              <Icon name="pin" />
              {actions.directions}
            </ActionButton>
            <ActionButton href={shop.whatsapp.text} variant="outline-ink" mockup={shop.whatsapp.mockup}>
              <Icon name="chat" />
              {actions.whatsapp}
            </ActionButton>
          </div>
        </div>
        <TaggedPhoto
          photo={hero.photo}
          ratio="1480 / 2400"
          priority
          className="hero-photo cap-tablet"
          boxClassName="bleed-phone"
          sizes="(min-width: 1024px) 500px, (min-width: 640px) 520px, 100vw"
        />
      </Container>
    </section>
  );
}
