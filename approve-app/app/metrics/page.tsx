"use client";
import { useLeads } from "../useLeads";
import { metrics } from "@/lib/metrics";

const pct = (a: number, b: number) => (b ? `${Math.round((a / b) * 100)}%` : "–");
const day = (iso?: string) => (iso ? new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "–");

export default function Metrics() {
  const { leads, error } = useLeads();
  if (error) return <p className="loading error">{error}</p>;
  if (!leads) return <p className="loading">Loading…</p>;
  const m = metrics(leads);
  const n = m.contacted.length;
  const steps: [string, number, string][] = [["Contacted", n, ""], ["Followed up", m.followed.length, pct(m.followed.length, n)],
    ["Replied", m.replied.length, pct(m.replied.length, n)], ["Prospects", m.prospects.length, pct(m.prospects.length, n)], ["Ordered", m.ordered.length, pct(m.ordered.length, n)]];

  const W = 560, H = 200, bw = 46, gap = (W - 6 * bw) / 6;
  const maxW = Math.max(1, ...m.weeks.map((w) => w.sent + w.followups));
  const topAreas = m.byArea.slice(0, 9);
  const maxA = Math.max(1, ...topAreas.map((a) => a.total));
  const maxT = Math.max(1, ...m.byType.map(([, c]) => c));
  const segs: [string, "candidates" | "ready" | "contacted", string][] = [["Candidates", "candidates", "#c7b9a64d"], ["In production or ready", "ready", "var(--fog)"], ["Contacted", "contacted", "#fff"]];

  return (
    <section className="screen" aria-label="Metrics">
      <header className="head"><h1>Metrics</h1>
        <p className="sub">{n ? `From ${n} shops contacted since ${day(m.firstContact)}.` : "No shops contacted yet."}</p></header>
      <div className="body"><div className="grid2">
        <section className="panel wide"><h2>Outreach funnel</h2>
          <div className="funnel">{steps.map(([label, v, rate]) => (
            <div className="funnel-step" key={label}><b>{v}</b><span>{label}</span><span className="rate">{rate ? `${rate} of contacted` : "\u00a0"}</span></div>
          ))}</div>
          <p className="hint">
            {m.replied.length ? `${m.replied.length} replied so far${m.declined.length ? `, ${m.declined.length} of them to decline` : ""}. ` : "No replies yet. "}
            {m.replyDays.length ? `Replies came after ${m.replyDays.join(", ")} days. ` : ""}
            Shops contacted before video-first outreach got the link in their first message.
          </p>
        </section>

        <section className="panel"><h2>Sent per week</h2>
          <svg className="chart" viewBox={`0 -24 ${W} ${H + 54}`} width="100%" role="img" aria-label="Previews and follow-ups sent per week">
            {m.weeks.map((w, k) => {
              const x = gap / 2 + k * (bw + gap), hs = (w.sent / maxW) * H, hf = (w.followups / maxW) * H, total = w.sent + w.followups;
              return (
                <g key={k}>
                  <rect x={x} y={H - hs} width={bw} height={hs} fill="#fff" rx={2} />
                  <rect x={x} y={H - hs - hf} width={bw} height={hf} fill="var(--sand)" rx={2} />
                  {total ? <text x={x + bw / 2} y={H - hs - hf - 6} textAnchor="middle" style={{ fill: "var(--text)" }}>{total}</text>
                    : <line x1={x} x2={x + bw} y1={H} y2={H} stroke="var(--mist)" strokeWidth={2} />}
                  <text x={x + bw / 2} y={H + 20} textAnchor="middle">{w.start.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</text>
                </g>
              );
            })}
          </svg>
          <div className="legend"><span><i style={{ background: "#fff" }} />Previews</span><span><i style={{ background: "var(--sand)" }} />Follow-ups</span></div>
          {m.daysSinceSend !== null && m.daysSinceSend > 2 && <p className="hint">Nothing sent in {m.daysSinceSend} days, with {m.ready} previews ready.</p>}
        </section>

        <section className="panel"><h2>Where the leads are</h2>
          {topAreas.map((a) => (
            <div className="bar-row" key={a.area}><span>{a.area}</span>
              <span className="track" style={{ width: `${(a.total / maxA) * 100}%` }}>
                {segs.map(([, k, c]) => (a[k] ? <i key={k} style={{ flex: a[k], background: c }} /> : null))}
              </span><b>{a.total}</b></div>
          ))}
          <div className="legend">{segs.map(([label, , c]) => <span key={label}><i style={{ background: c }} />{label}</span>)}</div>
        </section>

        <section className="panel wide"><h2>Published mockups by category</h2>
          {m.byType.map(([t, c]) => (
            <div className="bar-row" key={t}><span>{t}</span><span className="track" style={{ width: `${(c / maxT) * 100}%` }}><i style={{ flex: 1, background: "#fff" }} /></span><b>{c}</b></div>
          ))}
        </section>
      </div></div>
    </section>
  );
}
