// Screenshots + layout checks for the visual review loop.
// Usage: npm run build && npm run shots
// Writes ../screenshots/: <width>-fold.png, <width>-full.png, report.json
// Screenshots use reduced motion, so every element is in its final, visible state.
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const OUT = path.resolve("out");
const SHOTS = path.resolve("..", "screenshots");
const VIEWPORTS = [
  { name: "390", width: 390, height: 844 },
  { name: "768", width: 768, height: 1024 },
  { name: "1440", width: 1440, height: 900 },
];
const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".woff2": "font/woff2", ".woff": "font/woff", ".ico": "image/x-icon", ".txt": "text/plain",
  ".json": "application/json",
};

async function exists(p) { try { return (await fs.stat(p)).isFile(); } catch { return false; } }

// Tiny static server for out/ (no extra dependency).
function serve() {
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
  return new Promise((resolve) => server.listen(0, () => resolve(server)));
}

// Runs in the page: font sizes of key elements, horizontal overflow, overlapping text.
function inspect() {
  const px = (el) => parseFloat(getComputedStyle(el).fontSize);
  const label = (el) => {
    const t = (el.innerText || "").trim().replace(/\s+/g, " ").slice(0, 40);
    return `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""} "${t}"`;
  };
  const vw = document.documentElement.clientWidth;

  // Width of the text itself (not the block box), as a share of the content width.
  const container = document.querySelector(".container-page");
  const contentWidth = container
    ? container.clientWidth - parseFloat(getComputedStyle(container).paddingLeft) * 2
    : vw;
  const sizes = [...document.querySelectorAll("h1, h2, h3, [data-check]")].map((el) => {
    const range = document.createRange(); range.selectNodeContents(el);
    const textWidth = Math.round(range.getBoundingClientRect().width);
    return {
      el: label(el),
      fontSize: Math.round(px(el) * 10) / 10,
      lineHeight: getComputedStyle(el).lineHeight,
      textWidth,
      pctOfContentWidth: Math.round((textWidth / contentWidth) * 100),
    };
  });

  // Elements that directly hold visible text.
  const texty = [...document.body.querySelectorAll("*")].filter((el) => {
    const s = getComputedStyle(el);
    if (s.visibility === "hidden" || s.display === "none" || parseFloat(s.opacity) === 0) return false;
    return [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
  });
  const boxes = texty.map((el) => {
    // Use the text's own line boxes, not the element box, so padding doesn't count as overlap.
    const range = document.createRange(); range.selectNodeContents(el);
    const rects = [...range.getClientRects()].filter((r) => r.width > 1 && r.height > 1);
    return { el, rects };
  });
  const overlaps = [];
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i], b = boxes[j];
      if (a.el.contains(b.el) || b.el.contains(a.el)) continue;
      const hit = a.rects.some((ra) => b.rects.some((rb) => {
        const w = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
        const h = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
        return w > 2 && h > 2;
      }));
      if (hit) overlaps.push(`${label(a.el)}  ×  ${label(b.el)}`);
      if (overlaps.length >= 25) break;
    }
  }

  return {
    horizontalOverflow: document.documentElement.scrollWidth > vw,
    pageHeight: document.documentElement.scrollHeight,
    sizes,
    overlappingText: overlaps,
    mockupBanner: !!document.querySelector(".mockup-banner"),
    noindex: !!document.querySelector('meta[name="robots"][content*="noindex"]'),
    mockupItems: document.querySelectorAll("[data-mockup]").length,
  };
}

const main = async () => {
  if (!(await exists(path.join(OUT, "index.html")))) {
    console.error("out/index.html not found. Run `npm run build` first."); process.exit(1);
  }
  await fs.mkdir(SHOTS, { recursive: true });
  const server = await serve();
  const url = `http://localhost:${server.address().port}/`;
  const browser = await chromium.launch(
    process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {},
  );
  const report = {};
  try {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, reducedMotion: "reduce" });
      await page.goto(url, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(SHOTS, `${vp.name}-fold.png`) });

      // Lazy images and iframes below the fold only load once scrolled near. Scroll through
      // the page once, then grow the viewport to the full page height and wait briefly, so
      // the full-page capture shows them instead of blank boxes.
      await page.evaluate(async () => {
        const wait = (ms) => new Promise((r) => setTimeout(r, ms));
        const step = Math.max(200, Math.floor(window.innerHeight * 0.75));
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await wait(120);
        }
        window.scrollTo(0, 0);
      });
      const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      await page.setViewportSize({ width: vp.width, height: fullHeight });
      await page
        .waitForFunction(() => [...document.images].every((img) => img.complete), null, { timeout: 8000 })
        .catch(() => {});
      await page.waitForTimeout(1200);
      await page.screenshot({ path: path.join(SHOTS, `${vp.name}-full.png`), fullPage: true });

      // Back to the real viewport for the layout checks.
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.waitForTimeout(200);
      report[vp.name] = await page.evaluate(inspect);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
  await fs.writeFile(path.join(SHOTS, "report.json"), JSON.stringify(report, null, 2));

  for (const [w, r] of Object.entries(report)) {
    const flags = [
      r.horizontalOverflow && "horizontal scroll",
      r.overlappingText.length && `${r.overlappingText.length} overlapping text pairs`,
      !r.mockupBanner && "no mockup banner",
      !r.noindex && "no noindex",
    ].filter(Boolean);
    console.log(`${w}px: ${flags.length ? "CHECK " + flags.join(", ") : "ok"}`);
  }
  console.log(`Screenshots and report.json in ${SHOTS}`);
};

main().catch((err) => { console.error(err); process.exit(1); });
