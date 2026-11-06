// The job runner on the NAS. Runs the approval app's queued jobs (data/jobs/*.json) one at a time:
// git pull → the job's command → commit and push, writing a readable log the app shows live.
// Usage: node worker/run.mjs            (env: SMALLSHOP_ROOT, CLAUDE_CODE_OAUTH_TOKEN or ANTHROPIC_API_KEY,
//                                         GOOGLE_PLACES_KEY, COOLIFY_URL, COOLIFY_TOKEN)
// Test hooks: WORKER_GIT=off skips git; CLAUDE_BIN points at a stand-in for the claude CLI; WORKER_ONCE=1
// exits when the queue is empty.
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.env.SMALLSHOP_ROOT || path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const JOBS = path.join(ROOT, "data", "jobs");
const LOCK = path.join(ROOT, "data", ".lock");
const GIT = process.env.WORKER_GIT !== "off";
const CLAUDE = process.env.CLAUDE_BIN || "claude";
const MIN = 60_000;

// What each kind runs. Claude kinds go through the shop-landing skill; the rest are the project scripts.
const shops = (a) => (a.slugs?.length ? a.slugs : null);
const KINDS = {
  discover: { timeout: 30 * MIN, claude: (a) => `/shop-landing find ${a.count ?? 10} ${a.types || "places that sell food"} in ${a.area}` },
  brief: { timeout: 60 * MIN, claude: (a) => `/shop-landing brief${shops(a) ? ` ${a.slugs.join(", ")}` : ""}` },
  build: { timeout: 180 * MIN, claude: (a) => `/shop-landing build${shops(a) ? ` ${a.slugs.join(", ")}` : ""}` },
  "outreach-lines": { timeout: 30 * MIN, claude: (a) => `/shop-landing outreach${shops(a) ? ` ${a.slugs.join(", ")}` : ""}` },
  publish: { timeout: 20 * MIN, cmd: (a) => ["bash", ["scripts/coolify-publish.sh", ...(shops(a) ?? ["--all"])]] },
  "outreach-media": { timeout: 180 * MIN, cmd: (a) => ["node", ["scripts/outreach-media.mjs", ...(shops(a) ?? ["--all"])]] },
  archive: { timeout: 20 * MIN, cmd: (a) => ["bash", ["scripts/archive-rejected.sh", ...(shops(a) ?? ["--all"])]] },
  sync: { timeout: 5 * MIN },
};

const now = () => new Date().toISOString().replace(/\.\d+Z$/, "Z");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const jobFile = (id, ext) => path.join(JOBS, `${id}.${ext}`);

async function saveJob(job) {
  await fsp.writeFile(jobFile(job.id, "json.tmp"), JSON.stringify(job, null, 2));
  await fsp.rename(jobFile(job.id, "json.tmp"), jobFile(job.id, "json"));
}

async function readJobs() {
  let names = [];
  try { names = (await fsp.readdir(JOBS)).filter((n) => n.endsWith(".json")); } catch { return []; }
  const jobs = await Promise.all(names.map((n) => fsp.readFile(path.join(JOBS, n), "utf8").then(JSON.parse, () => null)));
  return jobs.filter(Boolean);
}

// Same lock as approve-app/lib/store.ts and scripts/_common.sh.
async function withLock(fn) {
  const deadline = Date.now() + 5 * MIN;
  for (;;) {
    try { await fsp.mkdir(LOCK); break; } catch (err) {
      if (err.code !== "EEXIST") throw err;
      const age = await fsp.stat(LOCK).then((s) => Date.now() - s.mtimeMs, () => 0);
      if (age > 5 * MIN) { await fsp.rm(LOCK, { recursive: true, force: true }); continue; }
      if (Date.now() > deadline) throw new Error("Couldn't get the shops.json lock in 5 minutes.");
      await sleep(200);
    }
  }
  try { return await fn(); } finally { await fsp.rm(LOCK, { recursive: true, force: true }); }
}

