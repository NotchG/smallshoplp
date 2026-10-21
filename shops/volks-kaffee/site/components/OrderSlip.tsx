import { C } from "@/lib/palette";
import { mock } from "@/lib/mockup";
import type { Item } from "@/content";

// The barista section's order slip: piring paper, ticks in awning, a torn bottom edge.
export default function OrderSlip({ label, items }: { label: string; items: Item[] }) {
  return (
    <div className="slip w-full max-w-[440px]">
      <div className="rounded-t-[14px] bg-piring px-7 pb-6 pt-6 text-kayu">
        <p className="t-small font-bold uppercase tracking-[0.16em]">{label}</p>
        <div className="mt-3 border-t-2 border-dashed border-kayu/25" />
        <ul className="mt-5 space-y-4">
          {items.map((item) => (
            <li key={item.text} className="t-body flex items-start gap-3 font-bold" {...mock(item.mockup)}>
              <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 flex-none" aria-hidden="true" focusable="false">
                <path d="M4 12.5L9.5 18L20 6" fill="none" stroke={C.awning} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <svg className="block h-[10px] w-full" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="slip-tear" width="16" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 0H16L12 6L8 10L4 6Z" fill={C.piring} />
          </pattern>
        </defs>
        <rect width="100%" height="10" fill="url(#slip-tear)" />
      </svg>
    </div>
  );
}
