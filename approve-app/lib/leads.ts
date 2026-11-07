// One lead per shop, with the stage it's at across both halves of the pipeline.
// Shared by the server (GET /api/leads) and the browser.
import { daysToMs, msSince, FOLLOW_UP_AFTER_DAYS, NO_ANSWER_AFTER_DAYS } from "./outreach";
import { sendTiming, type OpeningPeriod } from "./sendtime";
import type { Shop } from "./types";

export type Stage =
  // Production
  | "candidate" | "approved" | "brief_ready" | "brief_rework" | "brief_approved" | "planned" | "to_publish"
  // Sales
  | "ready" | "waiting" | "followup_due" | "waiting_followup" | "no_answer_due" | "link_due"
  | "prospect" | "hot" | "do"
  // Closed
  | "no_answer" | "declined" | "rejected";

export interface LeadMedia {
  video: boolean;   // screenshots/outreach-scroll.mp4
  poster: boolean;  // screenshots/outreach-poster.jpg: the video is the current laptop-and-phone style (9:16)
  phone: boolean;   // screenshots/outreach-phone.png
  fold: boolean;    // screenshots/390-fold.png
}

export interface BriefSummary {
  personality: string;
  sections: string[];
  mockups: number;
}

export interface Lead extends Shop {
  stage: Stage;
  area: string;
  media: LeadMedia;
  hook: string;
  phone: string;
  brief: BriefSummary | null;
  hours: OpeningPeriod[] | null; // Google opening hours (sales stages only), for when to message
}

export function leadStage(s: Shop, now: number = Date.now()): Stage {
  if (s.status === "rejected") return s.declined_at ? "declined" : s.owner_stage === "no_answer" ? "no_answer" : "rejected";
  if (s.status === "owner_approved") return "do";
  if (s.status !== "built") return s.status;
  if (!s.coolify_uuid) return "to_publish";
  if (!s.outreach_sent_at) return "ready";
  const st = s.owner_stage || "";
  if (st === "prospect") return s.link_sent_at ? "prospect" : "link_due";
  if (st === "hot") return "hot";
  if (st === "no_answer") return "no_answer";
  if (!s.followup_sent_at) return msSince(s.outreach_sent_at, now) >= daysToMs(FOLLOW_UP_AFTER_DAYS) ? "followup_due" : "waiting";
  return msSince(s.followup_sent_at, now) >= daysToMs(NO_ANSWER_AFTER_DAYS) ? "no_answer_due" : "waiting_followup";
}

// The kecamatan when the address names one, else the city.
export function areaOf(address = ""): string {
  const kec = /Kec\. ([^,]+)/.exec(address)?.[1];
  if (kec) return kec.replace(/^Kby\./, "Kebayoran").replace(/^Ps\./, "Pasar").replace(/\bjati\b/, "Jati");
  return /East Jakarta|Jakarta Timur/.test(address) ? "Jakarta Timur (other)" : "Other";
}

// label, chip class (shape + colour carry the state)
export const STAGE: Record<Stage, [string, string]> = {
  candidate: ["Candidate", "prod"], approved: ["Approved", "prod done"], brief_ready: ["Brief to review", "due"],
  brief_rework: ["Brief sent back", "prod"], brief_approved: ["Ready to build", "prod done"], planned: ["Building", "prod done"],
  to_publish: ["To publish", "prod done"], ready: ["Ready to send", ""], waiting: ["Preview sent", "done"],
  followup_due: ["Follow-up due", "over"], waiting_followup: ["Followed up", "done"], no_answer_due: ["No reply", "due"],
  link_due: ["Replied: send link", "due"], prospect: ["Prospect", "ok"], hot: ["Hot prospect", "ok done"], do: ["Ordered", "ok done"],
  no_answer: ["No answer", "closed"], declined: ["Declined", "closed"], rejected: ["Rejected", "closed"],
};

export const NEXT: Record<Stage, string> = {
  candidate: "Approve or reject", approved: "Claude writes brief", brief_ready: "Review brief", brief_rework: "Claude revises",
  brief_approved: "Claude builds", planned: "Claude builds", to_publish: "Publish", ready: "Send preview", waiting: "Wait",
  followup_due: "Follow up", waiting_followup: "Wait", no_answer_due: "Close as no answer", link_due: "Send link",
  prospect: "Talk price", hot: "Close the deal", do: "Build the real site", no_answer: "Archive", declined: "Archive", rejected: "–",
};

