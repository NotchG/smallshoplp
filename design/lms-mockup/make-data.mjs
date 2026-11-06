// Snapshot of data/shops.json for the LMS mockup, with each shop's stage worked out the same way
// approve-app/lib/pipeline.ts does. Run from the project root: node design/lms-mockup/make-data.mjs
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const DAY = 864e5;
const now = Date.now();
const { shops } = JSON.parse(fs.readFileSync(path.join(ROOT, "data/shops.json"), "utf8"));

const days = (iso) => (iso ? Math.floor((now - new Date(iso).getTime()) / DAY) : null);
// The kecamatan when the address names one, else the city.
const area = (addr = "") => {
  const kec = /Kec\. ([^,]+)/.exec(addr)?.[1];
  if (kec) return kec.replace(/^Kby\./, "Kebayoran").replace(/^Ps\./, "Pasar").replace(/\bjati\b/, "Jati");
  return /East Jakarta|Jakarta Timur/.test(addr) ? "Jakarta Timur (other)" : "Other";
};
const has = (slug, rel) => fs.existsSync(path.join(ROOT, "shops", slug, rel));
const readJson = (p) => { try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; } };

function briefSummary(file) {
  let text = "";
  try { text = fs.readFileSync(file, "utf8"); } catch { return null; }
  // The paragraph is hard-wrapped, so take it up to the blank line and unwrap it.
  const personality = (/## Personality\n+([\s\S]*?)\n\s*\n/.exec(text)?.[1] ?? "").replace(/\s*\n\s*/g, " ");
  return {
    // Source tags like "(reviews 1, 3)" dropped, first sentence only.
    personality: personality.replace(/\s*\([^()]*\)/g, "").split(/(?<=\.)\s/)[0],
    sections: [...text.matchAll(/^## (.+)$/gm)].map((m) => m[1]),
    mockups: (text.match(/\[MOCKUP\]/g) || []).length,
  };
}

function stage(s) {
  if (s.status === "rejected") return s.declined_at ? "declined" : s.owner_stage === "no_answer" ? "no_answer" : "rejected";
  if (s.status === "owner_approved") return "do";
  if (s.status !== "built") return s.status; // candidate, approved, brief_ready, brief_rework, brief_approved, planned
  if (!s.coolify_uuid) return "to_publish";
  if (!s.outreach_sent_at) return "ready";
  const st = s.owner_stage || "";
  if (st === "prospect") return s.link_sent_at ? "prospect" : "link_due";
  if (st === "hot") return "hot";
  if (st === "no_answer") return "no_answer";
  if (!s.followup_sent_at) return days(s.outreach_sent_at) >= 3 ? "followup_due" : "waiting";
  return days(s.followup_sent_at) >= 3 ? "no_answer_due" : "waiting_followup";
}

const leads = shops.map((s) => {
  const dir = path.join(ROOT, "shops", s.slug);
  const out = readJson(path.join(dir, "outreach.json"));
  return {
    slug: s.slug, name: s.name, type: s.type || "", area: area(s.address), reviews: s.reviews ?? null,
    rating: s.rating ?? null, why: s.why || "", hasWebsite: !!s.has_website, status: s.status, stage: stage(s),
    preview: s.preview_url || "", sentAt: s.outreach_sent_at || "", followAt: s.followup_sent_at || "", declinedAt: s.declined_at || "",
    sentDays: days(s.outreach_sent_at), followDays: days(s.followup_sent_at),
    linkDays: days(s.link_sent_at), stageDays: days(s.owner_stage_at), declinedDays: days(s.declined_at),
    touched: s.followup_sent_at || s.outreach_sent_at || s.updated_at || s.created_at || "",
    hook: out?.hook || "",
    media: {
      video: has(s.slug, "screenshots/outreach-scroll.mp4"), phone: has(s.slug, "screenshots/outreach-phone.png"),
      fold: has(s.slug, "screenshots/390-fold.png"), desk: has(s.slug, "screenshots/1440-fold.png"),
    },
    briefNote: s.brief_note || "",
    // For briefs waiting on review: the brief's section headings and its personality line.
    brief: s.status === "brief_ready" ? briefSummary(path.join(dir, "brief.md")) : null,
  };
});

const data = { generatedAt: new Date(now).toISOString(), leads };
fs.writeFileSync(path.join(ROOT, "design/lms-mockup/data.js"), `window.LMS = ${JSON.stringify(data)};\n`);
const count = {};
for (const l of leads) count[l.stage] = (count[l.stage] || 0) + 1;
console.log(leads.length, "leads", JSON.stringify(count));
