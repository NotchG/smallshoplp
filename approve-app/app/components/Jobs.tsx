"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Square } from "lucide-react";
import { useToast } from "./Toast";
import { KINDS, type Job, type JobArgs, type JobKind } from "@/lib/jobkinds";

export async function queueJob(kind: JobKind, args: JobArgs = {}): Promise<Job> {
  const res = await fetch("/api/jobs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind, ...args }) });
  const data = (await res.json()) as { job?: Job; error?: string };
  if (!res.ok || !data.job) throw new Error(data.error || "Couldn't queue that job.");
  window.dispatchEvent(new Event("jobs-changed"));
  return data.job;
}

// Recent jobs; polls quickly while one is queued or running.
export function useJobs() {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const load = useCallback(async () => {
    try { const res = await fetch("/api/jobs", { cache: "no-store" }); setJobs(((await res.json()) as { jobs: Job[] }).jobs); } catch {}
  }, []);
  const busy = !!jobs?.some((j) => j.status === "queued" || j.status === "running");
  useEffect(() => {
    load();
    const t = setInterval(load, busy ? 2500 : 15000);
    window.addEventListener("jobs-changed", load);
    return () => { clearInterval(t); window.removeEventListener("jobs-changed", load); };
  }, [load, busy]);
  // When a job finishes, the data it changed should show everywhere.
  const doneCount = jobs?.filter((j) => j.status === "done").length;
  useEffect(() => { if (doneCount !== undefined) window.dispatchEvent(new Event("shops-changed")); }, [doneCount]);
  return { jobs, reload: load };
}

export function RunButton({ kind, args, label, primary = false, disabled = false }: {
  kind: JobKind; args?: JobArgs; label?: string; primary?: boolean; disabled?: boolean;
}) {
  const toast = useToast();
  const [busy, setBusy] = useState(false);
  return (
    <button type="button" className={`btn small ${primary ? "primary" : ""}`} disabled={busy || disabled}
      onClick={async () => {
        setBusy(true);
        try { const job = await queueJob(kind, args); toast(`Queued: ${job.label}`); }
        catch (e) { toast(e instanceof Error ? e.message : String(e), { error: true }); }
        finally { setBusy(false); }
      }}>
      <Play size={14} />{label ?? KINDS[kind].title}
    </button>
  );
}

function Log({ job }: { job: Job }) {
  const [text, setText] = useState("");
  const next = useRef(0);
  const box = useRef<HTMLPreElement>(null);
  const live = job.status === "queued" || job.status === "running";
  useEffect(() => {
    let stop = false;
    const tick = async () => {
      const res = await fetch(`/api/jobs/${job.id}?from=${next.current}`, { cache: "no-store" });
      if (!res.ok || stop) return;
      const data = (await res.json()) as { log: string; next: number };
      next.current = data.next;
      if (data.log) {
        setText((t) => t + data.log);
        requestAnimationFrame(() => box.current?.scrollTo({ top: box.current.scrollHeight }));
      }
    };
    tick();
    const t = live ? setInterval(tick, 1500) : undefined;
    return () => { stop = true; clearInterval(t); };
  }, [job.id, live]);
  return <pre ref={box} className="joblog">{text || (job.status === "queued" ? "Waiting for the worker…" : "No output.")}</pre>;
}

const STATUS: Record<Job["status"], string> = { queued: "", running: "due", done: "done", failed: "over", cancelled: "closed" };
const when = (iso?: string) => (iso ? new Date(iso).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "");

export function JobsList() {
  const { jobs } = useJobs();
  const toast = useToast();
  const [open, setOpen] = useState("");
  if (!jobs) return <p className="hint">Loading jobs…</p>;
  if (!jobs.length) return <p className="empty"><strong>No jobs yet</strong>Run a step above; it shows here with its live log.</p>;
  return (
    <div className="jobs">
      {jobs.map((j) => (
        <div key={j.id} className="job">
          <button type="button" className="job-row" aria-expanded={open === j.id} onClick={() => setOpen(open === j.id ? "" : j.id)}>
            <span className={`stage ${STATUS[j.status]}`}>{j.status}</span>
            <strong>{j.label}</strong>
            <small>{when(j.startedAt || j.createdAt)}{j.error ? ` · ${j.error}` : ""}</small>
          </button>
          {(j.status === "queued" || j.status === "running") && (
            <button type="button" className="btn small stop" disabled={j.stopping} onClick={async () => {
              const res = await fetch(`/api/jobs/${j.id}/cancel`, { method: "POST" }).catch(() => null);
              window.dispatchEvent(new Event("jobs-changed"));
              if (!res?.ok) toast("Couldn't cancel that job. Try again.", { error: true });
              else toast(j.status === "queued" ? "Job cancelled" : "Stopping the job…");
            }}><Square size={12} />{j.stopping ? "Stopping…" : "Cancel"}</button>
          )}
          {open === j.id && <Log job={j} />}
        </div>
      ))}
    </div>
  );
}