export const SALES: ReadonlySet<Stage> = new Set<Stage>(["ready", "waiting", "followup_due", "waiting_followup", "no_answer_due",
  "link_due", "prospect", "hot", "do", "no_answer", "declined"]);

// Order leads by what needs you first.
export const URGENCY: readonly Stage[] = ["followup_due", "link_due", "no_answer_due", "brief_ready", "ready", "waiting",
  "waiting_followup", "prospect", "hot", "do", "candidate", "approved", "brief_rework", "brief_approved", "planned",
  "to_publish", "no_answer", "declined", "rejected"];

export const daysSince = (iso: string | undefined, now: number = Date.now()): number | null =>
  iso ? Math.floor(msSince(iso, now) / daysToMs(1)) : null;

export const shotUrl = (slug: string, file: string) => `/api/shops/${slug}/file?path=screenshots/${file}`;

// The best still for a lead: the sharp phone shot, else the build's 1x phone screenshot.
export const stillOf = (l: Lead): string =>
  l.media.phone ? shotUrl(l.slug, "outreach-phone.png") : l.media.fold ? shotUrl(l.slug, "390-fold.png") : "";

// The video's poster: its own first frame when it's the current style, else the phone still.
export const posterOf = (l: Lead): string => (l.media.poster ? shotUrl(l.slug, "outreach-poster.jpg") : stillOf(l));

// A video still in the old phone-only style (or none) needs making again.
export const needsVideo = (l: Lead): boolean => !l.media.video || !l.media.poster;

// ---------- Today ----------
export type TodayAction = "followup" | "link" | "close" | "brief" | "send";
export const DAILY_SENDS = 5; // previews per day, to keep the WhatsApp number in good standing

// The cold messages (preview and follow-up) wait for a good time at the shop (lib/sendtime.ts):
// the ones in a window now keep their place, the rest go last, soonest window first. A link goes
// out whenever: the owner asked for it.
export function todayQueue(leads: Lead[], sentToday: number, now: number = Date.now()): { lead: Lead; action: TodayAction }[] {
  const at = (st: Stage, action: TodayAction, sort?: (a: Lead, b: Lead) => number) =>
    leads.filter((l) => l.stage === st).sort(sort ?? (() => 0)).map((lead) => ({ lead, action }));
  const t = (iso?: string) => (iso ? new Date(iso).getTime() : 0);
  const timing = new Map(leads.map((l) => [l.slug, sendTiming(l.hours, now)]));
  const good = (l: Lead) => timing.get(l.slug)!.now;
  const next = (l: Lead) => timing.get(l.slug)!.at;
  // Today's previews: the best-reviewed shops in a window now, then the soonest to open one.
  const ready = leads.filter((l) => l.stage === "ready")
    .sort((a, b) => Number(good(b)) - Number(good(a)) || (good(a) ? 0 : next(a) - next(b)) || (b.reviews || 0) - (a.reviews || 0));
  const followups = at("followup_due", "followup", (a, b) => t(a.outreach_sent_at) - t(b.outreach_sent_at));
  const sends = ready.slice(0, Math.max(0, DAILY_SENDS - sentToday)).map((lead) => ({ lead, action: "send" as const }));
  const later = [...followups, ...sends].filter((q) => !good(q.lead)).sort((a, b) => next(a.lead) - next(b.lead));
  return [
    ...followups.filter((q) => good(q.lead)),
    ...at("link_due", "link"),
    ...at("no_answer_due", "close", (a, b) => t(a.followup_sent_at) - t(b.followup_sent_at)),
    ...at("brief_ready", "brief"),
    ...sends.filter((q) => good(q.lead)),
    ...later,
  ];
}

// Previews marked as sent today (local time), for the daily pace.
export function sentTodayCount(leads: Lead[], now: number = Date.now()): number {
  const start = new Date(now); start.setHours(0, 0, 0, 0);
  return leads.filter((l) => l.outreach_sent_at && new Date(l.outreach_sent_at) >= start).length;
}
