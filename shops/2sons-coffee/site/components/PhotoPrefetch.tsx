"use client";
import { useEffect } from "react";

// Photos below the fold are loading="lazy", so they never compete with the hero (LCP).
// Once the page has fully loaded and the browser is idle, fetch them anyway, so they are
// sharp by the time a visitor scrolls to them. Skipped when the visitor asks to save data.
export default function PhotoPrefetch() {
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;

    let idleId: number | undefined;
    let timeoutId: number | undefined;
    const run = () => {
      document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
        img.loading = "eager";
      });
    };
    const schedule = () => {
      if (typeof window.requestIdleCallback === "function") idleId = window.requestIdleCallback(run, { timeout: 2000 });
      else timeoutId = window.setTimeout(run, 1200);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
