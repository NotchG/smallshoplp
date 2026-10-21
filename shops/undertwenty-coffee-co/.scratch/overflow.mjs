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
for (const w of (process.argv[3] || "390,1440").split(",").map(Number)) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 }, reducedMotion: "reduce" });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const r = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const out = [];
    for (const el of document.querySelectorAll("body *")) {
      const b = el.getBoundingClientRect();
      if (b.right > vw + 0.5 || b.left < -0.5) out.push(`${el.tagName.toLowerCase()}.${(el.className?.baseVal ?? el.className ?? "").toString().slice(0, 50)} L${Math.round(b.left)} R${Math.round(b.right)}`);
    }
    return { vw, sw: document.documentElement.scrollWidth, out: out.slice(0, 15) };
  });
  console.log(w, JSON.stringify(r, null, 1));
  await page.close();
}
await browser.close(); server.close();
