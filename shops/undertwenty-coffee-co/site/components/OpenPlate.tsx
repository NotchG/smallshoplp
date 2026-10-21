"use client";
import { useEffect, useState } from "react";
import ActionButton from "@/components/ActionButton";
import { hero, shop } from "@/content";
import { status, type Status } from "@/lib/hours";

// The black U20-style plate: tonight's hours and the two hero actions.
// Static HTML carries the weekly fallback; the browser swaps in "today" after hydration,
// inside the same three lines, so nothing shifts.
export default function OpenPlate({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Status | null>(null);

  useEffect(() => {
    setNow(status());
  }, []);

  // Remove-one-thing pass: the 0.2s fade on this swap was cut; the text simply changes in place.

  const label = now?.label ?? hero.fallback.label;
  const time = now?.time ?? hero.fallback.time;
  const note = now?.note ?? hero.fallback.note;

  return (
    <div className={`bg-arang text-putih p-5 sm:p-7 lg:p-8 ${className}`} style={{ ["--focus" as string]: "var(--color-lampu)" }}>
      <div aria-live="polite">
        <p className="t-label text-muted-dark">{label}</p>
        <p className="t-cond t-head tnum text-lampu mt-1">{time}</p>
        <p className="t-body mt-1 flex items-center gap-2.5">
          {now && <span className="status-dot" data-open={String(now.open)} aria-hidden="true" />}
          <span>{note}</span>
        </p>
      </div>
      <p className="t-body text-muted-dark mt-5 hidden sm:block">{shop.addressShort}</p>
      <div className="mt-5 sm:mt-3 flex flex-wrap gap-3">
        <ActionButton href={shop.mapsUrl} variant="solid" className="grow sm:grow-0">
          {hero.directions}
        </ActionButton>
        <ActionButton href={shop.whatsapp.url} variant="outline" mockup={shop.whatsapp.mockup} className="grow sm:grow-0">
          {hero.whatsapp}
        </ActionButton>
      </div>
    </div>
  );
}
