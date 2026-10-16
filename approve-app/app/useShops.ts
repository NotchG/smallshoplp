"use client";
import { useCallback, useEffect, useState } from "react";
import type { Shop, Status } from "@/lib/types";

// Fetches shops.json and refetches when any page changes it, or when the window regains focus
// (Claude may have written to it from a terminal in the meantime).
export function useShops() {
  const [shops, setShops] = useState<Shop[] | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/shops", { cache: "no-store" });
      const data = (await res.json()) as { shops?: Shop[]; error?: string };
      if (!res.ok || !data.shops) throw new Error(data.error);
      setShops(data.shops);
      setError("");
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : "Couldn't load shops.");
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("shops-changed", load);
    window.addEventListener("focus", load);
    return () => {
      window.removeEventListener("shops-changed", load);
      window.removeEventListener("focus", load);
    };
  }, [load]);

  return { shops, error, reload: load };
}

export function announceChange() {
  window.dispatchEvent(new Event("shops-changed"));
}

export async function moveShops(slugs: string[], status: Status): Promise<string[]> {
  const res = await fetch("/api/shops", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slugs, status }),
  });
  const data = (await res.json()) as { moved?: string[]; error?: string };
  if (!res.ok) throw new Error(data.error);
  announceChange();
  return data.moved ?? [];
}
