import Bulb from "@/components/Bulb";
import { shop } from "@/content";

// Seven rows, every bullet a lit bulb: open every day, 10.00 to 22.00.
export default function HoursList({ className = "" }: { className?: string }) {
  return (
    <dl className={`hours t-body ${className}`}>
      {shop.hours.map((h) => (
        <div key={h.day}>
          <dt className="flex items-center gap-2.5">
            <Bulb />
            {h.day}
          </dt>
          <dd>{h.time}</dd>
        </div>
      ))}
    </dl>
  );
}
