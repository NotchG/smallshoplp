"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { letterDrop, prefersReducedMotion } from "@/lib/motion";

// The shop's felt letterboard (it stands on their arched shelf in owner-1).
// Letters are aria-hidden spans; the sr-only label carries the text.
// Only the hero instance animates: each letter drops into its groove, once.
export default function Letterboard({
  lines,
  label,
  animate = false,
  className = "",
}: {
  lines: string[];
  label: string;
  animate?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const board = ref.current;
      if (!animate || !board || prefersReducedMotion()) return;
      const chars = gsap.utils.toArray<HTMLElement>("[data-lb-char]", board);
      board.dataset.lb = "run"; // hand the letters from the CSS failsafe to GSAP
      gsap.fromTo(
        chars,
        {
          y: (_: number, el: HTMLElement) =>
            letterDrop.fromY * parseFloat(getComputedStyle(el).fontSize),
          rotate: letterDrop.fromRotate,
          opacity: 0,
        },
        {
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: letterDrop.duration,
          ease: letterDrop.ease,
          stagger: letterDrop.stagger,
          delay: letterDrop.delay,
        },
      );
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className={`board t-board ${className}`}
      {...(animate ? { "data-lb": "anim" } : {})}
    >
      <span className="sr-only">{label}</span>
      {lines.map((line, li) => (
        <span key={li} className="board-line" aria-hidden="true">
          {[...line].map((ch, ci) =>
            ch === " " ? (
              <span key={ci} className="board-gap" />
            ) : (
              <span key={ci} className="board-char" data-lb-char="">
                {ch}
              </span>
            ),
          )}
        </span>
      ))}
    </div>
  );
}
