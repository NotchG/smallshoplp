import { hours } from "@/content";
import type { Status } from "@/lib/hours";

// Two lines: state (with dot) and detail. Before the time is known it shows the week's hours.
export default function StatusLine({
  status,
  tone,
  className = "",
}: {
  status: Status | null;
  tone: "dark" | "light";
  className?: string;
}) {
  const state = status ? status.state : hours.fallback.state;
  const detail = status ? status.detail : hours.fallback.detail;
  const open = status ? String(status.open) : "unknown";
  return (
    <p className={`status status-${tone} tabular ${className}`} data-open={open}>
      <span className="status-state">
        <span className="status-dot" data-open={open} aria-hidden="true" />
        <span>{state}</span>
      </span>
      <span className="status-detail">{detail}</span>
    </p>
  );
}
