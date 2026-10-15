import { hoursRows } from "@/content";

// Compact hours (hero side column, footer). "Senin–Selasa Tutup" is the loudest row.
// The full table with today's row lives in Kunjungi kami (HoursTable).
export default function HoursList({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={className}>
      <p className="t-small font-semibold uppercase tracking-[0.08em]">{label}</p>
      <dl className="hours-list t-body mt-2">
        {hoursRows.map((row) => (
          <div key={row.label} className={`contents ${row.closed ? "is-closed" : ""}`}>
            <dt>{row.label}</dt>
            <dd>{row.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
