import { NextResponse } from "next/server";
import { readShops, updateShops } from "@/lib/store";
import { canMove, isStatus } from "@/lib/statuses";
import { isOwnerClosed } from "@/lib/pipeline";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(await readShops());
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: `Couldn't read data/shops.json: ${message}` }, { status: 500 });
  }
}

// Bulk status change: { slugs: [...], status }
export async function POST(req: Request) {
  const { slugs, status } = (await req.json()) as { slugs?: unknown; status?: unknown };
  if (!Array.isArray(slugs) || !isStatus(status)) {
    return NextResponse.json({ error: "Send slugs (array) and a valid status." }, { status: 400 });
  }
  const now = new Date().toISOString().replace(/\.\d+Z$/, "Z");
  const moved = await updateShops((data) => {
    const done: string[] = [];
    for (const shop of data.shops) {
      if (slugs.includes(shop.slug) && canMove(shop.status, status) && !isOwnerClosed(shop)) {
        shop.status = status;
        shop.updated_at = now;
        done.push(shop.slug);
      }
    }
    return done;
  });
  return NextResponse.json({ moved });
}
