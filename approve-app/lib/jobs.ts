// Jobs for the worker: one JSON file and one log per job in data/jobs/ (gitignored).
// The app only queues and cancels; worker/run.mjs runs them, one at a time.
import fs from "node:fs/promises";
import path from "node:path";
import { ROOT, validSlug } from "./store";
import { JOB_ID, KINDS, isJobKind, type Job, type JobArgs, type JobKind } from "./jobkinds";

const DIR = path.join(ROOT, "data", "jobs");
const file = (id: string, ext: string) => path.join(DIR, `${id}.${ext}`);
const now = () => new Date().toISOString().replace(/\.\d+Z$/, "Z");
const SAFE_TEXT = /^[\p{L}\p{N} ,.'&()/-]{1,80}$/u; // area and types go into a prompt: plain words only

// Checks the request body; returns the job's kind and args, or why it's refused.
export function validateJob(body: unknown): { kind: JobKind; args: JobArgs } | string {
  const b = (body ?? {}) as Record<string, unknown>;
  if (!isJobKind(b.kind)) return "Unknown job.";
  const kind = b.kind;
  const args: JobArgs = {};
  if (kind === "discover") {
    if (typeof b.area !== "string" || !SAFE_TEXT.test(b.area.trim())) return "Name an area, in plain words.";
    args.area = b.area.trim();
    if (b.types !== undefined && b.types !== "") {
      if (typeof b.types !== "string" || !SAFE_TEXT.test(b.types.trim())) return "Shop types must be plain words.";
      args.types = b.types.trim();
    }
    const count = b.count === undefined ? 10 : Number(b.count);
    if (!Number.isInteger(count) || count < 1 || count > 30) return "Find between 1 and 30 shops at a time.";
    args.count = count;
  } else if (kind !== "sync") {
    if (b.slugs !== undefined) {
      if (!Array.isArray(b.slugs) || b.slugs.length > 100 || !b.slugs.every(validSlug)) return "Invalid shop list.";
      if (b.slugs.length) args.slugs = b.slugs;
    }
    if (b.force !== undefined) {
      if (kind !== "outreach-media" || typeof b.force !== "boolean") return "Only preview videos can be remade.";
      if (b.force) args.force = true;
    }
  }
  return { kind, args };
}

export async function createJob(kind: JobKind, args: JobArgs): Promise<Job> {
  await fs.mkdir(DIR, { recursive: true });
  const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6).padEnd(4, "0")}`;
  const job: Job = { id, kind, args, label: KINDS[kind].label(args), status: "queued", createdAt: now() };
  await fs.writeFile(file(id, "json.tmp"), JSON.stringify(job, null, 2));
  await fs.rename(file(id, "json.tmp"), file(id, "json"));
  return job;
}

export async function readJob(id: string): Promise<Job | null> {
  if (!JOB_ID.test(id)) return null;
  let job: Job;
  try { job = JSON.parse(await fs.readFile(file(id, "json"), "utf8")) as Job; } catch { return null; }
  if (job.status === "running") job.stopping = await fs.access(file(id, "cancel")).then(() => true, () => false);
  return job;
}

export async function listJobs(limit = 30): Promise<Job[]> {
  let names: string[] = [];
  try { names = (await fs.readdir(DIR)).filter((n) => n.endsWith(".json")); } catch { return []; }
  const jobs = await Promise.all(names.map((n) => readJob(n.slice(0, -5))));
  return jobs.filter((j): j is Job => !!j).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, limit);
}

// The log from a byte offset, so the page can poll for what's new.
export async function readLog(id: string, from = 0): Promise<{ text: string; next: number }> {
  if (!JOB_ID.test(id)) return { text: "", next: 0 };
  try {
    const fh = await fs.open(file(id, "log"), "r");
    try {
      const { size } = await fh.stat();
      const start = Math.min(Math.max(0, from), size);
      const buf = Buffer.alloc(size - start);
      await fh.read(buf, 0, buf.length, start);
      return { text: buf.toString("utf8"), next: size };
    } finally { await fh.close(); }
  } catch { return { text: "", next: from }; }
}

// A queued job is cancelled here; a running one gets a flag file the worker watches.
export async function cancelJob(id: string): Promise<Job | null> {
  const job = await readJob(id);
  if (!job) return null;
  if (job.status === "queued") {
    job.status = "cancelled";
    job.endedAt = now();
    await fs.writeFile(file(id, "json"), JSON.stringify(job, null, 2));
  } else if (job.status === "running") {
    await fs.writeFile(file(id, "cancel"), now());
  }
  return job;
}
