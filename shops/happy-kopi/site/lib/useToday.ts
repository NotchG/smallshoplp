"use client";
import { useEffect, useState } from "react";
import { jakartaDay } from "@/lib/today";

// null during SSR and the first client render, so the static HTML shows the full week.
export function useJakartaDay(): number | null {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => setDay(jakartaDay()), []);
  return day;
}
