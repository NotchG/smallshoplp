"use client";
import { useEffect, useState } from "react";

// Checks whether a shop's mockup answers at its preview URL. Calls onStatus(online) when known.
export function useOnline(slug, enabled = true) {
  const [state, setState] = useState(null); // null = checking
  useEffect(() => {
    if (!enabled) return;
    let live = true;
    const check = () =>
      fetch(`/api/shops/${slug}/online`, { cache: "no-store" })
        .then((r) => r.json())
        .then((d) => live && setState(d))
        .catch(() => live && setState({ online: false, reason: "Couldn't check" }));
    check();
    const t = setInterval(check, 30000);
    return () => { live = false; clearInterval(t); };
  }, [slug, enabled]);
  return state;
}

export default function OnlineBadge({ state }) {
  if (!state) return <span className="badge">Checking…</span>;
  return (
    <span className={`badge ${state.online ? "on" : "off"}`} title={state.reason}>
      <span className="dot" aria-hidden="true" />
      {state.online ? "Online" : state.reason}
    </span>
  );
}
