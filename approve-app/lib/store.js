import fs from "node:fs/promises";
import path from "node:path";

// The project root is the folder above approve-app/, unless SMALLSHOP_ROOT says otherwise.
export const ROOT = process.env.SMALLSHOP_ROOT || path.resolve(process.cwd(), "..");
const SHOPS_JSON = path.join(ROOT, "data", "shops.json");
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,80}$/;

export function validSlug(slug) {
  return typeof slug === "string" && SLUG_RE.test(slug);
}

export async function readShops() {
  try {
    const data = JSON.parse(await fs.readFile(SHOPS_JSON, "utf8"));
    if (!Array.isArray(data.shops)) throw new Error("shops.json has no shops array");
    return data;
  } catch (err) {
    if (err.code === "ENOENT") return { shops: [] };
    throw err;
  }
}

async function writeAtomic(file, text) {
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, text, "utf8");
  await fs.rename(tmp, file);
}

export async function writeShops(data) {
  await fs.mkdir(path.dirname(SHOPS_JSON), { recursive: true });
  await writeAtomic(SHOPS_JSON, JSON.stringify(data, null, 2) + "\n");
}

// Read-modify-write in one go to keep the window small (Claude's scripts also write this file).
export async function updateShops(fn) {
  const data = await readShops();
  const result = fn(data);
  await writeShops(data);
  return result;
}

function briefPath(slug) {
  return path.join(ROOT, "shops", slug, "brief.md");
}

export async function readBrief(slug) {
  try {
    return await fs.readFile(briefPath(slug), "utf8");
  } catch (err) {
    if (err.code === "ENOENT") return null;
    throw err;
  }
}

export async function writeBrief(slug, text) {
  await fs.mkdir(path.dirname(briefPath(slug)), { recursive: true });
  await writeAtomic(briefPath(slug), text);
}
