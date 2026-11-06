// Outreach and pipeline figures for the Metrics screen, from the lead timestamps.
import { SALES, type Lead } from "./leads";

export interface Week { start: Date; sent: number; followups: number }

export function metrics(leads: Lead[], now: number = Date.now()) {
  const contacted = leads.filter((l) => l.outreach_sent_at);
  const followed = contacted.filter((l) => l.followup_sent_at);
  const replied = leads.filter((l) => ["link_due", "prospect", "hot", "do", "declined"].includes(l.stage));
  const declined = replied.filter((l) => l.stage === "declined");
  const prospects = leads.filter((l) => ["prospect", "hot", "do"].includes(l.stage));
  const ordered = leads.filter((l) => l.stage === "do");
  // Days from the preview to the reply, where a reply has a timestamp (declines, and prospects' stage time)
  const replyDays = replied.map((l) => {
    const at = l.declined_at || l.owner_stage_at;
    return at && l.outreach_sent_at ? Math.round((new Date(at).getTime() - new Date(l.outreach_sent_at).getTime()) / 864e5) : null;
  }).filter((d): d is number => d !== null);

  // Last 6 weeks, Monday starts
  const monday = new Date(now); monday.setHours(0, 0, 0, 0); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const weeks: Week[] = Array.from({ length: 6 }, (_, k) => { const s = new Date(monday); s.setDate(s.getDate() - 7 * (5 - k)); return { start: s, sent: 0, followups: 0 }; });
  const weekOf = (iso: string) => weeks.findLast((w) => new Date(iso) >= w.start);
  for (const l of leads) {
    if (l.outreach_sent_at) { const w = weekOf(l.outreach_sent_at); if (w) w.sent++; }
    if (l.followup_sent_at) { const w = weekOf(l.followup_sent_at); if (w) w.followups++; }
  }
  const lastSend = Math.max(0, ...leads.flatMap((l) => [l.outreach_sent_at, l.followup_sent_at, l.link_sent_at]).filter(Boolean).map((s) => new Date(s!).getTime()));
  const daysSinceSend = lastSend ? Math.floor((now - lastSend) / 864e5) : null;

  // Where the leads sit, by area: candidates, in production or ready, contacted
  const byArea = Object.entries(leads.reduce<Record<string, Lead[]>>((m, l) => ((m[l.area] ||= []).push(l), m), {}))
    .map(([area, ls]) => ({
      area, total: ls.length,
      candidates: ls.filter((l) => l.stage === "candidate").length,
      contacted: ls.filter((l) => SALES.has(l.stage) && l.stage !== "ready").length,
      ready: ls.filter((l) => l.stage !== "candidate" && !(SALES.has(l.stage) && l.stage !== "ready") && l.stage !== "rejected").length,
    }))
    .sort((a, b) => b.total - a.total);
  const byType = Object.entries(leads.filter((l) => l.preview_url).reduce<Record<string, number>>((m, l) => ((m[l.type || "Other"] = (m[l.type || "Other"] || 0) + 1), m), {}))
    .sort((a, b) => b[1] - a[1]);

  return {
    contacted, followed, replied, declined, prospects, ordered, replyDays, weeks, daysSinceSend,
    ready: leads.filter((l) => l.stage === "ready").length, byArea, byType,
    firstContact: contacted.map((l) => l.outreach_sent_at!).sort()[0],
  };
}
