"use client";
import { useRef } from "react";
import Container from "@/components/Container";
import Cake from "@/components/Cake";
import HeartMark from "@/components/HeartMark";
import { CaseWindow, PlaqueText, PriceTag, Shelf, Sticker } from "@/components/Case";
import { IconChat, IconPin } from "@/components/Icons";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { cakes, hero, shop, waLink } from "@/content";

const blackForest = cakes[0];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Signature moment: "Selamat Ulang Tahun" is piped onto the blank plaque, line by line,
  // then the "Tulis nama gratis" sticker is pressed onto the glass. Runs once, ≤ 1.9s.
  useGSAP(
    () => {
      const root = ref.current;
      if (!root || prefersReducedMotion()) return;
      if (!document.documentElement.classList.contains("js")) return; // safety net already fired
      (window as unknown as { __amorPiping?: boolean }).__amorPiping = true;

      const covers = gsap.utils.toArray<HTMLElement>(".plaque-cover", root);
      const sticker = root.querySelector(".hero-sticker");
      const plaque = root.querySelector(".hero-plaque");
      const chars = hero.plaque.lines.map((l) => l.length);
      const total = chars.reduce((a, b) => a + b, 0);

      const tl = gsap.timeline({
        // Plays at once if the plaque is on screen; on short phones it waits until it scrolls in.
        scrollTrigger: { trigger: plaque, start: "top 85%", once: true },
      });
      let at = 0.3;
      covers.forEach((cover, i) => {
        const d = duration.hero * (chars[i] / total);
        const tip = cover.querySelector(".plaque-tip");
        tl.set(tip, { opacity: 1 }, at)
          .to(cover, { xPercent: 101, duration: d, ease: ease.piping }, at)
          .to(tip, { opacity: 0, duration: i === covers.length - 1 ? 0.2 : 0.08 }, at + d - 0.08)
          .set(cover, { display: "none" }, at + d + 0.2);
        at += d;
      });
      if (sticker) {
        tl.fromTo(
          sticker,
          { opacity: 0, scale: 1.12, rotation: -14 },
          { opacity: 1, scale: 1, rotation: -6, duration: 0.35, ease: ease.sticker },
          at,
        );
      }
    },
    { scope: ref },
  );

  return (
    <header ref={ref} className="facade ground-cokelat overflow-hidden">
      <Container className="hero-grid pt-8 pb-16 md:pt-14 md:pb-24">
        <div>
          <HeartMark logo size={46} strokeWidth={2.2} className="mb-4 text-krim" />
          <h1 className="lockup">
            {/* one wordmark, stacked like the sign */}
            <span className="lockup-main">
              {shop.lockup.top}
              <br />
              {shop.lockup.middle}
            </span>
            <span className="lockup-bottom">{shop.lockup.bottom}</span>
            <span className="lockup-outlet">{shop.outlet}</span>
          </h1>
          <p className="t-lead measure-hero mt-6" {...mock(hero.line.mockup)}>
            {hero.line.text}
          </p>
          <p className="mt-4 flex items-center gap-3 font-bold num">
            <span className="open-dot" aria-hidden="true" />
            {hero.today}
          </p>
          <div className="hero-actions mt-7">
            <a
              className="btn btn-oranye"
              href={waLink("Halo Amorcakes Cibubur, saya mau pesan kue.")}
              target="_blank"
              rel="noopener noreferrer"
              {...mock(shop.waMockup)}
            >
              <IconChat />
              {hero.ctaWa}
            </a>
            <a className="btn btn-krim-outline" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
              <IconPin />
              {hero.ctaMaps}
            </a>
          </div>
        </div>

        <CaseWindow className="hero-window">
          <div className="shelf-stage hero-stage">
            <div className="hero-cake-wrap hero-plaque">
              <Cake
                flavour="blackForest"
                label={`${blackForest.alt}, dengan tulisan Selamat Ulang Tahun di plakatnya`}
                plaque={<PlaqueText lines={hero.plaque.lines} piping />}
              />
              <Sticker lines={hero.sticker.lines} className="hero-sticker" mockup={hero.sticker.mockup} />
            </div>
          </div>
          <Shelf />
          <div className="hero-tag-row">
            <PriceTag
              as="p"
              name={blackForest.name}
              sizeLine={blackForest.sizeLine}
              price={blackForest.price}
              priceMockup={blackForest.priceMockup}
            />
          </div>
        </CaseWindow>
      </Container>
    </header>
  );
}
