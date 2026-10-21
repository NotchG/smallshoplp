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
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "no-preference" });
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const op = () => page.evaluate(() => getComputedStyle(document.querySelector('[aria-labelledby="visit-title"] .container-page > *')).opacity);
console.log("visit block before:", await op());
// Focus the map directly (as if tabbing from the address bar / shift-tab), without focusing anything else in the block first.
await page.evaluate(() => { window.focus(); document.querySelector("iframe").focus(); });
await page.waitForTimeout(300);
console.log("active:", await page.evaluate(() => document.activeElement.tagName), "| visit block after:", await op(),
  "| frame outline:", await page.evaluate(() => getComputedStyle(document.querySelector("iframe").parentElement).outlineStyle));
await browser.close(); server.close();
