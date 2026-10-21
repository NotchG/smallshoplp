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
const widths = (process.argv[3] || "360,390,768,1024,1280,1440").split(",").map(Number);
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 }, reducedMotion: "reduce" });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const r = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const [a, b] = h1.children;
    const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
    const c = document.querySelector(".container-page");
    const cw = c.clientWidth - 2 * parseFloat(getComputedStyle(c).paddingLeft);
    const btn = document.querySelector(".btn-solid").getBoundingClientRect();
    return { fs: getComputedStyle(a).fontSize, stretch: getComputedStyle(a).fontStretch, wordW: Math.round(a.scrollWidth), boxW: Math.round(ra.width), scriptTop: Math.round(rb.top), scriptLeft: Math.round(rb.left), scriptRight: Math.round(rb.right), wordBottom: Math.round(ra.bottom), cw, overflow: document.documentElement.scrollWidth > innerWidth, btnBottom: Math.round(btn.bottom) };
  });
  console.log(w, JSON.stringify(r));
  await page.close();
}
await browser.close(); server.close();
