import { NextResponse } from "next/server";
import { readShops, updateShops } from "@/lib/store";
import { canMove, STATUSES } from "@/lib/statuses";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(await readShops());
  } catch (err) {
    return NextResponse.json({ error: `Couldn't read data/shops.json: ${err.message}` }, { status: 500 });
  }
}

// Bulk status change: { slugs: [...], status }
export async function POST(req) {
  const { slugs, status } = await req.json();
  if (!Array.isArray(slugs) || !STATUSES.includes(status)) {
    return NextResponse.json({ error: "Send slugs (array) and a valid status." }, { status: 400 });
  }
  const now = new Date().toISOString().replace(/\.\d+Z$/, "Z");
  const moved = await updateShops((data) => {
    const done = [];
    for (const shop of data.shops) {
      if (slugs.includes(shop.slug) && canMove(shop.status, status)) {
        shop.status = status;
        shop.updated_at = now;
        done.push(shop.slug);
      }
    }
    return done;
  });
  return NextResponse.json({ moved });
}
