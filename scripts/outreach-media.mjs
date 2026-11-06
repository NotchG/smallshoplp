// Outreach media for the WhatsApp pitch, made from a shop's built mockup (site/out/), or from
// its live preview_url when there is no out/ (a fresh clone, as on the NAS, has none).
// Usage: node scripts/outreach-media.mjs <slug>… | --all [--force]
// Writes shops/<slug>/screenshots/:
//   outreach-phone.png   the hero on a phone, 780×1688 (390×844 at 2x), for the follow-up
//   outreach-scroll.mp4  the site on a laptop and a phone together, on a tint of the shop's own
//                        colour with its name above, both scrolling from the hero through three
//                        sections with the site's own motion; 1080×1920 H.264, 30 fps, ≤ 4 MB
//   outreach-poster.jpg  the video's first frame, the dashboard's poster for it
// Acts on shops with status "built" and a site/out/index.html or a preview_url. Skips shops that
// already have all three files unless --force. Writes nothing under site/: pushes there trigger
// Coolify redeploys.
// Playwright comes from each shop's own site/node_modules, else from the global npm install
// (the runner image has one); ffmpeg needs libx264.
// The video's motion (GSAP, Lenis and CSS animations alike) is stepped frame by frame on
// Playwright's fake clock, so every run looks the same. The phone still uses reduced motion.
import http from "node:http";
import fs from "node:fs/promises";
import { existsSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawn } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PHONE_STILL = { width: 390, height: 844 };
const FPS = 30;
const MAX_BYTES = 4_000_000;
const FFMPEG = process.env.FFMPEG_PATH
  || (existsSync("/opt/homebrew/bin/ffmpeg") ? "/opt/homebrew/bin/ffmpeg" : "ffmpeg");
const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".woff2": "font/woff2", ".woff": "font/woff", ".ico": "image/x-icon", ".txt": "text/plain",
  ".json": "application/json",
};
// Sections the video doesn't stop on: reviews, location, hours, contact. Matched against each
// section's id, aria-label, first heading and the start of its text.
const SKIP_SECTION = /ulasan|review|testimoni|lokasi|location|alamat|address|kontak|contact|hubungi|jam buka|hours|faq|peta|\bmap\b|kunjungi|visit/i;

async function exists(p) { try { return (await fs.stat(p)).isFile(); } catch { return false; } }

// Serves the site, from out/ on disk or by proxying the published mockup, plus /__stage.html (the
// laptop-and-phone frame around it). One origin for both, so the stage can read the site's fonts.
function serve(source) {
  let stage = "";
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, "http://x");
    if (url.pathname === "/__stage.html") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }).end(stage);
      return;
    }
    if (source.url) {
      try {
        const upstream = await fetch(new URL(url.pathname + url.search, source.url));
        res.writeHead(upstream.status, { "Content-Type": upstream.headers.get("content-type") || "application/octet-stream" });
        res.end(Buffer.from(await upstream.arrayBuffer()));
      } catch { res.writeHead(502).end(); }
      return;
    }
    const base = path.join(source.dir, decodeURIComponent(url.pathname));
    if (!base.startsWith(source.dir)) { res.writeHead(403).end(); return; }
    for (const file of [base, path.join(base, "index.html"), base + ".html"]) {
      if (await exists(file)) {
        res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
        res.end(await fs.readFile(file));
        return;
      }
    }
    res.writeHead(404).end("not found");
  });
  server.setStage = (html) => { stage = html; };
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

function run(cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd, stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    child.stderr.on("data", (d) => { err += d; });
    child.on("error", reject);
    child.on("close", (code) => code === 0 ? resolve()
      : reject(new Error(`${path.basename(cmd)} exited ${code}: ${err.trim().split("\n").pop()}`)));
  });
}

// The site's own Playwright when it has node_modules, else the global one.
let globalRoot = null;
function loadPlaywright(siteDir) {
  const require = createRequire(import.meta.url);
  try {
    return require(require.resolve("playwright", { paths: [siteDir] }));
  } catch {
    try {
      globalRoot ??= execFileSync("npm", ["root", "-g"], { encoding: "utf8" }).trim();
      return require(require.resolve("playwright", { paths: [globalRoot] }));
    } catch {
      throw new Error("no Playwright in site/node_modules or the global npm root (npm i -g playwright@1.63.0)");
    }
  }
}

