import { NextResponse } from "next/server";
import { readBrief, readShops, validSlug, writeBrief } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid shop." }, { status: 400 });
  const { shops } = await readShops();
  const shop = shops.find((s) => s.slug === slug);
  if (!shop) return NextResponse.json({ error: "No such shop." }, { status: 404 });
  return NextResponse.json({ shop, brief: await readBrief(slug) });
}

// { brief }
export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid shop." }, { status: 400 });
  const { brief } = (await req.json()) as { brief?: unknown };
  if (typeof brief !== "string") return NextResponse.json({ error: "Send the brief text." }, { status: 400 });
  const { shops } = await readShops();
  const shop = shops.find((s) => s.slug === slug);
  if (!shop) return NextResponse.json({ error: "No such shop." }, { status: 404 });
  if (!["brief_ready", "brief_rework"].includes(shop.status)) {
    return NextResponse.json({ error: "This brief is locked. Move it back to review to edit it." }, { status: 409 });
  }
  await writeBrief(slug, brief.endsWith("\n") ? brief : brief + "\n");
  return NextResponse.json({ ok: true });
}
