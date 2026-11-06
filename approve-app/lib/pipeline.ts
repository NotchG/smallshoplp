import { FOLLOW_UP_AFTER_DAYS, NO_ANSWER_AFTER_DAYS, daysToMs, msSince } from "./outreach";
import type { Shop } from "./types";

export type StepKey = "found" | "brief" | "review" | "plan" | "build" | "publish" | "send" | "decision";
export interface Step {
  key: StepKey;
  title: string;
  who: "you" | "claude";
  about: string;
}

// The 8 steps every shop goes through, which one it's on, and what moves it forward.
// Shared by the server and the browser.

export const STEPS: readonly Step[] = [
  { key: "found",    title: "Found",          who: "you",    about: "Claude found this shop. Approve it to write a brief, or reject it." },
  { key: "brief",    title: "Brief",          who: "claude", about: "Claude fetches the listing, reviews and photos, and writes the shop brief." },
  { key: "review",   title: "Review brief",   who: "you",    about: "Check the brief, edit the highlighted [MOCKUP] lines, approve or send back." },
  { key: "plan",     title: "Plan",           who: "claude", about: "Claude writes the PRD, TRD, design brief and implementation plan." },
  { key: "build",    title: "Build",          who: "claude", about: "Claude builds the Next.js mockup and reviews it in screenshots." },
  { key: "publish",  title: "Publish",        who: "claude", about: "Push the site to GitHub and create its Coolify app, so it goes online." },
  { key: "send",     title: "Send preview",   who: "you",    about: "Send the owner a short video of their mockup on WhatsApp. No link yet." },
  { key: "decision", title: "Owner decision", who: "you",    about: "Wait for a reply, follow up if needed. When they reply, send the link, then track the deal through to the order." },
];

// The owner declined, or never answered the follow-up. These shops are rejected, and
// scripts/archive-rejected.sh deletes their site and Coolify app (sets archived_at).
export function isOwnerClosed(shop: Shop): boolean {
  return shop.status === "rejected" && (!!shop.declined_at || shop.owner_stage === "no_answer");
}

// Index of the current step. STEPS.length means finished; -1 means rejected.
export function currentStep(shop: Shop): number {
  switch (shop.status) {
    case "rejected": return -1;
    case "candidate": return 0;
    case "approved":
    case "brief_rework": return 1;
    case "brief_ready": return 2;
    case "brief_approved": return 3;
    case "planned": return 4;
    case "built":
      if (!shop.coolify_uuid) return 5;
      if (!shop.outreach_sent_at) return 6;
      return 7;
    case "owner_approved": return STEPS.length;
    default: return 0;
  }
}

// What to do next, for the panel at the bottom of a shop's page.
// kind: "decide" (buttons here), "brief" (link to brief editor), "claude" (copy commands),
//       "send" (outreach message), "owner" (owner decision), "done", "rejected"
export interface Command {
  label: string;
  text: string;
}

export type NextAction =
  | { kind: "decide" | "brief" | "send" | "owner" | "done" | "rejected"; title: string; text?: string }
  | { kind: "claude"; title: string; text?: string; commands: Command[] };

