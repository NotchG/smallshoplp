import fs from "node:fs/promises";
import path from "node:path";
import { SALES, areaOf, leadStage, type BriefSummary, type Lead } from "./leads";
import type { Outreach, ShopFiles, ShopsFile } from "./types";

// The project root is the folder above approve-app/, unless SMALLSHOP_ROOT says otherwise.
export const ROOT = process.env.SMALLSHOP_ROOT || path.resolve(process.cwd(), "..");
const SHOPS_JSON = path.join(ROOT, "data", "shops.json");
// Archived shops (declined or no answer) keep their brief, listing and photos here.
const REJECTED_DIR = path.join(ROOT, "shops", "_rejected");
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,80}$/; // never matches _rejected

const isNotFound = (err: unknown) =>
  typeof err === "object" && err !== null && "code" in err && (err as NodeJS.ErrnoException).code === "ENOENT";

export function validSlug(slug: unknown): slug is string {
  return typeof slug === "string" && SLUG_RE.test(slug);
}

export async function readShops(): Promise<ShopsFile> {
  try {
    const data = JSON.parse(await fs.readFile(SHOPS_JSON, "utf8")) as ShopsFile;
    if (!Array.isArray(data.shops)) throw new Error("shops.json has no shops array");
    return data;
  } catch (err) {
    if (isNotFound(err)) return { shops: [] };
    throw err;
  }
}

async function writeAtomic(file: string, text: string): Promise<void> {
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, text, "utf8");
  await fs.rename(tmp, file);
}

export async function writeShops(data: ShopsFile): Promise<void> {
  await fs.mkdir(path.dirname(SHOPS_JSON), { recursive: true });
  await writeAtomic(SHOPS_JSON, JSON.stringify(data, null, 2) + "\n");
}

// One writer at a time across the app, scripts/_common.sh (update_shops) and the worker's git
// steps. mkdir is atomic; a lock older than STALE_MS was left by a crashed writer.
const LOCK = path.join(ROOT, "data", ".lock");
const STALE_MS = 5 * 60_000;

export async function withShopsLock<T>(fn: () => Promise<T>): Promise<T> {
  const deadline = Date.now() + 20_000;
  await fs.mkdir(path.dirname(LOCK), { recursive: true });
  for (;;) {
    try { await fs.mkdir(LOCK); break; } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "EEXIST") throw err;
      const age = await fs.stat(LOCK).then((s) => Date.now() - s.mtimeMs, () => 0);
      if (age > STALE_MS) { await fs.rm(LOCK, { recursive: true, force: true }); continue; }
      if (Date.now() > deadline) throw new Error("A job is writing shops.json right now; try again in a moment.");
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  try { return await fn(); } finally { await fs.rm(LOCK, { recursive: true, force: true }); }
}

// Read-modify-write under the lock, so no other writer's change is lost.
export async function updateShops<T>(fn: (data: ShopsFile) => T): Promise<T> {
  return withShopsLock(async () => {
    const data = await readShops();
    const result = fn(data);
    await writeShops(data);
    return result;
  });
}

const isDir = (p: string) => fs.stat(p).then((s) => s.isDirectory(), () => false);

// shops/<slug>, or shops/_rejected/<slug> once the shop has been archived.
export async function shopDir(slug: string): Promise<string> {
  const live = path.join(ROOT, "shops", slug);
  const archived = path.join(REJECTED_DIR, slug);
  return !(await isDir(live)) && (await isDir(archived)) ? archived : live;
}

// Moves an archived shop's folder back to shops/<slug>, so Claude can rebuild it from its brief.
export async function restoreShopDir(slug: string): Promise<void> {
  const live = path.join(ROOT, "shops", slug);
  const archived = path.join(REJECTED_DIR, slug);
  if (!(await isDir(archived))) return;
  if (await isDir(live)) throw new Error(`Both shops/${slug} and shops/_rejected/${slug} exist; merge them by hand.`);
  await fs.rename(archived, live);
}

async function briefPath(slug: string): Promise<string> {
  return path.join(await shopDir(slug), "brief.md");
}

export async function readBrief(slug: string): Promise<string | null> {
  try {
    return await fs.readFile(await briefPath(slug), "utf8");
  } catch (err) {
    if (isNotFound(err)) return null;
    throw err;
  }
}

export async function writeBrief(slug: string, text: string): Promise<void> {
  const file = await briefPath(slug);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await writeAtomic(file, text);
}

