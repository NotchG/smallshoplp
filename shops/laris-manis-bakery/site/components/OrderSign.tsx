import { orderNumbers, ui } from "@/content";
import { ink } from "./illos/inks";

// The printed "Contact Order" sign by the counter, rebuilt as the contact card:
// cream card, ornament-brown border, geometric corner ornaments, ribbon, tel links.
function Corner({ className }: { className: string }) {
  const diamonds: [number, number][] = [];
  for (let i = 0; i < 5; i++) for (let j = 0; j < 5 - i; j++) diamonds.push([i, j]);
  return (
    <svg viewBox="0 0 84 84" className={className} aria-hidden="true" focusable="false">
      <path d="M0 0 H84 L0 84 Z" fill={ink.ornament} />
      {diamonds.map(([i, j]) => {
        const cx = 9 + i * 14;
        const cy = 9 + j * 14;
        return (
          <path
            key={`${i}-${j}`}
            d={`M${cx} ${cy - 5} L${cx + 5} ${cy} L${cx} ${cy + 5} L${cx - 5} ${cy} Z`}
            fill={ink.white}
          />
        );
      })}
    </svg>
  );
}

export default function OrderSign() {
  return (
    <div
      role="group"
      aria-label={ui.signLabel}
      className="relative overflow-hidden rounded-[20px] border-[6px] border-ornamen bg-putih-ubin px-6 py-12 text-center md:px-10 md:py-16"
    >
      <Corner className="absolute left-0 top-0 size-16 md:size-20" />
      <Corner className="absolute bottom-0 right-0 size-16 rotate-180 md:size-20" />
      <p className="t-lead font-extrabold uppercase tracking-[0.08em] text-tinta">{ui.signName}</p>
      <p className="ribbon mx-auto mt-3 w-fit bg-ornamen px-8 py-1.5 font-extrabold text-krim">
        {ui.contactOrder}
      </p>
      <ul className="mt-6 flex flex-col items-center gap-2">
        {orderNumbers.map((n) => (
          <li key={n.label}>
            <a
              href={n.href}
              className="inline-flex min-h-11 flex-wrap items-baseline justify-center gap-x-3 px-2 py-1 text-tinta"
            >
              <span className="font-semibold">{n.label}</span>
              <span className="font-extrabold tabular-nums underline decoration-ornamen">{n.number}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
