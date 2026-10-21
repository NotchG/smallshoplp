import { mock } from "@/lib/mockup";
import type { ActionRowItem } from "@/content";
import Arrow from "@/components/Arrow";

// A full-width link row: small label 8px above the detail, arrow at the end.
export default function ActionRow({ row }: { row: ActionRowItem }) {
  return (
    <a
      href={row.href}
      className="action-row"
      {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="grid gap-2">
        <span className="label text-gold">
          <span {...mock(row.mockup)}>{row.label}</span>
        </span>
        <span className="t-lead nums">{row.detail}</span>
      </span>
      <Arrow className="action-arrow" />
    </a>
  );
}
