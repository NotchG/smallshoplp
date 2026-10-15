"use client";
import { useEffect } from "react";

// Photos below the fold are loading="lazy", so they never compete with the hero (LCP).
// Once the window "load" event has fired (the hero photo is in by then), fetch them anyway,
// so they are sharp by the time a visitor scrolls to them. Skipped when saving data.
export default function PhotoPrefetch() {
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;

    let timeoutId: number | undefined;
    const run = () => {
      document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
        img.loading = "eager";
      });
    };
    const schedule = () => {
      timeoutId = window.setTimeout(run, 0);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
