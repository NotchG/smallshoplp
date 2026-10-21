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
const sel = process.argv[4] || "h1 > span";
for (const w of (process.argv[3] || "390,768").split(",").map(Number)) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 }, reducedMotion: "reduce" });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const r = await page.evaluate((sel) => [...document.querySelectorAll(sel)].map((el) => {
    const range = document.createRange(); range.selectNodeContents(el);
    const t = [...range.getClientRects()].map((x) => `${Math.round(x.top)}-${Math.round(x.bottom)}`);
    const b = el.getBoundingClientRect();
    return `${el.textContent.slice(0, 24)} | box ${Math.round(b.top)}-${Math.round(b.bottom)} | text ${t.join(",")} | fs ${getComputedStyle(el).fontSize}`;
  }), sel);
  console.log(w); r.forEach((x) => console.log("  " + x));
  await page.close();
}
await browser.close(); server.close();
