import { NextResponse } from "next/server";
import { cancelJob } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await cancelJob(id);
  if (!job) return NextResponse.json({ error: "No such job." }, { status: 404 });
  return NextResponse.json({ job });
}
