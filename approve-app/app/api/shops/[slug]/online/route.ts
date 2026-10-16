import { NextResponse } from "next/server";
import { readShops, validSlug } from "@/lib/store";

export const dynamic = "force-dynamic";

// Is the shop's mockup answering at its preview URL? Checked from this machine.
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid shop." }, { status: 400 });
  const { shops } = await readShops();
  const shop = shops.find((s) => s.slug === slug);
  if (!shop?.preview_url) return NextResponse.json({ online: false, reason: "Not published yet" });
  try {
    const res = await fetch(shop.preview_url, {
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    return NextResponse.json({
      online: res.ok,
      reason: res.ok ? "Online" : `Responds with HTTP ${res.status}`,
    });
  } catch (err) {
    const e = err as { name?: string; cause?: { code?: string; errors?: { code?: string }[] } };
    const code = e?.cause?.code || e?.cause?.errors?.[0]?.code || e?.name || "";
    const reason =
      code === "ENOTFOUND" || code === "EAI_AGAIN"
        ? "DNS lookup failed on this computer (try flushing DNS, or wait for the router's cache)"
        : code === "TimeoutError" || code === "UND_ERR_CONNECT_TIMEOUT"
          ? "Timed out (still building, or the tunnel can't reach Coolify)"
          : code === "ECONNREFUSED"
            ? "Connection refused (not deployed yet)"
            : /CERT|SSL|TLS/i.test(code)
              ? `Certificate problem (${code})`
              : `Not responding${code ? ` (${code})` : ""}`;
    return NextResponse.json({ online: false, reason });
  }
}
