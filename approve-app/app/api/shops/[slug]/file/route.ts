import { readShopFile } from "@/lib/store";

export const dynamic = "force-dynamic";

// Serves a shop's screenshots and docs: /api/shops/<slug>/file?path=screenshots/1440-fold.png
export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rel = new URL(req.url).searchParams.get("path") || "";
  const data = await readShopFile(slug, rel);
  if (!data) return new Response("Not found", { status: 404 });
  const type = rel.endsWith(".png") ? "image/png" : "text/plain; charset=utf-8";
  return new Response(new Uint8Array(data), { headers: { "Content-Type": type, "Cache-Control": "no-store" } });
}
