// Unit check for lib/status.ts: node --no-warnings scripts/status-check.mts
import { statusAt } from "../lib/status.ts";
import { hours } from "../content.ts";
// Jakarta is UTC+7. 2026-10-18 is a Sunday, 2026-10-20 a Tuesday, 2026-10-24 a Saturday.
const cases: [string, string, string, string][] = [
  ["Sunday 10:00", "2026-10-18T03:00:00Z", "TUTUP", "Buka lagi Senin 08.00"],
  ["Tuesday 07:30", "2026-10-20T00:30:00Z", "TUTUP", "Buka hari ini pukul 08.00"],
  ["Tuesday 12:00", "2026-10-20T05:00:00Z", "BUKA", "Hari ini 08.00–23.00"],
  ["Saturday 23:30", "2026-10-24T16:30:00Z", "TUTUP", "Buka lagi Senin 08.00"],
  ["Friday 23:00", "2026-10-23T16:00:00Z", "TUTUP", "Buka lagi besok 08.00"],
  ["Monday 00:10", "2026-10-18T17:10:00Z", "TUTUP", "Buka hari ini pukul 08.00"],
  ["Saturday 22:59", "2026-10-24T15:59:00Z", "BUKA", "Hari ini 08.00–23.00"],
];
let fail = 0;
for (const [label, iso, title, sub] of cases) {
  const s = statusAt(new Date(iso), hours);
  const ok = s.title === title && s.sub === sub;
  if (!ok) fail++;
  console.log(`${ok ? "PASS" : "FAIL"} ${label}: ${s.title} · ${s.sub}`);
}
process.exit(fail ? 1 : 0);
