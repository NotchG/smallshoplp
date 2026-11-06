"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FileText } from "lucide-react";
import { useLeads } from "../../useLeads";
import { moveShops } from "../../useShops";
import { useToast } from "../../components/Toast";
import Rating from "../../components/Rating";
import { JobsList, RunButton, queueJob } from "../../components/Jobs";
import { EFFECTS, patchShop } from "@/lib/actions";
import { STAGE, stillOf, type Lead } from "@/lib/leads";

const TABS: [string, string, (l: Lead) => boolean][] = [
  ["candidates", "Candidates", (l) => l.stage === "candidate"],
  ["briefs", "Briefs", (l) => l.stage === "brief_ready" || l.stage === "brief_rework"],
  ["build", "Build queue", (l) => ["approved", "brief_approved", "planned", "to_publish"].includes(l.stage)],
  ["published", "Published", (l) => !!l.preview_url],
];

function Candidates({ leads }: { leads: Lead[] }) {
  const toast = useToast();
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(false);
  const rows = leads.filter((l) => l.stage === "candidate").sort((a, b) => Number(a.has_website) - Number(b.has_website) || (b.reviews || 0) - (a.reviews || 0));
  async function move(slugs: string[], status: "approved" | "rejected") {
    setBusy(true);
    try {
      const moved = await moveShops(slugs, status);
      setPicked((p) => new Set([...p].filter((s) => !moved.includes(s))));
      toast(`${moved.length} ${status === "approved" ? "approved: Claude writes their briefs next" : "rejected"}`, {
        undo: () => moveShops(moved, "candidate").catch((e) => toast(e.message, { error: true })),
      });
    } catch (e) { toast(e instanceof Error ? e.message : String(e), { error: true }); }
    finally { setBusy(false); }
  }
  if (!rows.length) return <p className="empty"><strong>No candidates to review</strong>Find shops from the Build queue tab.</p>;
  const toggle = (s: string) => setPicked((p) => { const n = new Set(p); if (n.has(s)) n.delete(s); else n.add(s); return n; });
  return (
    <>
      <table className="cands">
        <thead><tr><th><input type="checkbox" className="check" aria-label="Select all" checked={picked.size === rows.length}
          onChange={(e) => setPicked(e.target.checked ? new Set(rows.map((r) => r.slug)) : new Set())} /></th>
          <th>Shop</th><th className="hide-sm">Area</th><th>Reviews</th><th className="hide-sm">Why</th><th /></tr></thead>
        <tbody>{rows.map((l) => (
          <tr key={l.slug}>
            <td><input type="checkbox" className="check" aria-label={`Select ${l.name}`} checked={picked.has(l.slug)} onChange={() => toggle(l.slug)} /></td>
            <td><strong>{l.name}</strong><small>{l.type}{l.has_website ? " · has a website" : ""}</small></td>
            <td className="hide-sm">{l.area}</td>
            <td className="cell-rating"><Rating rating={l.rating} reviews={l.reviews} /></td>
            <td className="hide-sm" style={{ color: "var(--muted)" }}>{l.why}</td>
            <td className="cell-acts">
              <button type="button" className="btn small" disabled={busy} onClick={() => move([l.slug], "rejected")}>Reject</button>{" "}
              <button type="button" className="btn small primary" disabled={busy} onClick={() => move([l.slug], "approved")}>Approve</button>
            </td>
          </tr>
        ))}</tbody>
      </table>
      {picked.size > 0 && (
        <div className="bulk" role="region" aria-label="Selected shops"><span className="count">{picked.size} selected</span>
          <button type="button" className="btn small" disabled={busy} onClick={() => move([...picked], "rejected")}>Reject selected</button>
          <button type="button" className="btn small primary" disabled={busy} onClick={() => move([...picked], "approved")}>Approve selected</button></div>
      )}
    </>
  );
}

