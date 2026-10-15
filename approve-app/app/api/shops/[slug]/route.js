import { NextResponse } from "next/server";
import { readBrief, readRaw, readShops, shopFiles, updateShops, validSlug } from "@/lib/store";
import { canMove, STATUSES } from "@/lib/statuses";

export const dynamic = "force-dynamic";

const now = () => new Date().toISOString().replace(/\.\d+Z$/, "Z");

// Everything the shop page needs: the shop, a few listing facts, and which files exist.
export async function GET(_req, { params }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid shop." }, { status: 400 });
  const { shops } = await readShops();
  const shop = shops.find((s) => s.slug === slug);
  if (!shop) return NextResponse.json({ error: "No such shop." }, { status: 404 });
  const raw = await readRaw(slug);
  return NextResponse.json({
    shop,
    listing: raw && {
      phone: raw.internationalPhoneNumber || raw.nationalPhoneNumber || "",
      mapsUrl: raw.googleMapsUri || "",
      website: raw.websiteUri || "",
      rating: raw.rating ?? null,
      reviews: raw.userRatingCount ?? null,
    },
    files: await shopFiles(slug),
  });
}

// { status, note? } to move a shop, or { outreach_sent: true|false } to record the message.
export async function PATCH(req, { params }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid shop." }, { status: 400 });
  const body = await req.json();

  if (typeof body.outreach_sent === "boolean") {
    const result = await updateShops((data) => {
      const shop = data.shops.find((s) => s.slug === slug);
      if (!shop) return { error: "No such shop.", code: 404 };
      if (shop.status !== "built" || !shop.coolify_uuid) {
        return { error: "Publish the mockup before sending it.", code: 409 };
      }
      shop.outreach_sent_at = body.outreach_sent ? now() : "";
      shop.updated_at = now();
      return { shop };
    });
    if (result.error) return NextResponse.json({ error: result.error }, { status: result.code });
    return NextResponse.json(result);
  }

  const { status, note } = body;
  if (!STATUSES.includes(status)) return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  if (status === "brief_rework" && !(note || "").trim()) {
    return NextResponse.json({ error: "Add a note saying what to change." }, { status: 400 });
  }
  if (status === "brief_approved" && (await readBrief(slug)) === null) {
    return NextResponse.json({ error: "This shop has no brief yet." }, { status: 400 });
  }

  const result = await updateShops((data) => {
    const shop = data.shops.find((s) => s.slug === slug);
    if (!shop) return { error: "No such shop.", code: 404 };
    if (!canMove(shop.status, status)) {
      return { error: `Can't move from ${shop.status} to ${status}.`, code: 409 };
    }
    // A built shop the owner declined can go back to built; a rejected candidate can't.
    if (shop.status === "rejected" && status === "built" && !shop.declined_at) {
      return { error: "Only a shop the owner declined can go back to built.", code: 409 };
    }
    if (shop.status === "built" && status === "rejected") shop.declined_at = now();
    if (shop.status === "rejected" && status === "built") shop.declined_at = "";
    shop.status = status;
    shop.updated_at = now();
    if (status === "brief_rework") shop.brief_note = note.trim();
    if (status === "brief_approved") shop.brief_note = "";
    return { shop };
  });
  if (result.error) return NextResponse.json({ error: result.error }, { status: result.code });
  return NextResponse.json(result);
}
