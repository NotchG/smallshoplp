// Day of week in the shop's own time zone (Asia/Jakarta). 0 = Minggu ... 6 = Sabtu.
const DOW: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export function jakartaDow(now: Date = new Date()): number {
  const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(now);
  return DOW[wd] ?? now.getDay();
}
