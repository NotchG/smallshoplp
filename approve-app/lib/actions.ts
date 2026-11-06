// What each button and drag in the dashboard sends to PATCH /api/shops/<slug>, and how to undo it.
// Browser only.
import type { Lead, Stage } from "./leads";

export type ShopPatch =
  | { status: Lead["status"]; note?: string }
  | { outreach_sent: boolean }
  | { owner: OwnerOp };

export type OwnerOp = "followup_sent" | "followup_unsent" | "no_answer" | "unclose" | "prospect" | "unreply"
  | "link_sent" | "link_unsent" | "hot" | "do" | "reopen" | "undecline";

// Copies text. navigator.clipboard only exists on HTTPS (or localhost); over plain HTTP, as on the
// NAS at <address>:3030, fall back to the older selection copy. Returns whether it worked.
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
  } catch { /* fall through */ }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  ta.setSelectionRange(0, text.length); // iOS
  let ok = false;
  try { ok = document.execCommand("copy"); } catch { ok = false; }
  ta.remove();
  return ok;
}

export async function patchShop(slug: string, body: ShopPatch): Promise<void> {
  const res = await fetch(`/api/shops/${slug}`, {
    method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
  });
  const json = (await res.json()) as { error?: string };
  if (!res.ok) throw new Error(json.error || "That didn't save.");
  window.dispatchEvent(new Event("shops-changed"));
}

export interface Move {
  label: string;      // what the toast says happened
  body: ShopPatch;
  undo?: ShopPatch;
}

// Every effect a Today rail button or a lead page button can have.
export const EFFECTS = {
  sent: { label: "Preview marked as sent", body: { outreach_sent: true }, undo: { outreach_sent: false } },
  followup_sent: { label: "Follow-up marked as sent", body: { owner: "followup_sent" }, undo: { owner: "followup_unsent" } },
  replied: { label: "Owner replied: send the link next", body: { owner: "prospect" }, undo: { owner: "unreply" } },
  link_sent: { label: "Link sent: now a prospect", body: { owner: "link_sent" }, undo: { owner: "link_unsent" } },
  close: { label: "Closed as no answer, queued for archive", body: { owner: "no_answer" }, undo: { owner: "unclose" } },
  declined: { label: "Marked as declined, queued for archive", body: { status: "rejected" }, undo: { owner: "undecline" } },
  hot: { label: "Now a hot prospect", body: { owner: "hot" }, undo: { owner: "prospect" } },
  ordered: { label: "Ordered", body: { owner: "do" }, undo: { owner: "hot" } },
  approve_brief: { label: "Brief approved: Claude builds it next", body: { status: "brief_approved" }, undo: { status: "brief_ready" } },
  approve: { label: "Approved: Claude writes the brief next", body: { status: "approved" }, undo: { status: "candidate" } },
  reject: { label: "Rejected", body: { status: "rejected" }, undo: { status: "candidate" } },
} satisfies Record<string, Move>;
export type Effect = keyof typeof EFFECTS;

// Pipeline drag: which drops mean something, from which stage. Anything else snaps back.
export function dropMove(from: Stage, to: string): Move | string {
  const sentStages: Stage[] = ["waiting", "followup_due", "waiting_followup", "no_answer_due"];
  switch (to) {
    case "waiting": return from === "ready" ? EFFECTS.sent : "Only a preview that's ready can be marked as sent.";
    case "waiting_followup": return from === "followup_due" ? EFFECTS.followup_sent : "Only a due follow-up can be marked as sent.";
    case "link_due": return sentStages.includes(from) ? EFFECTS.replied : "Only a lead you've sent a preview to can reply.";
    case "prospect": return from === "link_due" ? EFFECTS.link_sent : from === "hot" ? { label: "Back to prospect", body: { owner: "prospect" }, undo: { owner: "hot" } } : "Send the link first.";
    case "hot": return from === "prospect" || from === "link_due" ? EFFECTS.hot : "Only a lead that replied can be hot.";
    case "do": return from === "prospect" || from === "hot" ? EFFECTS.ordered : "Only a prospect can order.";
    case "closed":
      if (from === "no_answer_due") return EFFECTS.close;
      return sentStages.includes(from) || ["link_due", "prospect", "hot"].includes(from) ? EFFECTS.declined : "Only a lead you've contacted can be closed.";
    case "approved": return from === "candidate" ? EFFECTS.approve : "Only candidates can be approved here.";
    case "brief_approved": return from === "brief_ready" ? EFFECTS.approve_brief : "Only a brief waiting on review can be approved.";
    case "brief_rework": return "Open the brief to send it back with a note.";
    default: return "Claude moves leads into this column; run its step instead.";
  }
}
