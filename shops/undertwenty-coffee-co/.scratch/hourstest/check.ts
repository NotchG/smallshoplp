import { status, markerPercent } from "./hours.ts";
// Jakarta local time -> epoch ms (UTC+7)
const jkt = (y: number, mo: number, d: number, h: number, mi: number) => Date.UTC(y, mo - 1, d, h - 7, mi);
// 2026-10-23 is a Friday
const cases: [string, number][] = [
  ["Fri 23.00", jkt(2026, 10, 23, 23, 0)],
  ["Sat 00.30", jkt(2026, 10, 24, 0, 30)],
  ["Sat 01.30", jkt(2026, 10, 24, 1, 30)],
  ["Sun 01.30", jkt(2026, 10, 25, 1, 30)],
  ["Mon 01.30", jkt(2026, 10, 26, 1, 30)],
  ["Mon 09.00", jkt(2026, 10, 26, 9, 0)],
  ["Mon 10.00", jkt(2026, 10, 26, 10, 0)],
];
for (const [n, t] of cases) console.log(n.padEnd(10), new Date(t + 7*3600e3).toUTCString().slice(0, 3), JSON.stringify(status(t)), JSON.stringify(markerPercent(t)));
