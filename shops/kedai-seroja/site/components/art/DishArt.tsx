import type { ArtName } from "@/content";
import { a11y } from "@/content";
import { artFor, Plate, LeafRound, LeafTray, LeafStrip } from "./dishes";

type Props = { name: ArtName; label?: string; decorative?: boolean; className?: string };

function a11yProps(label: string | undefined, decorative?: boolean) {
  return decorative || !label
    ? { "aria-hidden": true as const, focusable: "false" as const }
    : { role: "img", "aria-label": a11y.art(label) };
}

// One dish, top-down, in its 200 × 200 box.
export default function DishArt({ name, label, decorative, className }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className} {...a11yProps(label, decorative)}>
      {artFor(name)}
    </svg>
  );
}

// A snack set on a small plate (risol, lumpia on the display shelf).
export function PlatedArt({ name, label, className }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className} {...a11yProps(label)}>
      <Plate />
      <g transform="translate(22 22) scale(0.78)">{artFor(name)}</g>
    </svg>
  );
}

// A counter tray's contents: leaf liner + lauk (viewBox 200 × 150).
export function TrayArt({ name, label }: Props) {
  return (
    <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet" {...a11yProps(label)}>
      <LeafTray />
      <g transform="translate(16 -9) scale(0.84)">{artFor(name)}</g>
    </svg>
  );
}

// Plate + leaf liner, the static base of the hero plate.
export function PlateBase() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden focusable="false">
      <Plate />
      <LeafRound r={74} />
    </svg>
  );
}

export function DonutLeaf() {
  return (
    <svg viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden focusable="false" className="leaf-strip">
      <LeafStrip />
    </svg>
  );
}
