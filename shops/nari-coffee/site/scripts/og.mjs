// Link-preview image: the top of the page at 1200×630, the size WhatsApp, iMessage, Slack and
// Facebook show. Usage: npm run build && node scripts/og.mjs (`npm run shots` runs it too).
// Writes public/og.jpg, so the next build and the deploy ship it, and out/og.jpg, so this build has it.
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const OUT = path.resolve("out");
const ORIGIN = "http://og.local";

async function exists(p) { try { return (await fs.stat(p)).isFile(); } catch { return false; } }

const main = async () => {
  if (!(await exists(path.join(OUT, "index.html")))) {
    console.error("out/index.html not found. Run `npm run build` first."); process.exit(1);
  }
  const browser = await chromium.launch(
    process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {},
  );
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: "reduce" });
    // The image outlives the moment it's taken, so any "open now" badge is drawn at a fixed
    // Wednesday 15:00 local time, when most shops are open, not whenever this script runs.
    await page.clock.setFixedTime(new Date(2026, 0, 7, 15, 0));
    // Serve out/ through the browser itself; requests to other hosts go through untouched.
    await page.route(`${ORIGIN}/**`, async (route) => {
      const url = decodeURIComponent(new URL(route.request().url()).pathname);
      for (const file of [path.join(OUT, url), path.join(OUT, url, "index.html")]) {
        if (file.startsWith(OUT) && (await exists(file))) return route.fulfill({ path: file });
      }
      return route.fulfill({ status: 404 });
    });
    await page.goto(`${ORIGIN}/`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page
      .waitForFunction(() => [...document.images].every((img) => img.complete), null, { timeout: 8000 })
      .catch(() => {});
    await page.waitForTimeout(400);
    const jpg = await page.screenshot({ type: "jpeg", quality: 82 });
    await fs.mkdir("public", { recursive: true });
    await fs.writeFile(path.join("public", "og.jpg"), jpg);
    await fs.writeFile(path.join(OUT, "og.jpg"), jpg);
    console.log(`Link preview: public/og.jpg (${Math.round(jpg.length / 1024)} KB)`);
  } finally {
    await browser.close();
  }
};

main().catch((err) => { console.error(err); process.exit(1); });
