import { FrameCup, FrameLever, FrameStoolTable, FrameUplitTrunk } from "@/components/Icons";

const drawings = {
  day: FrameStoolTable,
  night: FrameUplitTrunk,
  bar: FrameLever,
  cup: FrameCup,
};

// A labelled, dashed frame waiting for the owner's photo. Always flagged data-mockup.
export default function PhotoFrame({
  label,
  drawing,
  tone = "night",
  className = "",
}: {
  label: string;
  drawing: keyof typeof drawings;
  tone?: "night" | "day";
  className?: string;
}) {
  const Drawing = drawings[drawing];
  return (
    <div
      role="img"
      aria-label={`Tempat foto: ${label}`}
      data-mockup=""
      className={`photo-frame ${tone === "day" ? "photo-frame--day" : ""} ${className}`}
    >
      <Drawing />
      <span className="t-small max-w-[16em]">{label}</span>
    </div>
  );
}
