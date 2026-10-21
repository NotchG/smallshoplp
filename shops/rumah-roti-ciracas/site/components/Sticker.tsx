"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion, sticker as press } from "@/lib/motion";
import { shop, sticker } from "@/content";
import { WaIcon } from "@/components/icons";

// The shop's own label (gold ring, "Rumah Roti" script, CIRACAS, WhatsApp number),
// set as type, not a redrawn logo. It is the WhatsApp link.
// `press`: the signature moment. Starts lifted (CSS under html.js), pressed flat once on load.
export default function Sticker({
  variant,
  press: doPress = false,
  className = "",
}: {
  variant: "hero" | "close";
  press?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !doPress) return;
      if (prefersReducedMotion()) {
        el.classList.add("is-stuck");
        return;
      }
      const soft = el.querySelector(".sticker-shadow--soft");
      const tight = el.querySelector(".sticker-shadow--tight");
      const tl = gsap.timeline({
        delay: press.delay,
        onComplete: () => {
          // Hand the resting state back to CSS so hover and focus can respond.
          el.classList.add("is-stuck");
          gsap.set(el, { clearProps: "transform" });
          gsap.set([soft, tight], { clearProps: "opacity" });
        },
      });
      tl.fromTo(
        el,
        { y: press.fromY, rotate: press.fromRotate, scale: press.fromScale },
        { y: 0, rotate: press.toRotate, scale: 1, duration: duration.hero, ease: ease.outStrong },
        0,
      )
        .fromTo(soft, { opacity: 1 }, { opacity: 0, duration: press.shadowDuration, ease: ease.out }, press.shadowAt)
        .fromTo(tight, { opacity: 0 }, { opacity: 1, duration: press.shadowDuration, ease: ease.out }, press.shadowAt);
    },
    { scope: ref },
  );

  return (
    <a
      ref={ref}
      href={shop.wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sticker.label}
      className={`sticker sticker--${variant} ${className}`}
      {...(doPress ? { "data-sticker-press": "" } : {})}
    >
      <span className="sticker-shadow sticker-shadow--soft" aria-hidden="true" />
      <span className="sticker-shadow sticker-shadow--tight" aria-hidden="true" />
      <span className="sticker-paper" aria-hidden="true">
        <span className="sticker-ring">
          <span className="sticker-script">
            {sticker.script}
            <span className="sticker-place">{sticker.place}</span>
          </span>
        </span>
        <span className="sticker-number">
          <WaIcon />
          {sticker.number}
        </span>
      </span>
    </a>
  );
}