// --- Shop detail: listing facts, docs and screenshots (read-only) ---

// The subset of Google Places' raw.json the dashboard reads.
export interface RawListing {
  internationalPhoneNumber?: string;
  nationalPhoneNumber?: string;
  googleMapsUri?: string;
  websiteUri?: string;
  rating?: number;
  userRatingCount?: number;
}

export async function readRaw(slug: string): Promise<RawListing | null> {
  try {
    return JSON.parse(await fs.readFile(path.join(await shopDir(slug), "raw.json"), "utf8")) as RawListing;
  } catch {
    return null;
  }
}

// The personalized line for the first WhatsApp message, written by /shop-landing outreach.
export async function readOutreach(slug: string): Promise<Outreach | null> {
  try {
    const data = JSON.parse(await fs.readFile(path.join(await shopDir(slug), "outreach.json"), "utf8")) as Partial<Outreach>;
    return typeof data.hook === "string" && data.hook.trim() ? { hook: data.hook.trim() } : null;
  } catch {
    return null;
  }
}

async function listDir(dir: string, filter: (name: string) => boolean): Promise<string[]> {
  try {
    return (await fs.readdir(dir)).filter(filter).sort();
  } catch {
    return [];
  }
}

export async function shopFiles(slug: string): Promise<ShopFiles> {
  const base = await shopDir(slug);
  const exists = (p: string) => fs.access(path.join(base, p)).then(() => true, () => false);
  return {
    brief: await exists("brief.md"),
    checklist: await exists("owner-checklist.md"),
    docs: await listDir(path.join(base, "docs"), (f) => f.endsWith(".md")),
    screenshots: await listDir(path.join(base, "screenshots"), (f) => f.endsWith(".png") || f.endsWith(".mp4")),
  };
}

// For briefs waiting on review: the brief's section headings, its personality line, and how many
// [MOCKUP] lines it has.
export async function readBriefSummary(slug: string): Promise<BriefSummary | null> {
  const text = await readBrief(slug);
  if (text === null) return null;
  // The paragraph is hard-wrapped: take it up to the blank line, unwrap it, drop "(reviews 1, 3)" tags.
  const para = (/## Personality\n+([\s\S]*?)\n\s*\n/.exec(text)?.[1] ?? "").replace(/\s*\n\s*/g, " ");
  return {
    personality: para.replace(/\s*\([^()]*\)/g, "").split(/(?<=\.)\s/)[0],
    sections: [...text.matchAll(/^## (.+)$/gm)].map((m) => m[1]),
    mockups: (text.match(/\[MOCKUP\]/g) || []).length,
  };
}

// Every shop as a lead: its stage, area, which outreach media exist, its personal line and phone.
export async function listLeads(): Promise<Lead[]> {
  const { shops } = await readShops();
  const now = Date.now();
  return Promise.all(shops.map(async (shop): Promise<Lead> => {
    const stage = leadStage(shop, now);
    const base = await shopDir(shop.slug);
    const has = (rel: string) => fs.access(path.join(base, rel)).then(() => true, () => false);
    const [video, poster, phone, fold, outreach, raw, brief] = await Promise.all([
      has("screenshots/outreach-scroll.mp4"), has("screenshots/outreach-poster.jpg"),
      has("screenshots/outreach-phone.png"), has("screenshots/390-fold.png"),
      readOutreach(shop.slug),
      SALES.has(stage) ? readRaw(shop.slug) : Promise.resolve(null),
      stage === "brief_ready" ? readBriefSummary(shop.slug) : Promise.resolve(null),
    ]);
    return {
      ...shop, stage, area: areaOf(shop.address), media: { video, poster, phone, fold }, hook: outreach?.hook ?? "",
      phone: raw?.internationalPhoneNumber || raw?.nationalPhoneNumber || "", brief,
    };
  }));
}

// Only files inside these folders of a shop can be served, nothing else.
const SERVABLE = /^(docs\/[a-z0-9-]+\.md|screenshots\/[a-z0-9-]+\.(png|jpg|mp4)|owner-checklist\.md|brief\.md)$/;

export async function readShopFile(slug: string, rel: string): Promise<Buffer | null> {
  if (!validSlug(slug) || !SERVABLE.test(rel)) return null;
  try {
    return await fs.readFile(path.join(await shopDir(slug), rel));
  } catch {
    return null;
  }
}
