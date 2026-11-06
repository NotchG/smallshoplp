"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowUpDown, ExternalLink } from "lucide-react";
import { useLeads } from "../useLeads";
import Rating from "../components/Rating";
import { NEXT, SALES, STAGE, URGENCY, daysSince, posterOf, shotUrl, stillOf, type Lead, type Stage } from "@/lib/leads";

type SortKey = "name" | "area" | "reviews" | "next" | "touch";
const touched = (l: Lead) => l.followup_sent_at || l.outreach_sent_at || l.updated_at || l.created_at || "";
const SORTS: Record<SortKey, (l: Lead) => string | number> = {
  name: (l) => l.name.toLowerCase(), area: (l) => l.area, reviews: (l) => -(l.reviews || 0),
  next: (l) => URGENCY.indexOf(l.stage), touch: (l) => -(new Date(touched(l)).getTime() || 0),
};
const day = (iso: string) => (iso ? new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "–");
const Chip = ({ stage }: { stage: Stage }) => <span className={`stage ${STAGE[stage][1]}`}>{STAGE[stage][0]}</span>;

function Drawer({ lead }: { lead: Lead }) {
  const st = lead.stage;
  const replied = ["link_due", "prospect", "hot", "do", "declined"].includes(st);
  const steps: [string, boolean, string][] = [
    ["Found on Maps", true, day(lead.created_at || "")],
    ["Brief approved", !["candidate", "approved", "brief_ready", "brief_rework", "rejected"].includes(st), ""],
    ["Site built and published", !!lead.preview_url, ""],
    ["Preview sent", !!lead.outreach_sent_at, lead.outreach_sent_at ? `${daysSince(lead.outreach_sent_at)} d ago` : ""],
    ["Follow-up sent", !!lead.followup_sent_at, lead.followup_sent_at ? `${daysSince(lead.followup_sent_at)} d ago` : ""],
    ["Owner replied", replied, lead.declined_at ? `${daysSince(lead.declined_at)} d ago` : ""],
    ["Link sent", !!lead.link_sent_at, lead.link_sent_at ? `${daysSince(lead.link_sent_at)} d ago` : ""],
    ["Ordered", st === "do", ""],
  ];
  const still = stillOf(lead);
  return (
    <>
      <div className={`frame${lead.media.video && lead.media.poster ? " stage" : ""}`}>
        {lead.media.video
          ? <video key={lead.slug} src={shotUrl(lead.slug, "outreach-scroll.mp4")} poster={posterOf(lead)} muted loop playsInline autoPlay />
          // eslint-disable-next-line @next/next/no-img-element
          : still ? <img src={still} alt={`${lead.name} mockup on a phone`} />
          : <div className="brief-doc"><h4>{lead.type}</h4><p>{lead.why}</p></div>}
      </div>
      <h3>{lead.name}</h3>
      <p className="hint" style={{ marginBottom: 8 }}>{lead.type} · {lead.area} · {lead.rating ?? "–"} from {(lead.reviews ?? 0).toLocaleString("en-US")} reviews</p>
      <Chip stage={st} />
      <ul className="timeline">{steps.map(([t, done, when]) => <li key={t} className={done ? "done" : ""}>{t}<time>{when}</time></li>)}</ul>
      <div className="acts">
        <Link className="btn small primary" href={`/shops/${lead.slug}`}>{NEXT[st]}</Link>
        {lead.preview_url && <a className="btn small" href={lead.preview_url} target="_blank" rel="noreferrer"><ExternalLink />Mockup</a>}
      </div>
    </>
  );
}

