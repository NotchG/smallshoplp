"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useShops } from "../useShops";

const GROUPS = [
  { status: "brief_ready", title: "Waiting for your review" },
  { status: "brief_rework", title: "Sent back to Claude" },
  { status: "brief_approved", title: "Approved, ready to plan and build" },
];

function useMockupCounts(slugs) {
  const [counts, setCounts] = useState({});
  const key = slugs.join(",");
  useEffect(() => {
    let live = true;
    Promise.all(slugs.map(async (slug) => {
      const res = await fetch(`/api/briefs/${slug}`, { cache: "no-store" });
      const data = await res.json();
      const n = data.brief ? data.brief.split("\n").filter((l) => l.includes("[MOCKUP]")).length : null;
      return [slug, n];
    })).then((pairs) => live && setCounts(Object.fromEntries(pairs)));
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return counts;
}

export default function Briefs() {
  const { shops, error } = useShops();
  const ready = shops ? shops.filter((s) => s.status === "brief_ready").map((s) => s.slug) : [];
  const counts = useMockupCounts(ready);
  const any = shops && GROUPS.some((g) => shops.some((s) => s.status === g.status));

  return (
    <>
      <h1>Briefs</h1>
      <p className="lede">
        Claude&rsquo;s read on each shop, from its listing and reviews. Highlighted lines are details
        Claude filled in for the mockup. Keep, edit or delete them; the owner confirms them later
        through the checklist that comes with each site.
      </p>
      {error && <p className="error">{error}</p>}
      {!shops && !error && <p className="empty">Loading…</p>}
      {shops && !any && (
        <p className="empty">
          No briefs yet. Approve some candidates, then run <code>/shop-landing brief</code> in Claude Code.
        </p>
      )}
      {shops && GROUPS.map((g) => {
        const list = shops.filter((s) => s.status === g.status);
        if (!list.length) return null;
        return (
          <section key={g.status}>
            <h2 className="group-title">{g.title}</h2>
            <div className="list">
              {list.map((s) => (
                <Link key={s.slug} href={`/briefs/${s.slug}`} className="brief-link">
                  <div>
                    <p className="name">{s.name}</p>
                    <p className="meta">{[s.type, s.address].filter(Boolean).join(", ")}</p>
                    {g.status === "brief_rework" && s.brief_note && <p className="why">Your note: {s.brief_note}</p>}
                  </div>
                  {g.status === "brief_ready" && (
                    <span className="marks">
                      {counts[s.slug] == null ? "" : counts[s.slug] === 0
                        ? "All from the listing"
                        : <><mark>{counts[s.slug]}</mark> mockup detail{counts[s.slug] > 1 ? "s" : ""}</>}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