const easeInOut = (t) => (1 - Math.cos(Math.PI * t)) / 2;
const mb = (bytes) => `${(bytes / 1e6).toFixed(1)} MB`;
const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Colours: a light tint of the shop's colour for the ground, a dark shade of it for the name.
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const hex = (c) => `#${c.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
const luminance = (c) => {
  const [r, g, b] = c.map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
function palette(accent) {
  if (!accent) return { ground: [241, 239, 236], ink: [29, 26, 27] };
  const ground = mix(accent, [255, 255, 255], 0.9);
  let t = 0.45;
  let ink = mix(accent, [0, 0, 0], t);
  while (contrast(ink, ground) < 7 && t < 0.85) ink = mix(accent, [0, 0, 0], (t += 0.1));
  return { ground, ink };
}

// In the site: its signature colour across headings, links, buttons and section grounds. Each use
// counts by (saturation × brightness)², so a vivid brand colour outweighs a dark heading ink used
// more often. A canvas turns any CSS colour (hex, rgb, oklch) into sRGB.
function siteAccent() {
  const ctx = Object.assign(document.createElement("canvas"), { width: 1, height: 1 }).getContext("2d", { willReadFrequently: true });
  const rgb = (c) => {
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = "#000";
    ctx.fillStyle = c;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
    return a > 200 ? [r, g, b] : null;
  };
  const weight = new Map();
  for (const el of document.querySelectorAll("h1, h2, h3, a, button, section, header, footer")) {
    const style = getComputedStyle(el);
    for (const c of [style.color, style.backgroundColor]) {
      const v = rgb(c);
      if (!v) continue;
      const max = Math.max(...v);
      const min = Math.min(...v);
      if (max < 40 || min > 220 || (max - min) / max < 0.3) continue; // near black, near white, greyish
      const key = v.join(",");
      weight.set(key, (weight.get(key) ?? 0) + (((max - min) / max) * (max / 255)) ** 2);
    }
  }
  const best = [...weight].sort((a, b) => b[1] - a[1])[0];
  return best ? best[0].split(",").map(Number) : null;
}

// In the site: the sections the video stops on, as indexes into document.querySelectorAll("section")
// (the laptop's copy has the same sections at other heights). The first three after the hero that
// aren't reviews, location, hours or contact; any three if that leaves none.
function siteSections(skipSource) {
  const skip = new RegExp(skipSource, "i");
  const all = [...document.querySelectorAll("section")];
  const candidates = all
    .map((s, i) => ({ s, i, top: s.getBoundingClientRect().top + scrollY }))
    .filter(({ s, top }) => top > innerHeight * 0.5 && s.offsetHeight > 200 && !s.closest("footer")
      && !all.some((o) => o !== s && o.contains(s)));
  const wanted = candidates.filter(({ s }) => !s.querySelector("iframe")
    && !skip.test(`${s.id} ${s.getAttribute("aria-label") ?? ""} ${s.querySelector("h1, h2, h3")?.textContent ?? ""} ${s.textContent.slice(0, 200)}`));
  return (wanted.length ? wanted : candidates).slice(0, 3).map(({ i }) => i);
}

// In the site: where to scroll for each stop, the hero first.
function siteStops(indexes) {
  const all = document.querySelectorAll("section");
  const max = document.documentElement.scrollHeight - innerHeight;
  return [0, ...indexes.map((i) => (all[i] ? Math.min(max, Math.round(all[i].getBoundingClientRect().top + scrollY)) : max))];
}

// In the site: a sizeable CSS-animated piece of the hero below the fold (a signature moment such
// as a box opening), to glide down to before the first section. null when there is none.
function heroGlide(limit) {
  for (const el of document.querySelectorAll("body *")) {
    if (getComputedStyle(el).animationName === "none") continue;
    const r = el.getBoundingClientRect();
    const top = r.top + scrollY;
    if (r.width >= 120 && r.height >= 120 && top > innerHeight * 0.55 && top < limit) return Math.max(0, Math.round(top - 150));
  }
  return null;
}

// In the site: restarts the CSS animations that already ran during load and drives them from the
// fake clock from now on; each one starts when its element comes into view, as the eye would see it.
function installSync() {
  for (const el of document.querySelectorAll("*")) {
    if (getComputedStyle(el).animationName !== "none") {
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = "";
    }
  }
  const started = new Map();
  window.__sync = () => {
    const now = performance.now();
    for (const a of document.getAnimations()) {
      if (!started.has(a)) {
        a.pause();
        a.currentTime = 0;
        const r = a.effect?.target?.getBoundingClientRect();
        if (r && (r.top > innerHeight * 0.85 || r.bottom < 0)) continue;
        started.set(a, now);
      }
      a.currentTime = now - started.get(a);
    }
  };
  window.__sync();
}

// Lazy images load eagerly, so no frame shows a blank box.
async function ready(frame) {
  await frame.evaluate(() => document.querySelectorAll("img[loading=lazy]").forEach((img) => { img.loading = "eager"; }));
  await frame.waitForFunction(() => [...document.images].every((img) => img.complete), null, { timeout: 8000 }).catch(() => {});
  await frame.evaluate(() => document.fonts.ready);
}

// The stage, 540×960 at 2x. The laptop shows the 1280 px layout at 0.375, the phone the 390 px
// layout at 0.62, standing in front of the laptop's middle.
const stageHtml = ({ name, ground, ink }) => `<!doctype html><meta charset="utf-8"><style>
  html, body { margin: 0; width: 540px; height: 960px; overflow: hidden; background: ${hex(ground)}; color: ${hex(ink)}; }
  .t { position: absolute; inset: 52px 0 auto; text-align: center; }
  .t h1 { display: inline-block; margin: 0; font: 700 64px/0.95 var(--display, sans-serif); text-transform: uppercase; white-space: nowrap; }
  .t p { margin: 12px 0 0; font: 600 14px/1.2 var(--body, sans-serif); letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.75; }
  .desk { position: absolute; left: 30px; top: 190px; width: 480px; border-radius: 10px; overflow: hidden;
    background: #fff; box-shadow: 0 24px 50px rgb(${ink.join(" ")} / 0.22); }
  .bar { height: 22px; background: ${hex(mix(ground, ink, 0.08))}; display: flex; gap: 6px; align-items: center; padding: 0 10px; }
  .bar i { width: 8px; height: 8px; border-radius: 50%; background: ${hex(mix(ground, ink, 0.25))}; }
  .desk .vp { width: 480px; height: 300px; overflow: hidden; }
  .desk iframe { border: 0; width: 1280px; height: 800px; transform: scale(0.375); transform-origin: 0 0; }
  .phone { position: absolute; left: 142px; top: 420px; border: 7px solid #141012; border-radius: 34px; overflow: hidden;
    background: #fff; box-shadow: 0 28px 56px rgb(${ink.join(" ")} / 0.35); }
  .phone .vp { width: 242px; height: 484px; overflow: hidden; }
  .phone iframe { border: 0; width: 390px; height: 780px; transform: scale(0.62); transform-origin: 0 0; }
</style><div class="t"><h1>${escapeHtml(name)}</h1><p>Draf website</p></div>
<div class="desk"><div class="bar"><i></i><i></i><i></i></div><div class="vp"><iframe src="/"></iframe></div></div>
<div class="phone"><div class="vp"><iframe src="/"></iframe></div></div>`;

// In the stage: the site's @font-face rules and its display and body families, then the name
// shrunk (and, if it must, wrapped onto two lines) to fit.
function stageType() {
  const doc = document.querySelectorAll("iframe")[1].contentDocument;
  const rules = [];
  for (const sheet of doc.styleSheets) {
    try {
      for (const r of sheet.cssRules) {
        if (r.type === CSSRule.FONT_FACE_RULE) {
          rules.push(r.cssText.replace(/url\("?([^")]+)"?\)/g, (_, u) => `url("${new URL(u, sheet.href || doc.baseURI).href}")`));
        }
      }
    } catch { /* a cross-origin sheet: its fonts stay out */ }
  }
  const style = document.createElement("style");
  style.textContent = rules.join("\n");
  document.head.append(style);
  const family = (sel) => { const el = doc.querySelector(sel); return el ? doc.defaultView.getComputedStyle(el).fontFamily : ""; };
  document.documentElement.style.setProperty("--display", family("h1") || family("body"));
  document.documentElement.style.setProperty("--body", family("p") || family("body"));
  if (!/^id\b/i.test(doc.documentElement.lang || "id")) document.querySelector(".t p").textContent = "Website draft";
}
function fitName() {
  const h1 = document.querySelector(".t h1");
  const max = 460;
  let size = 64;
  const width = () => h1.getBoundingClientRect().width;
  while (width() > max && size > 40) h1.style.fontSize = `${(size -= 2)}px`;
  if (width() <= max) return;
  Object.assign(h1.style, { whiteSpace: "normal", maxWidth: `${max}px`, textWrap: "balance" });
  while (h1.getBoundingClientRect().height > size * 0.95 * 2 + 4 && size > 26) h1.style.fontSize = `${(size -= 2)}px`;
}

let tmpDir = null; // removed on Ctrl-C too
process.on("SIGINT", () => {
  if (tmpDir) rmSync(tmpDir, { recursive: true, force: true });
  process.exit(130);
});

// liveUrl: capture the published mockup instead of serving site/out/.
async function makeMedia(shop, liveUrl) {
  const siteDir = path.join(ROOT, "shops", shop.slug, "site");
  const shotsDir = path.join(ROOT, "shops", shop.slug, "screenshots");
  const { chromium } = loadPlaywright(siteDir);
  tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), `outreach-${shop.slug}-`));
  const tmp = tmpDir;
  const server = await serve(liveUrl ? { url: liveUrl } : { dir: path.join(siteDir, "out") });
  const base = `http://127.0.0.1:${server.address().port}`;
  let browser;
  try {
    browser = await chromium.launch(
      process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {},
    );

    // The phone still: the hero, as the follow-up sends it.
    const still = await browser.newPage({ viewport: PHONE_STILL, deviceScaleFactor: 2, reducedMotion: "reduce" });
    const res = await still.goto(`${base}/`, { waitUntil: "networkidle" });
    if (!res?.ok()) throw new Error(`${liveUrl || "site/out"} answered ${res?.status() ?? "nothing"}`);
    await ready(still);
    await still.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await still.waitForTimeout(400);
    await still.screenshot({ path: path.join(tmp, "outreach-phone.png") });
    await still.close();

    // The video: the stage on a fake clock, so the site's motion is stepped one frame at a time.
    const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });
    await page.clock.install();
    server.setStage(stageHtml({ name: shop.name || shop.slug, ...palette(null) }));
    await page.goto(`${base}/__stage.html`, { waitUntil: "networkidle" });
    let [, desk, phone] = page.frames();
    await ready(phone);
    // Now that the site is loaded, the stage again with the shop's colour.
    server.setStage(stageHtml({ name: shop.name || shop.slug, ...palette(await phone.evaluate(siteAccent)) }));
    await page.goto(`${base}/__stage.html`, { waitUntil: "networkidle" });
    [, desk, phone] = page.frames();
    await ready(desk);
    await ready(phone);
    await page.evaluate(stageType);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300); // from Node: on the fake clock the page's own timers don't run
    await page.evaluate(fitName);

    // Scroll reveals measure their positions once after load, and on the fake clock that measure
    // goes stale; a resize makes the site measure again (debounced, hence the run). It also checks
    // that the clock reaches the iframes: if not, their motion would run on wall time.
    const before = await phone.evaluate(() => performance.now());
    for (const f of [desk, phone]) await f.evaluate(() => window.dispatchEvent(new Event("resize")));
    await page.clock.runFor(500);
    const moved = (await phone.evaluate(() => performance.now())) - before;
    if (Math.abs(moved - 500) > 50) throw new Error(`the site's clock moved ${Math.round(moved)} ms for 500 ms`);

    const sections = await phone.evaluate(siteSections, SKIP_SECTION.source);
    const phoneStops = await phone.evaluate(siteStops, sections);
    const deskStops = await desk.evaluate(siteStops, sections);
    const glide = await phone.evaluate(heroGlide, phoneStops[1] ?? Infinity);
    if (glide !== null) { phoneStops.splice(1, 0, glide); deskStops.splice(1, 0, 0); } // the laptop shows the hero whole
    // [frames moving into the stop, frames holding on it], per stop.
    const plan = [glide !== null ? [0, 12] : [0, 45], ...(glide !== null ? [[36, 27]] : [])];
    for (let i = 0; i < sections.length; i++) plan.push([48, i === sections.length - 1 ? 45 : 30]);

    await desk.evaluate(installSync);
    await phone.evaluate(installSync);
    let n = 0;
    const frame = (i) => path.join(tmp, `frame-${String(i).padStart(4, "0")}.jpg`);
    const at = (stops, p) => {
      const i = Math.floor(p);
      return i + 1 < stops.length ? stops[i] + (stops[i + 1] - stops[i]) * (p - i) : stops[i];
    };
    for (const [stop, [move, hold]] of plan.entries()) {
      const positions = [];
      for (let k = 1; k <= move; k++) positions.push(stop - 1 + easeInOut(k / move));
      for (let k = 0; k < hold; k++) positions.push(stop);
      for (const p of positions) {
        await page.clock.runFor(1000 / FPS);
        for (const [f, stops] of [[desk, deskStops], [phone, phoneStops]]) {
          // Whole device pixels keep text crisp.
          await f.evaluate((top) => { window.scrollTo({ top, behavior: "instant" }); window.__sync(); }, Math.round(at(stops, p) * 2) / 2);
        }
        await page.screenshot({ path: frame(n++), type: "jpeg", quality: 90 });
      }
    }
    await page.close();

    // Raise the CRF until the video fits WhatsApp comfortably.
    const mp4 = path.join(tmp, "outreach-scroll.mp4");
    let crf = 23;
    let bytes;
    for (;;) {
      await run(FFMPEG, [
        "-y", "-hide_banner", "-loglevel", "error", "-framerate", String(FPS), "-i", "frame-%04d.jpg",
        // JPEG frames are full-range BT.601. Convert to the limited-range BT.709 that every
        // phone player expects; -pix_fmt alone keeps full range on recent ffmpeg.
        "-vf", "scale=out_color_matrix=bt709:out_range=tv",
        "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709", "-color_range", "tv",
        "-c:v", "libx264", "-preset", "slow", "-crf", String(crf), "-pix_fmt", "yuv420p",
        "-movflags", "+faststart", mp4,
      ], tmp);
      bytes = (await fs.stat(mp4)).size;
      if (bytes <= MAX_BYTES || crf >= 32) break;
      crf += 2;
    }

    await fs.mkdir(shotsDir, { recursive: true });
    await fs.copyFile(mp4, path.join(shotsDir, "outreach-scroll.mp4"));
    await fs.copyFile(frame(0), path.join(shotsDir, "outreach-poster.jpg"));
    await fs.copyFile(path.join(tmp, "outreach-phone.png"), path.join(shotsDir, "outreach-phone.png"));
    const pngBytes = (await fs.stat(path.join(shotsDir, "outreach-phone.png"))).size;
    return `${(n / FPS).toFixed(1)} s video, ${sections.length} stops${glide !== null ? " and a hero glide" : ""}, `
      + `${mb(bytes)} mp4 (crf ${crf}${bytes > MAX_BYTES ? ", over 4 MB" : ""}), ${mb(pngBytes)} png`
      + `${liveUrl ? `, from ${liveUrl}` : ""}`;
  } finally {
    await browser?.close();
    server.close();
    await fs.rm(tmp, { recursive: true, force: true });
    tmpDir = null;
  }
}

