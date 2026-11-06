// Outreach media for the WhatsApp pitch, made from a shop's built mockup (site/out/).
// Usage: node scripts/outreach-media.mjs <slug>… | --all [--force]
// Writes shops/<slug>/screenshots/:
//   outreach-phone.png   the hero on a phone, 780×1688 (390×844 at 2x)
//   outreach-scroll.mp4  hold on the hero, eased scroll to the bottom, hold; H.264, 30 fps
// Acts on shops with status "built" and a site/out/index.html. Skips shops that already have
// both files unless --force. Writes nothing under site/: pushes there trigger Coolify redeploys.
// Playwright comes from each shop's own site/node_modules; ffmpeg needs libx264.
// Frames use reduced motion (Lenis off, GSAP skipped), so every run looks the same.
import http from "node:http";
import fs from "node:fs/promises";
import { constants, existsSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const VIEWPORT = { width: 390, height: 844 };
const FPS = 30;
const HOLD_FRAMES = 1.5 * FPS; // on the hero and at the bottom
const MAX_BYTES = 4_000_000;
const FFMPEG = process.env.FFMPEG_PATH
  || (existsSync("/opt/homebrew/bin/ffmpeg") ? "/opt/homebrew/bin/ffmpeg" : "ffmpeg");
const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".woff2": "font/woff2", ".woff": "font/woff", ".ico": "image/x-icon", ".txt": "text/plain",
  ".json": "application/json",
};

async function exists(p) { try { return (await fs.stat(p)).isFile(); } catch { return false; } }

// Tiny static server for out/ (no extra dependency), as in the site starter's shots.mjs.
function serve(OUT) {
  const server = http.createServer(async (req, res) => {
    const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const base = path.join(OUT, url);
    if (!base.startsWith(OUT)) { res.writeHead(403).end(); return; }
    for (const file of [base, path.join(base, "index.html"), base + ".html"]) {
      if (await exists(file)) {
        res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
        res.end(await fs.readFile(file));
        return;
      }
    }
    res.writeHead(404).end("not found");
  });
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

const easeInOut = (t) => (1 - Math.cos(Math.PI * t)) / 2;
const mb = (bytes) => `${(bytes / 1e6).toFixed(1)} MB`;

let tmpDir = null; // removed on Ctrl-C too
process.on("SIGINT", () => {
  if (tmpDir) rmSync(tmpDir, { recursive: true, force: true });
  process.exit(130);
});

async function makeMedia(slug) {
  const siteDir = path.join(ROOT, "shops", slug, "site");
  const shotsDir = path.join(ROOT, "shops", slug, "screenshots");
  const { chromium } = createRequire(path.join(siteDir, "package.json"))("playwright");
  tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), `outreach-${slug}-`));
  const tmp = tmpDir;
  const server = await serve(path.join(siteDir, "out"));
  let browser;
  try {
    browser = await chromium.launch(
      process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {},
    );
    const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 2, reducedMotion: "reduce" });
    await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);

    // Lazy images below the fold only load once scrolled near. Scroll through the page once
    // and wait for them, so no frame shows a blank box.
    await page.evaluate(async () => {
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      const step = Math.max(200, Math.floor(window.innerHeight * 0.75));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo({ top: y, behavior: "instant" });
        await wait(120);
      }
    });
    await page
      .waitForFunction(() => [...document.images].every((img) => img.complete), null, { timeout: 8000 })
      .catch(() => {});
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(600);
    const { pageHeight, maxScroll } = await page.evaluate(() => ({
      pageHeight: document.documentElement.scrollHeight,
      maxScroll: document.documentElement.scrollHeight - window.innerHeight,
    }));

    await page.screenshot({ path: path.join(tmp, "outreach-phone.png") });

    // Real viewport frames. The first one is the hero, so it is also WhatsApp's thumbnail.
    let n = 0;
    const frame = (i) => path.join(tmp, `frame-${String(i).padStart(4, "0")}.jpg`);
    const shoot = async (top) => {
      // One animation frame lets scroll listeners (header state and the like) catch up.
      await page.evaluate((y) => new Promise((r) => {
        window.scrollTo({ top: y, behavior: "instant" });
        requestAnimationFrame(() => r());
      }), top);
      await page.screenshot({ path: frame(n++), type: "jpeg", quality: 90 });
    };
    const hold = async (count) => {
      const last = frame(n - 1);
      for (let i = 0; i < count; i++) await fs.copyFile(last, frame(n++), constants.COPYFILE_FICLONE);
    };

    await shoot(0);
    await hold(HOLD_FRAMES - 1);
    const scrollFrames = Math.round(Math.min(Math.max(pageHeight / 700, 8), 14) * FPS);
    for (let i = 1; i <= scrollFrames; i++) {
      // Whole device pixels (0.5 CSS px at 2x) keep text crisp.
      await shoot(Math.round(maxScroll * easeInOut(i / scrollFrames) * 2) / 2);
    }
    await hold(HOLD_FRAMES);
    await page.close();

    // Raise the CRF until the video fits WhatsApp comfortably.
    const mp4 = path.join(tmp, "outreach-scroll.mp4");
    let crf = 24;
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
    await fs.copyFile(path.join(tmp, "outreach-phone.png"), path.join(shotsDir, "outreach-phone.png"));
    const pngBytes = (await fs.stat(path.join(shotsDir, "outreach-phone.png"))).size;
    return `${(n / FPS).toFixed(1)} s video, ${mb(bytes)} mp4 (crf ${crf}${bytes > MAX_BYTES ? ", over 4 MB" : ""}), `
      + `${mb(pngBytes)} png`;
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
  let targets = slugs;
  if (all) {
    const built = shops.filter((s) => s.status === "built").map((s) => s.slug);
    targets = [];
    const unbuilt = [];
    for (const slug of built) (await hasOut(slug) ? targets : unbuilt).push(slug);
    if (unbuilt.length) {
      console.error(`No site/out/index.html (run npm run build there first): ${unbuilt.join(", ")}`);
    }
  }

  let failed = 0;
  for (const slug of targets) {
    const started = Date.now();
    const shop = shops.find((s) => s.slug === slug);
    let problem = null;
    if (!shop) problem = "not in data/shops.json";
    else if (shop.status !== "built") problem = `status is ${shop.status}, not built`;
    else if (!(await hasOut(slug))) problem = "no site/out/index.html (run npm run build there first)";
    if (problem) { failed++; console.log(`✗ ${slug}: ${problem}`); continue; }

    const shotsDir = path.join(ROOT, "shops", slug, "screenshots");
    if (!force && await exists(path.join(shotsDir, "outreach-scroll.mp4"))
      && await exists(path.join(shotsDir, "outreach-phone.png"))) {
      console.log(`✓ ${slug}: skipped, both files exist (--force to redo)`);
      continue;
    }
    try {
      const summary = await makeMedia(slug);
      console.log(`✓ ${slug}: ${summary}, ${Math.round((Date.now() - started) / 1000)} s`);
    } catch (err) {
      failed++;
      console.log(`✗ ${slug}: ${String(err.message || err).split("\n")[0]}`);
    }
  }
  if (failed) process.exit(1);
};

main().catch((err) => { console.error(err); process.exit(1); });
