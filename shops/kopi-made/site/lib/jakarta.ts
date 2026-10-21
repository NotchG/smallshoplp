import { hours, ui, type Day } from "@/content";

// Jakarta runs on WIB (UTC+7) all year, so a fixed offset is exact.
export function jakartaNow(d = new Date()) {
  const j = new Date(d.getTime() + 7 * 3600_000);
  return { jsDay: j.getUTCDay(), minutes: j.getUTCHours() * 60 + j.getUTCMinutes() };
}

export function dayFor(jsDay: number): Day {
  return hours.find((h) => h.jsDay === jsDay) as Day;
}

export function todayStatus(now = jakartaNow()): { open: boolean; text: string } {
  const today = dayFor(now.jsDay);
  if (!today.closed && now.minutes >= today.openMin! && now.minutes < today.closeMin!) {
    return { open: true, text: ui.openNow(today.close!) };
  }
  if (!today.closed && now.minutes < today.openMin!) {
    return { open: false, text: ui.beforeOpen(today.open!) };
  }
  for (let i = 1; i <= 7; i++) {
    const next = dayFor((now.jsDay + i) % 7);
    if (next.closed) continue;
    const label = i === 1 ? ui.tomorrow : next.day;
    return {
      open: false,
      text: today.closed ? ui.closedToday(label, next.open!) : ui.closedTonight(label, next.open!),
    };
  }
  return { open: false, text: ui.todayStatic };
}
