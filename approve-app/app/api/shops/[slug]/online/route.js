import { NextResponse } from "next/server";
import { readShops, validSlug } from "@/lib/store";

export const dynamic = "force-dynamic";

// Is the shop's mockup answering at its preview URL? Checked from this machine.
export async function GET(_req, { params }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid shop." }, { status: 400 });
  const { shops } = await readShops();
  const shop = shops.find((s) => s.slug === slug);
  if (!shop?.preview_url) return NextResponse.json({ online: false, reason: "Not published yet" });
  try {
    const res = await fetch(shop.preview_url, {
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(6000),
    });
    return NextResponse.json({
      online: res.ok,
      reason: res.ok ? "Online" : `Responds with HTTP ${res.status}`,
    });
  } catch {
    return NextResponse.json({ online: false, reason: "Not responding (still building, or not deployed)" });
  }
}
