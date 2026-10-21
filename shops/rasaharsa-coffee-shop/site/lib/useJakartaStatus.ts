"use client";
import { useEffect, useState } from "react";
import { getJakartaNow, getStatus, type Status } from "./hours";

// Status and weekday in Jakarta time, known only after mount (server shows the fallback).
// Refreshes every minute so an open page follows opening and closing time.
export function useJakartaStatus() {
  const [state, setState] = useState<{ status: Status; day: number } | null>(null);
  useEffect(() => {
    const update = () => setState({ status: getStatus(), day: getJakartaNow().day });
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return state;
}
