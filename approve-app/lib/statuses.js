// Shared by server and client. Mirrors the pipeline in CLAUDE.md.
export const STATUSES = [
  "candidate", "rejected", "approved",
  "brief_ready", "brief_rework", "brief_approved",
  "planned", "built", "owner_approved",
];

export const LABELS = {
  candidate: "To review",
  rejected: "Rejected",
  approved: "Waiting for brief",
  brief_ready: "Brief to review",
  brief_rework: "Brief sent back",
  brief_approved: "Ready to plan",
  planned: "Planned",
  built: "Built",
  owner_approved: "Owner approved",
};

// Moves the human is allowed to make from this app.
export const HUMAN_MOVES = {
  candidate: ["approved", "rejected"],
  rejected: ["candidate"],
  approved: ["candidate"],
  brief_ready: ["brief_approved", "brief_rework"],
  brief_approved: ["brief_ready"],
  built: ["owner_approved"],
  owner_approved: ["built"],
};

export function canMove(from, to) {
  return (HUMAN_MOVES[from] || []).includes(to);
}

// Details Claude filled in for the mockup. They don't block approval; the owner confirms them later.
export const MOCKUP_TAG = "[MOCKUP]";
export function countMockups(text) {
  return text.split("\n").filter((l) => l.includes(MOCKUP_TAG)).length;
}
