import { readShopFile } from "@/lib/store";

export const dynamic = "force-dynamic";

const TYPES: Record<string, string> = { png: "image/png", jpg: "image/jpeg", mp4: "video/mp4" };

// Serves a shop's screenshots, outreach video and docs: /api/shops/<slug>/file?path=screenshots/1440-fold.png
// Videos answer a single Range request with 206, which Safari needs to play <video>.
export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rel = new URL(req.url).searchParams.get("path") || "";
  const data = await readShopFile(slug, rel);
  if (!data) return new Response("Not found", { status: 404 });
  const type = TYPES[rel.split(".").pop() ?? ""] ?? "text/plain; charset=utf-8";
  const headers: Record<string, string> = { "Content-Type": type, "Cache-Control": "no-store" };
  if (type !== "video/mp4") return new Response(new Uint8Array(data), { headers });

  headers["Accept-Ranges"] = "bytes";
  const size = data.length;
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.get("range") || "");
  if (!range || (!range[1] && !range[2])) {
    // Explicit, so HEAD (which the shop page uses to show the file size) carries it too.
    return new Response(new Uint8Array(data), { headers: { ...headers, "Content-Length": String(size) } });
  }
  // "bytes=500-" from 500 to the end, "bytes=-500" the last 500 bytes.
  const start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]));
  const end = range[1] && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
  if (start >= size || start > end) {
    return new Response(null, { status: 416, headers: { ...headers, "Content-Range": `bytes */${size}` } });
  }
  return new Response(new Uint8Array(data.subarray(start, end + 1)), {
    status: 206,
    headers: { ...headers, "Content-Range": `bytes ${start}-${end}/${size}` },
  });
}
