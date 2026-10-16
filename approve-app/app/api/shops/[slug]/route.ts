import { NextResponse } from "next/server";
import { readBrief, readRaw, readShops, shopFiles, updateShops, validSlug } from "@/lib/store";
import { canMove, isStatus } from "@/lib/statuses";
import type { Shop } from "@/lib/types";

type Result = { shop: Shop; error?: undefined } | { error: string; code: number; shop?: undefined };

interface PatchBody {
  status?: unknown;
  note?: string;
  owner?: unknown;
  outreach_sent?: unknown;
}

export const dynamic = "force-dynamic";

const now = () => new Date().toISOString().replace(/\.\d+Z$/, "Z");

// Everything the shop page needs: the shop, a few listing facts, and which files exist.
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
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
export async function PATCH(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid shop." }, { status: 400 });
  const body = (await req.json()) as PatchBody;

  // Owner follow-up and deal stages: { owner: "followup_sent" | "followup_unsent" | "no_answer"
  //                                          | "prospect" | "hot" | "do" }
  if (typeof body.owner === "string") {
    const op = body.owner;
    const result = await updateShops((data): Result => {
      const shop = data.shops.find((s) => s.slug === slug);
      if (!shop) return { error: "No such shop.", code: 404 };
      const stage = shop.owner_stage || "";
      const sentBuilt = shop.status === "built" && !!shop.outreach_sent_at;
      const fail = (msg: string): Result => ({ error: msg, code: 409 });
      const setStage = (st: NonNullable<Shop["owner_stage"]>) => { shop.owner_stage = st; shop.owner_stage_at = now(); };

      switch (op) {
        case "followup_sent":
          if (!sentBuilt || stage || shop.followup_sent_at) return fail("A follow-up can only be sent while waiting for the first reply.");
          shop.followup_sent_at = now();
          break;
        case "followup_unsent":
          if (!sentBuilt || stage || !shop.followup_sent_at) return fail("There's no follow-up to undo.");
          shop.followup_sent_at = "";
          break;
        case "no_answer":
          if (!sentBuilt || stage || !shop.followup_sent_at) return fail("Send the follow-up before closing as no answer.");
          setStage("no_answer");
          break;
        case "prospect":
          if (!sentBuilt) return fail("Send the mockup first.");
          setStage("prospect");
          break;
        case "hot":
          if (shop.status === "owner_approved") shop.status = "built"; // undo DO
          else if (!sentBuilt) return fail("Send the mockup first.");
          setStage("hot");
          break;
        case "do":
          if (!sentBuilt || (stage !== "prospect" && stage !== "hot")) return fail("Mark the owner as a prospect first.");
          setStage("do");
          shop.status = "owner_approved";
          break;
        default:
          return { error: "Unknown owner action.", code: 400 };
      }
      shop.updated_at = now();
      return { shop };
    });
    if (result.error) return NextResponse.json({ error: result.error }, { status: result.code });
    return NextResponse.json(result);
  }

  if (typeof body.outreach_sent === "boolean") {
    const result = await updateShops((data): Result => {
      const shop = data.shops.find((s) => s.slug === slug);
      if (!shop) return { error: "No such shop.", code: 404 };
      if (shop.status !== "built" || !shop.coolify_uuid) {
        return { error: "Publish the mockup before sending it.", code: 409 };
      }
      if (!body.outreach_sent && (shop.followup_sent_at || shop.owner_stage)) {
        return { error: "The owner thread has moved on; undo those steps first.", code: 409 };
      }
      shop.outreach_sent_at = body.outreach_sent ? now() : "";
      shop.updated_at = now();
      return { shop };
    });
    if (result.error) return NextResponse.json({ error: result.error }, { status: result.code });
    return NextResponse.json(result);
  }

  const { status, note } = body;
  if (!isStatus(status)) return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  if (status === "brief_rework" && !(note || "").trim()) {
    return NextResponse.json({ error: "Add a note saying what to change." }, { status: 400 });
  }
  if (status === "brief_approved" && (await readBrief(slug)) === null) {
    return NextResponse.json({ error: "This shop has no brief yet." }, { status: 400 });
  }

  const result = await updateShops((data): Result => {
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
    if (shop.status === "rejected" && status === "built") {
      shop.declined_at = "";
      shop.owner_stage = "prospect"; // owner changed their mind
      shop.owner_stage_at = now();
    }
    shop.status = status;
    shop.updated_at = now();
    if (status === "brief_rework") shop.brief_note = (note ?? "").trim();
    if (status === "brief_approved") shop.brief_note = "";
    return { shop };
  });
  if (result.error) return NextResponse.json({ error: result.error }, { status: result.code });
  return NextResponse.json(result);
}