export default function Leads() {
  const router = useRouter();
  const { leads, error } = useLeads();
  const [q, setQ] = useState("");
  const [stage, setStage] = useState<"sales" | "production" | "all" | Stage>("sales");
  const [area, setArea] = useState("");
  const [sort, setSort] = useState<SortKey>("next");
  const [dir, setDir] = useState(1);
  const [openSlug, setOpenSlug] = useState("");

  const rows = useMemo(() => {
    const needle = q.toLowerCase();
    return (leads ?? []).filter((l) =>
      (stage === "all" || (stage === "sales" ? SALES.has(l.stage) : stage === "production" ? !SALES.has(l.stage) : l.stage === stage))
      && (!area || l.area === area) && (!needle || `${l.name} ${l.type} ${l.area}`.toLowerCase().includes(needle)))
      .sort((a, b) => { const x = SORTS[sort](a), y = SORTS[sort](b); return (x < y ? -1 : x > y ? 1 : 0) * dir; });
  }, [leads, q, stage, area, sort, dir]);

  if (error) return <p className="loading error">{error}</p>;
  if (!leads) return <p className="loading">Loading…</p>;
  const areas = [...new Set(leads.map((l) => l.area))].sort();
  const open = leads.find((l) => l.slug === openSlug);
  const th = (key: SortKey, label: string, cls = "") => (
    <th className={cls}><button type="button" onClick={() => { setDir(sort === key ? -dir : 1); setSort(key); }}
      aria-sort={sort === key ? (dir > 0 ? "ascending" : "descending") : undefined}>{label}{sort === key && <ArrowUpDown size={14} />}</button></th>
  );

  return (
    <section className="screen" aria-label="Leads">
      <header className="head"><h1>Leads</h1><p className="sub">Every shop, from Maps listing to order.</p></header>
      <div className="body" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="filters">
          <input className="input" type="search" placeholder="Search shops, types, areas" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search" />
          <select className="input" value={stage} onChange={(e) => setStage(e.target.value as typeof stage)} aria-label="Stage">
            <option value="sales">Sales stages</option><option value="production">Production stages</option><option value="all">Every stage</option>
            {URGENCY.filter((s) => leads.some((l) => l.stage === s)).map((s) => <option key={s} value={s}>{STAGE[s][0]}</option>)}
          </select>
          <select className="input" value={area} onChange={(e) => setArea(e.target.value)} aria-label="Area">
            <option value="">All areas</option>{areas.map((a) => <option key={a}>{a}</option>)}
          </select>
          <span className="total">{rows.length} shops</span>
        </div>
        <div className={`leads-layout ${open ? "open" : ""}`} style={{ flex: 1, minHeight: 0 }}>
          <div className="table-wrap">
            <table>
              <thead><tr><th aria-label="Preview" />{th("name", "Shop")}{th("area", "Area", "hide-sm")}{th("reviews", "Reviews", "hide-sm")}<th>Stage</th>{th("touch", "Last touch", "hide-sm")}{th("next", "Next step", "hide-sm")}</tr></thead>
              <tbody>
                {rows.length ? rows.map((l) => (
                  <tr key={l.slug} className="clickable" aria-selected={l.slug === openSlug} onClick={() => (window.matchMedia("(max-width: 760px)").matches ? router.push(`/shops/${l.slug}`) : setOpenSlug(openSlug === l.slug ? "" : l.slug))}>
                    <td><span className="thumb" style={{ backgroundImage: stillOf(l) ? `url('${stillOf(l)}')` : undefined }} /></td>
                    <td><strong>{l.name}</strong><small>{l.type}<span className="only-sm-inline"> · {NEXT[l.stage]}</span></small></td>
                    <td className="hide-sm">{l.area}</td>
                    <td className="hide-sm"><Rating rating={l.rating} reviews={l.reviews} /></td>
                    <td><Chip stage={l.stage} /></td>
                    <td className="hide-sm">{day(touched(l))}</td>
                    <td className="hide-sm">{NEXT[l.stage]}</td>
                  </tr>
                )) : <tr><td colSpan={7}><p className="empty"><strong>No shops match</strong>Clear the search or pick another stage.</p></td></tr>}
              </tbody>
            </table>
          </div>
          <aside className="drawer" aria-label="Lead details">{open && <Drawer lead={open} />}</aside>
        </div>
      </div>
    </section>
  );
}
