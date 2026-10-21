import { mock } from "@/lib/mockup";
import type { Item } from "@/content";

// Shop ── time ── station. Horizontal from 768px, vertical on phone.
export default function RouteLine({ from, to, time }: { from: string; to: string; time: Item }) {
  return (
    <ol className="route" aria-label={`${from} ke ${to}, ${time.text}`}>
      <li className="route-stop">
        <span className="route-dot" aria-hidden="true" />
        <span className="route-name">{from}</span>
      </li>
      <li className="route-leg">
        <span className="route-line" aria-hidden="true" />
        <span className="route-time t-lead" {...mock(time.mockup)}>
          {time.text}
        </span>
      </li>
      <li className="route-stop route-end">
        <span className="route-dot route-dot-end" aria-hidden="true" />
        <span className="route-name">{to}</span>
      </li>
    </ol>
  );
}