export function nextAction(shop: Shop): NextAction {
  const slug = shop.slug;
  const step = currentStep(shop);
  if (step === -1) {
    if (!isOwnerClosed(shop)) return { kind: "rejected", title: "Rejected", text: "This shop was rejected. Move it back to review if you change your mind." };
    const title = shop.declined_at ? "Owner declined" : "No answer";
    if (shop.archived_at) {
      return { kind: "rejected", title, text: `The site and its Coolify app are deleted; the brief, listing and photos are kept in shops/_rejected/${slug}/.` };
    }
    return {
      kind: "claude",
      title: `${title}: archive the site`,
      text: "Deletes the site and its Coolify app, and keeps the brief, listing and photos in shops/_rejected/. Run it locally, since it talks to your Coolify.",
      commands: [
        { label: "Claude Code", text: `/shop-landing archive ${slug}` },
        { label: "Or terminal", text: `./scripts/archive-rejected.sh ${slug}` },
      ],
    };
  }
  if (step >= STEPS.length) return { kind: "done", title: "Owner approved", text: "The owner wants the site. Next: turn the mockup into the real site." };

  switch (STEPS[step].key) {
    case "found":
      return { kind: "decide", title: "Approve or reject this shop", text: STEPS[0].about };
    case "brief":
      return {
        kind: "claude",
        title: shop.status === "brief_rework" ? "Claude revises the brief" : "Claude writes the brief",
        text: shop.status === "brief_rework"
          ? `You sent the brief back with: "${shop.brief_note}". Run this in Claude Code (needs the Places key, so run it locally):`
          : "Run this in Claude Code. It calls the Places API, so run it locally, not in a cloud session.",
        commands: [{ label: "Claude Code", text: `/shop-landing brief ${slug}` }],
      };
    case "review":
      return { kind: "brief", title: "Review the brief", text: STEPS[2].about };
    case "plan":
      return {
        kind: "claude",
        title: "Claude plans and builds the site",
        text: "Plans first, then builds, in one run. Works locally or in a cloud session (push first). Add \"plan only\" to read the docs before anything is built.",
        commands: [
          { label: "Plan and build", text: `/shop-landing build ${slug}` },
          { label: "Plan only", text: `/shop-landing build ${slug}, plan only` },
        ],
      };
    case "build":
      return {
        kind: "claude",
        title: "Claude builds the site",
        text: "The plan is ready (see the docs below). Run this to build and review the site.",
        commands: [{ label: "Claude Code", text: `/shop-landing build ${slug}` }],
      };
    case "publish":
      return {
        kind: "claude",
        title: "Publish to Coolify",
        text: "Coolify builds from GitHub, so push the site first, then create its app. Run the publish step locally, since it talks to your Coolify.",
        commands: [
          { label: "Terminal: push the site", text: `git add shops/${slug} data/shops.json && git commit -m "Add ${slug} mockup" && git push` },
          { label: "Claude Code", text: `/shop-landing publish ${slug}` },
          { label: "Or terminal", text: `./scripts/coolify-publish.sh ${slug}` },
        ],
      };
    case "send":
      return { kind: "send", title: "Send the preview to the owner", text: STEPS[6].about };
    case "decision":
      return { kind: "owner", title: "Waiting for the owner", text: STEPS[7].about };
  }
}

// Commands that move every shop in a group at once, for the home page.
export const BATCH: Record<"brief" | "build" | "publish" | "archive", string> = {
  brief: "/shop-landing brief",
  build: "/shop-landing build",
  publish: "/shop-landing publish",
  archive: "/shop-landing archive",
};

// Where a shop stands with its owner once the preview has been sent.
// phase:
//   "waiting"          first message sent, waiting for a reply
//   "followup_due"     no reply for FOLLOW_UP_AFTER_DAYS → send the follow-up
//   "waiting_followup" follow-up sent, waiting
//   "no_answer_due"    no reply for NO_ANSWER_AFTER_DAYS after the follow-up → close it
//   "no_answer"        closed as no answer (the shop is rejected)
//   "link_due"         owner replied → send the mockup link
//   "prospect" | "hot" | "do"   the deal stages
//   "declined"         owner said no
//   null               not sent yet
export type DealStage = "prospect" | "hot" | "do";
export const DEAL_STAGES: readonly { key: DealStage; title: string; about: string }[] = [
  { key: "prospect", title: "Prospect",     about: "Replied and interested" },
  { key: "hot",      title: "Hot prospect", about: "Discussing details or price" },
  { key: "do",       title: "DO",           about: "Ordered" },
];

export type OwnerPhaseName =
  | "waiting" | "followup_due" | "waiting_followup" | "no_answer_due" | "no_answer"
  | "link_due" | "prospect" | "hot" | "do" | "declined";

export interface OwnerPhase {
  phase: OwnerPhaseName | null;
  since?: string;
  waited?: number;
}

export function ownerPhase(shop: Shop, now: number = Date.now()): OwnerPhase {
  if (shop.status === "owner_approved") return { phase: "do", since: shop.owner_stage_at };
  if (shop.status === "rejected" && shop.declined_at) return { phase: "declined", since: shop.declined_at };
  if (shop.status === "rejected" && shop.owner_stage === "no_answer") return { phase: "no_answer", since: shop.owner_stage_at };
  if (shop.status !== "built" || !shop.outreach_sent_at) return { phase: null };
  const stage = shop.owner_stage || "";
  if (stage === "prospect" && !shop.link_sent_at) return { phase: "link_due", since: shop.owner_stage_at };
  if (stage === "prospect" || stage === "hot") return { phase: stage, since: shop.owner_stage_at };
  if (stage === "no_answer") return { phase: "no_answer", since: shop.owner_stage_at }; // closed before no answer meant rejected
  if (!shop.followup_sent_at) {
    const waited = msSince(shop.outreach_sent_at, now);
    return { phase: waited >= daysToMs(FOLLOW_UP_AFTER_DAYS) ? "followup_due" : "waiting", since: shop.outreach_sent_at, waited };
  }
  const waited = msSince(shop.followup_sent_at, now);
  return { phase: waited >= daysToMs(NO_ANSWER_AFTER_DAYS) ? "no_answer_due" : "waiting_followup", since: shop.followup_sent_at, waited };
}
