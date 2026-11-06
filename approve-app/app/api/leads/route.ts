import { NextResponse } from "next/server";
import { listLeads } from "@/lib/store";

export const dynamic = "force-dynamic";

// Every shop with its stage and outreach media, for the dashboard screens.
export async function GET() {
  try {
    return NextResponse.json({ leads: await listLeads(), at: new Date().toISOString() });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: `Couldn't read data/shops.json: ${message}` }, { status: 500 });
  }
}
