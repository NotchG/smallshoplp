import { NextResponse } from "next/server";
import { readBrief, updateShops, validSlug } from "@/lib/store";
import { canMove, STATUSES } from "@/lib/statuses";

export const dynamic = "force-dynamic";

// { status, note? }
export async function PATCH(req, { params }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid shop." }, { status: 400 });
  const { status, note } = await req.json();
  if (!STATUSES.includes(status)) return NextResponse.json({ error: "Invalid status." }, { status: 400 });

  if (status === "brief_rework" && !(note || "").trim()) {
    return NextResponse.json({ error: "Add a note saying what to change." }, { status: 400 });
  }
  if (status === "brief_approved") {
    const brief = await readBrief(slug);
    if (brief === null) return NextResponse.json({ error: "This shop has no brief yet." }, { status: 400 });
  }

  const now = new Date().toISOString().replace(/\.\d+Z$/, "Z");
  const result = await updateShops((data) => {
    const shop = data.shops.find((s) => s.slug === slug);
    if (!shop) return { error: "No such shop.", code: 404 };
    if (!canMove(shop.status, status)) {
      return { error: `Can't move from ${shop.status} to ${status}.`, code: 409 };
    }
    shop.status = status;
    shop.updated_at = now;
    if (status === "brief_rework") shop.brief_note = note.trim();
    if (status === "brief_approved") shop.brief_note = "";
    return { shop };
  });
  if (result.error) return NextResponse.json({ error: result.error }, { status: result.code });
  return NextResponse.json(result);
}
