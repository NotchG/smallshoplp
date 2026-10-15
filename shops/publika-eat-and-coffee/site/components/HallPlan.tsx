"use client";
// The hero's seating plan, seen from above. Signature moment (design brief §8): the small
// tables slide in from around the floor and close up into one long table, then the copper
// pendants' light pools come on. The scattered pre-state is pure CSS under
// html[data-motion="on"], set by the head script only when motion is allowed, so there is
// no flash and the tables are never hidden. Reduced motion / no JS: joined and lit.
import { useRef, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, stagger, prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { hero, type DishId } from "@/content";
import { Dish } from "./art/dishes";
import { ColumnSvg, FernSvg, Lounge, TableGroupSvg } from "./art/plan";

// Scattered offsets in table widths (desktop px offsets from the brief at a 85px table).
// Phone shows the middle four at 0.6x (--k in CSS).
const TABLES: { dx: number; dy: number; r: number; dish?: DishId; deskOnly?: boolean }[] = [
  { dx: -1.41, dy: -0.47, r: -10, deskOnly: true },
  { dx: -0.82, dy: 0.59, r: 8, dish: "nasi-goreng-wagyu" },
  { dx: -0.29, dy: -0.71, r: -6, dish: "kopi-teh" },
  { dx: 0.29, dy: 0.65, r: 7, dish: "pisang-goreng-teh" },
  { dx: 0.88, dy: -0.53, r: -9, dish: "tiramisu" },
  { dx: 1.47, dy: 0.41, r: 11, deskOnly: true },
];

// Pendants hang over the joins between tables 2|3, 3|4 and 4|5: centre -1, 0, +1 table widths.
const LIGHTS = [-1, 0, 1];

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

export default function HallPlan() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || document.documentElement.dataset.motion !== "on") return;
      const tables = gsap.utils.toArray<HTMLElement>(".plan-table").filter((el) => el.offsetParent !== null);
      const glows = gsap.utils.toArray<HTMLElement>(".plan-glow");
      const tl = gsap.timeline({ delay: duration.signatureDelay });
      tl.to(
        tables,
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: duration.signature,
          ease: ease.signature,
          stagger: { each: stagger.tables, from: "center" },
        },
        0,
      );
      tl.to(glows, { opacity: 1, duration: duration.glow, ease: ease.fade }, duration.glowAt);
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="hero-plan">
      <div className="plan-scene" role="img" aria-label={hero.planLabel.text} {...mock(hero.planLabel.mockup)}>
        <div className="plan-floor" aria-hidden="true" />
        <div className="plan-beam plan-beam--v pb-v1" aria-hidden="true" />
        <div className="plan-beam plan-beam--v pb-v2" aria-hidden="true" />
        <div className="plan-beam plan-beam--h pb-h" aria-hidden="true" />

        <div className="plan-piece plan-column pc-col-a plan-hide-phone"><ColumnSvg /></div>
        <div className="plan-piece plan-column pc-col-b plan-hide-phone"><ColumnSvg /></div>
        <div className="plan-piece plan-lounge pc-lounge plan-desk-only"><Lounge /></div>

        <div className="plan-row">
          {/* pools are opaque inside one translucent layer, so overlaps don't darken */}
          <div className="plan-glows" aria-hidden="true">
            {LIGHTS.map((i) => (
              <div key={`g${i}`} className="plan-glow" style={v({ "--i": i })} />
            ))}
          </div>
          <div className="plan-tables">
            {TABLES.map((t, n) => (
              <div
                key={n}
                className={`plan-table${t.deskOnly ? " plan-table--desk-only" : ""}`}
                style={v({ "--dx": t.dx, "--dy": t.dy, "--r": t.r })}
              >
                <TableGroupSvg />
                {t.dish && (
                  <div className="plan-dish">
                    <Dish id={t.dish} />
                  </div>
                )}
              </div>
            ))}
          </div>
          {LIGHTS.map((i) => (
            <div key={`p${i}`} className="plan-pendant" style={v({ "--i": i })} aria-hidden="true" />
          ))}
        </div>

        <div className="plan-piece plan-fern pc-fern-a"><FernSvg /></div>
        <div className="plan-piece plan-fern pc-fern-b"><FernSvg /></div>
        <div className="plan-piece plan-fern pc-fern-c"><FernSvg /></div>
      </div>
      <p className="plan-caption t-small">{hero.caption}</p>
    </div>
  );
}
