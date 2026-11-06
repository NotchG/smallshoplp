"use client";
import { useCallback, useEffect, useState } from "react";
import type { Lead } from "@/lib/leads";

// Leads from GET /api/leads, refetched when any screen changes data or the window regains focus
// (a job on the NAS may have written in the meantime).
export function useLeads() {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/leads", { cache: "no-store" });
      const data = (await res.json()) as { leads?: Lead[]; error?: string };
      if (!res.ok || !data.leads) throw new Error(data.error);
      setLeads(data.leads);
      setError("");
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : "Couldn't load leads.");
    }
  }, []);

  useEffect(() => {
    load();
    const every = setInterval(load, 30_000);
    window.addEventListener("shops-changed", load);
    window.addEventListener("focus", load);
    return () => {
      clearInterval(every);
      window.removeEventListener("shops-changed", load);
      window.removeEventListener("focus", load);
    };
  }, [load]);

  return { leads, error, reload: load };
}
