import { NextResponse } from "next/server";
import {
  readBrief, readOutreach, readRaw, readShops, restoreShopDir, shopFiles, updateShops, validSlug,
} from "@/lib/store";
import { isOwnerClosed } from "@/lib/pipeline";
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

// Everything the shop page needs: the shop, a few listing facts, the outreach line, and which files exist.
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
    outreach: await readOutreach(slug),
    files: await shopFiles(slug),
  });
}

// { status, note? } to move a shop, or { outreach_sent: true|false } to record the message.
export async function PATCH(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid shop." }, { status: 400 });
  const body = (await req.json()) as PatchBody;

  // Owner follow-up, link and deal stages: { owner: "followup_sent" | "followup_unsent" | "no_answer"
  //   | "prospect" | "link_sent" | "link_unsent" | "hot" | "do" | "reopen" }
  if (typeof body.owner === "string") {
    const op = body.owner;

    // An archived shop that comes back needs its folder back before Claude can rebuild it.
    let restored = false;
    if (op === "reopen") {
      const shop = (await readShops()).shops.find((s) => s.slug === slug);
      if (shop && isOwnerClosed(shop) && shop.archived_at) {
        try { await restoreShopDir(slug); }
        catch (err) { return NextResponse.json({ error: err instanceof Error ? err.message : String(err) }, { status: 409 }); }
        restored = true;
      }
    }

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
          shop.status = "rejected"; // archive-rejected.sh picks it up from here
          break;
        case "prospect":
          if (!sentBuilt) return fail("Send the preview first.");
          setStage("prospect");
          break;
        case "link_sent":
          if (!sentBuilt || (stage !== "prospect" && stage !== "hot")) return fail("Mark the owner as replied first.");
          if (shop.link_sent_at) return fail("The link is already marked as sent.");
          shop.link_sent_at = now();
          break;
        case "link_unsent":
          if (!sentBuilt || stage !== "prospect" || !shop.link_sent_at) return fail("There's no link to undo.");
          shop.link_sent_at = "";
          break;
        case "reopen":
          // The owner declined or went quiet, then replied after all.
          if (!isOwnerClosed(shop)) return fail("Only a shop the owner declined or didn't answer can be reopened.");
          if (restored || shop.archived_at) {
            // The site is gone: rebuild it from the kept brief, then send the new link.
            shop.status = "brief_approved";
            shop.archived_at = "";
            shop.link_sent_at = "";
          } else {
            shop.status = "built";
          }
          shop.declined_at = "";
          setStage("prospect");
          break;
        case "hot":
          if (shop.status === "owner_approved") shop.status = "built"; // undo DO
          else if (!sentBuilt) return fail("Send the mockup first.");
          setStage("hot");
          break;
        case "do":
          if (!sentBuilt || (stage !== "prospect" && stage !== "hot")) return fail("Mark the owner as replied first.");
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
    if (isOwnerClosed(shop)) {
      return { error: "The owner turned this shop down. Use \"Owner replied after all\" on its page instead.", code: 409 };
    }
    if (shop.status === "built" && status === "rejected") shop.declined_at = now();
    shop.status = status;
    shop.updated_at = now();
    if (status === "brief_rework") shop.brief_note = (note ?? "").trim();
    if (status === "brief_approved") shop.brief_note = "";
    return { shop };
  });
  if (result.error) return NextResponse.json({ error: result.error }, { status: result.code });
  return NextResponse.json(result);
}
