// Today's weekday in Jakarta, as a JS day number (0 = Minggu … 6 = Sabtu).
const days: Record<string, number> = {
  minggu: 0, senin: 1, selasa: 2, rabu: 3, kamis: 4, jumat: 5, "jum'at": 5, sabtu: 6,
};

export function jakartaDay(now = new Date()): number | null {
  try {
    const name = new Intl.DateTimeFormat("id-ID", { weekday: "long", timeZone: "Asia/Jakarta" })
      .format(now)
      .toLowerCase();
    return name in days ? days[name] : null;
  } catch {
    return null;
  }
}
