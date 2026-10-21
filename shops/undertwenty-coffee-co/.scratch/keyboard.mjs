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
// Before any scroll: opacity of each section's reveal block
const before = await page.evaluate(() => [...document.querySelectorAll("section, footer")].map((s) => {
  const blk = s.querySelector(".container-page > *");
  const cs = getComputedStyle(blk);
  return `${s.getAttribute("aria-labelledby") || "footer"}: opacity ${cs.opacity} visibility ${cs.visibility}`;
}));
console.log("BEFORE", before);
const log = [];
for (let i = 0; i < 16; i++) {
  await page.keyboard.press("Tab");
  await page.waitForTimeout(250);
  const info = await page.evaluate(() => {
    const a = document.activeElement;
    const sec = a.closest("section, footer");
    const blk = sec?.querySelector(".container-page > *");
    let o = 1, el = a;
    while (el && el !== document.body) { o *= parseFloat(getComputedStyle(el).opacity); el = el.parentElement; }
    const r = a.getBoundingClientRect();
    return `${a.tagName.toLowerCase()} "${(a.textContent || a.title || "").trim().slice(0, 28)}" in ${sec?.getAttribute("aria-labelledby") || sec?.tagName} | effective opacity ${o.toFixed(2)} | block ${blk ? getComputedStyle(blk).opacity : "-"} | outline ${getComputedStyle(a).outlineStyle} ${getComputedStyle(a).outlineColor} | h ${Math.round(r.height)}`;
  });
  log.push(info);
}
log.forEach((l, i) => console.log(i + 1, l));
await browser.close(); server.close();