// A process and everything it started, from /proc on Linux (the NAS) or ps elsewhere. Claude's tools
// can run in their own process groups, so killing the group alone can miss them.
function processTree(root) {
  const kids = new Map();
  const add = (pid, ppid) => { if (!kids.has(ppid)) kids.set(ppid, []); kids.get(ppid).push(pid); };
  try {
    for (const name of fs.readdirSync("/proc")) {
      if (!/^\d+$/.test(name)) continue;
      try { const stat = fs.readFileSync(`/proc/${name}/stat`, "utf8"); add(Number(name), Number(stat.slice(stat.lastIndexOf(")") + 2).split(" ")[1])); } catch {}
    }
  } catch {
    const out = spawnSync("ps", ["-A", "-o", "pid=,ppid="], { encoding: "utf8" }).stdout ?? "";
    for (const l of out.trim().split("\n")) { const [pid, ppid] = l.trim().split(/\s+/).map(Number); add(pid, ppid); }
  }
  const tree = [root];
  for (let i = 0; i < tree.length; i++) tree.push(...(kids.get(tree[i]) ?? []));
  return tree.filter((pid) => pid !== process.pid);
}

const alive = (pid) => { try { process.kill(pid, 0); return true; } catch { return false; } };

// Runs a command, streaming its output to the job log through `line`. Resolves with the exit code.
// Stopping it (timeout or cancel) sends SIGTERM to the whole tree, then SIGKILL to whatever is
// still alive 10 seconds later: claude doesn't always exit on SIGTERM mid-tool.
function run(cmd, args, { line, timeout = 10 * MIN, cancelled = () => false } = {}) {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { cwd: ROOT, env: process.env, detached: true, stdio: ["ignore", "pipe", "pipe"] });
    let stopping = false;
    const signal = (pids, sig) => {
      try { process.kill(-child.pid, sig); } catch {}
      for (const pid of pids) try { process.kill(pid, sig); } catch {}
    };
    const kill = (why) => {
      if (stopping) return;
      stopping = true;
      line(why);
      const pids = processTree(child.pid);
      signal(pids, "SIGTERM");
      setTimeout(() => {
        const left = [...new Set([...pids, ...processTree(child.pid)])].filter(alive);
        if (!left.length) return;
        line("Still running 10 seconds later; killing it.");
        signal(left, "SIGKILL");
      }, 10_000);
    };
    const timer = setTimeout(() => kill(`Stopped: took longer than ${Math.round(timeout / MIN)} minutes.`), timeout);
    const watch = setInterval(() => { if (cancelled()) { clearInterval(watch); kill("Stopping: cancelled from the app."); } }, 1000);
    // A process the command left behind can hold its output open after it exits; don't wait on it.
    child.on("exit", () => setTimeout(() => { child.stdout.destroy(); child.stderr.destroy(); }, 5000).unref());
    for (const stream of [child.stdout, child.stderr]) {
      let buf = "";
      stream.on("data", (d) => { buf += d; const parts = buf.split("\n"); buf = parts.pop(); parts.forEach(line); });
      stream.on("end", () => buf && line(buf));
    }
    child.on("error", (err) => { line(`Couldn't start ${cmd}: ${err.message}`); });
    child.on("close", (code) => { clearTimeout(timer); clearInterval(watch); resolve(code ?? 1); });
  });
}

// Claude's stream-json events as one readable line each.
function claudeLine(raw, write) {
  let ev;
  try { ev = JSON.parse(raw); } catch { return raw.trim() && write(raw); }
  const short = (s, n = 160) => { s = String(s ?? "").replace(/\s+/g, " ").trim(); return s.length > n ? `${s.slice(0, n)}…` : s; };
  if (ev.type === "system" && ev.subtype === "init") return write(`Claude started (${ev.model ?? "model"})`);
  if (ev.type === "assistant") {
    for (const c of ev.message?.content ?? []) {
      if (c.type === "text" && c.text.trim()) write(`  ${short(c.text, 400)}`);
      if (c.type === "tool_use") {
        const i = c.input ?? {};
        const what = i.command ?? i.file_path ?? i.path ?? i.pattern ?? i.description ?? i.prompt ?? i.url ?? "";
        write(`→ ${c.name}${what ? `: ${short(what)}` : ""}`);
      }
    }
  }
  if (ev.type === "result") {
    const mins = ev.duration_ms ? ` in ${Math.round(ev.duration_ms / MIN)} min` : "";
    write(`${ev.is_error ? "Claude stopped with an error" : "Claude finished"}${mins}, ${ev.num_turns ?? "?"} turns`);
    if (ev.result) write(String(ev.result));
  }
}

