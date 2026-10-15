"use client";
// Signature moment (design brief §8): six small tables slide together into one long table set
// with the signature dishes, then the three copper pendants' light pools come on. "They adjust
// the table for us" (review 1), shown beside the group button.
// The scattered pre-state is pure CSS under html[data-motion="on"], set by the head script only
// when motion is allowed: tables are never hidden and there is no flash. Reduced motion or no JS:
// joined and lit from the start.
import { useRef, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { at, duration, ease, prefersReducedMotion, stagger } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { contact, type DishId } from "@/content";
import { Dish } from "./art/dishes";

// Scattered offsets, left to right: x in cqi of the band, y in px (0.6x on phones), rotation in deg.
// Outer tables use ±6.25 rather than the brief's ±7.5 so their rotated corners stay inside the band.
const TABLES: { dx: number; dy: number; r: number; dish: DishId; wide?: boolean }[] = [
  { dx: -6.25, dy: -40, r: -10, dish: "kopi-teh", wide: true },
  { dx: -4.5, dy: 50, r: 8, dish: "nasi-goreng-wagyu" },
  { dx: -1.5, dy: -60, r: -6, dish: "tuna-sambal-matah" },
  { dx: 1.5, dy: 55, r: 7, dish: "pisang-goreng-teh" },
  { dx: 4.5, dy: -45, r: -9, dish: "tiramisu" },
  { dx: 6.25, dy: 35, r: 11, dish: "kopi-teh", wide: true },
];

// Pendants hang over the joins between tables 2|3, 3|4 and 4|5.
const LIGHTS = [-1, 0, 1];

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

export default function LongTable() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || document.documentElement.dataset.motion !== "on") return;
      const tables = gsap.utils.toArray<HTMLElement>(".lt-table");
      const glows = gsap.utils.toArray<HTMLElement>(".lt-glow");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
      });
      // GSAP reads the CSS pre-state transform as the start, so nothing jumps.
      tl.to(
        tables,
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: duration.hero,
          ease: ease.outStrong,
          stagger: { each: stagger.tables, from: "center" },
        },
        0,
      );
      tl.to(glows, { opacity: 1, duration: duration.glow, ease: ease.fade }, at.glow);
    },
    { scope: ref },
  );

  return (
    <>
      <div ref={ref} className="lt" role="img" aria-label={contact.tableLabel.text} {...mock(contact.tableLabel.mockup)}>
        <div className="lt-ferns" aria-hidden="true">
          <svg className="lt-fern lt-fern--a" viewBox="0 0 120 120" focusable="false">
            <use href="#fern" />
          </svg>
          <svg className="lt-fern lt-fern--b" viewBox="0 0 120 120" focusable="false">
            <use href="#fern" />
          </svg>
        </div>
        <div className="lt-row" aria-hidden="true">
          {/* pools are opaque inside one translucent layer, so overlaps don't darken */}
          <div className="lt-glows">
            {LIGHTS.map((i) => (
              <div key={`g${i}`} className="lt-glow" style={v({ "--i": i })} />
            ))}
          </div>
          {TABLES.map((t, n) => (
            <div
              key={n}
              className={`lt-table${t.wide ? " lt-table--wide" : ""}`}
              style={v({ "--dx": t.dx, "--dy": t.dy, "--r": t.r })}
            >
              <svg viewBox="0 0 100 132" focusable="false">
                <use href="#tg" />
                <Dish id={t.dish} x={18} y={34} size={64} decorative />
              </svg>
            </div>
          ))}
          {LIGHTS.map((i) => (
            <div key={`p${i}`} className="lt-pendant" style={v({ "--i": i })} />
          ))}
        </div>
      </div>
      <p className="lt-caption t-small">{contact.tableCaption}</p>
    </>
  );
}
