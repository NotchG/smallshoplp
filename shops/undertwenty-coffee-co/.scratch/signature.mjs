import { createRequire } from "node:module";
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
const SITE = process.argv[2];
const require = createRequire(path.join(SITE, "package.json"));
const { chromium } = require("playwright");
const OUT = path.join(SITE, "out");
const T = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".woff2": "font/woff2" };
const server = http.createServer(async (req, res) => {
  const u = decodeURIComponent(new URL(req.url, "http://x").pathname);
  for (const f of [path.join(OUT, u), path.join(OUT, u, "index.html")]) {
    try { if ((await fs.stat(f)).isFile()) { res.writeHead(200, { "Content-Type": T[path.extname(f)] || "application/octet-stream" }); res.end(await fs.readFile(f)); return; } } catch {}
  }
  res.writeHead(404).end();
});
await new Promise((r) => server.listen(0, r));
const url = `http://localhost:${server.address().port}/`;
const browser = await chromium.launch();
for (const [w, rm] of [[1440, "no-preference"], [390, "no-preference"], [1440, "reduce"]]) { const page = await browser.newPage({ viewport: { width: w, height: 900 }, reducedMotion: rm });
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
  const sc = () => page.evaluate(() => getComputedStyle(document.querySelector("section img")).transform);
  const s0 = await sc();
  const heroH = await page.evaluate(() => document.querySelector("section").offsetHeight);
  await page.mouse.wheel(0, heroH / 2); await page.waitForTimeout(1500);
  const s1 = await sc();
  await page.mouse.wheel(0, heroH); await page.waitForTimeout(1500); console.log("  scrollY", await page.evaluate(() => scrollY), "heroH", heroH);
  const s2 = await sc();
  console.log(w, rm, "| top:", s0, "| mid:", s1, "| past hero:", s2, "| lenis:", await page.evaluate(() => document.documentElement.className.includes("lenis")));
  await page.close();
}
await browser.close(); server.close();
