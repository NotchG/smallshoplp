"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLeads } from "../useLeads";
import { useToast } from "../components/Toast";
import { dropMove, patchShop } from "@/lib/actions";
import { STAGE, daysSince, stillOf, type Lead, type Stage } from "@/lib/leads";

const SALES_COLS: [string, string][] = [["ready", "Ready to send"], ["waiting", "Preview sent"], ["followup_due", "Follow-up due"],
  ["waiting_followup", "Followed up"], ["no_answer_due", "No reply"], ["link_due", "Send link"], ["prospect", "Prospect"],
  ["hot", "Hot"], ["do", "Ordered"], ["closed", "Closed"]];
const PROD_COLS: [string, string][] = [["candidate", "Candidates"], ["approved", "Approved"], ["brief_ready", "Brief to review"],
  ["brief_rework", "Sent back"], ["brief_approved", "Ready to build"], ["planned", "Building"], ["to_publish", "To publish"]];
const EMPTY: Record<string, [string, string]> = {
  ready: ["Nothing ready", "Built and published shops wait here for their preview."],
  waiting: ["Nothing in flight", "Previews you send wait here 3 days for a reply."],
  followup_due: ["No follow-ups due", "A preview with no reply for 3 days lands here."],
  waiting_followup: ["No follow-ups waiting", "Follow-ups wait here 3 days before closing."],
  no_answer_due: ["Nothing to close", "Follow-ups with no reply for 3 days land here."],
  link_due: ["No replies yet", "When an owner answers, drag them here: the link message comes next."],
  prospect: ["No prospects yet", "Leads move here once the link is sent."], hot: ["Nothing hot yet", "Drag here while you discuss price."],
  do: ["No orders yet", "Ordered sites land here."], closed: ["Nothing closed", "Declined and unanswered leads, before archiving."],
  candidate: ["No candidates", "Find shops from Production → Build queue."], approved: ["Nothing approved", "Approve candidates and Claude writes their briefs."],
  brief_ready: ["No briefs waiting", "Briefs Claude wrote wait here for you."], brief_rework: ["Nothing sent back", "Briefs you send back wait here for Claude."],
  brief_approved: ["Nothing to build", "Approved briefs wait here for a build."], planned: ["Nothing building", "Shops being planned and built."],
  to_publish: ["Nothing to publish", "Built sites wait here to go online."],
};
const colOf = (l: Lead): string => (l.stage === "no_answer" || l.stage === "declined" ? "closed" : l.stage);

function Card({ lead }: { lead: Lead }) {
  const still = stillOf(lead);
  const age = daysSince(lead.followup_sent_at) ?? daysSince(lead.outreach_sent_at);
  const meta = lead.stage === "candidate" ? `${lead.rating ?? "–"} from ${(lead.reviews ?? 0).toLocaleString("en-US")} reviews`
    : lead.followup_sent_at ? `Followed up ${age} d ago` : lead.outreach_sent_at ? `Sent ${age} d ago` : `${(lead.reviews ?? 0).toLocaleString("en-US")} reviews`;
  return (
    <Link href={`/shops/${lead.slug}`} className={`card ${still ? "" : "text"}`} draggable
      onDragStart={(e) => { e.dataTransfer.setData("text/plain", lead.slug); e.currentTarget.classList.add("dragging"); }}
      onDragEnd={(e) => e.currentTarget.classList.remove("dragging")}>
      {still && <span className="thumb" style={{ backgroundImage: `url('${still}')` }} />}
      <span><strong>{lead.name}</strong><small>{lead.area} · {meta}</small>
        {colOf(lead) === "closed" ? <span className={`stage ${STAGE[lead.stage][1]}`}>{STAGE[lead.stage][0]}</span>
          : lead.has_website ? <span className="stage">Has a website</span> : null}</span>
    </Link>
  );
}

export default function Pipeline() {
  const { leads, error } = useLeads();
  const toast = useToast();
  const [side, setSide] = useState<"sales" | "production">("sales");
  const [area, setArea] = useState("");
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [over, setOver] = useState("");
  const areas = useMemo(() => [...new Set((leads ?? []).map((l) => l.area))].sort(), [leads]);
  const board = useRef<HTMLDivElement>(null);
  const [more, setMore] = useState(false); // columns hidden off the right edge
  const check = () => { const b = board.current; if (b) setMore(b.scrollLeft + b.clientWidth < b.scrollWidth - 4); };
  useEffect(() => { check(); window.addEventListener("resize", check); return () => window.removeEventListener("resize", check); });

  async function drop(col: string, slug: string) {
    setOver("");
    const lead = leads?.find((l) => l.slug === slug);
    if (!lead || colOf(lead) === col) return;
    const move = dropMove(lead.stage as Stage, col);
    if (typeof move === "string") return toast(move, { error: true });
    try {
      await patchShop(slug, move.body);
      const undo = move.undo;
      toast(`${lead.name}: ${move.label}`, { undo: undo ? () => patchShop(slug, undo).catch((e) => toast(e.message, { error: true })) : undefined });
    } catch (e) {
      toast(e instanceof Error ? e.message : String(e), { error: true });
    }
  }

  if (error) return <p className="loading error">{error}</p>;
  if (!leads) return <p className="loading">Loading…</p>;
  const pool = leads.filter((l) => !area || l.area === area);
  const cols = side === "sales" ? SALES_COLS : PROD_COLS;

  return (
    <section className="screen" aria-label="Pipeline">
      <header className="head">
        <h1>Pipeline</h1>
        <p className="sub">Drag a lead to move it. Each move saves the same way as the buttons on its page.</p>
        <div className="tools">
          <div className="seg" role="group" aria-label="Pipeline half">
            <button type="button" aria-pressed={side === "sales"} onClick={() => setSide("sales")}>Sales</button>
            <button type="button" aria-pressed={side === "production"} onClick={() => setSide("production")}>Production</button>
          </div>
          <select className="input" value={area} onChange={(e) => setArea(e.target.value)} aria-label="Area">
            <option value="">All areas</option>{areas.map((a) => <option key={a}>{a}</option>)}
          </select>
        </div>
      </header>
      <div className="body">
        <div className={`board ${more ? "more-right" : ""}`} ref={board} onScroll={check}>
          {cols.map(([key, label]) => {
            const items = pool.filter((l) => colOf(l) === key).sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
            const shown = open.has(key) ? items : items.slice(0, 12);
            const [et, ed] = EMPTY[key] ?? ["Empty", ""];
            return (
              <section key={key} className={`col ${items.length ? "" : "slim"} ${over === key ? "drop" : ""}`} aria-label={`${label}, ${items.length}`}
                title={items.length ? undefined : `${et}. ${ed}`}
                onDragOver={(e) => { e.preventDefault(); setOver(key); }} onDragLeave={() => setOver((o) => (o === key ? "" : o))}
                onDrop={(e) => { e.preventDefault(); drop(key, e.dataTransfer.getData("text/plain")); }}>
                <header><b>{label}</b><span>{items.length}</span></header>
                <div className="col-list">
                  {shown.map((l) => <Card key={l.slug} lead={l} />)}
                  {items.length > shown.length && (
                    <button type="button" className="more" onClick={() => setOpen((s) => new Set(s).add(key))}>Show {items.length - shown.length} more</button>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
