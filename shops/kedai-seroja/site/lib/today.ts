// Today's weekday in Jakarta (0 = Minggu … 6 = Sabtu), independent of the visitor's timezone.
const SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function jakartaDay(now = new Date()): number {
  const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(now);
  const i = SHORT.indexOf(wd);
  return i === -1 ? now.getDay() : i;
}
