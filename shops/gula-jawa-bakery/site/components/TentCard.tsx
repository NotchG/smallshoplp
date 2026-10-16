import type { Price } from "@/content";
import { mock } from "@/lib/mockup";

// The little card that stands in the display case: neon fill, copper hairline, 4px corners.
// Name in 700, price right after it (12px gap) in 400 tabular.
export default function TentCard({ name, alias, price }: { name: string; alias?: string; price: Price }) {
  return (
    <h3 className="t-body inline-flex flex-wrap items-baseline gap-x-3 rounded-[4px] border border-tembaga bg-neon px-4 py-2 text-dinding">
      <span className="font-bold">
        {name}
        {alias ? <span className="font-normal"> ({alias})</span> : null}
      </span>
      <span className="tnum font-normal" {...mock(price.mockup)}>
        {price.label}
      </span>
    </h3>
  );
}
