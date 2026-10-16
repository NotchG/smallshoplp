"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { angle, delay, duration, ease, prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import type { Item } from "@/content";
import Hanger from "@/components/Hanger";

// The shop's striped "Kamu / Aku / … / Sayang" wall sign. Its third word is unreadable in the
// photos, so the page finishes the sentence: the signature moment (design brief §8).
// On load the dots give way as "PERNAH" swings down on its top hinge, then the board settles
// on its nail. Runs once. Reduced motion / no JS: the word is simply printed.
const STRIPES = [
  "bg-jago text-awan",
  "bg-rumah text-dongker",
  "bg-dongker text-awan",
  "bg-jago text-awan",
];
const FLAP_INDEX = 2;

export default function KamuAkuSign({ words, sentence }: { words: Item[]; sentence: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root || prefersReducedMotion()) return;
      if (!document.documentElement.classList.contains("motion")) return;
      // Hydrated too late: the CSS failsafe has already printed the word. Leave it be.
      if (performance.now() > 1800) return;

      const word = root.querySelector<HTMLElement>(".flap-word");
      const dots = root.querySelector<HTMLElement>(".flap-dots");
      const board = root.querySelector<HTMLElement>(".sign-board");
      if (!word || !dots || !board) return;

      gsap.set([word, dots], { animation: "none" });
      gsap.set(word, { autoAlpha: 0, rotationX: angle.flap, transformOrigin: "50% 0%" });

      gsap
        .timeline({ delay: delay.heroStart })
        .to(word, { rotationX: 0, autoAlpha: 1, duration: duration.flap, ease: ease.outStrong }, 0)
        .to(dots, { autoAlpha: 0, duration: duration.dots, ease: ease.out }, delay.dots)
        .to(
          board,
          { rotation: 0, transformOrigin: "50% 0%", duration: duration.swing, ease: ease.out },
          delay.swing,
        );
    },
    { scope },
  );

  return (
    <div ref={scope} className="sign">
      <p className="sr-only">{sentence}</p>
      <div className="sign-board" aria-hidden="true">
        <Hanger height={28} spread={10} />
        {words.map((w, i) =>
          i === FLAP_INDEX ? (
            <div key={w.text} className={`stripe stripe-flap ${STRIPES[i]}`}>
              <span className="flap-word" {...mock(w.mockup)}>
                {w.text}
              </span>
              <span className="flap-dots">
                <i />
                <i />
                <i />
              </span>
            </div>
          ) : (
            <div key={w.text} className={`stripe ${STRIPES[i]}`} {...mock(w.mockup)}>
              {w.text}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
