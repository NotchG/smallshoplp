"use client";
import { useMemo, useState } from "react";
import { moveShops, useShops } from "../useShops";

const VIEWS = [
  { status: "candidate", label: "To review" },
  { status: "approved", label: "Approved" },
  { status: "rejected", label: "Rejected" },
];

export default function Candidates() {
  const { shops, error } = useShops();
  const [view, setView] = useState("candidate");
  const [picked, setPicked] = useState(new Set());
  const [busy, setBusy] = useState(false);
  const [actionError, setActionError] = useState("");

  const rows = useMemo(() => {
    if (!shops) return [];
    return shops
      .filter((s) => s.status === view)
      .sort((a, b) => Number(a.has_website) - Number(b.has_website) || (b.reviews || 0) - (a.reviews || 0));
  }, [shops, view]);

  function toggle(slug) {
    setPicked((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  }

  async function move(slugs, status) {
    setBusy(true);
    setActionError("");
    try {
      await moveShops(slugs, status);
      setPicked((prev) => new Set([...prev].filter((s) => !slugs.includes(s))));
    } catch (err) {
      setActionError(err.message);
    } finally {
      setBusy(false);
    }
  }

  const allPicked = rows.length > 0 && rows.every((r) => picked.has(r.slug));

  return (
    <>
      <h1>Candidates</h1>
      <p className="lede">
        Shops Claude found in your searches. Approve the ones worth building for. Claude writes
        briefs for approved shops next time you run <code>/shop-landing brief</code>.
      </p>

      <div className="filters" role="group" aria-label="Show">
        {VIEWS.map((v) => (
          <button key={v.status} className="chip" aria-pressed={view === v.status}
            onClick={() => { setView(v.status); setPicked(new Set()); }}>
            {v.label}
            {shops && ` (${shops.filter((s) => s.status === v.status).length})`}
          </button>
        ))}
      </div>

      {error && <p className="error">{error}</p>}
      {actionError && <p className="error" role="alert">{actionError}</p>}
      {!shops && !error && <p className="empty">Loading…</p>}

      {shops && rows.length === 0 && (
        <div className="empty">
          {view === "candidate" ? (
            <p>Nothing to review. Ask Claude to find shops, for example:{" "}
              <code>/shop-landing find 10 bakeries and florists in Shoreditch, London</code></p>
          ) : (
            <p>No {view} shops.</p>
          )}
        </div>
      )}

      {rows.length > 0 && (
        <div className="list">
          {view === "candidate" && (
            <label className="row" style={{ paddingBlock: 10 }}>
              <input type="checkbox" checked={allPicked}
                onChange={() => setPicked(allPicked ? new Set() : new Set(rows.map((r) => r.slug)))} />
              <span className="meta" style={{ margin: 0 }}>Select all</span>
              <span />
            </label>
          )}
          {rows.map((s) => (
            <div className="row" key={s.slug}>
              {view === "candidate" ? (
                <input type="checkbox" aria-label={`Select ${s.name}`}
                  checked={picked.has(s.slug)} onChange={() => toggle(s.slug)} />
              ) : <span />}
              <div>
                <p className="name">{s.name}</p>
                <p className="meta">
                  {[s.type, s.address, s.reviews != null && `${s.reviews} reviews`, s.rating && `${s.rating}★`]
                    .filter(Boolean).join(", ")}
                  {"  "}
                  <span className={`tag ${s.has_website ? "" : "nosite"}`}>
                    {s.has_website ? "Has a website" : "No website"}
                  </span>
                </p>
                {s.why && <p className="why">{s.why}</p>}
              </div>
              <div className="actions">
                {view === "candidate" && (
                  <>
                    <button className="btn stop" disabled={busy} onClick={() => move([s.slug], "rejected")}>Reject</button>
                    <button className="btn go" disabled={busy} onClick={() => move([s.slug], "approved")}>Approve</button>
                  </>
                )}
                {view !== "candidate" && (
                  <button className="btn quiet" disabled={busy} onClick={() => move([s.slug], "candidate")}>
                    Move back to review
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "candidate" && picked.size > 0 && (
        <div className="bulk" role="region" aria-label="Selected shops">
          <span className="count">{picked.size} selected</span>
          <button className="btn stop" disabled={busy} onClick={() => move([...picked], "rejected")}>Reject selected</button>
          <button className="btn go" disabled={busy} onClick={() => move([...picked], "approved")}>Approve selected</button>
        </div>
      )}
    </>
  );
}