function Briefs({ leads }: { leads: Lead[] }) {
  const toast = useToast();
  const items = leads.filter((l) => l.stage === "brief_ready" || l.stage === "brief_rework");
  if (!items.length) return <p className="empty"><strong>No briefs waiting</strong>Approved candidates get a brief when you run Write briefs.</p>;
  return (
    <div style={{ display: "grid", gap: 14, maxWidth: 820 }}>
      {items.map((l) => (
        <section key={l.slug} className="panel">
          <h3 className="brief-name">{l.name}</h3>
          <p className="hint">{l.type} · {l.area}</p>
          {l.brief?.personality && <p className="brief-line">{l.brief.personality}</p>}
          {l.stage === "brief_rework" && <p className="note" style={{ marginBottom: 12 }}>Sent back: {l.brief_note}</p>}
          <span className={`stage ${STAGE[l.stage][1]}`}>{STAGE[l.stage][0]}</span>
          {l.brief && <span className="stage" style={{ marginLeft: 12 }}>{l.brief.mockups} [MOCKUP] lines</span>}
          <div className="acts" style={{ marginTop: 14 }}>
            <Link className="btn small" href={`/briefs/${l.slug}`}><FileText />Open the brief</Link>
            {l.stage === "brief_ready" && (
              <button type="button" className="btn small primary" onClick={() => patchShop(l.slug, EFFECTS.approve_brief.body)
                .then(() => toast(`${l.name}: ${EFFECTS.approve_brief.label}`, { undo: () => patchShop(l.slug, EFFECTS.approve_brief.undo) }))
                .catch((e) => toast(e.message, { error: true }))}>Approve</button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

function FindShops() {
  const toast = useToast();
  const [area, setArea] = useState("");
  const [types, setTypes] = useState("");
  const [count, setCount] = useState(10);
  return (
    <form className="find" onSubmit={async (e) => {
      e.preventDefault();
      try { const job = await queueJob("discover", { area, types, count }); toast(`Queued: ${job.label}`); setArea(""); }
      catch (err) { toast(err instanceof Error ? err.message : String(err), { error: true }); }
    }}>
      <input className="input" type="number" min={1} max={30} value={count} onChange={(e) => setCount(Number(e.target.value))} aria-label="How many" style={{ width: 72 }} />
      <input className="input" placeholder="bakeries and cafes (optional)" value={types} onChange={(e) => setTypes(e.target.value)} aria-label="Shop types" />
      <span className="hint">in</span>
      <input className="input" placeholder="Cakung, Jakarta Timur" value={area} onChange={(e) => setArea(e.target.value)} aria-label="Area" required />
      <button type="submit" className="btn small primary">Find shops</button>
    </form>
  );
}

function BuildQueue({ leads }: { leads: Lead[] }) {
  const at = (...st: Lead["stage"][]) => leads.filter((l) => st.includes(l.stage));
  const slugs = (ls: Lead[]) => ls.map((l) => l.slug);
  const needBrief = at("approved", "brief_rework");
  const needBuild = at("brief_approved", "planned");
  const needPublish = at("to_publish");
  const ready = at("ready");
  const needVideo = ready.filter((l) => !l.media.video);
  const needLine = ready.filter((l) => !l.hook);
  const needArchive = at("no_answer", "declined").filter((l) => !l.archived_at);
  const steps: [string, string, Lead[], React.ReactNode][] = [
    ["Write briefs", "Approved candidates and briefs you sent back. Uses the Places key.", needBrief, <RunButton key="b" kind="brief" args={{ slugs: slugs(needBrief) }} primary />],
    ["Plan and build", "Approved briefs: Claude writes the PRD, TRD, design brief and plan, then builds and reviews the site.", needBuild, <RunButton key="p" kind="build" args={{ slugs: slugs(needBuild) }} primary />],
    ["Publish", "Built sites without a Coolify app yet.", needPublish, <RunButton key="u" kind="publish" args={{ slugs: slugs(needPublish) }} primary />],
    ["Make preview videos", "Ready shops without a scroll video (about a minute each).", needVideo, <RunButton key="v" kind="outreach-media" args={{ slugs: slugs(needVideo) }} />],
    ["Write personal lines", "Ready shops without the opening line for their first message.", needLine, <RunButton key="l" kind="outreach-lines" args={{ slugs: slugs(needLine) }} />],
    ["Archive", "Declined and unanswered shops: deletes the site and Coolify app, keeps the brief.", needArchive, <RunButton key="a" kind="archive" args={{ slugs: slugs(needArchive) }} />],
  ];
  return (
    <div className="grid2" style={{ alignItems: "start" }}>
      <section className="panel">
        <h2>Find shops on Maps</h2><FindShops />
        <h2 style={{ marginTop: 22 }}>Claude&rsquo;s steps</h2>
        <div className="steps">{steps.map(([title, about, ls, button]) => (
          <div className="steprow" key={title}>
            <div><strong>{title} <span style={{ color: "var(--muted)", fontWeight: 400 }}>{ls.length}</span></strong><small>{about}</small></div>
            <div className="acts">{ls.length ? button : <span className="hint">Nothing waiting</span>}</div>
          </div>
        ))}</div>
        <div className="acts" style={{ marginTop: 14 }}><RunButton kind="sync" label="Sync with GitHub" /></div>
      </section>
      <section className="panel"><h2>Jobs</h2><JobsList /></section>
    </div>
  );
}

function Published({ leads }: { leads: Lead[] }) {
  const items = leads.filter((l) => l.preview_url).sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  return (
    <div className="shelf">{items.map((l) => (
      <Link key={l.slug} href={`/shops/${l.slug}`}><figure>
        <span className="thumb" style={{ backgroundImage: stillOf(l) ? `url('${stillOf(l)}')` : undefined }} />
        <figcaption>{l.name}<small>{STAGE[l.stage][0]}</small></figcaption></figure></Link>
    ))}</div>
  );
}

export default function Production() {
  const { tab = "candidates" } = useParams<{ tab: string }>();
  const { leads, error } = useLeads();
  if (error) return <p className="loading error">{error}</p>;
  if (!leads) return <p className="loading">Loading…</p>;
  return (
    <section className="screen" aria-label="Production">
      <header className="head"><h1>Production</h1><p className="sub">From Maps listing to a published mockup. Claude does the work; you approve.</p>
        <div className="tools"><nav className="seg" aria-label="Production">{TABS.map(([k, label, f]) => (
          <Link key={k} href={`/production/${k}`} aria-current={tab === k ? "page" : undefined}>{label}<span className="c">{leads.filter(f).length}</span></Link>
        ))}</nav></div></header>
      <div className="body">
        {tab === "candidates" && <Candidates leads={leads} />}
        {tab === "briefs" && <Briefs leads={leads} />}
        {tab === "build" && <BuildQueue leads={leads} />}
        {tab === "published" && <Published leads={leads} />}
      </div>
    </section>
  );
}
