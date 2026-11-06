// What the worker on the NAS can run, shared by the server and the browser.
// The worker (worker/run.mjs) turns each kind into its command; nothing else can be run.

export type JobKind = "discover" | "brief" | "build" | "outreach-lines" | "publish" | "outreach-media" | "archive" | "sync";
export type JobStatus = "queued" | "running" | "done" | "failed" | "cancelled";

export interface JobArgs {
  slugs?: string[];      // empty or missing: every shop in the stage that step expects
  area?: string;         // discover
  types?: string;        // discover, e.g. "bakeries and cafes"
  count?: number;        // discover
}

export interface Job {
  id: string;
  kind: JobKind;
  args: JobArgs;
  label: string;
  status: JobStatus;
  createdAt: string;
  startedAt?: string;
  endedAt?: string;
  exitCode?: number | null;
  error?: string;
  stopping?: boolean; // running, and cancelled from the app: the worker is stopping it
}

const list = (slugs?: string[]) => (slugs?.length ? (slugs.length > 3 ? `${slugs.length} shops` : slugs.join(", ")) : "every shop waiting");

export const KINDS: Record<JobKind, { title: string; label: (a: JobArgs) => string; claude: boolean }> = {
  discover: { title: "Find shops", claude: true, label: (a) => `Find ${a.count ?? 10} ${a.types || "places that sell food"} in ${a.area}` },
  brief: { title: "Write briefs", claude: true, label: (a) => `Write briefs: ${list(a.slugs)}` },
  build: { title: "Plan and build", claude: true, label: (a) => `Plan and build: ${list(a.slugs)}` },
  "outreach-lines": { title: "Write personal lines", claude: true, label: (a) => `Personal lines: ${list(a.slugs)}` },
  publish: { title: "Publish", claude: false, label: (a) => `Publish to Coolify: ${list(a.slugs)}` },
  "outreach-media": { title: "Make preview videos", claude: false, label: (a) => `Preview videos: ${list(a.slugs)}` },
  archive: { title: "Archive", claude: false, label: (a) => `Archive: ${list(a.slugs)}` },
  sync: { title: "Sync with GitHub", claude: false, label: () => "Sync with GitHub" },
};

export const isJobKind = (k: unknown): k is JobKind => typeof k === "string" && k in KINDS;
export const JOB_ID = /^[a-z0-9]{6,16}-[a-z0-9]{4}$/;
