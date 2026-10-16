"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  distance,
  duration,
  ease,
  fontWaitMs,
  letterTilt,
  prefersReducedMotion,
  stagger,
} from "@/lib/motion";
import { letterSpans } from "@/components/FondantLetters";

// The hero name, set like the fondant letters on a cake board.
// Signature moment: on load the 13 letters are placed one by one, each dropping a short way
// with a slight tilt and settling flat (≈ 1.1 s, once). Reduced motion or no JS: at rest.
export default function FondantName({ text, id }: { text: string; id?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useGSAP(
    (_context, contextSafe) => {
      const root = ref.current;
      const html = document.documentElement;
      if (!root || !contextSafe) return;
      if (html.dataset.motion !== "ok" || prefersReducedMotion()) {
        html.dataset.motion = "off";
        return;
      }

      const letters = gsap.utils.toArray<HTMLElement>(".fondant-letter", root);
      let started = false;

      const place = contextSafe(() => {
        if (started) return;
        started = true;
        gsap.fromTo(
          letters,
          {
            y: -distance.letter,
            rotation: (i: number) => letterTilt[i % letterTilt.length],
            opacity: 0,
          },
          {
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: duration.letter,
            ease: ease.settle,
            stagger: stagger.letter,
            transformOrigin: "50% 100%",
            onComplete: () => {
              gsap.set(letters, { clearProps: "transform,opacity" });
            },
          },
        );
        // Letters now hold their own inline state; drop the CSS pre-hide and failsafe.
        html.dataset.motion = "run";
      });

      const timer = window.setTimeout(place, fontWaitMs);
      document.fonts?.ready.then(() => place());

      return () => {
        started = true;
        window.clearTimeout(timer);
      };
    },
    { scope: ref },
  );

  let offset = 0;
  return (
    <h1 ref={ref} id={id} aria-label={text} className="fondant-name hero-name">
      {words.map((word) => {
        const spans = letterSpans(word, offset);
        offset += word.length;
        return (
          <span key={word} className="fondant-word block">
            {spans}
          </span>
        );
      })}
    </h1>
  );
}