async function git(args, line) {
  return run("git", args, { line: (l) => line(`  git: ${l}`), timeout: 3 * MIN });
}

async function runJob(job) {
  const log = fs.createWriteStream(jobFile(job.id, "log"), { flags: "a" });
  const line = (l) => log.write(`${l}\n`);
  const cancelled = () => fs.existsSync(jobFile(job.id, "cancel"));
  const spec = KINDS[job.kind];
  job.status = "running"; job.startedAt = now();
  await saveJob(job);
  line(`${job.label}`);
  let code = 0, error = "";
  try {
    if (!spec) throw new Error(`Unknown job kind: ${job.kind}`);
    if (GIT) {
      line("Getting the latest from GitHub…");
      const pulled = await withLock(() => git(["pull", "--rebase", "--autostash"], line));
      if (pulled !== 0) throw new Error("git pull failed; nothing was run. Resolve it on the NAS checkout, then retry.");
    }
    if (spec.claude) {
      const prompt = spec.claude(job.args);
      line(`$ claude -p "${prompt}"`);
      code = await run(CLAUDE, ["-p", prompt, "--output-format", "stream-json", "--verbose", "--dangerously-skip-permissions"],
        { line: (l) => claudeLine(l, line), timeout: spec.timeout, cancelled });
    } else if (spec.cmd) {
      const [cmd, args] = spec.cmd(job.args);
      line(`$ ${cmd} ${args.join(" ")}`);
      code = await run(cmd, args, { line, timeout: spec.timeout, cancelled });
    }
    if (GIT) {
      // Commit whatever the job changed in the data, even after a failure: it's real progress.
      const committed = await withLock(async () => {
        await git(["add", "-A", "shops", "data/shops.json"], line);
        if ((await run("git", ["diff", "--cached", "--quiet"], { line: () => {} })) === 0) return false;
        return (await git(["commit", "-m", job.label, "-m", `Job ${job.id} (${job.kind}) from the LMS worker.`], line)) === 0;
      });
      line(committed ? "Committed. Pushing…" : "No data changes to commit.");
      if (committed || job.kind === "sync") {
        if ((await git(["push"], line)) !== 0) {
          line("Push was refused; pulling and trying once more.");
          await withLock(() => git(["pull", "--rebase", "--autostash"], line));
          if ((await git(["push"], line)) !== 0) throw new Error("git push failed. The commit is on the NAS; run a Sync job once it's fixed.");
        }
      }
    }
  } catch (err) {
    error = err.message;
    line(`✗ ${error}`);
  }
  job.status = cancelled() ? "cancelled" : error || code !== 0 ? "failed" : "done";
  job.exitCode = code; job.endedAt = now();
  if (error) job.error = error; else if (code !== 0 && job.status === "failed") job.error = `Exited with code ${code}.`;
  line(job.status === "done" ? "✓ Done." : job.status === "cancelled" ? "Cancelled." : `✗ ${job.error}`);
  await new Promise((r) => log.end(r));
  await fsp.rm(jobFile(job.id, "cancel"), { force: true });
  await saveJob(job);
}

async function main() {
  await fsp.mkdir(JOBS, { recursive: true });
  // A job left "running" means the worker stopped mid-job.
  for (const job of await readJobs()) {
    if (job.status === "running") { job.status = "failed"; job.error = "The worker restarted during this job."; job.endedAt = now(); await saveJob(job); }
  }
  console.log(`Worker watching ${JOBS}${GIT ? "" : " (git off)"}`);
  for (;;) {
    const next = (await readJobs()).filter((j) => j.status === "queued").sort((a, b) => a.createdAt.localeCompare(b.createdAt))[0];
    if (next) { console.log(`${now()} ${next.id} ${next.label}`); await runJob(next); continue; }
    if (process.env.WORKER_ONCE) return;
    await sleep(2000);
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
