"use client";
import type { CSSProperties } from "react";
import { hours, hoursCopy } from "@/content";
import { useJakartaToday } from "@/lib/jakarta";

// Track runs 06.00 → 02.00 (20 hours). Bars are static decoration (aria-hidden);
// the times are real table text. On Jumat and Sabtu the bar runs past the midnight line.
const TRACK_START = 6 * 60;
const TRACK_LEN = 20 * 60;
const pos = (min: number) => (min - TRACK_START) / TRACK_LEN;

export default function HoursChart({ labelledBy, className = "" }: { labelledBy: string; className?: string }) {
  const status = useJakartaToday();
  const todayDay = status ? status.row.jsDay : null; // no mark in the static HTML

  return (
    <div className={`hours-chart nums ${className}`}>
      <table className="hours-table" aria-labelledby={labelledBy}>
        <tbody>
          {hours.map((row) => {
            const isToday = row.jsDay === todayDay;
            const style = { "--start": pos(row.openMin), "--len": pos(row.closeMin) - pos(row.openMin) } as CSSProperties;
            return (
              <tr key={row.day} className={isToday ? "is-today" : undefined}>
                <th scope="row" className={isToday ? "font-medium" : undefined}>
                  {row.day}
                  {isToday && <span className="today-tag t-small mb-2 flex w-fit sm:hidden">{hoursCopy.today}</span>}
                </th>
                <td>
                  <div className="hours-cell" style={style}>
                    <span className="hours-bar" aria-hidden="true" />
                    <span className="hours-time">
                      {row.open}–{row.close}
                    </span>
                    {isToday && <span className="today-tag t-small ml-2 hidden sm:inline-flex">{hoursCopy.today}</span>}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="hours-axis" aria-hidden="true">
        <div className="hours-axis-track">
          <span className="hours-midnight" style={{ left: `${pos(24 * 60) * 100}%` }} />
          <span className="hours-tick t-small" style={{ left: `${pos(24 * 60) * 100}%` }}>
            24.00
          </span>
        </div>
      </div>
    </div>
  );
}