const main = async () => {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const all = args.includes("--all");
  const slugs = args.filter((a) => !a.startsWith("--"));
  const unknown = args.filter((a) => a.startsWith("--") && a !== "--force" && a !== "--all");
  if (unknown.length || all === (slugs.length > 0)) {
    console.error("Usage: node scripts/outreach-media.mjs <slug>… | --all [--force]");
    process.exit(2);
  }

  const { shops } = JSON.parse(await fs.readFile(path.join(ROOT, "data", "shops.json"), "utf8"));
  const hasOut = (slug) => exists(path.join(ROOT, "shops", slug, "site", "out", "index.html"));
  // The local build when there is one, else the published mockup.
  const canCapture = async (shop) => (await hasOut(shop.slug)) || Boolean(shop.preview_url);
  const NO_SOURCE = "no site/out/index.html (run npm run build there first) and no preview_url";
  let targets = slugs;
  if (all) {
    const built = shops.filter((s) => s.status === "built");
    targets = [];
    const unbuilt = [];
    for (const shop of built) (await canCapture(shop) ? targets : unbuilt).push(shop.slug);
    if (unbuilt.length) console.error(`${NO_SOURCE}: ${unbuilt.join(", ")}`);
  }

  let failed = 0;
  for (const slug of targets) {
    const started = Date.now();
    const shop = shops.find((s) => s.slug === slug);
    let problem = null;
    if (!shop) problem = "not in data/shops.json";
    else if (shop.status !== "built") problem = `status is ${shop.status}, not built`;
    else if (!(await canCapture(shop))) problem = NO_SOURCE;
    if (problem) { failed++; console.log(`✗ ${slug}: ${problem}`); continue; }

    const shotsDir = path.join(ROOT, "shops", slug, "screenshots");
    const files = ["outreach-scroll.mp4", "outreach-poster.jpg", "outreach-phone.png"];
    if (!force && (await Promise.all(files.map((f) => exists(path.join(shotsDir, f))))).every(Boolean)) {
      console.log(`✓ ${slug}: skipped, all three files exist (--force to redo)`);
      continue;
    }
    try {
      const summary = await makeMedia(shop, (await hasOut(slug)) ? null : shop.preview_url);
      console.log(`✓ ${slug}: ${summary}, ${Math.round((Date.now() - started) / 1000)} s`);
    } catch (err) {
      failed++;
      console.log(`✗ ${slug}: ${String(err.message || err).split("\n")[0]}`);
    }
  }
  if (failed) process.exit(1);
};

main().catch((err) => { console.error(err); process.exit(1); });
